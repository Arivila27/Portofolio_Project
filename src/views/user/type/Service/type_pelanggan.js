
import axios from 'axios';
import API from '../../../../api.config'
export default {
    name: 'M_pengguna',
    data() {
        return{
            cari:'',
            tipe:[],
            tipes:''
        }
    },
    created() {
        this.getdata()
    },
    methods: {
        deleteds(){
            axios.put(API +`/pembantu_type/${this.tipes._id}`,{
                pembantu_status:'N',
                pembantu_tipe_updated:new Date().toISOString().slice(0, 10)
            })
            .then(() =>{
                this.$swal('Berhasil','Data berhasil dihapus','success');
                this.getdata()
            })
        },
        detail(tipe){
            this.tipes = tipe;
        },
        getdata(){
            axios.get(API + '/pembantu_type/domain/' + this.$store.getters.domain)
            .then((response) =>{
                this.tipe = response.data
            })
        }
    },
    computed: {
        FilterTipe:function(){
            return this.tipe.filter((tipe) =>{
                return tipe.pembantu_tipe_nama.toLowerCase().includes(this.cari.toLowerCase());
            });
        }
    },
    // ----
};
