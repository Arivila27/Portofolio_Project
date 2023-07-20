import axios from 'axios'
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            data_pokok: {}
        }
    },
    created() {
        this.getdatapokok()
    },
    methods: {
        // Get DAta POKOK setiap cabang cabang 
        getdatapokok: function() {
            axios.get(API + "/M_domain/detail-2/" + this.$store.getters.domain)
                .then((response) => {
                    this.data_pokok = response.data
                })
        },
        updatePokok() {
            let UpdatePokok = {
                domain_moto: this.data_pokok.domain_moto,
                domain_nama: this.data_pokok.domain_nama,
                domain_owner: this.data_pokok.domain_owner,
                domain_phone: this.data_pokok.domain_phone,
                domain_updated: new Date().toISOString().slice(0, 10),
                domain_alamat: this.data_pokok.domain_alamat,
                domain_email: this.data_pokok.domain_email,
                domain_office_phone: this.data_pokok.domain_office_phone
            }
            axios.put(API + '/M_domain/ubah/' + this.data_pokok._id, UpdatePokok)
                .then(() => {
                    this.$swal('Berhasil', "Data Pokok Berhasil Diupdate", "success");
                });
        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username
        }
    }
};