import axios from 'axios';
import API from '../../../api.config'
export default {
    name: 'M_pengguna',
    data() {
        return {
            domain: [],
            cari: '',
            page: 1,
            perpage: 10,
            pages: [],
            detail_domain: {},
            selecteddomain: []
        }
    },
    created() {
        this.getdata()
    },
    watch: {
        domain() {
            this.setPage();
        }
    },
    methods: {
        deletedomain() {
            axios.put(API + `/M_domain/${this.selecteddomain._id}`, {
                    domain_status: "N",
                    domain_updated: new Date().toISOString().slice(0, 10)
                })
                .then(() => {
                    this.$swal('Berhasil', 'Data yang dipilih telah dihapus', 'success');
                    this.getdata()
                });
        },
        detail(dpm) {
            this.selecteddomain = dpm;
        },
        setPage() {
            let numberOfPages = Math.ceil(this.FilterDomain.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterDomain) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterDomain.slice(from, to)
        },
        getdata() {
            axios.get(API + '/M_domain')
                .then((response) => {
                    this.domain = response.data
                    console.log(response.data)
                });
        },
        getdetail() {
            axios.get(API + `/M_domain/${this.domain_id}`)
                .then((response) => {
                    console.log(response.data);
                    this.detail = response.data
                });
        }
    },
    computed: {
        FilterDomain: function() {
            return this.domain.filter((domain) => {
                var cari_nama = domain.domain_nama.toLowerCase().includes(this.cari.toLowerCase());
                var cari_id = domain.domain_kode.toLowerCase().includes(this.cari.toLowerCase());

                return cari_nama || cari_id;
            });
        },
    },
    // ----
};