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
            log_topup: [],
        }
    },
    created() {
        this.getlogtopup()
    },
    watch: {
        log_topup() {
            this.setPage();
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterTopUp.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterTopUp) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterTopUp.slice(from, to)
        },
        getlogtopup() {
            axios.get(API_MYBITNIAGA + '/log_topup/list-log_topup')
                .then((response) => {
                    this.log_topup = response.data;
                })
        },
    },
    computed: {
        FilterTopUp: function() {
            return this.log_topup.filter((log_topup) => {
                var cari_device = log_topup.device.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip = log_topup.ip.toLowerCase().includes(this.cari.toLowerCase());
                return cari_device && cari_ip;
            });
        },
        DisplayedTopUp: function() {
            return this.paginate(this.FilterTopUp)
        }
    }

};