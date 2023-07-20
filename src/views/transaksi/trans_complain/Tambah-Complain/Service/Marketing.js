
import axios from 'axios';
import API from '../../../../../api.config'
import moment from 'moment';
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    data() {
        return {
            // Wadah Dari Sebuah Data 
            pelanggan: [],
            // ----
            // Untuk Mencari
            mencari:'',
            options: [],
            complain_penyelesaian : '',
            complain_penangan : [],
            opsipenyelesaian: [{ kode: 'Proses' }, { kode: 'Selesai' }, { kode: "Belum" }],
            // ----
            // Untuk V-model
            pengguna_id: '',
            pengguna_nama: '',
            pengguna_alamat: '',
            pengguna_ppoe: '',
            pengguna_keluhan: '',
            pengguna_notice:''
            // ----
        }
    },
    mounted() {
        this.getpelanggan()
        this.getpegawai()
    },
    methods: {
        // Mendapatkan Data Pelanggan Dari Database
        getpelanggan() {
            axios.get(API + '/M_pengguna/domain/pelanggan/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response);
                    this.pelanggan = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getpegawai() {
            axios.get(API + '/M_pengguna/domain/pegawai-group/' +this.$store.getters.domain+ '/Tukang')
                .then((response) => {
                    this.options = response.data;
                });
        },
        // ----
        // Pilih Pelanggan Dari Tabel Modal 
        pilihpelanggan(id, nama, alamat, ppoe) {
            this.pengguna_id = id;
            this.pengguna_nama = nama;
            this.pengguna_alamat = alamat;
            this.pengguna_ppoe = ppoe;
            $('#list_pelanggan').modal('hide');
        },
        // ----
        // MEnambah Data complain Ke Database 
        addcomplain(){
            let newcomplain = {
                complain_pengguna_pelanggan_id: this.pengguna_id,
                complain_domain: this.$store.getters.domain,
                complain_pengguna_nama : this.pengguna_nama,
                complain_pengguna_alamat: this.pengguna_alamat,
                complain_pengguna_ppoe : this.pengguna_ppoe,
                complain_status: 'Y',
                complain_penyelesaian: this.complain_penyelesaian,
                complain_yang_menangani: {
                    complain_penangan_nama: this.complain_penangan
                },
                complain_pengguna_keluhan :this.pengguna_keluhan,
                complain_pengguna_notice : this.pengguna_notice,
                complain_created:new Date().toISOString().slice(0, 10),
                complain_updated:moment().format('YYYY-MM-DD HH:mm:ss'),
                complain_user_updated:this.createdBy
            }
            console.log(newcomplain);
            axios.post(API + '/Tr_complain' , newcomplain)
            .then((response) =>{
                console.log(response.data);
                this.$router.push("/trcomplain_selesai");
                this.$swal("Berhasil","Berhasil menambah data complain","success");
            })
            .catch((error) =>{
                console.log(error);
            });
        }
        // ----
    },
    computed: {
        filterpelanggan: function() {
            return this.pelanggan.filter((pengguna) =>{
                return pengguna.pengguna_nama.match(this.mencari);
            });
        },
        createdBy:function(){
            return this.$store.getters.username;
        }
    }
};
