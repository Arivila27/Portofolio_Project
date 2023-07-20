import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../api.config'
// Biasa
import TambahPelangganAdmin from '../Tambah_pelanggan/Admin'
// import TambahPelangganMarketing from '../Tambah_pelanggan/Marketing'
// Untuk connect ke mikrotik
import TambahPelangganMarketing from '../Tambah_pelanggan/Marketing_mikrotik'

export default {
    name: 'M_pengguna',
    components: {
        Multiselect,
        TambahPelangganAdmin,
        TambahPelangganMarketing
    },
    computed: {
        role: function() {
            return this.$store.getters.role
        }
    }
};