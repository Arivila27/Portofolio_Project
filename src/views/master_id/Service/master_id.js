import axios from 'axios';
import API from '../../../api.config'
export default {
    name: 'M_pengguna',
    data() {
        return {
            id: [],
            cari: '',
            page: 1,
            perpage: 10,
            pages: [],
            detail_id: {},
            selectedid: []
        }
    },
    created() {
        this.getdata()
    },
    watch: {
        id() {
            this.setPage();
        }
    },
    methods: {
        deleteid() {
            axios.put(API + `/M_id/${this.selectedid._id}`, {
                    id_status: "N",
                    id_updated: new Date().toISOString().slice(0, 10)
                })
                .then(() => {
                    this.$swal('Berhasil', 'Data yang dipilih telah dihapus', 'success');
                    this.getdata()
                });
        },
        detail(dpm) {
            this.selectedid = dpm;
        },
        setPage() {
            let numberOfPages = Math.ceil(this.Filterid.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(Filterid) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return Filterid.slice(from, to)
        },
        getdata() {
            axios.get(API + '/M_id')
                .then((response) => {
                    this.id = response.data
                    console.log(response.data)
                });
        },
        getdetail() {
            axios.get(API + `/M_id/${this.id_id}`)
                .then((response) => {
                    console.log(response.data);
                    this.detail = response.data
                });
        }
    },
    computed: {
        Filterid: function() {
            return this.id.filter((id) => {
                var cari_nama = id.id_kode.toLowerCase().includes(this.cari.toLowerCase());

                return cari_nama;

            });
        },
    },
    // ----
};