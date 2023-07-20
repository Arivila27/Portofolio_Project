import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../api.config'
export default {
    components: { Multiselect },
    name: 'M_pengguna',
    data() {
        return {
            tipe: {
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
    methods: {
        addtipe() {
            let newTipe = {
                pembantu_tipe_nama: this.tipe.nama,
                pembantu_tipe_kode: this.tipe.kode,
                pembantu_tipe_status: this.tipe.status,
                pembantu_tipe_created: new Date().toISOString().slice(0, 10),
                pembantu_tipe_updated: new Date().toISOString().slice(0, 10),
                pembantu_status: "Y",
                pembantu_tipe_user_updated: this.createdBy,
                pembantu_domain: this.$store.getters.domain
            }
            axios.post(API + '/pembantu_type', newTipe)
                .then(() => {
                    this.$router.push('/type_pelanggan');
                    this.$swal('Berhasil', 'Berhasil Menambahkan Data Tipe pelanggan', 'success');
                });
        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username;
        }
    }


};