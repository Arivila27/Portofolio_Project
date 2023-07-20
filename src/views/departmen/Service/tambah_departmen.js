import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
export default {
    components: { Multiselect },
    name: 'M_pengguna',
    data() {
        return {
            departmen: {
                nama: '',
                kode: '',
                status: ''
            },
            status_aktiv: [
                { text: 'Aktiv', value: 'Aktiv' },
                { text: 'Nonaktif', value: 'Nonaktif' }
            ]
        }
    },
    created() {},
    methods: {
        addDepartmen() {
            let newDepartmen = {
                pembantu_departmen_nama: this.departmen.nama,
                pembantu_departmen_kode: this.departmen.kode,
                pembantu_departmen_status: this.departmen.status,
                pembantu_departmen_created: new Date().toISOString().slice(0, 10),
                pembantu_departmen_updated: new Date().toISOString().slice(0, 10),
                pembantu_departmen_user_updated: this.createdBy,
                pembantu_status: "Y"
            }
            axios.post(API + '/pembantu_departmen', newDepartmen)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil Menambahkan Data', 'success');
                    this.$router.push({ name: 'departmen' })
                })
        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username
        }
    }


};