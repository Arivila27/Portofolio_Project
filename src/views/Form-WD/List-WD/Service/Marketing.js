import axios from 'axios'
import API from '../../../../api.config'
import JwPagination from 'jw-vue-pagination';
export default {
    components: {
        JwPagination
        // Table
    },
    data() {
        return {
            cari: '',
            cari_tanggal: '',
            wd: [],
            tr_mst: 0,
            tr_bca : 0,
            tr_bni : 0,
            tr_saldo: 0,
            pageSize: 10,
            PageofItems: [],
            selectedwd: ''
        }
    },
    created() {
        this.getwd();
        this.getmst();
        this.getbca();
        this.getbni();
        this.getsaldo();
    },
    methods: {
        onChangePage: function(PageofItems) {
            this.PageofItems = PageofItems
            // console.log(pageSize)
        },
        detail(pro) {
            this.selectedwd = pro
        },
        getwd() {
            axios.get(API + '/M_wd/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.wd = response.data;
                });
        },
        getmst() {
            axios.get(API + '/Tr_penagihan/jumlahmst/domain/metode/mybitniaga-mst/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_mst = response.data[0].sum;
                });
        },
        getbni() {
            axios.get(API + '/Tr_penagihan/jumlahmst/domain/metode/mybitniaga-bni/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_bni = response.data[0].sum;
                });
        },
        getbca() {
            axios.get(API + '/Tr_penagihan/jumlahmst/domain/metode/mybitniaga-bca/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_bca = response.data[0].sum;
                });
        },
        getsaldo() {
            axios.get(API + '/Tr_penagihan/jumlahmst/domain/metode/saldo/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_saldo = response.data[0].sum;
                });
        },

    },
    computed: {
        Filterwd: function() {
            return this.wd.filter((wd) => {
                var cari_nama = wd.wd_nama.toLowerCase().includes(this.cari.toLowerCase());
                var cari_tanggal = wd.wd_created.toLowerCase().includes(this.cari_tanggal.toLowerCase());
                var filter_jumlah = wd < this.pageSize && wd > 0;

                return cari_nama && cari_tanggal || filter_jumlah;
            })
        },
        hitungtotalsaldo: function() {
            var hitungtotal = 0
            for (var i = 0; i < this.Filterwd.length; i++) {
                hitungtotal += parseInt(this.Filterwd[i].wd_besaran_diajukan);
            }
            return hitungtotal
        },
        hitungsaldo: function (){
            //var jumlahyangbisa = this.tr_saldo + this.tr_midtrans + this.tr_mybitniaga_bca + this.tr_mybitniaga_mst - this.hitungtotalsaldo
            if(this.$store.getters.domain==="1"){
                var jumlahyangbisa = this.tr_mst + this.tr_bni - this.hitungtotalsaldo
            }else{
                var jumlahyangbisa = this.tr_mst + this.tr_bca + this.tr_bni + this.tr_saldo - this.hitungtotalsaldo
            }
            return jumlahyangbisa
        }
    }
};