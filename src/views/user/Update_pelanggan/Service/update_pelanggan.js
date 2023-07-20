
import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            pelanggan: {},
            complain: [],
            produk: [],
            penagihan: []
        }
        // ----
    },
    created() {
        this.getpelanggan()
    },
    mounted() {
        this.getcomplain()
        this.getproduk()
        this.getpenagihan()
    },
    methods: {
        // mendapatkan data pelanggan
        getpelanggan() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    this.pelanggan = response.data;
                });
        },
        // ---
        getcomplain() {
            axios.get(API + `/Tr_complain/list-pelanggan/${this.pelanggan._id}`)
                .then((response) => {
                    console.log(response.data)
                    this.complain = response.data;
                });
        },
        getproduk() {
            axios.get(API + `/M_upgrade/list-pelanggan/${this.pelanggan._id}`)
                .then((response) => {
                    this.produk = response.data
                });
        },
        getpenagihan() {
            axios.get(API + `/Tr_penagihan/list-pelanggan/${this.pelanggan._id}`)
                .then((response) => {
                    this.penagihan = response.data
                });
        },
        update() {
            let ubahPelanggan = {
                pengguna_id: this.pelanggan.pengguna_id,
                pengguna_nama: this.pelanggan.pengguna_nama,
                pengguna_updated: new Date().toISOString().slice(0, 10),
                pengguna_no_telepon: this.pelanggan.pengguna_no_telepon,
                pengguna_user_updated: this.pelanggan.pengguna_user_updated,
                pengguna_alamat: this.pelanggan.pengguna_alamat,
                pengguna_no_ktp: this.pelanggan.pengguna_no_ktp,
                pengguna_no_npwp: this.pelanggan.pengguna_no_npwp,
                pengguna_ppoe: this.pelanggan.pengguna_ppoe,
                pengguna_lokasi_pasang: this.pelanggan.pengguna_lokasi_pasang,
                pengguna_tanggal_pemasangan: this.pelanggan.pengguna_tanggal_pemasangan,
                pengguna_biaya_registrasi: this.pelanggan.pengguna_biaya_registrasi,
                pengguna_biaya_prored: this.pelanggan.pengguna_biaya_prored,
                pengguna_biaya_tambahan: this.pelanggan.pengguna_biaya_tambahan,
                pengguna_host : this.pelanggan.pengguna_host,
                pengguna_port: this.pelanggan.pengguna_port,
                pengguna_username: this.pelanggan.pengguna_winbox_username,
                pengguna_password: this.pelanggan.pengguna_winbox_password
            }
            axios.put(API + `/M_pengguna/${this.$route.params.id}`, ubahPelanggan)
                .then(() => {
                    this.$swal("Berhasil", "Berhasil Mengubah data", "success");
                    this.$router.push({ name: 'pelanggan' });
                });
        }
    },
    computed:{
        totalall:function(){
            return this.pelanggan.pengguna_biaya_tambahan + this.pelanggan.pengguna_biaya_prored + this.pelanggan.pengguna_biaya_registrasi
        }
    }
}
