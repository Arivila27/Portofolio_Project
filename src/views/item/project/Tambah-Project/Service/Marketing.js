import axios from 'axios'
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            project: {
                item_nama: '',
                item_kode: '',
                item_biaya_operasional: 0,
                item_biaya_lain: 0,
                item_pegawai: [],
                item_updated: new Date().toISOString().slice(0, 10),
                item_created: new Date().toISOString().slice(0, 10),
                item_user_updated: '',
            },
            pegawai: [],
            item_biaya_lain: 0,
            item_biaya_operasional: 0
        }
    },
    created() {
        this.getpegawai()
    },
    // updated(){
    //     this.totalBiaya()
    // },
    methods: {
        getpegawai() {
            axios.get(API + '/M_pengguna/pegawai')
                .then((response) => {
                    this.pegawai = response.data;
                });
        },
        addProject() {
            let newProject = {
                item_nama: this.project.item_nama,
                item_domain: this.$store.getters.domain,
                item_pegawai: this.project.item_pegawai,
                item_biaya_operasional: this.project.item_biaya_operasional,
                item_biaya_lain: this.project.item_biaya_lain,
                item_biaya_total: this.totalBiaya,
                item_created: this.project.item_created,
                item_updated: this.project.item_updated,
                item_user_updated: this.createdBy,
                item_kategori: "Project",
                item_status: "Y",
                item_project_status: "Belum"
            }
            axios.post(API + '/M_item', newProject)
                .then(() => {
                    this.$swal('Berhasil', "Project Baru ditambahkan", "success");
                    this.$router.push('/project');
                });
        }
    },
    computed: {
        totalBiaya: function() {
            var a = parseInt(this.project.item_biaya_operasional)
            var b = parseInt(this.project.item_biaya_lain)
            return a + b;
        },
        createdBy: function() {
            return this.$store.getters.username
        }
    }
};