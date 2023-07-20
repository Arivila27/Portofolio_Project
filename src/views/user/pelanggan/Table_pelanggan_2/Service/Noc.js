import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
// import Table from '../Table/pelanggan_table'
export default {
    name: 'M_pengguna',
    components: {
        Multiselect,
        // Table
    },
    data() {
        return {
            sortir: 5,
            id: '',
            pengguna_nama_psb: '',
            options: [],
            opsi: [],
            aset: [],
            M_gambar: [],
            tipes: [],
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            cari: '',
            M_pengguna: [],
            pengguna_nama: '',
            pengguna_role: '',
            pengguna_jenis_kelamin: '',
            pengguna_created: '',
            pengguna_username: '',
            pengguna_password: '',
            pengguna_user_updated: '',
            pengguna_no_telepon: '',
            pengguna_status: '',
            pengguna_alamat: '',
            pengguna_departmen_group: '',
            pengguna_no_ktp: '',
            pengguna_no_npwp: '',
            pengguna_paket: '',
            pengguna_ppoe: '',
            pengguna_lokasi_pasang: '',
            pengguna_tanggal_pemasangan: '',
            pengguna_produk: '',
            pengguna_biaya: '',
            pengguna_status_bayar: '',
            pengguna_aset: '',
            pengguna_tipe_pelanggan: '',
            pengguna_updated: new Date().toISOString().slice(0, 10),
            pengguna_tanggal_nonaktif: new Date().toISOString().slice(0, 10),
            page: 1,
            perpage: 10,
            pages: [],
            istoggle: false,
            istoggle2: true,
            // ishidden: false,
            jatuh_tempo_pelanggan: [],
            heading: "Sample PDF Generator",
            moreText: [
                "This is another few sentences of text to look at it.",
                "Just testing the paragraphs to see how they format.",
                "jsPDF likes arrays for sentences.",
                "Do paragraphs wrap properly?",
                "Yes, they do!",
                "What does it look like?",
                "Not bad at all."
            ],
            items: [
                { title: "Item 1", body: "I am item 1 body text" },
                { title: "Item 2", body: "I am item 2 body text" },
                { title: "Item 3", body: "I am item 3 body text" },
                { title: "Item 4", body: "I am item 4 body text" }
            ],
        }
    },
    created() {
        this.getdata()
    },
    watch: {
        M_pengguna() {
            this.setPage()
        }
    },
    methods: {
        // Paginate 
        setPage() {
            let numberOfPages = Math.ceil(this.filterpelanggan.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(filterpelanggan) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return filterpelanggan.slice(from, to)
        },
        // ----
        // Mendapatkan data Pelanggan baru
        getdata() {
            var domain = this.$store.getters.domain;
            axios.get(API + '/M_pengguna/domain/pelanggan/' + domain)
                .then((response) => {
                    this.M_pengguna = response.data;
                });
        },
        // ----
        // Digunakan untuk modal tampilkan 
        hapuspengguna(id, status, nama, ppoe) {
            this.id = id;
            this.pengguna_status = 'N';
            this.pengguna_nama = nama;
            this.pengguna_ppoe = ppoe;
        },
        // ----
        deleteds1(status) {
            axios.put(API + `/M_pengguna/${this.id}`, {
                    pengguna_status: status
                })
                .then(() => {
                    this.getdata();
                    this.$swal("Berhasil", "Berhasil Expired pelanggan ", "success");
                    // router.reload();
                    this.$router.go('/dashboard_pelanggan')
                });
        },

    },
    computed: {
        // Langsung Di filter Pagination 
        displayedPel() {
            return this.paginate(this.filterpelanggan)
        },
        // ----
        // Mencari Dengan Filter
        filterpelanggan: function() {
            return this.M_pengguna.filter(pelanggan => {
                var cari_nama = pelanggan.pengguna_nama.toLowerCase().includes(this.cari.toLowerCase());
                var cari_id = pelanggan.pengguna_id.toLowerCase().includes(this.cari.toLowerCase());
                var cari_ppoe = pelanggan.pengguna_ppoe.toLowerCase().includes(this.cari.toLowerCase());
                var cari_alamat = pelanggan.pengguna_alamat.toLowerCase().includes(this.cari.toLowerCase());

                return cari_nama || cari_id || cari_ppoe || cari_alamat;
                // console.log(this.M_pengguna[0]);
            });
        },
        // ----
        // Menghitung Dengan Pagination
        collection() {
            return this.paginate(this.M_pengguna);
        },
        // mendapatkan username 
        createdBy: function() {
            return this.$store.getters.username;
        },
        // Mendapatkan role
        roleBy: function() {
            return this.$store.getters.role;
        }
    },
    // ----
};