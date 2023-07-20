import axios from 'axios';
import API from '../../../api.config'
import JwPagination from 'jw-vue-pagination';
export default {
    components: {
        JwPagination
        // Table
    },
    data() {
        return {
            division: [],
            cari: '',
            PageofItems:[],
            pageSize: 10
        }
    },
    created() {
        this.getdata()
    },
    methods: {
        onChangePage: function(PageofItems) {
            this.PageofItems = PageofItems
            // console.log(pageSize)
        },
        getdata() {
            axios.get(API + '/M_divisi/get-list/' + this.$store.getters.domain)
                .then((response) => {
                    this.division = response.data
                    console.log(response.data)
                });
        },
    },
    computed: {
        Filterdivisi: function() {
            return this.division.filter((division) => {
                var cari_nama = division.divisi_nama.toLowerCase().includes(this.cari.toLowerCase());
                var filter_jumlah = division < this.pageSize && division > 0
                return cari_nama || filter_jumlah;
            });
        },
    },
    // ----
};