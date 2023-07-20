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
            form:''
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
        addProject() {
            let newProject = {
                wd_nama: this.wd.wd_nama,
                wd_domain: {
                    domain_kode: this.wd.wd_domain.domain_kode,
                    domain_name: this.wd.wd_domain.domain_name
                },
                wd_rekening: this.wd.wd_rekening,
                wd_besaran_diajukan: this.wd.wd_besaran_diajukan,
                wd_created: this.wd.wd_created,
                wd_updated: new Date().toISOString().slice(0, 10),
                wd_user_updated: this.wd.wd_user_updated,
                wd_status: "Y",
                status_wd: "Belum"
            }
            axios.put(API + '/M_wd/update/' + this.$route.params.id, newProject)
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