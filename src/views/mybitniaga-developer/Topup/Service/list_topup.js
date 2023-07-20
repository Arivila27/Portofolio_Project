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
            mybitniaga_topup: [],
        }
    },
    created() {
        this.getmybitniaga_topup()
    },
    watch: {
        mybitniaga_topup() {
            this.setPage();
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterMybitniagaTopup.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterMybitniagaTopup) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterMybitniagaTopup.slice(from, to)
        },
        getmybitniaga_topup() {
            axios.get(API_MYBITNIAGA + '/top-up/list-top-up/active2')
                .then((response) => {
                    this.mybitniaga_topup = response.data;
                })
        },
    },
    computed: {
        FilterMybitniagaTopup: function() {
            return this.mybitniaga_topup.filter((mybitniaga_topup) => {
                var cari_device = mybitniaga_topup.pengguna_id.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip = mybitniaga_topup._id_pengguna.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip2 = mybitniaga_topup.idtopup.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip3 = mybitniaga_topup.virtual_account.toLowerCase().includes(this.cari.toLowerCase());
                return cari_device && cari_ip && cari_ip2 && cari_ip3;
            });
        },
        DisplayedMybitniagaTopup: function() {
            return this.paginate(this.FilterMybitniagaTopup)
        }
    }

};