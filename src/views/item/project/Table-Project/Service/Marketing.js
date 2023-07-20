
import axios from 'axios'
import API from '../../../../../api.config'
export default {
    data() {
        return {
            cari: '',
            project: [],
            page: 1,
            perpage: 10,
            pages: [],
            selectedProject:''
        }
    },
    created() {
        this.getproject();
    },
    watch: {
        project() {
            this.setPage()
        }
    },
    methods: {
        deleteds(){
            axios.put( API + `/M_item/${this.selectedProject._id}`,{
                item_status:'N',
                item_updated:new Date().toISOString().slice(0, 10)
            })
            .then(() =>{
                this.$swal('Berhasil','Berhasil menghapus data','success')
                this.getproject()
            });
        },
        detail(pro){
            this.selectedProject = pro
        },
        setPage() {
            let numberOfPages = Math.ceil(this.FilterProject.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterProject) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterProject.slice(from, to)
        },
        getproject() {
            axios.get(API + '/M_item/domain/Project/' + this.$store.getters.domain)
                .then((response) => {
                    this.project = response.data;
                });
        }
    },
    computed: {
        FilterProject: function() {
            return this.project.filter((project) => {
                var cari_nama = project.item_nama.toLowerCase().includes(this.cari.toLowerCase());
                var cari_kode = project.item_nama.toLowerCase().includes(this.cari.toLowerCase());
                return cari_nama || cari_kode;
            })
        },
        DisplayedProject:function(){
            return this.paginate(this.FilterProject);
        }
    }
};
