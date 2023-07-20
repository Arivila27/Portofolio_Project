import axios from 'axios';
import API from '../../../api.config'
import Multiselect from 'vue-multiselect';
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            id: {
                id_kode: '',
                id_domain: [],
                status: '',
                id_created: new Date().toISOString().slice(0, 10),
                id_updated: new Date().toISOString().slice(0, 10),
                id_user_updated: this.createdBy,
            },
            status_aktiv: [
                { text: 'Aktiv', value: 'Aktiv' },
                { text: 'Nonaktif', value: 'Nonaktif' }
            ],
            domain: []
        }
    },
    created() {
        this.getdomain()
    },
    methods: {
        addMasterID: function() {
            axios.post(API + '/M_id', this.id)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menambahkan data', 'success');
                    this.$router.push({ name: 'master_id' });
                })
            // console.log(this.id)
        },
        getdomain: function() {
            axios.get(API + '/M_domain')
                .then((response) => {
                    this.domain = response.data
                    console.log(response.data)
                });
        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username
        }
    }
}