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
            pengguna_noc_keterangan: '',
            pengguna_ppoe: '',
            pengguna_host: '',
            pengguna_tanggal_nonaktif : new Date().toLocaleDateString("en-Ca"),
            pengguna_user: '',
            pengguna_password: '',
            idnya_bro: '',
        }
    },
    created() {
        this.getpelanggannoc()
    },
    methods: {
        // Fungsi untuk mendapatkan pelanggan yang status nocnya Y 
        getpelanggannoc: function() {
            axios.get(API + '/M_pengguna/domain/pelanggan/noc-semua/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response.data)
                    this.pelanggannoc = response.data
                });
        },
        // Fungsi untuk ketika menekan tombol hapus akan menampilkan detail pelanggan 
        hapuspengguna(id, nama, keterangan, ppoe, host, port, user, password) {
            this.id = id;
            // this.pengguna_status = 'N';
            this.pengguna_nama = nama;
            this.pengguna_noc_keterangan = keterangan;
            this.pengguna_ppoe = ppoe;
            this.pengguna_host = host;
            this.pengguna_port = port;
            this.pengguna_user = user;
            this.pengguna_password = password;


            let newRouter = {
                pengguna_host: this.pengguna_host,
                pengguna_port: this.pengguna_port,
                user: this.pengguna_user,
                password: this.pengguna_password
            }

            axios.post(API + `/Mikrotik/routeros/filtering/` + ppoe, newRouter)
                .then((response) => {
                    this.idnya_bro = response.data
                    console.log(response.data[0].id)
                });
        },
        // Fungsi untuk menghapus ke routing admin agar pelanggan dapat dihapus 
        deleteds() {
            axios.put(API + `/M_pengguna/${this.id}`, {
                    pengguna_noc: "N",
                    pengguna_status: "G",
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
            let torouteros = {
                pengguna_host: this.pengguna_host,
                pengguna_port: this.pengguna_port,
                user: this.pengguna_user,
                password: this.pengguna_password,
                ppoe: this.idnya_bro
            }
            axios.put(API + `/Mikrotik/routeros/disable`, torouteros)
                .then(() => {
                    console.log("sukses")
                });
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
        }
    }
};