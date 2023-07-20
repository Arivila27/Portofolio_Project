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
            log_pendaftaran: [],
        }
    },
    created() {
        this.getlogpendaftaran()
    },
    watch: {
        log_pendaftaran() {
            this.setPage();
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterPendaftaran.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterPendaftaran) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterPendaftaran.slice(from, to)
        },
        getlogpendaftaran() {
            axios.get(API_MYBITNIAGA + '/log_pendaftaran/list-log_pendaftaran')
                .then((response) => {
                    this.log_pendaftaran = response.data;
                })
        },
    },
    computed: {
        FilterPendaftaran: function() {
            return this.log_pendaftaran.filter((log_pendaftaran) => {
                var cari_device = log_pendaftaran.device.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ip = log_pendaftaran.ip.toLowerCase().includes(this.cari.toLowerCase());
                return cari_device && cari_ip;
            });
        },
        DisplayedPendaftaran: function() {
            return this.paginate(this.FilterPendaftaran)
        }
    }

};