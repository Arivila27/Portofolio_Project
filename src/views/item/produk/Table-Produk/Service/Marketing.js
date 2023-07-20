import axios from 'axios';
import API from '../../../../../api.config'
export default {
    name: 'M_item',
    data() {
        return {
            M_item: [],
            cari: '',
            page: 1,
            perpage: 10,
            pages: [],
            barang: ''
        }
    },
    created() {
        this.getdata()
    },
    watch: {
        M_item() {
            this.setPage()
        }
    },
    methods: {
        detail(barang) {
            this.barang = barang
        },
        setPage() {
            let numberOfPages = Math.ceil(this.FilterProduk.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterProduk) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterProduk.slice(from, to)
        },
        getdata() {
            axios.get(API + '/M_item/domain/produk/' + this.$store.getters.domain)
                .then((response) => {
                    this.M_item = response.data;
                });
        },
        deleteds() {
            axios.put(API + `/M_item/${this.barang._id}`, {
                    item_status: "N",
                    item_updated: new Date().toISOString().slice(0, 10)
                })
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menghapus data', 'success');
                    this.getdata()
                })
        },
        hides() {
            axios.put(API + `/M_item/${this.barang._id}`, {
                    item_show: "Y",
                    item_updated: new Date().toISOString().slice(0, 10)
                })
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menghide data', 'success');
                    this.getdata()
                })
        }

    },
    computed: {
        FilterProduk: function() {
            return this.M_item.filter((produk) => {
                var cari_nama = produk.item_nama.toLowerCase().includes(this.cari.toLowerCase());
                var cari_kode = produk.item_kode.toLowerCase().includes(this.cari.toLowerCase());
                return cari_nama || cari_kode;
            })
        },
        displayedProduk() {
            return this.paginate(this.FilterProduk)
        }
    }

};