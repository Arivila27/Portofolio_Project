import axios from 'axios';
import API from '../../../api.config'
import Multiselect from 'vue-multiselect';
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            domain: {
                domain_kode: '',
                domain_nama: '',
                domain_kabupaten:'',
                status: '',
                domain_status: 'Y',
                domain_created: new Date().toISOString().slice(0, 10),
                domain_updated: new Date().toISOString().slice(0, 10),
                domain_user_updated: this.createdBy,
            },
            status_aktiv: [
                { text: 'Aktiv', value: 'Aktiv' },
                { text: 'Nonaktif', value: 'Nonaktif' }
            ]
        }
    },
    methods: {
        addDomain: function() {
            axios.post(API + '/M_domain/', this.domain)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menambahkan data', 'success');
                    this.$router.push({ name: 'domain' });
                })
        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username
        }
    }
}