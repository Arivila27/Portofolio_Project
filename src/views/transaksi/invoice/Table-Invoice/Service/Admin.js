import axios from 'axios';
import API from '../../../../../api.config'
export default {

    data() {
        return {
            cari: '',
            invoice: [],
            page: 1,
            perpage: 10,
            pages: []

        }
    },
    created() {
        this.getinvoice()
    },
    watch: {
        invoice() {
            this.setPage()
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.Filterinvoice.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(Filterinvoice) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return Filterinvoice.slice(from, to)
        },
        getinvoice() {
            axios.get(API + '/Tr_invoice')
                .then((response) => {
                    console.log(response.data);
                    this.invoice = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    computed: {
        Filterinvoice: function() {
            return this.invoice.filter((invoice) => {
                return invoice.invoice_kode.match(this.cari)
            })
        },
        Displayedinvoice: function() {
            return this.paginate(this.Filterinvoice)
        }
    }
    // Tambahin invoice Statis Ada di coba multi select
};