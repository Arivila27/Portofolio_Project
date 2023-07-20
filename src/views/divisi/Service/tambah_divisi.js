import axios from 'axios'
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            divisi: {
                nama: ''
            }
        }
    },
    created() {
        this.getdomainname()
        this.gettipe()
    },
    methods: {
        // ----
        addProject() {
            let newProject = {
                divisi_nama: this.divisi.nama,
                divisi_domain: this.$store.getters.domain,
                divisi_besaran_diajukan: this.divisi.divisi_besaran_diajukan,
                divisi_created: new Date().toISOString().slice(0, 10),
                divisi_updated: new Date().toISOString().slice(0, 10),
                divisi_user_updated: this.createdBy,
                divisi_status: "Y",
            }
            axios.post(API + '/M_divisi/create', newProject)
                .then(() => {
                    this.$swal('Berhasil', "Project Baru ditambahkan", "success");
                    this.$router.push('/divisi');
                });
        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username
        }
    }
};