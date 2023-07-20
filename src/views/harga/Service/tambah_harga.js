
import axios from 'axios';
import API from '../../../api.config'
export default {
    data() {
        return {
            harga: {
                nama: '',
                jumlah_potongan:'',
            }
        }
    },
    methods: {
        addHarga() {
            let newHarga = {
                harga_domain: this.$store.getters.domain,
                harga_nama: this.harga.nama,
                harga_potongan: this.harga.jumlah_potongan,
                harga_status: "Y",
                harga_created: new Date().toISOString().slice(0, 10),
                harga_updated: new Date().toISOString().slice(0, 10),
                harga_user_created: this.CreatedBy
            }
            axios.post(API + '/M_harga', newHarga)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menambahkan data', 'success')
                    this.$router.push({ name: 'list_harga' });
                });
        }
    },
    computed: {
        CreatedBy: function() {
            return this.$store.getters.username;
        }
    }
};
