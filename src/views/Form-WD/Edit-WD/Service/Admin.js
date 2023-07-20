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
            // Tanpa Bukti Transfer 
            let newProject = {
                wd_updated: new Date().toISOString().slice(0, 10),
                wd_user_updated: this.wd.wd_user_updated,
                wd_status: "Y",
                status_wd: "Sudah"
            }
            // ----

            // let formData = new FormData();

            // formData.append('wd_image', this.file);
            // formData.set('wd_updated', new Date().toISOString().slice(0, 10));
            // formData.set('wd_user_updated', this.$store.getters.username);
            // formData.set('wd_status', "Y");
            // formData.set('status_wd', "Sudah")
            axios.put(API + `/M_wd/edit/${this.$route.params.id}`, newProject)
                .then(() => {
                    this.$swal('Berhasil', "Project Baru ditambahkan", "success");
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