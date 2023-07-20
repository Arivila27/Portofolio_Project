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
                wd_tipe_cash: {
                    wd_nama_cash: '',
                    wd_no_rekening: ''
                },
                wd_besaran_diajukan: ''
            },
            domain_nama: '',
            kode_akun:[],
            pilih_kode:''
        }
    },
    created() {
        this.getdomainname()
        this.gettipe()
    },
    methods: {
        // getkodeakun menurut domain kita 
        gettipe: function() {
            axios.get(API + "/M_kode_akun/" + this.$store.getters.domain)
                .then((response) => {
                    this.kode_akun = response.data
                    console.log(response.data)
                })
        },
        // ----
        getdomainname: function() {
            axios.get(API + '/M_domain/detail-2/' + this.$store.getters.domain)
                .then((response) => {
                    this.domain_nama = response.data.domain_nama
                });
        },
        addProject() {
            let newProject = {
                wd_nama: this.wd.wd_nama,
                wd_domain: {
                    domain_kode: this.$store.getters.domain,
                    domain_name: this.domain_nama
                },
                // wd_rekening: this.wd.wd_rekening,
                wd_tipe_cash:{
                    wd_nama_cash: this.pilih_kode.kode_akun_nama,
                    wd_no_rekening: this.pilih_kode.kode_akun_rekening
                },
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