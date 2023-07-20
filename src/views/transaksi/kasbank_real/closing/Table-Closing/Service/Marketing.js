import axios from 'axios';
import API from '../../../../../../api.config'
import JwPagination from 'jw-vue-pagination';
import moment from 'moment';
export default {
    components: {
        JwPagination,
        moment
    },
    data() {
        return {
            cari: '',
            cari_kode_akun: "",
            kasbank: [],
            page: 1,
            perpage: 10,
            pages: [],
            PageofItems: [],
            pageSize: 10,
            cari_bulan: "",
            table_kasbank: [],
            bulan_ini: moment(new Date()).format("MMMM")

        }
    },
    created() {
        this.getkasbank()
        this.getlistkasbank()
    },
    watch: {
        kasbank() {
            this.setPage()
        }
    },
    methods: {
        momentum:function(date){
            return moment(date).format('MMMM')
        },
        getlistkasbank() {
            axios.get(API + '/Tr_kasbank/domain/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response.data);
                    this.table_kasbank = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        onChangePage: function (PageofItems) {
            this.PageofItems = PageofItems
            // console.log(pageSize)
        },
        setPage() {
            let numberOfPages = Math.ceil(this.FilterKasbank.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterKasbank) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterKasbank.slice(from, to)
        },
        getkasbank() {
            axios.get(API + '/Tr_kasbank_closing/domain/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response.data);
                    this.kasbank = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    computed: {
        hitungtotalDebit: function () {
            var hasil_debit = 0;
            for (var i = 0; i < this.FilterKasbank.length; i++) {
                if (this.FilterKasbank[i].kasbank_tipe_cash === 'Debit') {
                    hasil_debit += this.FilterKasbank[i].kasbank_penambahan;
                }
            }
            return hasil_debit
        },
        hitungtotalKredit: function () {
            var hasil_kredit = 0;
            for (var i = 0; i < this.FilterKasbank.length; i++) {
                if (this.FilterKasbank[i].kasbank_tipe_cash === 'Kredit') {
                    hasil_kredit += this.FilterKasbank[i].kasbank_penambahan;
                }
            }
            return hasil_kredit
        },
        hitungtotalsaldoakhirDebit: function () {
            var hasil_debit = 0;
            for (var i = 0; i < this.FilterKasbank.length; i++) {
                if (this.FilterKasbank[i].kasbank_tipe_cash === 'Debit') {
                    hasil_debit += this.FilterKasbank[i].kasbank_akhir;
                }
            }
            return hasil_debit;
        },
        hitungtotalsaldoakhirKredit: function () {
            var hasil_kredit = 0;
            for (var i = 0; i < this.FilterKasbank.length; i++) {
                if (this.FilterKasbank[i].kasbank_tipe_cash === 'Kredit') {
                    hasil_kredit += this.FilterKasbank[i].kasbank_akhir;
                }
            }
            return hasil_kredit;
        },
        hitungtotalSaldo: function () {
            // var hasil_saldo = 0;
            var hasil_saldo = this.hitungtotalsaldoakhirDebit - this.hitungtotalsaldoakhirKredit;
            return hasil_saldo
            // // Yang Lama 
            // var hasil_saldo = 0;
            // hasil_saldo = this.hitungtotalDebit - this.hitungtotalKredit
            // return hasil_saldo
        },
        FilterKasbank: function () {
            return this.kasbank.filter((kasbank) => {
                var filter_jumlah = kasbank < this.pageSize && kasbank > 0;
                var cari_bulan = kasbank.kasbank_bulan.toLowerCase().includes(this.cari_bulan.toLowerCase());
                var cari_kdakun = kasbank.kasbank_tipe.toLowerCase().includes(this.cari_kode_akun.toLowerCase());
                return cari_bulan && cari_kdakun || filter_jumlah;
            })
        },
        Displayedkasbank: function () {
            return this.paginate(this.FilterKasbank)
        }
    }
    // Tambahin kasbank Statis Ada di coba multi select
};