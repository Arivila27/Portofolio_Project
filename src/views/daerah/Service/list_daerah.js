
import axios from 'axios';
import API from '../../../api.config'
export default {
    data() {
        return {
            daerah: [],
            cari: '',
            page: 1,
            perpage: 10,
            pages: [],
            detail_daerah:{},
            selecteddaerah: []
        }
    },
    created() {
        this.getdata()
    },
    watch: {
        daerah() {
            this.setPage();
        }
    },
    methods: {
        deletedaerah(){
            axios.put(API + `/M_daerah/${this.selecteddaerah._id}`,{
                daerah_status:"N",
                daerah_updated:new Date().toISOString().slice(0, 10)
            })
            .then(() =>{
                this.$swal('Berhasil','Data yang dipilih telah dihapus','success');
                this.getdata()
            });
        },
        detail(dpm){
           this.selecteddaerah = dpm;
        },
        setPage() {
            let numberOfPages = Math.ceil(this.Filterdaerah.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(Filterdaerah) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return Filterdaerah.slice(from, to)
        },
        getdata() {
            axios.get(API + '/M_daerah/list-desa/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.daerah = response.data
                    console.log(response.data)
                });
        },
        getdetail(){
            axios.get(API + `/M_daerah/${this.daerah_id}`)
            .then((response) =>{
                console.log(response.data);
                this.detail = response.data
            });
        }
    },
    computed: {
        Filterdaerah: function() {
            return this.daerah.filter((daerah) => {
                var cari_nama = daerah.kecamatan.toLowerCase().includes(this.cari.toLowerCase());
                var cari_id   = daerah.desa.toLowerCase().includes(this.cari.toLowerCase());

                return cari_nama || cari_id;
            });
        },
        displayedDaerah() {
            return this.paginate(this.Filterdaerah)
        }
    },
    // ----
};
