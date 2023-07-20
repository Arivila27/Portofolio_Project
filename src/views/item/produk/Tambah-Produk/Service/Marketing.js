import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    name: 'M_item',
    components: { Multiselect },
    data() {
        return {
            M_departmen: [],
            M_kategori: [],
            M_router : [],
            M_show : [
                { text: 'Yes', value: 'Y' },
                { text: 'No', value: 'N' }
              ],
            M_item: {
                item_departmen: '',
                item_nama: '',
                item_harga: '',
                item_kode: '',
                item_created: new Date().toISOString().slice(0, 10),
                item_updated: new Date().toISOString().slice(0, 10),
                item_user_updated: '',
                item_status: 'Y',
                item_show : 'Y',
            },
            pilih_router: ''
        }
    },
    mounted() {
        this.departmen()
        this.kategoris()
        this.getrouter()
    },
    methods: {
        async addToApi() {
            let newM_item = {
                item_departmen: this.M_item.item_departmen,
                item_kategori: "Produk",
                item_domain: this.$store.getters.domain,
                item_nama: this.M_item.item_nama,
                item_harga: this.M_item.item_harga,
                item_kode: this.M_item.item_kode,
                item_created: this.M_item.item_created,
                item_updated: this.M_item.item_updated,
                item_user_updated: this.createdBy,
                item_show : this.M_item.item_show,
                item_status: this.M_item.item_status,
                item_router : this.pilih_router
            }
            let routernya = {
                host_produk : [{
                    item_nama: this.M_item.item_nama,
                    item_harga: this.M_item.item_harga,
                    item_kode: this.M_item.item_kode,
                }]
            }
            console.log(newM_item);
            for (let index = 0; index < this.pilih_router.length; index++) {
                axios.put(API + '/M_host/domain/' + this.pilih_router[index]._id , routernya)
                .then((response) => {
                    // console.log(response);
                    // this.$swal('Berhasil', "Berhasil Menambahkan data", "success");
                });
                
            }
            await axios.post(API + '/M_item', newM_item)
                .then((response) => {
                    console.log(response);
                    this.$swal('Berhasil', "Berhasil Menambahkan data", "success");
                });
            
        },
        departmen() {
            axios.get(API + '/M_divisi/get-list/' + + this.$store.getters.domain)
                .then((response) => {
                   // console.log(response.data)
                    this.M_departmen = response.data;
                });
        },
        getrouter() {
            axios.get(API + '/M_host/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.M_router = response.data
                })
        },
        kategoris() {
            axios.get(API + '/M_item/kategori')
                .then((response) => {
                    this.M_kategori = response.data;
                });
        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username;
        }
    }
};