import axios from 'axios';
import Multiselect from 'vue-multiselect';
import moment from 'moment';
import API from '../../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            select_month : moment(new Date().toLocaleDateString('en-CA')).format('YYYY-MM-DD'),
            option_type: ['','Bulanan', 'Registrasi','Outstanding'],
            cari_type : '',
            tr_penagihan : [],
            // option_status: ['Lunas', 'Belum'],
        }
    },
    created() {
        this.getdatapenagihan();
    },
    methods: {
        // mendapatkan data penagihan semuanya 
        getdatapenagihan: function() {
            axios.get(this.$API + `/Tr_penagihan/domain/list-pelanggan/sudah-bayar/${this.$route.params.jumlah}/`+ this.$store.getters.domain)
                .then((response) => {
                    // var data = []
                    // for (let index = 0; index < response.data.length; index++) {
                    //     if (response.data[index].penagihan_type_keterangan==="Y") {
                    //        data.push(response.data[index])
                    //     }
                    // }
                    this.tr_penagihan = response.data;
                });
        }
    },
    computed: {
        FilterPenagihan: function() {
            return this.tr_penagihan.filter((penagihan) => {
                if (this.cari_type==="Bulanan") {
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("mybitniaga-mst".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("Y".toLowerCase());
                    return a && b && d;
                } else if(this.cari_type==="Registrasi"){
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("mybitniaga-mst".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("R".toLowerCase());
                    return a && b && d;
                } else if(this.cari_type==="Outstanding"){
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("mybitniaga-mst".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("O".toLowerCase());
                    return a && b && d;
                }else{
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("mybitniaga-mst".toLowerCase());
                    return a && b;
                }
            })
        },
        hitungtotalmst: function() {
            var penagihanmst = 0;
            for (var i = 0; i < this.FilterPenagihan.length; i++) {
                penagihanmst += parseInt(this.FilterPenagihan[i].penagihan_paket.penagihan_paket_harga);
            }
            return penagihanmst;
        },
        FilterPenagihanCash: function() {
            return this.tr_penagihan.filter((penagihan) => {
                if (this.cari_type==="Bulanan") {
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("Cash".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("Y".toLowerCase());
                    return a && b && d;
                } else if(this.cari_type==="Registrasi"){
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("Cash".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("R".toLowerCase());
                    return a && b && d;
                } else if(this.cari_type==="Outstanding"){
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("Cash".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("O".toLowerCase());
                    return a && b && d;
                }else{
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("Cash".toLowerCase());
                    return a && b;
                }
            })
        },
        hitungtotalcash: function() {
            var penagihancash = 0;
            for (var i = 0; i < this.FilterPenagihanCash.length; i++) {
                penagihancash += parseInt(this.FilterPenagihanCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihancash;
        },
        FilterPenagihanbanktransfer: function() {
            return this.tr_penagihan.filter((penagihan) => {
                if (this.cari_type==="Bulanan") {
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("BANK-TRANSFER".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("Y".toLowerCase());
                    return a && b && d;
                } else if(this.cari_type==="Registrasi"){
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("BANK-TRANSFER".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("R".toLowerCase());
                    return a && b && d;
                } else if(this.cari_type==="Outstanding"){
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("BANK-TRANSFER".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("O".toLowerCase());
                    return a && b && d;
                }else{
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("BANK-TRANSFER".toLowerCase());
                    return a && b;
                }
            })
        },
        hitungtotalbanktransfer: function() {
            var penagihanbanktransfer = 0;
            for (var i = 0; i < this.FilterPenagihanbanktransfer.length; i++) {
                penagihanbanktransfer += parseInt(this.FilterPenagihanbanktransfer[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihanbanktransfer;
        },
        FilterPenagihansaldo: function() {
            return this.tr_penagihan.filter((penagihan) => {
                if (this.cari_type==="Bulanan") {
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("saldo".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("Y".toLowerCase());
                    return a && b && d;
                } else if(this.cari_type==="Registrasi"){
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("saldo".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("R".toLowerCase());
                    return a && b && d;
                } else if(this.cari_type==="Outstanding"){
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("saldo".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("O".toLowerCase());
                    return a && b && d;
                }else{
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("saldo".toLowerCase());
                    return a && b;
                }
            })
        },
        hitungtotalsaldo: function() {
            var penagihansaldo = 0;
            for (var i = 0; i < this.FilterPenagihansaldo.length; i++) {
                penagihansaldo += parseInt(this.FilterPenagihansaldo[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihansaldo;
        },
        FilterPenagihanvabni: function() {
            return this.tr_penagihan.filter((penagihan) => {
                if (this.cari_type==="Bulanan") {
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("mybitniaga-bni".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("Y".toLowerCase());
                    return a && b && d;
                } else if(this.cari_type==="Registrasi"){
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("mybitniaga-bni".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("R".toLowerCase());
                    return a && b && d;
                } else if(this.cari_type==="Outstanding"){
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("mybitniaga-bni".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("O".toLowerCase());
                    return a && b && d;
                }else{
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("mybitniaga-bni".toLowerCase());
                    return a && b;
                }
            })
        },
        hitungtotalvabni: function() {
            var penagihanbni = 0;
            for (var i = 0; i < this.FilterPenagihanvabni.length; i++) {
                penagihanbni += parseInt(this.FilterPenagihanvabni[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihanbni;
        },
        FilterPenagihanvabca: function() {
            return this.tr_penagihan.filter((penagihan) => {
                if (this.cari_type==="Bulanan") {
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("mybitniaga-bca".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("Y".toLowerCase());
                    return a && b && d;
                } else if(this.cari_type==="Registrasi"){
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("mybitniaga-bca".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("R".toLowerCase());
                    return a && b && d;
                } else if(this.cari_type==="Outstanding"){
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("mybitniaga-bca".toLowerCase());
                    var d = penagihan.penagihan_type_keterangan.toLowerCase().includes("O".toLowerCase());
                    return a && b && d;
                }else{
                    var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                    var b = penagihan.penagihan_metode_bayar.toLowerCase().includes("mybitniaga-bca".toLowerCase());
                    return a && b;
                }
            })
        },
        hitungtotalvabca: function() {
            var penagihanbca = 0;
            for (var i = 0; i < this.FilterPenagihanvabca.length; i++) {
                penagihanbca += parseInt(this.FilterPenagihanvabca[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihanbca;
        },
    }
};