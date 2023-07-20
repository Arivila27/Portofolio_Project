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
            selectedAlat: ''
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
            let numberOfPages = Math.ceil(this.FilterAlat.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterAlat) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterAlat.slice(from, to)
        },
        detail(alat) {
            this.selectedAlat = alat
        },
        // Mendapat kan Data alat 
        getdata() {
            axios.get(API + '/M_item/alat')
                .then((response) => {
                    this.M_item = response.data;
                });
        },
        // ----
        // Menghapus alat
        deletealat() {
            axios.put(API + `/M_item/${this.selectedAlat._id}`, {
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
        FilterAlat: function() {
            return this.M_item.filter((alat) => {
                var a = alat.item_digunakan.toLowerCase().includes(this.cari.toLowerCase());
                var b = alat.item_nama.toLowerCase().includes(this.cari.toLowerCase());

                return a || b;
            });
        },
        DisplayedAlat: function() {
            return this.paginate(this.FilterAlat)
        }

    }

};