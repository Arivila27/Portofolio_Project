
import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    data() {
        return {
            barang_nama: '',
            barang_stok: 0,
            barang_harga: 0,
            barang_kode: '',
            barang_merk: '',
            barang_created: new Date().toISOString().slice(0, 10),
            barang_updated: new Date().toISOString().slice(0, 10),
            barang_user_updated: ''
        }
    },
    methods: {
        addbarang() {
            let barang = {
                item_nama: this.barang_nama,
                item_stok: this.barang_stok,
                item_harga: this.barang_harga,
                item_kode: this.barang_kode,
                item_merk: this.barang_merk,
                item_harga_total: this.barang_harga_total,
                item_created: this.barang_created,
                item_updated: this.barang_updated,
                item_user_updated: this.createdBy,
                item_status: "Y",
                item_barang: "Biasa"
            }
            console.log(barang);
            axios.post(API +'/M_item', barang)
                .then((response) => {
                    console.log(response.data);
                    this.$swal("Berhasil", "data berhasil ditambahkan", "success");
                    this.$router.push("/barang_biasa");
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    computed:{
        createdBy:function(){
            return this.$store.getters.username;
        },    
        barang_harga_total: function() {
            return this.barang_stok * this.barang_harga;
        }
    
    }
};
