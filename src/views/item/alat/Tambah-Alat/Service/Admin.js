
import axios from 'axios'
import API from '../../../../../api.config'
export default {
    data() {
        return {
            alat: {
                item_nama: '',
                item_kode: '',
                item_updated: new Date().toISOString().slice(0, 10),
                item_created: new Date().toISOString().slice(0, 10),
                item_user_updated: '',
            }
        }
    },
    methods: {
        addalat() {
            let newalat = {
                item_nama: this.alat.item_nama,
                item_kode: this.alat.item_kode,
                item_use:'',
                item_created: this.alat.item_created,
                item_updated: this.alat.item_updated,
                item_user_updated: this.createdBy,
                item_kategori: "Alat",
                item_status: "Y"
            }
            axios.post(API + '/M_item', newalat)
                .then(() => {
                    this.$swal('Berhasil', "Alat Baru ditambahkan", "success");
                    this.$router.push('/alat');
                });
        }
    }
};
