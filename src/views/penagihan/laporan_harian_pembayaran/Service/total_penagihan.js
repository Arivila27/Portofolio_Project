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
            select_month: moment(new Date().toLocaleDateString('en-CA')).format('YYYY-MM-DD'),
            tr_penagihan: [],
            metode: '',
            cari_nama: '',
            cari_type: '',
            option_pembayaran: ['','Cash', 'BANK-TRANSFER', 'mybitniaga-mst', 'mybitniaga-bca', 'saldo', 'mybitniaga-bni'],
            option_type: ['','O', 'Y','R'],
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
        //Ajukan Hapus
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
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                var b = penagihan.penagihan_metode_bayar.toLowerCase().includes(this.metode.toLowerCase());
                var c = penagihan.penagihan_nama.toLowerCase().includes(this.cari_nama.toLowerCase());
                var d = penagihan.penagihan_type_keterangan.toLowerCase().includes(this.cari_type.toLowerCase());
                return a && b && c && d;
            })
        }
    }
};