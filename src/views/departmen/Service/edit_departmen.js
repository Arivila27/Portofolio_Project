import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
export default {
    components: { Multiselect },
    name: 'M_pengguna',
    data() {
        return {
            pembantu_departmen: {},
            status_aktiv: [
                { text: 'Aktiv', value: 'Aktiv' },
                { text: 'Nonaktif', value: 'Nonaktif' },
            ]
        }
    },
    created() {
        this.getdepartmen()
    },
    methods: {
        editDepartmen() {
            let newDepartmen = {
                pembantu_departmen_nama: this.pembantu_departmen.pembantu_departmen_nama,
                pembantu_departmen_kode: this.pembantu_departmen.pembantu_departmen_kode,
                pembantu_departmen_status: this.pembantu_departmen.pembantu_departmen_status,
                pembantu_departmen_updated: new Date().toISOString().slice(0, 10),
                pembantu_status: "Y"
            }
            axios.put(API + `/pembantu_departmen/${this.$route.params.id}`, newDepartmen)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil Menambahkan Data', 'success');
                    this.$router.push({ name: 'departmen' })
                })
        },
        getdepartmen() {
            axios.get(API + `/pembantu_departmen/${this.$route.params.id}`)
                .then((response) => {
                    this.pembantu_departmen = response.data;
                });
        }
    }

};