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
            pelangganadmin: [],
        }
    },
    created() {
        this.getpelangganadmin()
    },
    methods: {
        // Fungsi untuk mendapatkan pelanggan yang status adminnya Y 
        getpelangganadmin: function() {
            axios.get(API + '/M_pengguna/pelanggan/admin')
                .then((response) => {
                    console.log(response.data)
                    this.pelangganadmin = response.data
                });
        },
        // Fungsi untuk ketika menekan tombol hapus akan menampilkan detail pelanggan 
        hapuspengguna(id, status, nama) {
            this.id = id;
            this.pengguna_status = 'N';
            this.pengguna_nama = nama;
        },
        // Fungsi untuk menghapus ke routing admin agar pelanggan dapat dihapus 
        deleteds() {
            axios.put(API + `/M_pengguna/${this.id}`, {
                    pengguna_admin: "N",
                    pengguna_status: "N",
                    pengguna_tanggal_nonaktif: this.pengguna_tanggal_nonaktif,
                    pengguna_user_nonaktif: this.createdBy,
                    pengguna_aktiv_kembali: ''
                })
                .then(() => {
                    this.getpelangganadmin();
                    this.$swal("Berhasil", "Pelanggan berhasil dihapus ", 'success');
                });
        }
    }
};