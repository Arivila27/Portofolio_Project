import axios from 'axios';
import API from '../../../api.config';
import Multiselect from 'vue-multiselect';
export default {
    components: {
        Multiselect
    },
    data: function() {
        return {
            network: '',
            nama_pengguna: ''
        }
    },
    methods: {
        // Fungsi untuk menambahkan ip dengan nama penggunanya
        tombol: function() {
            let newIP = {
                ip: this.network,
                nama_pengguna: this.nama_pengguna,
                ip_created: new Date().toISOString().slice(0, 10),
                ip_updated: new Date().toISOString().slice(0, 10),
                ip_user_created: this.$store.getters.username,
                ip_status: "Y"
            }
            axios.post(API + '/M_ip', newIP)
                .then(() => {
                    this.$swal("Berhasil", "Berhasil menambahkan data", 'success');
                    this.$router.push({ name: 'ip' })
                })
            // console.log(newIP)
        }
    }
}