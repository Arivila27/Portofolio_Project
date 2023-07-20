import axios from 'axios';
import Multiselect from 'vue-multiselect';

import API from '../../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            pengguna: [],
            select_month: '',
            report_pelanggan: [],
            report_aktif: [],
            report_baru: [],
            report_nonaktif: [],
            report_putus: [],
            M_produk:[],

            metode: '',
            cari_nama: '',
            cari_paket:'',
            option_status: [
                { value: 'Y', name: 'Aktif' },
                { value: '\W*^N', name: 'Putus' },
                { value: '\w*Nonaktif', name: 'Nonaktif' },
                { value: 'B', name: 'Baru' },
            ]
            // option_status: ['Lunas', 'Belum'],
        }
    },
    created() {
        // this.getdata();
        this.getdatapelanggan();
        this.getdatapelangganaktif();
        this.getdatapelangganbaru();
        this.getdatapelangganputus();
        this.getdatapelanggannonaktif();
        this.getdataproduk();
    },
    methods: {
        // mendapatkan data pelanggan semuanya 
        getdatapelanggan() {
            axios.get(this.$API + '/M_pengguna/domain/pelanggan/get-all/' + this.$store.getters.domain)
                .then((response) => {
                    this.report_pelanggan = response.data;
                    // console.log(response.data)
                });
        },
        getdatapelangganaktif() {
            axios.get(this.$API + '/M_pengguna/domain/pelanggan/' + this.$store.getters.domain)
                .then((response) => {
                    this.report_aktif = response.data
                });
        },
        getdatapelangganbaru() {
            axios.get(this.$API + '/M_pengguna/domain/pelanggan/baru/' + this.$store.getters.domain)
                .then((response) => {
                    this.report_baru = response.data
                });
        },
        getdatapelangganputus() {
            axios.get(this.$API + '/M_pengguna/domain/pelanggan/nonaktif/' + this.$store.getters.domain)
                .then((response) => {
                    this.report_putus = response.data;
                });
        },
        getdatapelanggannonaktif() {
            axios.get(this.$API + '/M_pengguna/domain/pelanggan/real-nonaktif/' + this.$store.getters.domain)
                .then((response) => {
                    this.report_nonaktif = response.data;
                });
        },
        // Mendapatkan data produk dalam 
        getdataproduk(){
            axios.get(this.$API + '/M_item/domain/produk/' + this.$store.getters.domain)
            .then((response) =>{
                this.M_produk = response.data
            });
        },
        coba_tanggal: function() {
            console.log(this.select_month)
        }
    },
    computed: {
        FilterPengguna: function() {
            return this.pengguna.filter((pelanggan) => {
                return pelanggan.pengguna_pelanggan.pengguna_pelanggan_jatuh_tempo.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // Komputasi untuk mendapatkan Transaksi Closing pada bulan tertentu 
        FilterClosing: function() {
            var FilterClosing = {};
            return this.tr_closing.filter((closing) => {
                FilterClosing = closing.pelanggan_closing_tanggal.toLowerCase().includes(this.select_month.toLowerCase());
                return FilterClosing
            });
        },
        // Komputasi untuk memfilter dengan status / bulan / nama 
        Filterpelanggan: function() {
            return this.report_pelanggan.filter((pelanggan) => {
                var a = pelanggan.pengguna_created.toLowerCase().includes(this.select_month.toLowerCase());
                var b = pelanggan.pengguna_status.toLowerCase().includes(this.metode.toLowerCase());
                var c = pelanggan.pengguna_nama.toLowerCase().includes(this.cari_nama.toLowerCase());
                var d = pelanggan.pengguna_paket.pengguna_paket_nama.match(this.cari_paket.item_nama);
                return a && b && c && d;
            })
        },
    }
};