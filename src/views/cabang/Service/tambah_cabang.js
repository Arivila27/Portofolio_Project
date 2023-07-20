import axios from 'axios';
import API from '../../../api.config'
import Multiselect from 'vue-multiselect';
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            cabang: {
                cabang_kode: '',
                cabang_nama: '',
                status: '',
                cabang_status: 'Y',
                cabang_created: new Date().toISOString().slice(0, 10),
                cabang_updated: new Date().toISOString().slice(0, 10),
                cabang_user_updated: this.createdBy,
            },
            status_aktiv: [
                { text: 'Aktiv', value: 'Aktiv' },
                { text: 'Nonaktif', value: 'Nonaktif' }
            ]
        }
    },
    methods: {
        addCabang: function() {
            axios.post(API + '/M_cabang/', this.cabang)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menambahkan data', 'success');
                    this.$router.push({ name: 'cabang' });
                })
        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username
        }
    }
}