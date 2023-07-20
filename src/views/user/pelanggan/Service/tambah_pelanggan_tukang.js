import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../api.config'
export default {
    components: { Multiselect },
    name: 'M_pengguna',
    data() {
        return {
            selectedCart: {},
            harga: 0,
            biaya_tambahan: 0,
            created: new Date().toISOString().slice(0, 10),
            updated: new Date().toISOString().slice(0, 10),
            barangs: [],
            departmen: [],
            tipes: [],
            ambil: '',
            M_barang: [],
            M_produk: [],
            M_tagihan: [],
            M_pengguna: {
                pengguna_id: '',
                internet: 'Internet',
                pengguna_email: '',
                pengguna_group: '',
                pengguna_nama: '',
                pengguna_role: 'pelanggan',
                pengguna_created: '',
                pengguna_updated: '',
                pengguna_user_updated: '',
                pengguna_no_telepon: '',
                pengguna_jenis_kelamin: '',
                pengguna_status: 'Y',
                pengguna_alamat: '',
                pengguna_username: '',
                pengguna_password: '',
                pengguna_departmen: null,
                pengguna_tipe_pelanggan: '',
                pengguna_nama_psb: '',
                pengguna_aset: '',
                pengguna_no_ktp: '',
                fee_psb: '',
                pengguna_no_npwp: '',
                pengguna_paket: '',
                pengguna_tanggal_pemasangan: '',
                pengguna_produk_id: '',
                pengguna_produk_nama: '',
                pengguna_produk_seri: '',
                pengguna_produk_kode: '',
                pengguna_produk_merk: '',
                pengguna_penggunaan: '',
                pengguna_ppoe: '',
                pengguna_lokasi_pasang: '',
                pengguna_barang_id: '',
                pengguna_barang_nama: '',
                pengguna_barang_merk: '',
                pengguna_barang_seri: '',
                pengguna_barang_kode: ''
            },
            biaya_registrasi: 0,
            cart: [],
            opsi: [],
            item_ambil: '',
            item_hasil: '',
            value: [{
                item_stok: ''
            }],
            M_cabang: [],
            pilih_cabang: ''
        }
    },
    mounted() {
        this.getdepartmen()
        this.getcart()
        this.gettipe()
        this.getpegawai()
        this.getcabang()
    },
    computed: {
        createdBy() {
            return this.$store.getters.username;
        },
        total: function() {
            var a = parseFloat(this.selectedCart.item_harga);
            var b = parseFloat(this.biaya_tambahan);
            var c = parseFloat(this.biaya_registrasi);
            var total = 0;
            return total = a + b + c;
        },
        role: function() {
            return this.$store.getters.role;
        }
    },
    methods: {
        // Mendapatkan cabang untuk mendapatkan id pelanggan 
        getcabang() {
            axios.get(API + '/M_cabang/')
                .then((response) => {
                    this.M_cabang = response.data
                    console.log(response.data)
                });
        },
        // Mendapatkan data pegawai 
        getpegawai() {
            axios.get(API + '/M_pengguna/pegawai')
                .then((response) => {
                    this.opsi = response.data;
                });
        },
        // Mendapat kan Data DEpartmen 
        getdepartmen() {
            axios.get(API + '/pembantu_departmen')
                .then((response) => {
                    this.departmen = response.data;
                });
        },
        // --
        // Mendapatkan Data Tipe Pelanggan 
        gettipe() {
            axios.get(API + '/pembantu_type')
                .then((response) => {
                    this.tipes = response.data;
                });
        },
        // ----
        // MEnambah Ke Collection Pengguna/Pelanggan 
        addToApi() {
            let newM_pengguna = {
                pengguna_id: "",
                pengguna_nama: this.M_pengguna.pengguna_nama,
                pengguna_jenis_kelamin: this.M_pengguna.pengguna_jenis_kelamin,
                pengguna_created: this.created,
                pengguna_updated: this.updated,
                pengguna_role: this.M_pengguna.pengguna_role,
                pengguna_no_telepon: this.M_pengguna.pengguna_no_telepon,
                pengguna_user_updated: this.createdBy,
                pengguna_status: "B",
                pengguna_alamat: this.M_pengguna.pengguna_alamat,
                pengguna_no_ktp: this.M_pengguna.pengguna_no_ktp,
                pengguna_no_npwp: this.M_pengguna.pengguna_no_npwp,
                pengguna_ppoe: this.M_pengguna.pengguna_ppoe,
                pengguna_lokasi_pasang: this.M_pengguna.pengguna_lokasi_pasang,
                pengguna_tanggal_pemasangan: this.M_pengguna.pengguna_tanggal_pemasangan,
                pengguna_departmen: {
                    pengguna_departmen_group: this.M_pengguna.pengguna_departmen
                },
                pengguna_yang_psb: {
                    pengguna_nama_psb: this.M_pengguna.pengguna_nama_psb
                },
                pengguna_fee_psb: this.M_pengguna.fee_psb,
                pengguna_tipe_pelanggan: this.M_pengguna.pengguna_tipe_pelanggan,
                pengguna_login: {
                    pengguna_username: this.M_pengguna.pengguna_username,
                    pengguna_password: this.M_pengguna.pengguna_password
                },
                pengguna_penagihan: {
                    pengguna_penagihan_status: "Belum",
                    pengguna_penagihan_terakhir: "",
                    pengguna_penagihan_jatuh_tempo: ""
                },
                pengguna_paket: {
                    pengguna_paket_nama: this.selectedCart.item_nama,
                    pengguna_paket_harga: this.selectedCart.item_harga
                },
                pengguna_paket_jalan: this.selectedCart,
                pengguna_biaya_tambahan: this.biaya_tambahan,
                pengguna_biaya_total: this.total
            }


            axios.post(API + '/R_pengguna', newM_pengguna)
            axios.post(API + '/M_pengguna', newM_pengguna)
                .then(() => {
                    this.$swal("Berhasil", "Ditambahkan", "success");
                    this.$router.push({ name: 'pelanggan' });
                });
        },
        // ----
        // MEndapatkan Data Aset/Produk Untuk Keranjang Belanja 
        getcart() {
            axios.get(API + '/M_item/produk')
                .then((response) => {
                    this.cart = response.data;
                    console.log(response.data);
                });
        }
    }
};