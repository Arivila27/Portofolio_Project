import axios from 'axios';
import API from '../../../api.config'
import Multiselect from 'vue-multiselect';
export default {
    components:{
        Multiselect
    },
    data() {
        return {
            cabang: {},
            status_aktiv:[
                {text:'Aktiv',value:'Aktiv'},
                {text:'Nonaktif',value:'Nonaktif'}
            ]
        }
    },
    created() {
        this.getdetail()
    },
    methods: {
        getdetail: function() {
            axios.get(API + '/M_cabang/' + this.$route.params.id)
                .then((response) => {
                    this.cabang = response.data;
                    console.log(response.data);
                })
        },
        updateCabang: function() {
            let newCabang = {
                cabang_kode: this.cabang.cabang_kode,
                cabang_nama: this.cabang.cabang_nama,
                status: this.cabang.status,
                cabang_updated: new Date().toISOString().slice(0, 10),
            }
            axios.put(API + `/M_cabang/ubah/${this.$route.params.id}`, newCabang)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil mengubah data', 'success');
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