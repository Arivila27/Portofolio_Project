import axios from 'axios';
import Multiselect from 'vue-multiselect';

// import API from '../../../api.config'
export default {
    components:{
        Multiselect
    },
    data() {
        return {
            pengguna: [],
            select_month: '',
            tr_penagihan: [],
            tr_cash: [],
            tr_bca: [],
            tr_bca_371: [],
            tr_mandiri: [],
            tr_closing: [],

            metode: '',
            cari_nama: '',
            cari_status:'',
            option_pembayaran: ['Cash', 'BCA', 'BCA-371', 'Mandiri'],
            option_status: ['Lunas', 'Belum'],
        }
    },
    created() {
        this.getdata();
        this.getdatapenagihan();
        this.getdatapenagihanbca();
        this.getdatapenagihanmandiri();
        this.getdaatapenagihancash();
        this.getdatapenagihanbca371();
        this.getdataClosingan();
    },
    methods: {
        Delete(index) {
            this.$swal.fire({
                    title: "Yakin nih?",
                    text: "Data ini bisa dikembalikan",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#f33923",
                    confirmButtonText: "Hapus",
                    cancelButtonText: "Batal",
                    closeOnConfirm: true
                })
                .then(response => {
                    axios.put(this.$API + '/Tr_penagihan/edit/' + index, { penagihan_status: "N" })
                        .then(() => {
                            this.getdata();
                            this.getdatapenagihan();
                            this.getdatapenagihanbca();
                            this.getdatapenagihanmandiri();
                            this.getdaatapenagihancash();
                        })
                    this.$swal("Deleted!", "Your imaginary file has been deleted.", "success");
                })
        },
        // Mendapatkan data pelanggan 
        getdata() {
            axios.get(this.$API + '/M_pengguna/pelanggan')
                .then((response) => {
                    this.pengguna = response.data;
                    // console.log(response.data);
                });
        },
        // mendapatkan data penagihan semuanya 
        getdatapenagihan() {
            axios.get(this.$API + '/Tr_penagihan')
                .then((response) => {
                    this.tr_penagihan = response.data;
                    console.log(response.data)
                });
        },
        getdataClosingan: function() {
            axios.get(this.$API + '/Tr_closing')
                .then((response) => {
                    this.tr_closing = response.data
                });
        },
        getdaatapenagihancash() {
            axios.get(this.$API + '/Tr_penagihan/Cash')
                .then((response) => {
                    this.tr_cash = response.data
                });
        },
        getdatapenagihanbca() {
            axios.get(this.$API + '/Tr_penagihan/BCA')
                .then((response) => {
                    this.tr_bca = response.data;
                });
        },
        getdatapenagihanmandiri() {
            axios.get(this.$API + '/Tr_penagihan/Mandiri')
                .then((response) => {
                    this.tr_mandiri = response.data;
                });
        },
        getdatapenagihanbca371() {
            axios.get(this.$API + '/Tr_penagihan/BCA-371')
                .then((response) => {
                    this.tr_bca_371 = response.data
                });
        }
    },
    computed: {
        FilterPengguna: function() {
            return this.pengguna.filter((pelanggan) => {
                return pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // Komputasi untuk mendapatkan Transaksi Closing pada bulan tertentu 
        FilterClosing:function(){
            var FilterClosing = {};
            return this.tr_closing.filter((closing) =>{
                FilterClosing = closing.penagihan_closing_tanggal.toLowerCase().includes(this.select_month.toLowerCase());
                return FilterClosing
            });
        },
        // Komputasi untuk memfilter dengan status / bulan / nama 
        FilterPenagihan: function() {
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                var b = penagihan.penagihan_metode_bayar.toLowerCase().includes(this.metode.toLowerCase());
                var c = penagihan.penagihan_nama.toLowerCase().includes(this.cari_nama.toLowerCase());
                var d = penagihan.penagihan_status_bayar.toLowerCase().includes(this.cari_status.toLowerCase());
                return a && b && c && d;
            })
        },
        // From this BCA 
        FilterBca: function() {
            return this.tr_bca.filter((bca) => {
                return bca.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // From this cash 
        FilterCash: function() {
            return this.tr_cash.filter((cash) => {
                return cash.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // Komputasi untuk melakukan pendapatan dari bank mandiri 
        FilterMandiri: function() {
            return this.tr_mandiri.filter((mandiri) => {
                return mandiri.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // Komputasi untuk melakukan pendapatkan dari bank bca 371
        FilterBca371: function() {
            return this.tr_bca_371.filter((bca) => {
                return bca.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // Komputasi untuk menilai total semua penagihan pelanggan 
        hitungtotalpelanggan: function() {
            var pelanggantotal = 0;
            for (var i = 0; i < this.pengguna.length; i++) {
                pelanggantotal += parseInt(this.pengguna[i].pengguna_paket.pengguna_paket_harga);
                // pelanggantotal += this.pengguna[i].pengguna_paket.pengguna_paket_harga;
                // pelanggantotal = i;
            }
            return pelanggantotal;
        },
        // hitung total penagihan 
        hitungtotalpenagihan: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihan.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihan[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Komputasi untuk hitung total penagihan bank bca 
        hitungtotalbca: function() {
            var penagihanbca = 0;
            for (var i = 0; i < this.FilterBca.length; i++) {
                penagihanbca += parseInt(this.FilterBca[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihanbca;
        },
        // Komputasi untuk hitung total penagihan bank mandiri 
        hitungtotalmandiri: function() {
            var penagihanmandiri = 0;
            for (var i = 0; i < this.FilterMandiri.length; i++) {
                penagihanmandiri += parseInt(this.FilterMandiri[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihanmandiri;
        },
        // Komputasi untuk menghitung penagihan cash 
        hitungtotalcash: function() {
            var penagihancash = 0;
            for (var i = 0; i < this.FilterCash.length; i++) {
                penagihancash += parseInt(this.FilterCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihancash;
        },
        // Komputasi untuk menghitung closing perbulan 
        hitungtotalclosing:function(){
            return this.FilterClosing.penagihan_total_pelanggan_bayar;
        },
        // Komputasi dalam persen untuk menghitung selisi 
        pendapatan: function() {
            var a = this.hitungtotalpenagihan / this.hitungtotalpelanggan * 100;
            var hasilnya = parseInt(a)
            return hasilnya;
        }
    }
};