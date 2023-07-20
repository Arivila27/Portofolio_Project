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
            complain_penggunaid: '',
            complain_penangan: '',
            complain_status: '',
            complain_pengguna_nama: '',
            complain_pengguna_alamat: '',
            complain_pengguna_ppoe: '',
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
        deleteds() {
            axios.put(API + `/Tr_complain/${this.id}`, {
                    complain_status: "N"
                })
                .then(() => {
                    this.complain_status = "N";
                    this.getcomplainbelum();
                    this.$swal("Berhasil", "Data Berhasil Dihapus", "success");
                    this.$router.go('/dashboard_pelanggan')


                })
        },
        // ----
        // Mendapatkan Data Complain yang belum diselesaikan
        getcomplainbelum() {
            axios.get(API + '/Tr_complain/domain/proses/' + this.$store.getters.domain)
                .then((response) => {
                    this.complain = response.data;
                });
        },
        // Mendapatkan Data Penangan 
        getpegawai() {
            axios.get(API + '/M_pengguna/domain/pegawai/' + this.$store.getters.domain)
                .then((response) => {
                    this.options = response.data;
                })
        },
        // ----
        // Mendapatkan Data Dikirim Ke tabel
        detail_pelanggan(id, nama, alamat, ppoe, keluhan, penyelesaian, penangan, notice) {
            this.id = id;
            this.complain_pengguna_nama = nama;
            this.complain_pengguna_alamat = alamat;
            this.complain_pengguna_ppoe = ppoe;
            this.complain_pengguna_keluhan = keluhan;
            this.complain_penyelesaian = penyelesaian;
            this.complain_penangan = penangan;
            this.complain_notice = notice;
        },
        // ----
        // Mendapatkan Data dari modal hapus 
        hereki(id, stat, nama) {
            this.id = id;
            this.complain_status = stat;
            this.complain_pengguna_nama = nama;
        },
        // ----
        // Mengupdate Data Agar Dapat Dilihat Di Status 
        tangani() {
            let newcomplain = {
                complain_pengguna_nama: this.covmplain_pengguna_nama,
                complain_pengguna_alamat: this.complain_pengguna_alamat,
                complain_pengguna_ppoe: this.complain_pengguna_ppoe,
                complain_pengguna_keluhan: this.complain_pengguna_keluhan,
                complain_penyelesaian: this.complain_penyelesaian,
                complain_yang_menangani: {
                    complain_penangan_nama: this.complain_penangan
                },
                complain_pengguna_notice: this.complain_notice,
                complain_updated: new Date().toISOString().slice(0, 10)
            }
            if (this.complain_penyelesaian === 'Selesai') {
                for (var i = 0; i < this.complain_penangan.length; i++) {
                    // this.complain_penangan[i]
                    // console.log(this.complain_penangan[i].pengguna_nama)
                    axios.post(API + `/Tr_complain`, {
                        complain_domain: this.$store.getters.domain,
                        pegawai_complain_status: "Y",
                        complain_penyelesaian: "Selesai",
                        complain_pengguna_nama: this.complain_penangan[i].pengguna_nama,
                        complain_penyelesaian_tanggal: new Date().toISOString().slice(0, 10)
                    })
                }
                axios.put(API + `/Tr_complain/${this.id}`, newcomplain)
                    .then(() => {
                        this.getcomplainbelum()
                        this.$swal("Berhasil", "Berhasil", "success");
                        // this.$router.go('/dashboard_pelanggan')
                    });
            } else {
                axios.put(API + `/Tr_complain/${this.id}`, newcomplain)
                    .then(() => {
                        this.getcomplainbelum()
                        this.$swal("Berhasil", "Berhasil", "success");
                        // this.$router.go('/dashboard_pelanggan')
                    });
            }

        }
        // ----
    },
    computed: {
        FilterComplain: function() {
            return this.complain.filter((complain) => {
                var cari_nama = complain.complain_pengguna_nama.toLowerCase().includes(this.cari.toLowerCase())
                var cari_ppoe = complain.complain_pengguna_ppoe.toLowerCase().includes(this.cari.toLowerCase())
                return cari_nama || cari_ppoe
            });
        },
        DisplayedComplain: function() {
            return this.paginate(this.FilterComplain)
        }
    }
}