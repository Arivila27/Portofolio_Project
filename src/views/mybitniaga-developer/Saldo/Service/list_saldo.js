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
            mybitniaga_saldo: [],
        }
    },
    created() {
        this.getmybitniaga_saldo()
    },
    watch: {
        mybitniaga_saldo() {
            this.setPage();
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterMybitniagaSaldo.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterMybitniagaSaldo) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterMybitniagaSaldo.slice(from, to)
        },
        getmybitniaga_saldo() {
            axios.get(API_MYBITNIAGA + '/mybitniaga/saldo/list-saldo')
                .then((response) => {
                    this.mybitniaga_saldo = response.data;
                })
        },
    },
    computed: {
        FilterMybitniagaSaldo: function() {
            return this.mybitniaga_saldo.filter((mybitniaga_saldo) => {
                var cari_device = mybitniaga_saldo.device.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip = mybitniaga_saldo.ip.toLowerCase().includes(this.cari.toLowerCase());
                return cari_device && cari_ip;
            });
        },
        DisplayedMybitniagaSaldo: function() {
            return this.paginate(this.FilterMybitniagaSaldo)
        }
    }

};