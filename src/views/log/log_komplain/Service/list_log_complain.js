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
            log_complain: [],
        }
    },
    created() {
        this.getlogcomplain()
    },
    watch: {
        log_complain() {
            this.setPage();
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterComplain.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterComplain) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterComplain.slice(from, to)
        },
        getlogcomplain() {
            axios.get(API_MYBITNIAGA + '/log_complain/list-log_complain')
                .then((response) => {
                    this.log_complain = response.data;
                })
        },
    },
    computed: {
        FilterComplain: function() {
            return this.log_complain.filter((log_complain) => {
                var cari_device = log_complain.device.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip = log_complain.ip.toLowerCase().includes(this.cari.toLowerCase());
                return cari_device && cari_ip;
            });
        },
        DisplayedComplain: function() {
            return this.paginate(this.FilterComplain)
        }
    }

};