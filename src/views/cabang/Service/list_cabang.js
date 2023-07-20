
import axios from 'axios';
import API from '../../../api.config'
export default {
    name: 'M_pengguna',
    data() {
        return {
            cabang: [],
            cari: '',
            page: 1,
            perpage: 10,
            pages: [],
            detail_cabang:{},
            selectedcabang: []
        }
    },
    created() {
        this.getdata()
    },
    watch: {
        cabang() {
            this.setPage();
        }
    },
    methods: {
        deletecabang(){
            axios.put(API + `/M_cabang/${this.selectedcabang._id}`,{
                cabang_status:"N",
                cabang_updated:new Date().toISOString().slice(0, 10)
            })
            .then(() =>{
                this.$swal('Berhasil','Data yang dipilih telah dihapus','success');
                this.getdata()
            });
        },
        detail(dpm){
           this.selectedcabang = dpm;
        },
        setPage() {
            let numberOfPages = Math.ceil(this.FilterCabang.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterCabang) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterCabang.slice(from, to)
        },
        getdata() {
            axios.get(API + '/M_cabang')
                .then((response) => {
                    this.cabang = response.data
                    console.log(response.data)
                });
        },
        getdetail(){
            axios.get(API + `/M_cabang/${this.cabang_id}`)
            .then((response) =>{
                console.log(response.data);
                this.detail = response.data
            });
        }
    },
    computed: {
        FilterCabang: function() {
            return this.cabang.filter((cabang) => {
                var cari_nama = cabang.cabang_nama.toLowerCase().includes(this.cari.toLowerCase());
                var cari_id   = cabang.cabang_kode.toLowerCase().includes(this.cari.toLowerCase());

                return cari_nama || cari_id ;
            });
        },
        displayedCab() {
            return this.paginate(this.FilterCabang)
        }
    },
    // ----
};
