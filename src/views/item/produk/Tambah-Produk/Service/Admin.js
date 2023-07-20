
import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    name: 'M_item',
    components:{Multiselect},
    data() {
        return {
            M_departmen: [],
            M_kategori: [],
            M_item: {
                item_departmen: '',
                item_nama:'',
                item_harga: '',
                item_kode:'',
                item_created: new Date().toISOString().slice(0, 10),
                item_updated: new Date().toISOString().slice(0, 10),
                item_user_updated: '',
                item_status: 'Y'
                
            },
        }
    },
    mounted() {
        this.departmen()
        this.kategoris()
    },
    methods: {
        addToApi() {
            let newM_item = {
              item_departmen:this.M_item.item_departmen,
              item_kategori:"Produk",
              item_nama:this.M_item.item_nama,
              item_harga:this.M_item.item_harga,
              item_kode:this.M_item.item_kode,
              item_created:this.M_item.item_created,
              item_updated:this.M_item.item_updated,
              item_user_updated:this.createdBy,
              item_status:this.M_item.item_status
            }
            console.log(newM_item);

            axios.post(API +'/M_item', newM_item)
                .then((response) => {
                    console.log(response);
                    this.$swal('Berhasil',"Berhasil Menambahkan data","success");
                });
        },
        departmen() {
            axios.get(API +'/pembantu_departmen')
                .then((response) => {
                    console.log(response.data)
                    this.M_departmen = response.data;
                });
        },
        kategoris() {
            axios.get(API +'/M_item/kategori')
                .then((response) => {
                    this.M_kategori = response.data;
                });
        }
    },
    computed:{
        createdBy:function(){
            return this.$store.getters.username;
        }
    }
};
