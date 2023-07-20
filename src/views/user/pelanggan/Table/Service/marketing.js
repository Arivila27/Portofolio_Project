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
            pengguna_noc_keterangan: ''
        }
    },
    created() {
        this.getpelanggannoc()
    },
    methods: {
        // Fungsi untuk mendapatkan pelanggan yang status nocnya Y 
        getpelanggannoc: function() {
            var domain = this.$store.getters.domain
            axios.get(API + `/M_pengguna/domain/pelanggan/noc-semua/` + domain)
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
                    pengguna_noc: "N",
                    pengguna_status: "Nonaktif",
                    pengguna_tanggal_nonaktif: this.pengguna_tanggal_nonaktif,
                    pengguna_user_nonaktif: this.createdBy,
                    pengguna_aktiv_kembali: ''
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
        }
    },
    computed: {
        role: function() {
            return this.$store.getters.role
        },
        domain: function(){
            return this.$store.getters.domain
        }
    }
};