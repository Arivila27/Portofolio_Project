import axios from 'axios';
import API from '../../../../../../api.config'
export default {

    data() {
        return {
            cari: '',
            kasbank: [],
            // type: kasbank.type,
            page: 1,
            perpage: 10,
            pages: []

        }
    },
    created() {
        this.getkasbank()
    },
    watch: {
        kasbank() {
            this.setPage()
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterKasbank.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterKasbank) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterKasbank.slice(from, to)
        },
        getkasbank() {
            axios.get(API + '/Tr_kasbank/domain/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response.data);
                    this.kasbank = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getkasbankdebit() {
            axios.get(API + '/Tr_kasbank/status/domain/' + this.$store.getters.domain + '/Debit')
                .then((response) => {
                    console.log(response.data);
                    this.kasbank = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getkasbankkredit() {
            axios.get(API + '/Tr_kasbank/status/domain/' + this.$store.getters.domain + '/Kredit')
                .then((response) => {
                    console.log(response.data);
                    this.kasbank = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    computed: {
        FilterKasbank: function() {
            return this.kasbank.filter((kasbank) => {
                return kasbank.kasbank_type.match(this.cari)
            })
        },
        Displayedkasbank: function() {
            return this.paginate(this.FilterKasbank)
        }
    }
    // Tambahin kasbank Statis Ada di coba multi select
};