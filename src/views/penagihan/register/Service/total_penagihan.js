import axios from 'axios';
import Multiselect from 'vue-multiselect';
import moment from 'moment';
// import PosPrinter from "electron-pos-printer";

import API from '../../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            select_month: moment(new Date().toLocaleDateString('en-CA')).format('YYYY-MM'),
            tr_penagihan: [],
            metode: '',
            cari_nama: '',
            id : '',
            option_pembayaran: ['','Cash', 'BANK-TRANSFER', 'mybitniaga-mst', 'mybitniaga-bca', 'saldo', 'mybitniaga-bni'],
            // option_pembayaran: [
            //     { nama: 'Cash', nama_bank: 'Cash' },
            //     { nama: 'Bank Transfer', nama_bank: 'BCA' },
            //     { nama: 'BCA-371', nama_bank: 'BCA-371' },
            //     { nama: 'Mandiri', nama_bank: 'Mandiri'},
            //     { nama: 'Mybitniaga-Indomaret', nama_bank: 'mybitniaga-mst' },
            //     { nama: 'Mybitniaga-BCA', nama_bank: 'mybitniaga-bca' },
            //     { nama: 'MIDTRANS', nama_bank: 'mybitniaga-bni' },
            //     { nama: 'Saldo', nama_bank: 'saldo' }
            // ]
        }
    },
    created() {
        this.getdatapenagihan();
    },
    methods: {
        async cobaprint() {
            await this.$htmlToPaper('printlang');
        },
        momentt(tanggal){
            return moment(tanggal).format("DD MMMM YYYY")
        },
        hapustagihan(id, status, nama) {
            this.id = id;
            this.penagihan_status = 'N';
            this.penagihan_nama = nama;
        },
        deletedsstatus(status) {
            axios.put(API + `/Tr_penagihan/edit/${this.id}`, {
                    penagihan_status: "N",
                })
                .then(() => {
                    this.getdata();
                    this.$swal("Berhasil", "Berhasil mengajukan hapus", "success");
                    // router.reload();
                    this.$router.go('/penagihan')
                });
        },
        // mendapatkan data penagihan semuanya 
        getdatapenagihan: function() {
            axios.get(this.$API + '/Tr_penagihan/type/domain/R/' + this.$store.getters.domain)
                .then((response) => {
                    // var data = []
                    // for (let index = 0; index < response.data.length; index++) {
                    //     if (response.data[index].penagihan_type_keterangan==="R") {
                    //         data.push(response.data[index])
                    //     }
                        
                    // }
                    this.tr_penagihan = response.data;
                });
        }
    },
    computed: {
        // Komputasi untuk memfilter dengan status / bulan / nama 
        FilterPenagihan: function() {
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                var b = penagihan.penagihan_metode_bayar.toLowerCase().includes(this.metode.toLowerCase());
                var c = penagihan.penagihan_nama.toLowerCase().includes(this.cari_nama.toLowerCase());
                return a && b && c;
            })
        }
    }
};