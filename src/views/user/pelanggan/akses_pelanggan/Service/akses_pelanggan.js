import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    name: 'M_pengguna',
    components: {
        Multiselect
    },
    data() {
        return {
            cari: '',
            pelanggannoc: [],
            id: '',
            pengguna_nama: '',
            pelanggan : '',
            pengguna_noc_keterangan: ''
        }
    },
    created() {
        this.getpelanggannoc()
    },
    methods: {
        // Fungsi untuk mendapatkan pelanggan yang status nocnya Y 
        detail(pelanggan) {
            this.pelanggan = pelanggan
        },
        getpelanggannoc: function() {
            var domain = this.$store.getters.domain
            axios.get(API + `/M_pengguna/domain/pelanggan/get-all/` + domain)
                .then((response) => {
                    console.log(response.data)
                    this.pelanggannoc = response.data
                });
        },
        // Fungsi untuk ketika menekan tombol hapus akan menampilkan detail pelanggan 
        hapuspengguna(id, nama, keterangan) {
            this.id = id;
            // this.pengguna_status = 'N';
            this.pengguna_nama = nama;
            this.pengguna_noc_keterangan = keterangan;
        },
        // Fungsi untuk menghapus ke routing admin agar pelanggan dapat dihapus 
        deleteds() {
            axios.put(API + `/M_pengguna/${this.id}`, {
                    pengguna_login: "N"
                })
                .then(() => {
                    this.getpelanggannoc();
                    this.$swal("Berhasil", "Pelanggan berhasil dinonaktifkan ", 'success');
                    this.$router.reload();
                    this.$router.go(this.$router.currentRoute)
                });
        },
        deleteds1() {
            axios.put(API + `/M_pengguna/${this.id}`, {
                    pengguna_noc: "N",
                    pengguna_status: "N",
                    pengguna_tanggal_nonaktif: this.pengguna_tanggal_nonaktif,
                    pengguna_user_nonaktif: this.createdBy,
                    pengguna_aktiv_kembali: ''
                })
                .then(() => {
                    this.getpelanggannoc();
                    this.$swal("Berhasil", "Pelanggan berhasil dihapus ", 'success');
                    this.$router.reload();
                    this.$router.go(this.$router.currentRoute);
                });
        },
        unlogin() {
            axios.put(API + `/M_pengguna/${this.id}`, {
                    pengguna_login: "N",
                })
                .then(() => {
                    this.$swal("Berhasil", "Berhasil aktivasi pelanggan", "success");
                    this.getpelanggannoc();
                    // router.reload();
                    //this.$router.go('/akses_pelanggan')
                });
        },
    },
    computed: {
        role: function() {
            return this.$store.getters.role
        },
        domain: function(){
            return this.$store.getters.domain
        },
        Filterdata: function() {
            return this.pelanggannoc.filter((pelanggan) => {
               var idnya = pelanggan.pengguna_id.toLowerCase().includes(this.cari.toLowerCase());
               var namanya = pelanggan.pengguna_nama.toLowerCase().includes(this.cari.toLowerCase());

               return idnya || namanya;
            })
        },
    }
};