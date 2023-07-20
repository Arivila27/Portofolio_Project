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
            log_pembayaran: [],
        }
    },
    created() {
        this.getlogpembayaran()
    },
    watch: {
        log_pembayaran() {
            this.setPage();
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterPembayaran.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterPembayaran) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterPembayaran.slice(from, to)
        },
        getlogpembayaran() {
            axios.get(API_MYBITNIAGA + '/log_pembayaran/list-log_pembayaran')
                .then((response) => {
                    this.log_pembayaran = response.data;
                })
        },
    },
    computed: {
        FilterPembayaran: function() {
            return this.log_pembayaran.filter((log_pembayaran) => {
                var cari_device = log_pembayaran.device.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip = log_pembayaran.ip.toLowerCase().includes(this.cari.toLowerCase());
                return cari_device && cari_ip;
            });
        },
        DisplayedPembayaran: function() {
            return this.paginate(this.FilterPembayaran)
        }
    }

};