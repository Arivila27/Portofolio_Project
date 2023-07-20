import axios from 'axios';
import API from '../../../../api.config'
export default {

    data() {
        return {
            cari: '',
            id : '',
            konfirmasi: [],
            page: 1,
            perpage: 10,
            pages: []

        }
    },
    created() {
        this.getkonfirmasi()
    },
    watch: {
        konfirmasi() {
            this.setPage()
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.Filterkonfirmasi.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(Filterkonfirmasi) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return Filterkonfirmasi.slice(from, to)
        },
        getkonfirmasi() {
            axios.get(API + '/konfirmasi_upgrade_pelanggan/get-list/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response.data);
                    this.konfirmasi = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        hapuspengguna(id) {
            this.id = id;
        },
        unupgrade() {
            let ubahkonfirm = {
                konfirmasi_status_upgrade: "N",
                konfirmasi_status : "N"
            }
            axios.put(API + `/konfirmasi_upgrade_pelanggan/edit/${this.id}`, ubahkonfirm).then(() => {
                //this.$swal("Berhasil", "Berhasil aktivasi pelanggan", "success");
                this.getkonfirmasi();
                // router.reload();
                //this.$router.go('/akses_pelanggan')
            });
        },
    },
    computed: {
        Filterkonfirmasi: function() {
            return this.konfirmasi.filter((konfirmasi) => {
                return konfirmasi.konfirmasi_upgrade_pelanggan_pengguna_id.match(this.cari)
            })
        },
        Displayedkonfirmasi: function() {
            return this.paginate(this.Filterkonfirmasi)
        }
    }
    // Tambahin konfirmasi Statis Ada di coba multi select
};