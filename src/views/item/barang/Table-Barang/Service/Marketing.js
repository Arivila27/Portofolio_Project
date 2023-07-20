
import API from '../../../../../api.config'
import axios from 'axios';
export default {
    name: 'M_item',
    data() {
        return {
            cari: '',
            kategori: [],
            departmen: [],
            M_item: [],
            page: 1,
            perpage: 10,
            pages: [],
            selectedBarang: ''
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
        setPage() {
            let numberOfPages = Math.ceil(this.FilterBarang.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterBarang) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterBarang.slice(from, to)
        },
        detail(barang) {
            this.selectedBarang = barang
        },
        // Mendapat kan Data Barang 
        getdata() {
            axios.get(API + '/M_item/domain/barang/' + this.$store.getters.domain)
                .then((response) => {
                    this.M_item = response.data;
                });
        },
        // ----
        // Menghapus Barang
        deletebarang() {
            axios.put(API + `/M_item/${this.selectedBarang._id}`, {
                    item_status: "N",
                    item_update: new Date().toISOString().slice(0, 10)
                })
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menghapus data', 'success')
                    this.getdata();
                });
        },
        // ----
    },
    computed: {
        FilterBarang: function() {
            return this.M_item.filter((barang) => {
                return barang.item_nama.toLowerCase().includes(this.cari.toLowerCase())
            });
        },
        DisplayedBarang: function() {
            return this.paginate(this.FilterBarang)
        }

    }

};
