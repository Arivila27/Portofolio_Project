import axios from 'axios';
import API from '../../api.config'
import Multiselect from 'vue-multiselect';
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            username: '',
            email: '',
            password: '',
            domain: [],
            pilih_domain: ''
        }
    },
    mounted() {
        this.getdomain()
    },
    methods: {
        getdomain: function() {
            axios.get(API + "/M_domain")
                .then((response) => {
                    this.domain = response.data
                })
        },
        register: function() {
            let data = {
                username: this.username,
                email: this.email,
                password: this.password,
                role: "Marketing",
                domain: this.pilih_domain.domain_kode
            };
            axios.post(API + "/pengguna/register", data)
                .then(() => {
                    this.$router.push("/dashboard");
                    this.$swal("Berhasil", "User terdaftar", "success");
                })
                .catch((error) => {
                    this.$swal("gagal", "Mohon cek email dan password apakah sudah terdaftar", 'error');
                });
            // console.log(data)
        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username
        }
    }
}