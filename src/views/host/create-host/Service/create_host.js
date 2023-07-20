import axios from 'axios';
import API from '../../../../api.config';
import Multiselect from 'vue-multiselect';
export default {
    components: {
        Multiselect
    },
    data: function() {
        return {
            M_host: {}
        }
    },
    methods: {
        // Fungsi untuk menambahkan host dengan nama penggunanya
        tombol: function() {
            let newHost = {
                name: this.M_host.name,
                host: this.M_host.host,
                port: this.M_host.port,
                user_winbox: this.M_host.user_winbox,
                password_winbox: this.M_host.password_winbox,
                host_domain: this.$store.getters.domain,
                host_created: new Date().toISOString().slice(0, 10),
                host_updated: new Date().toISOString().slice(0, 10),
                host_user_created: this.$store.getters.username,
                host_status: "Y"
            }
            axios.post(API + '/M_host/create/post-host', newHost)
                .then(() => {
                    this.$swal("Berhasil", "Berhasil menambahkan data", 'success');
                    this.$router.push({ name: 'host' })
                })
            // console.log(newhost)
        }
    }
}