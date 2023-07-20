import axios from 'axios';
import API from '../../../api.config'
import Multiselect from 'vue-multiselect';
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            domain: {},
            status_aktiv: [{ text: 'Aktiv', value: 'Y' }, { text: 'Nonaktif', value: 'N' }
            ]
        }
    },
    created() {
        this.getdetail()
    },
    methods: {
        getdetail: function() {
            axios.get(API + '/M_domain/detail/' + this.$route.params.id)
                .then((response) => {
                    this.domain = response.data;
                    console.log(response.data);
                })
        },
        updateDomain: function() {
            let newDomain = {
                domain_kode: this.domain.domain_kode,
                domain_nama: this.domain.domain_nama,
                domain_kabupaten: this.domain.domain_kabupaten,
                domain_status: this.domain.domain_status,
                domain_updated: new Date().toISOString().slice(0, 10),
            }
            axios.put(API + `/M_domain/ubah/${this.$route.params.id}`, newDomain)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil mengubah data', 'success');
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