// import Multiselect from 'vue-multiselect'
import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            // Pemilihan daerah 
            pilih_kabupaten: '',
            pilih_kecamatan: '',
            pilih_desa: '',
            list_kabupaten: [],
            list_kecamatan: [],
            list_desa: [],
            alamat_rt: '',
            alamat_rw: '',
            alamat_dusun: '',
            // ----
            pegawai: [],
            pelanggan: {},
            tipes: [],
            departmen: [],
            // Data dari atas V-model
            pelanggan: {
                pengguna_nama: '',
                pengguna_jenis_kelamin: '',
                pengguna_alamat: '',
                sekarang: new Date().toISOString().slice(0, 10),
                pengguna_role: '',
                pengguna_no_telepon: '',
                pengguna_no_ktp: '',
                pengguna_no_npwp: '',
                pengguna_ppoe: '',
                pengguna_lokasi_pasang: '',
                pengguna_tanggal_pemasangan: '',
                pengguna_departmen_group: '',
                pengguna_username: '',
                pengguna_password: '',
                pengguna_tipe_pelanggan: ''
            }
            // ----
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
    computed: {
        Alamatlengkapnya: function() {
            // return "Kab. " + this.pilih_kabupaten + " Kec. " + this.pilih_kecamatan + " Desa. " + this.pilih_desa + " RT." + this.alamat_rt + " RW." + this.alamat_rw + "Dusun. " + this.alamat_dusun;
            return "Dusun. " + this.alamat_dusun + ",Desa. " + this.pilih_desa + " RT." + this.alamat_rt + " RW. " + this.alamat_rw + " Kecamatan. " + this.pilih_kecamatan + ", Kabupaten. " + this.pilih_kabupaten;
        }
    },

    created() {
        this.getpelanggan()
        this.gettipe()
        this.getdepartmen()
        this.getpegawai()
        this.getkabupaten()
    },
    methods: {
        // get kabupaten 
        getkabupaten: function() {
            axios.get(API + '/M_daerah/list-kabupaten')
                .then((response) => {
                    this.list_kabupaten = response.data
                })
        },
        // Mendapatkan data pegawai 
        async getpegawai() {
            await axios.get(API + '/M_pengguna/pegawai')
                .then((response) => {
                    this.pegawai = response.data
                })
        },
        // Mendapatkan Data Departmen 
        getdepartmen() {
            axios.get(API + '/pembantu_departmen')
                .then((response) => {
                    this.departmen = response.data;
                    console.log(response.data)
                })
        },
        // ----
        // Mendapatkan tipe pelanggan 
        gettipe() {
            axios.get(API + '/pembantu_type/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.tipes = response.data;
                })
        },
        // ----
        // mendapatkan data pelanggan
        getpelanggan() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    this.pelanggan = response.data;
                });
        },
        // ---
        ubah() {
            let ubahPelanggan = {
                pengguna_nama: this.pelanggan.pengguna_nama,
                pengguna_jenis_kelamin: this.pelanggan.pengguna_jenis_kelamin,
                pengguna_updated: this.pelanggan.sekarang,
                pengguna_role: this.pelanggan.pengguna_role,
                pengguna_no_telepon: this.pelanggan.pengguna_no_telepon,
                pengguna_user_updated: this.pelanggan.pengguna_user_updated,
                pengguna_alamat: this.Alamatlengkapnya,
                pengguna_kabupaten: this.pilih_kabupaten,
                pengguna_kecamatan: this.pilih_kecamatan,
                pengguna_desa: this.pilih_desa,
                pengguna_rt: this.alamat_rt,
                pengguna_rw: this.alamat_rw,
                pengguna_dusun: this.alamat_dusun,
                pengguna_status_bayar: this.pelanggan.pengguna_status_bayar,
                pengguna_no_ktp: this.pelanggan.pengguna_no_ktp,
                pengguna_no_npwp: this.pelanggan.pengguna_no_npwp,
                pengguna_ppoe: this.pelanggan.pengguna_ppoe,
                pengguna_lokasi_pasang: this.pelanggan.pengguna_lokasi_pasang,
                pengguna_tanggal_pemasangan: this.pelanggan.pengguna_tanggal_pemasangan,
                pengguna_departmen: {
                    pengguna_departmen_group: this.pelanggan.pengguna_departmen_group,
                },
                pengguna_yang_psb: this.pelanggan.pengguna_yang_psb,
                pengguna_fee_psb: this.pelanggan.pengguna_fee_psb,
                pengguna_tipe_pelanggan: this.pelanggan.pengguna_tipe_pelanggan,
                pengguna_login: {
                    pengguna_username: this.pelanggan.pengguna_username,
                    pengguna_password: this.pelanggan.pengguna_password,
                }
            }
            axios.put(API + `/M_pengguna/${this.$route.params.id}`, ubahPelanggan)
                .then(() => {
                    this.$swal("Berhasil", "Berhasil Mengubah data", "success");
                    this.$router.push({ name: 'pelanggan' });
                });
        }
    }
}