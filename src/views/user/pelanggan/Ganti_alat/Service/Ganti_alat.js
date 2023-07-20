import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    data(){
        return{
            kode:{
                kode:'',
                nama:'',
                subklasifikasi:'',
                status:''
            }
        }
    },
    methods:{
        addAkun(){
            let newKode = {
                kode_akun: this.kode.kode,
                kode_domain: this.$store.getters.domain,
                kode_akun_nama: this.kode.nama,
                kode_akun_subklasifikasi: this.kode.subklasifikasi,
                kode_akun_status:this.kode.status,
                kode_status:"Y",
                kode_akun_created:new Date().toISOString().slice(0, 10),
                kode_akun_updated:new Date().toISOString().slice(0, 10),
                kode_akun_user_created: this.CreatedBy
            }
            axios.post(API +'/M_kode_akun',newKode)
            .then(() =>{
                this.$swal('Berhasil','Berhasil menambahkan data','success')
                this.$router.push({name:'kode_akun'});
            });
        }
    },
    computed:{
        CreatedBy:function(){
            return this.$store.getters.username;
        }
    }
};
