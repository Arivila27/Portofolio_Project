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
            mybitniaga_mgroup: [],
        }
    },
    created() {
        this.getmybitniaga_mgroup()
    },
    watch: {
        mybitniaga_mgroup() {
            this.setPage();
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterMybitniagaMgroup.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterMybitniagaMgroup) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterMybitniagaMgroup.slice(from, to)
        },
        getmybitniaga_mgroup() {
            axios.get(API_MYBITNIAGA + '/mybitniaga/mgroup/list-mgroup')
                .then((response) => {
                    this.mybitniaga_mgroup = response.data;
                })
        },
    },
    computed: {
        FilterMybitniagaMgroup: function() {
            return this.mybitniaga_mgroup.filter((mybitniaga_mgroup) => {
                var cari_device = mybitniaga_mgroup.nama_group.toLowerCase().includes(this.cari.toLowerCase());
                return cari_device;
            });
        },
        DisplayedMybitniagaMgroup: function() {
            return this.paginate(this.FilterMybitniagaMgroup)
        }
    }

};