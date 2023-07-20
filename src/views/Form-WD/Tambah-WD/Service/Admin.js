import axios from 'axios'
import Multiselect from 'vue-multiselect'
import API from '../../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            wd: {
                wd_nama: '',
                wd_rekening: '',
                wd_besaran_diajukan: ''
            },
        }
    },
    methods: {
        addProject() {
            let newProject = {
                wd_nama: this.project.wd_nama,
                wd_domain: {
                    domain_kode: this.$store.getters.domain,
                    domain_name: "nama domain setelah get dengan domain kode"
                },
                wd_rekening: this.wd.wd_rekening,
                wd_besaran_diajukan: this.wd.wd_besaran_diajukan,
                wd_created: new Date().toISOString().slice(0, 10),
                wd_updated: new Date().toISOString().slice(0, 10),
                wd_user_updated: this.createdBy,
                wd_status: "Y",
                status_wd: "Belum"
            }
            axios.post(API + '/M_wd/create', newProject)
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