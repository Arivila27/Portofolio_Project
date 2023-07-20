import axios from 'axios';
import API from '../../../../../../api.config'
import JwPagination from 'jw-vue-pagination';
const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
export default {
    components: {
        JwPagination,
    },
    data() {
        return {
            exampleItems,
            cari: '',
            pembelian: [],
            page: 1,
            perpage: 10,
            pages: [],
            select_month: "",
            cari_divisi: "",
            cari_supplier: "",
            M_divisi: [],
            M_supplier: [],
            pageOfItems:[]

        }
    },
    created() {
        this.getpembelian()
        this.getdatadivisi()
        this.getsupplier()
    },
    watch: {
        pembelian() {
            this.setPage()
        }
    },
    methods: {
        onChangePage(FilterPembelian) {
            // update page of items
            this.FilterPembelian = FilterPembelian;
        },
        getdatadivisi() {
            axios.get(API + '/M_divisi/get-list/' + this.$store.getters.domain)
                .then((response) => {
                    this.M_divisi = response.data
                    console.log(response.data)
                });
        },
        getsupplier() {
            axios.get(API + '/M_supplier/domain/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response);
                    this.M_supplier = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        setPage() {
            let numberOfPages = Math.ceil(this.FilterPembelian.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterPembelian) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterPembelian.slice(from, to)
        },
        getpembelian() {
            axios.get(API + '/Tr_pembelian/domain/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response.data);
                    this.pembelian = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getpembelianbelum() {
            axios.get(API + '/Tr_pembelian/status/domain/' + this.$store.getters.domain + '/Belum')
                .then((response) => {
                    console.log(response.data);
                    this.pembelian = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getpembeliansudah() {
            axios.get(API + '/Tr_pembelian/status/domain/' + this.$store.getters.domain + '/Lunas')
                .then((response) => {
                    console.log(response.data);
                    this.pembelian = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    computed: {
        FilterPembelian: function() {
            return this.pembelian.filter((pembelian) => {
                var a = pembelian.pembelian_created.toLowerCase().includes(this.select_month.toLowerCase());
                var b = pembelian.pembelian_no_transaksi.match(this.cari);
                var c = pembelian.pembelian_supplier.match(this.cari_supplier);
                var d = pembelian.pembelian_divisi.match(this.cari_divisi);
                return a && b && c && d;
            })
        },
        DisplayedPembelian: function() {
            return this.paginate(this.FilterPembelian)
        },
        hitungtotalpembelian: function() {
            var pembeliantotal = 0;
            for (var i = 0; i < this.FilterPembelian.length; i++) {
                pembeliantotal += parseInt(this.FilterPembelian[i].pembelian_total);
            }
            return pembeliantotal;
        },
    }
    // Tambahin Pembelian Statis Ada di coba multi select
};