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
            mybitniaga_mpembayaran: [],
        }
    },
    created() {
        this.getmybitniaga_mpembayaran()
    },
    watch: {
        mybitniaga_mpembayaran() {
            this.setPage();
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterMybitniagaMpembayaran.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterMybitniagaMpembayaran) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterMybitniagaMpembayaran.slice(from, to)
        },
        getmybitniaga_mpembayaran() {
            axios.get(API_MYBITNIAGA + '/mybitniaga/mpembayaran/list-mpembayaran')
                .then((response) => {
                    this.mybitniaga_mpembayaran = response.data;
                })
        },
    },
    computed: {
        FilterMybitniagaMpembayaran: function() {
            return this.mybitniaga_mpembayaran.filter((mybitniaga_mpembayaran) => {
                var cari_device = mybitniaga_mpembayaran.pengguna_id.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip = mybitniaga_mpembayaran._id_pengguna.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip2 = mybitniaga_mpembayaran.virtual_account.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip3 = mybitniaga_mpembayaran.idtopup.toLowerCase().includes(this.cari.toLowerCase());
                return cari_device && cari_ip && cari_ip2 && cari_ip3;
            });
        },
        DisplayedMybitniagaMpembayaran: function() {
            return this.paginate(this.FilterMybitniagaMpembayaran)
        }
    }

};