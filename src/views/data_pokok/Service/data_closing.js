import axios from 'axios'
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
import moment from 'moment';
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            data_closing: {},
            select_month : moment(new Date().toLocaleDateString('en-CA')).format('YYYY-MM'),
            M_pengguna : 0,
            data_pelanggan : [],
            target_penagihan : 0,
            target_penagihan_potongan : 0,
            pelanggan_nonaktif : 0,
            pelanggan_putus : 0,
            pembelian : 0,
            perdin : 0,
            tr_migrasi : 0,
            tr_migrasidata : 0,
            tr_voucher : 0,
            tr_voucher_item : 0,
            tr_voucher_jumlah : 0,
            tr_penagmst : 0,
            tr_penagmst_regis : 0,
            tr_penagnonmst_regis : 0,
            tr_penagnonmst : 0,
            tr_outstanding :0,
            tr_outstandingnonmst : 0,
            tanggal_closing : new Date().toLocaleDateString("en-Ca")
        }
    },
    created() {
        this.getdatapokok()
        this.getdata()
        this.getdatamigrasi()
        this.getdatavoucher()
        this.getdatajumlahmigrasi()
        this.getdatajumlahvoucher()
        this.getdataJumlah()
        this.getdatajumlahpelnonaktif()
        this.getdatajumlahpelputus()
        this.getdatajumlahnonmst();
        this.getdataJumlahPotongan();
        this.getdatajumlahmst();
        this.getdatajumlahoutstandingmst()
        this.getdatajumlahoutstandingnonmst()
        this.getdatajumlahnonmstregis();
        this.getdatajumlahmstregis();
        this.getpembelian();
        this.getperdin();
    },
    methods: {
        // Get DAta POKOK setiap cabang cabang 
        getdatapokok: function() {
            axios.get(API + "/M_closing/domain/" + this.$store.getters.domain)
                .then((response) => {
                    this.data_closing = response.data
                })
        },
        momentt(tanggal){
            return moment(tanggal).format("MMMM")
        },
        // Mendapatkan data Pelanggan Aktif dan jumlah target
        getdata() {
            var domain = this.$store.getters.domain;
            axios.get(API + '/M_pengguna/domain/pelanggan/' + domain)
                .then((response) => {
                    this.M_pengguna = response.data.length;
                    this.data_pelanggan = response.data;
                });
        },
        getdataJumlah() {
            var domain = this.$store.getters.domain;
            axios.get(API + '/M_pengguna/target_penagihan/domain/' + domain)
                .then((response) => {
                    this.target_penagihan = response.data[0].sum;
                });
        },
        getdataJumlahPotongan() {
            var domain = this.$store.getters.domain;
            axios.get(API + '/M_pengguna/target_penagihan/potongan/domain/' + domain)
                .then((response) => {
                    this.target_penagihan_potongan = response.data[0].sum;
                });
        },
        getdatajumlahpelnonaktif(){
            var domain = this.$store.getters.domain;
            axios.get(API + '/M_pengguna/domain/pelanggan/real-nonaktif/' +  domain)
                .then((response) => {
                    this.pelanggan_nonaktif = response.data.length;
                });
            
        },
        getdatajumlahpelputus(){
            var domain = this.$store.getters.domain;
            axios.get(API + '/M_pengguna/domain/pelanggan/nonaktif/' +  domain)
                .then((response) => {
                    this.pelanggan_putus = response.data.length;
                });
        },
        getdatajumlahnonmst() {
            axios.get(this.$API + '/Tr_penagihan/jumlahnonmst/type/domain/Y/' + this.$store.getters.domain)
                .then((response) => {
                    //console.log(response.data)
                    this.tr_penagnonmst = response.data[0].sum;
                });
        },
        // Untuk mendapatkan jumlah non Mst(bulanan)
        getdatajumlahmst() {
            axios.get(this.$API + '/Tr_penagihan/jumlahmst/type/domain/Y/' + this.$store.getters.domain)
                .then((response) => {
                    //console.log(response.data)
                    this.tr_penagmst = response.data[0].sum;
                });
        },
        //Untuk mendapatkan jumlah voucher
        getdatajumlahoutstandingmst() {
            axios.get(this.$API + '/Tr_penagihan/jumlahmst/type/domain/O/' + this.$store.getters.domain)
                .then((response) => {
                    // console.log(response.data)
                    this.tr_outstanding = response.data[0].sum;
                });
        },
        getdatajumlahoutstandingnonmst() {
            axios.get(this.$API + '/Tr_penagihan/jumlahnonmst/type/domain/O/' + this.$store.getters.domain)
                .then((response) => {
                    // console.log(response.data)
                    this.tr_outstandingnonmst = response.data[0].sum;
                });
        },
        //Unttuk mendapatkan jumlah mst(regis)
        getdatajumlahnonmstregis() {
            axios.get(this.$API + '/Tr_penagihan/jumlahnonmst/type/domain/R/' + this.$store.getters.domain)
                .then((response) => {
                    // console.log(response.data)
                    this.tr_penagnonmst_regis = response.data[0].sum;
                });
        },
        // Untuk mendapatkan jumlah non Mst(regis)
        getdatajumlahmstregis() {
            axios.get(this.$API + '/Tr_penagihan/jumlahmst/type/domain/R/' + this.$store.getters.domain)
                .then((response) => {
                    // console.log(response.data)
                    this.tr_penagmst_regis = response.data[0].sum;
                });
        },
        //Untuk mendapatkan jumlah migrasi
        getdatajumlahmigrasi() {
            axios.get(this.$API + '/konfirmasi_upgrade_pelanggan/jumlah/domain/' + this.$store.getters.domain)
                .then((response) => {
                    // console.log(response.data)
                    this.tr_migrasi = response.data[0].sum;
                });
        },
        //Untuk mendapatkan jumlah voucher
        getdatajumlahvoucher() {
            axios.get(this.$API + '/Tr_voucher/jumlah/domain/' + this.$store.getters.domain)
                .then((response) => {
                    // console.log(response.data)
                    this.tr_voucher_jumlah = response.data[0].sum;
                    this.tr_voucher_item = response.data[0].jmlh;
                });
        },
        getdatavoucher() {
            axios.get(this.$API + '/Tr_voucher/domain/dashboard/' + this.$store.getters.domain)
                .then((response) => {
                    // console.log(response.data)
                    this.tr_voucher = response.data.length;
                });
        },
        getdatamigrasi(){
            
            axios.get(this.$API + '/konfirmasi_upgrade_pelanggan/get-list/' + this.$store.getters.domain)
                .then((response) => {
                    // console.log(response.data)
                    this.tr_migrasidata = response.data.length;
                });
        },
        getpembelian() {
            axios.get(this.$API + '/Tr_pembelian/total/domain/' + this.$store.getters.domain)
                .then((response) => {
                    //console.log(response.data);
                    this.pembelian = response.data[0].sum;
                })
        },
        // Mendapatkan data perjalanan dinas 
        getperdin() {
            axios.get(this.$API + '/Tr_perdin/get-list/total/domain/' + this.$store.getters.domain)
                .then((response) => {
                    //console.log(response.data);
                    this.perdin = response.data[0].sum;
                })
        },
        createClosing() {
            let UpdatePokok = {
                    closing_id : this.idClosing,
                    closing_tanggal : this.tanggal_closing,
                    closing_pelanggan : {
                      closing_pelanggan_aktif_awal: this.data_closing.closing_pelanggan.closing_pelanggan_aktif_akhir,
                      closing_pelanggan_aktif_akhir: '' + this.M_pengguna,
                      closing_pelanggan_baru: '' + this.filterpelanggan,
                      closing_pelanggan_nonaktif: '' + this.pelanggan_nonaktif ,
                      closing_pelanggan_putus: '' +this.pelanggan_putus
                    },
                    closing_tagihan: {
                      closing_target_awal: this.data_closing.closing_tagihan.closing_target_akhir,
                      closing_target_akhir: this.targetbulanan,
                      closing_pembayaran_bulanan: this.pembayaranbulanan,
                      closing_belum_membayar: this.belummembayar,
                      closing_pembayaran_registrasi: this.pembayaranregis,
                      closing_pembayaran_outstanding: this.pembayaranoutstanding
                    },
                    closing_voucher: {
                      closing_pembelian_voucher: '' + this.tr_voucher,
                      closing_stok_terjual: this.tr_voucher_item,
                      closing_pemasukan_voucher: this.tr_voucher_jumlah
                    },
                    closing_migrasi: {
                      closing_pelanggan_migrasi: '' + this.tr_migrasidata,
                      closing_pemasukan_migrasi: this.tr_migrasi
                    },
                    closing_pengeluaran: {
                      closing_pembelian: this.pembelian,
                      closing_perjalanan_dinas: this.perdin
                    },
                    closing_total_pemasukan: this.totalpemasukan,
                    closing_total_pengeluaran: this.totalpengeluaran,
                    closing_total_pendapatan: this.totalpendapatan,
                    closing_created: this.tanggal_closing,
                    closing_updated: this.tanggal_closing,
                    closing_domain: this.$store.getters.domain,
                    closing_status: "Y",
                    closing_user_updated: this.createdBy
            }
            axios.post(API + '/M_closing/create', UpdatePokok)
                .then(() => {
                    this.$swal('Berhasil', "Data Pokok Berhasil Diupdate", "success");
                    this.$router.push({ name: 'list_closing' });
                });
        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username
        },
        idClosing : function(){
            var d_t = new Date();
            let year = d_t.getFullYear();
            let month = ("0" + (d_t.getMonth() + 1)).slice(-2);
            const  tanggal = year + "-" + month
            const tanggalbaru = moment(String(tanggal)).format('YYYYMM')
            return tanggalbaru;
        },
        filterpelanggan: function() {
            return this.data_pelanggan.filter(pelanggan => {
                var select_month = pelanggan.pengguna_tanggal_pemasangan.toLowerCase().includes(this.select_month.toLowerCase());

                return select_month;
                // console.log(this.M_pengguna[0]);
            });
        },
        // jumlahbaru(){
        //     return this.filterpelanggan.length
        // },
        pembayaranbulanan : function(){
            return this.tr_penagmst + this.tr_penagnonmst
        },
        pembayaranregis : function(){
            return this.tr_penagmst_regis + this.tr_penagnonmst_regis
        },
        pembayaranoutstanding : function(){
            return this.tr_outstanding + this.tr_outstandingnonmst
        },
        targetbulanan : function(){
            return this.target_penagihan - this.target_penagihan_potongan
        },
        BulanIni : function(){
            var romla = new Date(this.data_closing.closing_tanggal);
            var bulan_romla = ("0" + (romla.getMonth() + 2)).slice(-2);
            var tahun_romla = romla.getFullYear();
            var hari_romla = romla.getDate();
            var terakhir_hasil = tahun_romla + '-' + bulan_romla + '-' + '01';
            const format = moment(terakhir_hasil).format('MMMM')
            //var fixtangal = this.momentt(terakhir_hasil)
            return format
        },
        belummembayar : function(){
            return this.data_closing.closing_tagihan.closing_target_akhir - this.tr_penagmst - this.tr_penagnonmst
        },
        totalpemasukan : function(){
            return this.tr_voucher_jumlah + this.tr_migrasi + this.tr_outstanding + this.tr_outstandingnonmst + this.tr_penagmst + this.tr_penagmst_regis + this.tr_penagnonmst + this.tr_penagnonmst_regis
        },
        totalpengeluaran : function(){
            return this.pembelian + this.perdin
        },
        totalpendapatan : function(){
            return this.totalpemasukan - this.totalpengeluaran
        },
        BulanDepan : function(){
            var romla = new Date(this.data_closing.closing_tanggal);
            var bulan_romla = ("0" + (romla.getMonth() + 3)).slice(-2);
            var tahun_romla = romla.getFullYear();
            var hari_romla = romla.getDate();
            var terakhir_hasil = tahun_romla + '-' + bulan_romla + '-' + '01';
            const format = moment(terakhir_hasil).format('MMMM')
            //var fixtangal = this.momentt(terakhir_hasil)
            return format
        },
    }
};