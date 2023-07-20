import axios from 'axios'
import Multiselect from 'vue-multiselect'
import API from '../../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            wd: {},
            form: ''
        }
    },
    created() {
        this.getdetail()
    },
    methods: {
        getdetail: function() {
            axios.get(API + '/M_wd/detail/' + this.$route.params.id)
                .then((response) => {
                    this.wd = response.data
                });
        },
        handleupload: function() {
            this.file = this.$refs.file.files[0];
            // console.log(this.file);  
        },
        addProject() {
            let formData = new FormData();
            formData.append('wd_image', this.file);
            axios.put(API + `/M_wd/update/${this.$route.params.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }

                })
                .then(() => {
                    this.$swal('Berhasil', "Upload Bukti Transer Sukses", "success");
                    this.$router.push('/list_wd');
                });
        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username
        }
    }
};