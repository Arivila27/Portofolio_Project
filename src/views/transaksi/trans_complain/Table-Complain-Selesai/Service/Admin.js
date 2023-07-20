
import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    components: { Multiselect },
    data() {
        return {
            page: 1,
            perpage: 10,
            pages: [],
            cari: '',
            id: '',
            complain: [],
            comproses: [],
            proses: [],
            options: [],
            complain_pengguna_id: '',
            complain_penangan: '',
            complain_pengguna_nama: '',
            complain_pengguna_alamat: '',
            complain_pengguna_keluhan: '',
            complain_penyelesaian: '',
            complain_notice: '',
            opsipenyelesaian: [{ kode: 'Proses' }, { kode: 'Selesai' }]
        }
    },
    mounted() {
        this.getcomplainbelum()
        // this.getcomplainproses()
        this.getpegawai()
    },
    watch: {
        complain() {
            this.setPage()
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterComplain.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterComplain) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterComplain.slice(from, to)
        },
        // Mendapatkan Data Complain yang belum diselesaikan
        getcomplainbelum() {
            axios.get(API + '/Tr_complain/selesai')
                .then((response) => {
                    this.complain = response.data;
                });
        },
        // ----
        getpegawai() {
            axios.get(API + '/M_pengguna/pegawai')
                .then((response) => {
                    this.options = response.data;
                });
        },
        // ----
        // Mendapatkan Data Dikirim Ke tabel
        detail_pelanggan(id, nama, alamat, ppoe, keluhan, penyelesaian, penangan, notice) {
            this.id = id;
            this.complain_pengguna_nama = nama;
            this.complain_pengguna_alamat = alamat;
            this.complain_pengguna_keluhan = keluhan;
            this.complain_penyelesaian = penyelesaian;
            this.complain_penangan = penangan;
            this.complain_notice = notice;
        },
        // ----
        // Mengupdate Data Agar Dapat Dilihat Di Status 
        tangani() {
            let newcomplain = {
                complain_pengguna_nama: this.covmplain_pengguna_nama,
                complain_pengguna_alamat: this.complain_pengguna_alamat,
                complain_penyelesaian: this.complain_penyelesaian,
                complain_pengguna_keluhan: this.complain_pengguna_keluhan,
                complain_pengguna_notice: this.complain_notice,
                complain_yang_menangani: {
                    complain_penangan_nama: this.complain_penangan
                },
                complain_notice: this.complain_notice,
                complain_updated: new Date().toISOString().slice(0, 10)
            }
            axios.put(API + `/Tr_complain/${this.id}`, newcomplain)
                .then(() => {
                    this.getcomplainbelum()
                    this.$swal("Berhasil", "Data berhasil di-update ", "success");
                });
        },
        // ----
        // Mendapat data yang akan dihapus 
        hapus_pelanggan(id, nama) {
            this.id = id;
            this.complain_pengguna_nama = nama;
        },
        // ----
        // Menghapus Data pelanggan complain 
        deleteds() {
            axios.put(API + `/Tr_complain/${this.id}`, {
                    complain_status: "N"
                })
                .then(() => {
                    this.getcomplainbelum();
                    this.$swal('Berhasil', 'Data berhasil dihapus', "success");
                });
        }
        // ----
    },
    computed: {
        FilterComplain: function() {
            return this.complain.filter((complain) => {
                var cari_nama = complain.complain_pengguna_nama.toLowerCase().includes(this.cari.toLowerCase())
                return cari_nama || cari_ppoe
            })
        },
        DisplayedComplain: function() {
            return this.paginate(this.FilterComplain)
        }
    }
}
