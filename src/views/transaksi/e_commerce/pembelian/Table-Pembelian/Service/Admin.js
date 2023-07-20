
import axios from 'axios';
import API from '../../../../../../api.config'
export default {

    data() {
        return {
            cari:'',
            pembelian: [],
            page: 1,
            perpage: 10,
            pages: []
            
        }
    },
    created() {
        this.getpembelian()
    },
    watch:{
        pembelian(){
            this.setPage()
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterPembelian.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterPembelian) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterPembelian.slice(from, to)
        },
        getpembelian() {
            axios.get( API +'/Tr_pembelian')
                .then((response) => {
                    console.log(response.data);
                    this.pembelian = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
         getpembelianbelum() {
            axios.get( API +'/Tr_pembelian/belum')
                .then((response) => {
                    console.log(response.data);
                    this.pembelian = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
         getpembeliansudah() {
            axios.get( API +'/Tr_pembelian/lunas')
                .then((response) => {
                    console.log(response.data);
                    this.pembelian = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    computed:{
        FilterPembelian:function(){
           return this.pembelian.filter((pembelian) =>{
             return   pembelian.pembelian_no_transaksi.match(this.cari)
            })   
        },
        DisplayedPembelian:function(){
            return this.paginate(this.FilterPembelian)
        }
    }
    // Tambahin Pembelian Statis Ada di coba multi select
};
