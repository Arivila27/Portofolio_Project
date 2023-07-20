import axios from 'axios';
import API from '../../../../api.config'
export default {
    data() {
        return {
            biaya_tambahan: 0,
            selectedCart: {},
            pelanggan: {},
            tipes: [],
            departmen: [],
            // Data dari atas V-model
            eddit: {
                sekarang: new Date().toISOString().slice(0, 10),
            },
            produk: [],
            detail_mikrotik: {}

            // ----
        }
    },
    created() {
        this.getpelanggan()
        this.getproduk()
    },
    updated(){
        this.getdetailmikrotik()
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
        // Mendapatkan ID nomor Mikrotik 
        getdetailmikrotik() {
            let newFilter = {
                pengguna_host: this.pelanggan.pengguna_host,
                pengguna_port: this.pelanggan.pengguna_port,
                user: this.pelanggan.pengguna_winbox_username,
                password: this.pelanggan.pengguna_winbox_password
            }
            axios.post(API + `/Mikrotik/routeros/filtering/` + this.pelanggan.pengguna_ppoe, newFilter)
                .then((response) => {
                    this.detail_mikrotik = response.data;
                    console.log(response.data)
                });
        },
        // ---
        ubah() {
            let torouteros = {
                pengguna_host: this.pelanggan.pengguna_host,
                pengguna_port: this.pelanggan.pengguna_port,
                user: this.pelanggan.pengguna_winbox_username,
                password: this.pelanggan.pengguna_winbox_password,
                pengguna_service: this.selectedCart.item_nama,
                nomor_set: this.detail_mikrotik
            }
            axios.put(API + '/Mikrotik/routeros/edit', torouteros)
                .then(() => {
                    console.log("sukses")
                });
            let ubahPelanggan = {
                pengguna_updated: this.eddit.sekarang,
                pengguna_paket: {
                    pengguna_paket_nama: this.selectedCart.item_nama,
                    pengguna_paket_harga: this.selectedCart.item_harga
                },
                pengguna_biaya_tambahan: this.biaya_tambahan,
                pengguna_biaya_total: this.total
            }
            axios.put(API + `/M_pengguna/${this.$route.params.id}`, ubahPelanggan)
                .then(() => {
                    this.$swal("Berhasil", "Berhasil Mengubah data", "success");
                    this.$router.push({ name: 'pelanggan' });
                });
        },
        createUpgrade() {
            let newUpgrade = {
                upgrade_pengguna_id: this.pelanggan._id,
                upgrade_created: new Date().toISOString().slice(0, 10),
                upgrade_paket_nama: this.selectedCart.item_nama,
                upgrade_paket_harga: this.selectedCart.item_harga,
                upgrade_status: "Y"
            }
            axios.post(API + '/M_upgrade', newUpgrade)
                .then(() => {
                    console.log(newUpgrade);
                });
        },
        handler(arg1, arg2) {
            this.ubah(arg1);
            this.createUpgrade(arg2)
        },
        getproduk() {
            axios.get(API + '/M_item/domain/produk/' + this.$store.getters.domain)
                .then((response) => {
                    this.produk = response.data;
                })
        }
    },
    computed: {
        total: function() {
            var a = parseFloat(this.selectedCart.item_harga);
            var b = parseFloat(this.biaya_tambahan);
            var total = 0;
            return total = a + b;
        }
    }
}