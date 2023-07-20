import axios from 'axios'
import API from '../../../../api.config'
import moment from 'moment';
import JwPagination from 'jw-vue-pagination';
export default {
    components: {
        JwPagination
        // Table
    },
    data() {
        return {
            cari: '',
            cari_tanggal: moment(new Date().toLocaleDateString('en-CA')).format('YYYY-MM'),
            wd: [],
            id : '',
            jumlahaff : 0,
            tr_penagmst_regis : 0,
            tr_penagnonmst_regis : 0,
            pageSize: 10,
            PageofItems: [],
            selectedwd: ''
        }
    },
    created() {
        this.getwd();
        this.jumlahaffnya();
        this.getdatajumlahmstregis();
        this.getdatajumlahnonmstregis();
    },
    methods: {
        onChangePage: function(PageofItems) {
            this.PageofItems = PageofItems
            // console.log(pageSize)
        },
        detail(pro) {
            this.selectedwd = pro
        },
        getwd: function() {
            axios.get(API + '/Tr_penagihan/aff/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.wd = response.data;
                });
        },
        jumlahaffnya() {
            axios.get(API + '/Tr_penagihan/jumlah/aff/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.jumlahaff = response.data[0].sum;
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
        hapuspengguna(id) {
            this.id = id;
        },
        unlogin() {
            axios.put(this.$API + `/Tr_penagihan/domain/edit/${this.id}`, {
                    penagihan_keterangan_fee: "Sudah",
                    penagihan_fee_change : "Uang Cash",
                    penagihan_tglfee__ditarik: new Date().toISOString().slice(0, 10)
                })
                .then(() => {
                    this.$swal("Berhasil", "Berhasil konfirmasi withdraw", "success");
                    this.getwd();
                    // router.reload();
                    //this.$router.go('/akses_pelanggan')
                });
        },

    },
    computed: {
        Filterwd: function() {
            return this.wd.filter((wd) => {
                var cari_nama = wd.penagihan_dapat_fee_nama.toLowerCase().includes(this.cari.toLowerCase());
                var cari_tanggal = wd.penagihan_tanggal_pembayaran.toLowerCase().includes(this.cari_tanggal.toLowerCase());
                var filter_jumlah = wd < this.pageSize && wd > 0;

                return cari_nama && cari_tanggal|| filter_jumlah;
            })
        },
        Jumlahsaldo:function(){
        var totalsaldo = 0
            for (var i = 0; i < this.Filterwd.length; i++) {
                totalsaldo += parseInt(this.Filterwd[i].penagihan_dapat_fee_total);
            }
            return totalsaldo;
        }
    }
};