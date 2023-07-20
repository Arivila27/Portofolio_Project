
import axios from 'axios';
import API from '../../../../../api.config'
export default {
    data() {
        return {
            cari:'',
            page: 1,
            perpage: 10,
            pages: [],
            barang: [],
            id: '',
            barang_nama: '',
            barang_stok: '',
            barang_harga: '',
            barang_kode: '',
            barang_merk: '',
            barang_updated: '',
            barang_user_updated: ''
        }
    },
    created() {
        this.getbarang()
        // console.log(getbarang);
    },
    watch:{
       barang(){
        this.setPage()
       }
    },
    methods: {
         setPage() {
            let numberOfPages = Math.ceil(this.FilterBarang.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterBarang) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterBarang.slice(from, to)
        },
        getbarang() {
            axios.get(API + '/M_item/barang_biasa')
                .then((response) => {
                    this.barang = response.data;
                })
        },
        dapethapus(id, nama) {
            this.id = id;
            this.barang_nama = nama;
        },
        deleteds() {
            let barang = {
                item_status: "N"
            }
            axios.put(API + `/M_item/${this.id}`, barang)
                .then(() => {
                    this.getbarang();
                    this.$swal("Berhasil", "Berhasil menghapus data", "success");
                })
        },
        dapetupdate(id, nama, stok, harga, kode, merk, total, updated, user) {
            this.id = id,
                this.barang_nama = nama;
            this.barang_stok = stok;
            this.barang_harga = harga;
            this.barang_kode = kode;
            this.barang_merk = merk;
            this.barang_harga_total = total;
            this.barang_updated = updated;
            this.barang_user_updated = user;
        },
    },
    computed: {
        barang_harga_total: function() {
            return this.barang_stok * this.barang_harga;
        },
        FilterBarang:function(){
            return this.barang.filter((barang) =>{
                var cari_nama = barang.item_nama.toLowerCase().includes(this.cari.toLowerCase())
                var cari_kode = barang.item_kode.toLowerCase().includes(this.cari.toLowerCase())
                return cari_nama || cari_kode;
            });
        },
        DisplayedBarang:function(){
            return this.paginate(this.FilterBarang)
        }
    }

};
