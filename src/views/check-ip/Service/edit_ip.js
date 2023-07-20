import axios from 'axios';
import API from '../../../api.config';
export default {
    data: function() {
        return {
            detail: {}
        }
    },
    created() {
        this.getdetail()
    },
    methods: {
        // Fungsi mendapatkan detail ip 
        getdetail: function() {
            axios.get(API + `/M_ip/${this.$route.params.id}`)
                .then((response) => {
                    this.detail = response.data
                })
        },
        // Fungsi untuk mengubah alamat ip
        ubahip: function() {
            let newubah = {
                ip: this.detail.ip,
                nama_pengguna: this.detail.nama_pengguna,
                ip_updated: new Date().toISOString().slice(0, 10),
                ip_user_updated: this.$store.getters.username
            }
            axios.put(API + `/M_ip/ubah/${this.$route.params.id}`, newubah)
                .then(() => {
                    this.$swal("Berhasil", "Berhasil mengubah data", 'success');
                    this.$router.push({ name: 'ip' })
                })
        }
    }
}