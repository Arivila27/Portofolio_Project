import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            pelanggan: {},
            ktp:''
        }
        // ----
    },
    created() {
        this.getpelanggan()
    },
    methods: {
        // mendapatkan data pelanggan
        getpelanggan() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    this.pelanggan = response.data;
                });
        },
        handleupload: function() {
            this.file = this.$refs.file.files[0];
            // console.log(this.file);  
        },
        addProject() {
            let formData = new FormData();
            formData.append('pengguna_ktp_image', this.file);
            axios.put(API + `/M_pengguna/update/${this.$route.params.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }

                })
                .then(() => {
                    this.$swal('Berhasil', "Upload KTP pelanggan Sukses", "success");
                    this.$router.push('/pelanggan');
                });
        }
    }
}