
import axios from 'axios';
import API from '../../../api.config'
export default {
    name: 'M_pengguna',
    data() {
        return {
            departmen: [],
            cari: '',
            page: 1,
            perpage: 10,
            pages: [],
            detail_departmen:{},
            selectedDepartmen: []
        }
    },
    created() {
        this.getdata()
    },
    watch: {
        departmen() {
            this.setPage();
        }
    },
    methods: {
        deleteDepartmen(){
            axios.put(API + `/pembantu_departmen/${this.selectedDepartmen._id}`,{
                pembantu_status:"N",
                pembantu_departmen_updated:new Date().toISOString().slice(0, 10)
            })
            .then(() =>{
                this.$swal('Berhasil','Data yang dipilih telah dihapus','success');
                this.getdata()
            });
        },
        detail(dpm){
           this.selectedDepartmen = dpm;
        },
        setPage() {
            let numberOfPages = Math.ceil(this.FilterDepartmen.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterDepartmen) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterDepartmen.slice(from, to)
        },
        getdata() {
            axios.get(API + '/pembantu_departmen')
                .then((response) => {
                    this.departmen = response.data
                });
        },
        getdetail(){
            axios.get(API + `/pembantu_departmen/${this.departmen_id}`)
            .then((response) =>{
                console.log(response.data);
                this.detail = response.data
            });
        }
    },
    computed: {
        FilterDepartmen: function() {
            return this.departmen.filter((departmen) => {
                var cari_nama = departmen.pembantu_departmen_nama.toLowerCase().includes(this.cari.toLowerCase());
                var cari_id   = departmen.pembantu_departmen_kode.toLowerCase().includes(this.cari.toLowerCase());

                return cari_nama || cari_id ;
            });
        },
        displayedDep() {
            return this.paginate(this.FilterDepartmen)
        }
    },
    // ----
};
