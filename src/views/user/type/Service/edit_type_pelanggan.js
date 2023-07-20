import axios from 'axios';
import API from '../../../../api.config'
import Multiselect from 'vue-multiselect';
export default {
    name: 'M_pengguna',
    components:{
        Multiselect
    },
    data() {
        return {
            pembantu_type: {},
            status_aktiv: [
                { text: 'Aktiv', value: 'Aktiv' },
                { text: 'Nonaktif', value: 'Nonaktif' }
            ]
        }
    },
    created() {
        this.getdata()
    },
    methods: {
        edittipe() {
            let newTipe = {
                pembantu_tipe_nama: this.pembantu_type.pembantu_tipe_nama,
                pembantu_tipe_kode: this.pembantu_type.pembantu_tipe_kode,
                pembantu_tipe_status: this.pembantu_type.pembantu_tipe_status,
                pembantu_tipe_updated: new Date().toISOString().slice(0, 10),
                pembantu_status: "Y"
            }
            axios.put(API + `/pembantu_type/${this.$route.params.id}`, newTipe)
                .then(() => {
                    this.$router.push('/type_pelanggan');
                    this.$swal('Berhasil', 'Berhasil Mengupdate Data Tipe pelanggan', 'success');
                });
        },
        getdata() {
            axios.get(API + `/pembantu_type/${this.$route.params.id}`)
                .then((response) => {
                    this.pembantu_type = response.data;
                });
        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username;
        }
    }


};