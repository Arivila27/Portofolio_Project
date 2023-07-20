import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    components: { Multiselect },
    name: 'M_pengguna',
    data() {
        return {
            m_id: '',
            // untuk Section alamat 
            list_domain: [],
            list_kabupaten: [],
            list_kecamatan: [],
            list_desa: [],
            pilih_kabupaten: '',
            pilih_kecamatan: '',
            pilih_desa: '',
            alamat_rt: '',
            alamat_rw: '',
            alamat_dusun: '',
            // ----
            selectedCart: {},
            harga: 0,
            biaya_tambahan: 0,
            created: new Date().toISOString().slice(0, 10),
            updated: new Date().toISOString().slice(0, 10),
            barangs: [],
            tipes: [],
            M_alat: [],
            ambil: '',
            M_barang: [],
            M_produk: [],
            M_tagihan: [],
            M_pengguna: {},
            biaya_registrasi: 0,
            biaya_prored: 0,
            cart: [],
            opsi: [],
            item_ambil: '',
            item_hasil: '',
            value: [{
                item_stok: ''
            }],
            M_cabang: [],
            pilih_cabang: '',
            pilih_alat: [],
            pilih_alat_beli: []
        }
    },
    watch: {
        pilih_kabupaten: function(value) {
            axios.get(API + `/M_daerah/kecamatan/${value}`)
                .then((response) => {
                    this.list_kecamatan = response.data
                });
        },
        pilih_kecamatan: function(value) {
            axios.get(API + `/M_daerah/desa/${value}`)
                .then((response) => {
                    this.list_desa = response.data
                });
        }
    },
    mounted() {
        this.getpelanggan()
        this.gettipe()
        this.getkabupaten()
    },
    methods: {
        // Mendapatkan detail pelanggan 
        getpelanggan() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    this.M_pengguna = response.data;
                });
        },
        // ----
        // Mendapatkan data kabupaten 
        getkabupaten: function() {
            axios.get(API + '/M_daerah/list-kabupaten/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.list_kabupaten = response.data
                })
        },
        // Mendapatkan Data Tipe Pelanggan 
        gettipe() {
            axios.get(API + '/pembantu_type/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.tipes = response.data;
                });
        },
        // ----
        // Menambah Ke Collection Pengguna/Pelanggan 
        addToApi() {
            if (!this.M_pengguna.pengguna_id) {
                this.$swal("Gagal", "ID Tidak boleh Kosong", "error");
            } else if (!this.M_pengguna.pengguna_nama) {
                this.$swal("Gagal", "Nama Tidak boleh Kosong", "error");
            } else if (!this.M_pengguna.pengguna_jenis_kelamin) {
                this.$swal("Gagal", "Jenis Kelamin Tidak boleh Kosong", "error");
            } else if (!this.M_pengguna.pengguna_no_telepon) {
                this.$swal("Gagal", "No.Telepon Tidak boleh Kosong", "error");
            } else if (!this.M_pengguna.pengguna_no_ktp) {
                this.$swal("Gagal", "KTP Tidak boleh Kosong", "error");
            } else {
                let newM_pengguna = {
                    pengguna_nama: this.M_pengguna.pengguna_nama,
                    pengguna_jenis_kelamin: this.M_pengguna.pengguna_jenis_kelamin,
                    pengguna_no_telepon: this.M_pengguna.pengguna_no_telepon,
                    pengguna_password: this.M_pengguna.pengguna_no_telepon.slice(this.M_pengguna.pengguna_no_telepon.length - 6),
                    pengguna_status: this.M_pengguna.pengguna_status,
                    pengguna_alamat: this.M_pengguna.pengguna_alamat,
                    pengguna_kabupaten: this.pilih_kabupaten,
                    pengguna_kecamatan: this.pilih_kecamatan,
                    pengguna_desa: this.pilih_desa,
                    pengguna_rt: this.alamat_rt,
                    pengguna_rw: this.alamat_rw,
                    pengguna_dusun: this.alamat_dusun,
                    pengguna_no_ktp: this.M_pengguna.pengguna_no_ktp,
                    pengguna_no_npwp: this.M_pengguna.pengguna_no_npwp,
                    pengguna_tipe_pelanggan: this.M_pengguna.pengguna_tipe_pelanggan,
                }
                axios.put(API + `/M_pengguna/${this.$route.params.id}`, newM_pengguna)
                    .then(() => {
                        this.$swal("Berhasil", "Diubah", "success");
                        this.$router.push({ name: 'pelanggan' });
                    });
                console.log(this.Alamatlengkapnya);
                console.log(this.pilih_alat);
                console.log(this.pilih_cabang.cabang_kode + this.M_pengguna.pengguna_id)
                console.log(this.$store.getters.domain)
            }

        },
        // ----
    },
    computed: {
        forppoe() {
            return this.M_pengguna.pengguna_id + "@bitniaga.net.id";
        },
        createdBy() {
            return this.$store.getters.username;
        },
        domainBy() {
            return this.$store.getters.domain;
        },
        role: function() {
            return this.$store.getters.role;
        },
        Alamatlengkapnya: function() {
            // return "Kab. " + this.pilih_kabupaten + " Kec. " + this.pilih_kecamatan + " Desa. " + this.pilih_desa + " RT." + this.alamat_rt + " RW." + this.alamat_rw + "Dusun. " + this.alamat_dusun ;
            return "Dusun. " + this.alamat_dusun + ",Desa. " + this.pilih_desa + " RT." + this.alamat_rt + " RW. " + this.alamat_rw + " Kecamatan. " + this.pilih_kecamatan + ", Kabupaten. " + this.pilih_kabupaten;

        }
    }
};