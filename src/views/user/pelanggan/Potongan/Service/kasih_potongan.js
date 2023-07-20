import axios from 'axios';
import API from '../../../../../api.config'
export default {
    data() {
        return {
            biaya_tambahan: 0,
            selectedCart: {},
            pelanggan: {},
            // Data dari atas V-model
            eddit: {
                sekarang: new Date().toISOString().slice(0, 10),
            },
            harga: [],

            // ----
        }
    },
    created() {
        this.getpelanggan()
        this.getharga()
    },
    methods: {
        // mendapatkan data pelanggan
        getpelanggan() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    this.pelanggan = response.data;
                    console.log(response.data)
                });
        },
        // ---
        ubah() {
            let ubahPelanggan = {
                pengguna_updated: this.eddit.sekarang,
                // pengguna_paket: {
                //     pengguna_paket_nama: this.selectedCart.item_nama,
                //     pengguna_paket_harga: this.selectedCart.item_harga
                // },
                // pengguna_biaya_tambahan: this.biaya_tambahan,
                // pengguna_biaya_total: this.total
                pengguna_status_potongan: "Y",
                pengguna_potongan: {
                    nama_potongan: this.selectedCart.harga_nama,
                    jumlah_potongan: this.selectedCart.harga_potongan
                },
                pengguna_potongan_id: this.selectedCart._id
            }
            console.log(ubahPelanggan)
            axios.put(API + `/M_pengguna/${this.$route.params.id}`, ubahPelanggan)
                .then(() => {
                    this.$swal("Berhasil", "Berhasil Mengubah data", "success");
                    this.$router.push({ name: 'pelanggan' });
                });
        },
        // createUpgrade() {
        //     let newUpgrade = {
        //         upgrade_pengguna_id: this.pelanggan._id,
        //         upgrade_created: new Date().toISOString().slice(0, 10),
        //         upgrade_paket_nama: this.selectedCart.item_nama,
        //         upgrade_paket_harga: this.selectedCart.item_harga,
        //         upgrade_status: "Y"
        //     }
        //     axios.post(API + '/M_upgrade', newUpgrade)
        //         .then(() => {
        //             console.log(newUpgrade);
        //         });
        // },
        // handler(arg1, arg2) {
        //     this.ubah(arg1);
        //     // this.createUpgrade(arg2)
        // },
        getharga() {
            axios.get(API + '/M_harga/list/' + this.$store.getters.domain)
                .then((response) => {
                    this.harga = response.data;
                })
        }
    },
    computed: {
        total: function() {
            var a = parseFloat(this.selectedCart.harga_potongan);
            var b = parseFloat(this.pelanggan.pengguna_paket.pengguna_paket_harga);
            var total = 0;
            return total = b - a;
        }
    }
}