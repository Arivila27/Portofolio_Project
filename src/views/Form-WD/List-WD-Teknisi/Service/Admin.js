
import axios from 'axios'
import API from '../../../../api.config'
export default {
    data() {
        return {
            cari: '',
            wd: [],
            page: 1,
            perpage: 10,
            pages: [],
            selectedwd:''
        }
    },
    created() {
        this.getwd();
    },
    watch: {
        wd() {
            this.setPage()
        }
    },
    methods: {
        detail(pro){
            this.selectedwd = pro
        },
        setPage() {
            let numberOfPages = Math.ceil(this.Filterwd.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(Filterwd) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return Filterwd.slice(from, to)
        },
        getwd() {
            axios.get(API + '/M_wd/')
                .then((response) => {
                    this.wd = response.data;
                });
        }
    },
    computed: {
        Filterwd: function() {
            return this.wd.filter((wd) => {
                var cari_nama = wd.wd_nama.toLowerCase().includes(this.cari.toLowerCase());
                return cari_nama;
            })
        },
        Displayedwd:function(){
            return this.paginate(this.Filterwd);
        }
    }
};
