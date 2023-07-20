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
        }
    },
    created() {
        this.getdata();
    },
    methods: {
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
        // Mendapatkan data pelanggan 
        getdata : function() {
            axios.get(this.$API + '/Tr_penagihan/type/domain/O/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_penagihan = response.data;
                    // console.log(response.data);
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