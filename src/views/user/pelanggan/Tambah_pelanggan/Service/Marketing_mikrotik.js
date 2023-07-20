import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    components: { Multiselect },
    name: 'M_pengguna',
    data() {
        return {
            last_id: '',
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
            departmen: [],
            tipes: [],
            M_alat: [],
            M_router: [],
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
                pengguna_status: "Y",
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
                password_ppoe: '',
                pengguna_barang_id: '',
                pengguna_barang_nama: '',
                pengguna_barang_merk: '',
                pengguna_barang_seri: '',
                pengguna_barang_kode: '',
                pengguna_host: '',
                pengguna_port: '',
                pengguna_winbox_username: '',
                pengguna_winbox_password: '',
                pengguna_local_address: '',
                pengguna_remote_address: ''
            },
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
            pilih_alat: '',
            pilih_alat_beli: '',
            pilih_router: ''
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
        this.getlastid()
        this.getid()
        this.getdepartmen()
        this.getcart()
        this.gettipe()
        this.getpegawai()
        this.getcabang()
        this.getalat()
        this.getrouter()
        this.getkabupaten()
        this.getdomain()
    },
    computed: {
        last_id_plust() {
            return this.last_id + 1;
        },
        forppoe() {
            return this.M_pengguna.pengguna_id + "@bitniaga.net.id";
        },
        createdBy() {
            return this.$store.getters.username;
        },
        domainBy() {
            return this.$store.getters.domain;
        },
        total: function() {
            //var a = parseFloat(this.selectedCart.item_harga);
            var b = parseFloat(this.biaya_tambahan);
            var c = parseFloat(this.biaya_registrasi);
            var d = parseFloat(this.biaya_prored)
            var total = 0;
            return total = b + c + d;
        },
        role: function() {
            return this.$store.getters.role;
        },
        Alamatlengkapnya: function() {
            // return "Kab. " + this.pilih_kabupaten + " Kec. " + this.pilih_kecamatan + " Desa. " + this.pilih_desa + " RT." + this.alamat_rt + " RW." + this.alamat_rw + "Dusun. " + this.alamat_dusun ;
            return "Dusun. " + this.alamat_dusun + ",Desa. " + this.pilih_desa + " RT." + this.alamat_rt + " RW. " + this.alamat_rw + " Kecamatan. " + this.pilih_kecamatan + ", Kabupaten. " + this.pilih_kabupaten;

        }
    },
    methods: {
        onChange:function(event){
            //const valuenih =  JSON.parse(event.target.value)
            console.log("APA INI",this.pilih_router);

            this.cart = this.pilih_router.host_produk;
         },
        getlastid: function() {
            axios.get(API + '/M_pengguna/domain/pelanggan/terakhir/' + this.$store.getters.domain)
                .then((response) => {
                    this.last_id = response.data
                })
        },
        // Mendapatkan kode id depan
        getid: function() {
            axios.get(API + '/M_id/detail/' + this.$store.getters.domain)
                .then((response) => {
                    this.m_id = response.data
                })
        },
        // Mendapatkan data domain 
        getdomain: function() {
            axios.get(API + '/M_domain')
                .then((response) => {
                    this.list_domain = response.data
                })
        },

        // Mendapatkan data kabupaten 
        getkabupaten: function() {
            axios.get(API + '/M_daerah/list-kabupaten/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.list_kabupaten = response.data
                })
        },
        // Mendapatkan Data alat untuk menambah alat pada pelanggan 
        getalat() {
            axios.get(API + '/M_item/domain/alat/tidak-digunakan/' + this.$store.getters.domain)
                .then((response) => {
                    // console.log(response.data);
                    this.M_alat = response.data;
                })
        },
        getrouter() {
            axios.get(API + '/M_host/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.M_router = response.data
                })
        },
        // Mendapatkan cabang untuk mendapatkan id pelanggan 
        getcabang() {
            axios.get(API + '/M_cabang/')
                .then((response) => {
                    this.M_cabang = response.data
                    // console.log(response.data)
                });
        },
        // Mendapatkan data pegawai 
        getpegawai() {
            axios.get(API + '/M_pengguna/domain/pegawai/' + this.$store.getters.domain)
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
            axios.get(API + '/pembantu_type/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.tipes = response.data;
                });
        },
        // ----
        // MEnambah Ke Collection Pengguna/Pelanggan 
        addToApi() {
            if (!this.M_pengguna.pengguna_nama) {
                this.$swal("Gagal", "Nama Tidak boleh Kosong", "error");
            } else if (!this.M_pengguna.pengguna_jenis_kelamin) {
                this.$swal("Gagal", "Jenis Kelamin Tidak boleh Kosong", "error");
            } else if (!this.M_pengguna.pengguna_no_telepon) {
                this.$swal("Gagal", "No.Telepon Tidak boleh Kosong", "error");
            } else if (!this.M_pengguna.pengguna_tipe_pelanggan) {
                this.$swal("Gagal", "Tipe Pelanggan Tidak boleh Kosong", "error");
            } else if (!this.M_pengguna.pengguna_no_ktp) {
                this.$swal("Gagal", "KTP Tidak boleh Kosong", "error");
            } else if (!this.selectedCart.item_nama) {
                this.$swal("Gagal", "Produk Tidak boleh Kosong", "error");
            } else if (!this.M_pengguna.pengguna_lokasi_pasang) {
                this.$swal("Gagal", "Lokasi Pemasangan Tidak boleh Kosong", "error");
            } else {
                let newM_pengguna = {
                    pengguna_id: this.m_id.id_kode + this.M_pengguna.pengguna_id,
                    pengguna_nama: this.M_pengguna.pengguna_nama,
                    pengguna_domain: this.domainBy,
                    pengguna_jenis_kelamin: this.M_pengguna.pengguna_jenis_kelamin,
                    pengguna_created: this.created,
                    pengguna_updated: this.updated,
                    pengguna_role: this.M_pengguna.pengguna_role,
                    pengguna_no_telepon: this.M_pengguna.pengguna_no_telepon,
                    pengguna_user_updated: this.createdBy,
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
                    pengguna_ppoe: this.m_id.id_kode + this.M_pengguna.pengguna_id + "@bitniaga.net.id",
                    pengguna_lokasi_pasang: this.M_pengguna.pengguna_lokasi_pasang,
                    pengguna_tanggal_pemasangan: this.M_pengguna.pengguna_tanggal_pemasangan,
                    pengguna_password: this.M_pengguna.pengguna_no_telepon.slice(this.M_pengguna.pengguna_no_telepon.length - 6),
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
                        pengguna_penagihan_terakhir: this.M_pengguna.pengguna_tanggal_pemasangan,
                        pengguna_penagihan_jatuh_tempo: ""
                    },
                    pengguna_paket: {
                        pengguna_paket_nama: this.selectedCart.item_nama,
                        pengguna_paket_harga: this.selectedCart.item_harga
                    },
                    // pengguna_host: this.pengguna_host,
                    // pengguna_port: this.pengguna_port,
                    // pengguna_winbox_username: this.pengguna_winbox_username,
                    // pengguna_winbox_password: this.pengguna_winbox_password,
                    pengguna_alat: this.pilih_alat,
                    pengguna_paket_jalan: this.selectedCart,
                    pengguna_biaya_tambahan: this.biaya_tambahan,
                    pengguna_biaya_registrasi: this.biaya_registrasi,
                    pengguna_biaya_prored: this.biaya_prored,
                    pengguna_biaya_total: this.total
                }

                let newM_pengguna_auto = {
                    pengguna_id: JSON.stringify(this.last_id_plust),
                    pengguna_nama: this.M_pengguna.pengguna_nama,
                    pengguna_domain: this.domainBy,
                    pengguna_jenis_kelamin: this.M_pengguna.pengguna_jenis_kelamin,
                    pengguna_created: this.created,
                    pengguna_updated: this.updated,
                    pengguna_role: this.M_pengguna.pengguna_role,
                    pengguna_no_telepon: this.M_pengguna.pengguna_no_telepon,
                    pengguna_user_updated: this.createdBy,
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
                    pengguna_ppoe: this.last_id_plust + "@bitniaga.net.id",
                    pengguna_lokasi_pasang: this.M_pengguna.pengguna_lokasi_pasang,
                    pengguna_tanggal_pemasangan: this.M_pengguna.pengguna_tanggal_pemasangan,
                    pengguna_password: this.M_pengguna.pengguna_no_telepon.slice(this.M_pengguna.pengguna_no_telepon.length - 6),
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
                        pengguna_penagihan_terakhir: this.M_pengguna.pengguna_tanggal_pemasangan,
                        pengguna_penagihan_jatuh_tempo: ""
                    },
                    pengguna_paket: {
                        pengguna_paket_nama: this.selectedCart.item_nama,
                        pengguna_paket_harga: this.selectedCart.item_harga
                    },
                    // pengguna_host: this.pengguna_host,
                    // pengguna_port: this.pengguna_port,
                    // pengguna_winbox_username: this.pengguna_winbox_username,
                    // pengguna_winbox_password: this.pengguna_winbox_password,
                    pengguna_alat: this.pilih_alat,
                    pengguna_paket_jalan: this.selectedCart,
                    pengguna_biaya_tambahan: this.biaya_tambahan,
                    pengguna_biaya_registrasi: this.biaya_registrasi,
                    pengguna_biaya_prored: this.biaya_prored,
                    pengguna_biaya_total: this.total,
                    pengguna_mikrotik : this.pilih_router,
                }
                let newInvoice = {
                    penagihan_domain: this.$store.getters.domain,
                    penagihan_nama: this.M_pengguna.pengguna_nama,
                    penagihan_pengguna_id: "",
                    penagihan_id_pengguna: this.M_pengguna.pengguna_id,
                    penagihan_status: "Y",
                    penagihan_status_bayar: "Lunas",
                    penagihan_tanggal_pembayaran:new Date().toISOString().slice(0, 10),
                    penagihan_paket: {
                        penagihan_paket_nama: this.selectedCart.item_nama,
                        penagihan_paket_harga: this.selectedCart.item_harga
                    },
                    penagihan_biaya: {
                        penagihan_biaya_tambahan: this.biaya_tambahan,
                        penagihan_biaaya_ppn: "",
                        penagihan_biaya_total: this.biaya_registrasi + this.biaya_tambahan
                    },
                    penagihan_metode_bayar: "Cash",
                    penagihan_appcode: this.$store.getters.domain + "_1",
                    penagihan_keterangan: "Pembayaran dilakukan melalui Admin(Cash di kantor)",
                    penagihan_type_keterangan : "R",
                    penagihan_user_updated: this.$store.getters.username
                }
                let torouteros = {
                    pengguna_host: this.pilih_router.host,
                    pengguna_port: this.pilih_router.port,
                    user: this.pilih_router.user_winbox,
                    password: this.pilih_router.password_winbox,
                    pengguna_ppoe: this.last_id_plust + "@bitniaga.net.id",
                    pengguna_password: this.M_pengguna.password_ppoe,
                    pengguna_profile: this.selectedCart.item_nama,
                    pengguna_service: "pppoe"
                }
                for (var i = 0; i < this.pilih_alat.length; i++) {
                    let newTrhistory = {
                        item_id: this.pilih_alat[i]._id,
                        item_nama: this.pilih_alat[i].item_nama,
                        item_kode: this.pilih_alat[i].item_kode,
                        item_status: 'Y',
                        item_created: new Date().toISOString().slice(0, 10),
                        item_digunakan: this.M_pengguna.pengguna_nama,
                        item_keterangan: "Disewakan",
                        item_tergunakan: "Y"

                    }
                    axios.put(API + `/M_item/${this.pilih_alat[i]._id}`, {
                        item_digunakan: this.M_pengguna.pengguna_nama,
                        item_keterangan: "Disewakan",
                        item_penggunaan: 'Y'
                    })
                    axios.post(API + `/Tr_history`, newTrhistory)
                }
                for (var i = 0; i < this.pilih_alat_beli.length; i++) {
                    let newTrhistory = {
                        item_id: this.pilih_alat_beli[i]._id,
                        item_nama: this.pilih_alat_beli[i].item_nama,
                        item_kode: this.pilih_alat_beli[i].item_kode,
                        item_status: 'Y',
                        item_created: new Date().toISOString().slice(0, 10),
                        item_digunakan: this.M_pengguna.pengguna_nama,
                        item_keterangan: "Dibeli",
                        item_tergunakan: "Y"
                    }
                    axios.put(API + `/M_item/${this.pilih_alat[i]._id}`, {
                        item_digunakan: this.M_pengguna.pengguna_nama,
                        item_keterangan: "Dibeli",
                        item_penggunaan: 'Y'
                    })
                    axios.post(API + `/Tr_history`, newTrhistory)
                }

                if (this.last_id === 'Kosong') {
                    axios.post(API + '/M_pengguna/create-pelanggan', newM_pengguna)
                        .then((response) => {
                            if (response.data.code === '201') {
                                this.$swal("Gagal", "Data sudah ada", "error");
                            } else {
                                this.$swal("Berhasil", "Ditambahkan", "success");
                                this.$router.push({ name: 'pelanggan_2' });
                            }

                        });
                } else {
                    axios.post(API + '/Tr_penagihan', newInvoice)
                    .then(() => {
                        this.$swal("Berhasil", "Berhasil Menambahkan Invoice Pelanggan", "success")
                    });
                    axios.post(API + '/Mikrotik/routeros/add', torouteros)
                        .then(() => {
                            console.log("sukses")
                        });
                    axios.post(API + '/M_pengguna/create-pelanggan', newM_pengguna_auto)
                        .then((response) => {
                            if (response.data.code === '201') {
                                this.$swal("Gagal", "Data sudah ada", "error");
                            } else {
                                this.$swal("Berhasil", "Ditambahkan", "success");
                                this.$router.push({ name: 'pelanggan_2' });
                            }

                    });
                   
                }
                // console.log(this.M_pengguna.pengguna_nama_psb)
                for (var i = 0; i < this.M_pengguna.pengguna_nama_psb.length; i++) {
                    // this.M_pengguna.pengguna_nama_psb[i]
                    // console.log(this.M_pengguna.pengguna_nama_psb[i].pengguna_nama)
                    axios.post(API + `/Tr_psb/create-pegawai-psb`, {
                        psb_pengguna_nama : this.M_pengguna.pengguna_nama,
                        psb_penyelesaian_tanggal : new Date().toISOString().slice(0, 10),
                        psb_domain : this.$store.getters.domain,
                        pegawai_psb_status : "Y",
                        psb_penyelesaian : "Selesai",
                        psb_pengguna_pelanggan_id : this.M_pengguna.pengguna_nama_psb[i]._id,
                        psb_route : "L"
                    })

                }
                // axios.post(API + '/R_pengguna', newM_pengguna)
                // console.log(this.Alamatlengkapnya);
                // console.log(this.pilih_alat);
                // console.log(this.pilih_cabang.cabang_kode + this.M_pengguna.pengguna_id)
                // console.log(this.$store.getters.domain)
            }

        },
        // ----
        // MEndapatkan Data Aset/Produk Untuk Keranjang Belanja 
        getcart() {
            axios.get(API + '/M_item/domain/produk/' + this.$store.getters.domain)
                .then((response) => {
                    this.cart = response.data;
                    // console.log(response.data);
                });
        }
    }
};
