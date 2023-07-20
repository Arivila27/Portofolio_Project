import axios from 'axios';
import API from '../../../../api.config'
import API_MYBITNIAGA from '../../../../mybitniaga_api.config'
export default {
    data() {
        return {
            cari: '',
            page: 1,
            perpage: 10,
            pages: [],
            mybitniaga_transaksi: [],
        }
    },
    created() {
        this.getmybitniaga_transaksi()
    },
    watch: {
        mybitniaga_transaksi() {
            this.setPage();
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterMybitniagaTransaksi.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterMybitniagaTransaksi) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterMybitniagaTransaksi.slice(from, to)
        },
        getmybitniaga_transaksi() {
            axios.get(API_MYBITNIAGA + '/mybitniaga/transaksi/list-transaksi2')
                .then((response) => {
                    this.mybitniaga_transaksi = response.data;
                })
        },
    },
    computed: {
        FilterMybitniagaTransaksi: function() {
            return this.mybitniaga_transaksi.filter((mybitniaga_transaksi) => {
                var cari_device = mybitniaga_transaksi.pengguna_id.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip = mybitniaga_transaksi._id_pengguna.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip2 = mybitniaga_transaksi.idtransaksi.toLowerCase().includes(this.cari.toLowerCase());
                return cari_device && cari_ip && cari_ip2;
            });
        },
        DisplayedMybitniagaTransaksi: function() {
            return this.paginate(this.FilterMybitniagaTransaksi)
        }
    }

};