import axios from 'axios'
import API from '../../../../api.config'
export default {
    data() {
        return {
            tanggal: '',
            penagihan: [],
            minggu: '',
            bulan: '',
            tahun: '',
            page: 1,
            perpage: 10,
            pages: [],
            idnya: ''
        }
    },
    created() {
        this.getid();
    },
    // updated() {
    //     this.getpenagihan();
    // },
    watch: {
        penagihan() {
            this.setPage()
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterPenagihan.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterPenagihan) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterPenagihan.slice(from, to)
        },
        // Get id dengan domain 
        getid: function() {
            axios.get(API + `/M_id/detail/${this.$store.getters.domain}`)
                .then((response) => {
                    console.log(response.data)
                    this.idnya = response.data
                });
        },
        // -----
        // getdata dengan id number 
        getpenagihan() {
            let bodynya = {
                CustomerNumber: this.idnya.id_kode
            }
            axios.post('http://103.149.238.170:5090/payment-gateway/bca/hitung-transaksi', bodynya)
                .then((response) => {
                    this.penagihan = response.data;
                    console.log(response.data)
                });
        },
        // ----
        print() {
            var newWin
            var divToPrint = this.$refs.PrintTable
            newWin = window.open("");
            newWin.document.write(divToPrint.outerHTML);
            newWin.print();
            newWin.close();
        }
    },
    computed: {
        FilterPenagihan: function() {
            return this.penagihan.filter((penagihan) => {
                var cari_tanggal = penagihan.TransactionDate.match(this.tanggal);
                var cari_bulan = penagihan.TransactionDate.match(this.bulan);
                var cari_tahun = penagihan.TransactionDate.match(this.tahun);

                return cari_tanggal && cari_bulan && cari_tahun
            });
        },
        DisplayedPenagihan: function() {
            return this.paginate(this.FilterPenagihan)
        }
    },

};