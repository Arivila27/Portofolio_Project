
import axios from 'axios';
import API from '../../../../../api.config'
export default {
    data() {
        return {
            // Wadah Dari Sebuah Data 
            pelanggan: [],
            // ----
            // Untuk Mencari
            mencari:'', 
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
    },
    methods: {
        // Mendapatkan Data Pelanggan Dari Database
        getpelanggan() {
            axios.get(API + '/M_pengguna/pelanggan')
                .then((response) => {
                    console.log(response);
                    this.pelanggan = response.data;
                })
                .catch((error) => {
                    console.log(error);
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
                complain_pengguna_nama : this.pengguna_nama,
                complain_pengguna_alamat: this.pengguna_alamat,
                complain_pengguna_ppoe : this.pengguna_ppoe,
                complain_status: 'Y',
                complain_penyelesaian:'Belum',
                complain_pengguna_keluhan :this.pengguna_keluhan,
                complain_pengguna_notice : this.pengguna_notice,
                complain_created:new Date().toISOString().slice(0, 10),
                complain_updated:new Date().toISOString().slice(0, 10),
                complain_user_updated:this.createdBy
            }
            console.log(newcomplain);
            axios.post(API + '/Tr_complain' , newcomplain)
            .then((response) =>{
                console.log(response.data);
                this.$router.push("/trcomplain");
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
