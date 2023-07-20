import axios from 'axios';
import API from '../../../../api.config'
export default {

    data() {
        return {
            cari: '',
            perdin: [],
            page: 1,
            perpage: 10,
            pages: [],
            select_month: "",
            cari_divisi: "",
            M_divisi: [],
            M_supplier: []

        }
    },
    created() {
        this.getperdin()
        this.getdatadivisi()
    },
    watch: {
        perdin() {
            this.setPage()
        }
    },
    methods: {
        getdatadivisi() {
            axios.get(API + '/M_divisi/get-list/' + this.$store.getters.domain)
                .then((response) => {
                    this.M_divisi = response.data
                    console.log(response.data)
                });
        },
        setPage() {
            let numberOfPages = Math.ceil(this.Filterperdin.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(Filterperdin) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return Filterperdin.slice(from, to)
        },
        getperdin() {
            axios.get(API + '/Tr_perdin/get-list/domain/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response.data);
                    this.perdin = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    computed: {
        Filterperdin: function() {
            return this.perdin.filter((perdin) => {
                var a = perdin.perdin_tanggal.toLowerCase().includes(this.select_month.toLowerCase());
                var d = perdin.perdin_divisi.match(this.cari_divisi);
                return a && d;
            })
        },
        Displayedperdin: function() {
            return this.paginate(this.Filterperdin)
        },
        hitungtotalperdin: function() {
            var perdintotal = 0;
            for (var i = 0; i < this.Filterperdin.length; i++) {
                perdintotal += parseInt(this.Filterperdin[i].perdin_jumlah);
            }
            return perdintotal;
        },
    }
    // Tambahin perdin Statis Ada di coba multi select
};