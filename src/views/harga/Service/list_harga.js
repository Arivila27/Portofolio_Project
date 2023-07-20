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
            cari: '',
            harga: [],
            PageofItems: [],
            pageSize: 10,
            kode_harga: ''
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
        detail(kdharga) {
            this.kode_harga = kdharga
        },
        deleteds() {
            axios.put(API + `/M_harga/${this.kode_harga._id}`, {
                    harga_status: "N",
                    harga_updated: new Date().toISOString().slice(0, 10)
                })
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menghapus data', 'success');
                    this.getdata()
                });
        },
        getdata() {
            axios.get(API + '/M_harga/list/' + this.$store.getters.domain)
                .then((response) => {
                    this.harga = response.data
                });
        },
    },
    computed: {
        FilterHarga: function() {
            return this.harga.filter((harga) => {
                var a = harga.harga_nama.match(this.cari);
                var b = harga < this.pageSize && harga > 0;
                return a || b;
            })
        }
    }
};