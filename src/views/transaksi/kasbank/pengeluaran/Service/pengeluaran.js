import axios from 'axios';
import API from '../../../../../api.config'
export default {
    data() {
        return {
            cari: '',
            pengeluaran: [],
            page: 1,
            perpage: 10,
            pages: [],
            selectedPengeluaran: ''
        }
    },
    created() {
        this.getdata()
    },
    methods: {
        detail(pengeluaran) {
            this.selectedPengeluaran = pengeluaran
        },
        deleteds() {
            axios.put(API + `/Tr_pengeluaran/${this.selectedPengeluaran._id}`, {
                    pengeluaran_status: "N",
                    pengeluaran_updated: new Date().toISOString().slice(0, 10)
                })
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menghapus data', 'success');
                    this.getdata()
                });
        },
        getdata() {
            axios.get(API + '/Tr_pengeluaran')
                .then((response) => {
                    this.pengeluaran = response.data
                    // console.log(this.pengeluaran)
                });
        }
    },
    computed: {
        FilterPengeluaran: function() {
            return this.pengeluaran.filter(pengeluaran => {
            return pengeluaran.pengeluaran_divisi.match(this.cari)
            });
            // console.log(this.pengeluaran)
            // console.log("hai")
        }
    }
};