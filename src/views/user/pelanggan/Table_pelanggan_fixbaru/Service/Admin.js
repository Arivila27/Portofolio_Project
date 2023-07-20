import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
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
        this.getgambar()
        this.getpegawai()
        this.getdepartmen()
        this.gettipes()
        this.getaset()
    },
    watch: {
        M_pengguna() {
            this.setPage()
        }
    },
    methods: {
        // Tombol untuk download Excel 
        
        // Tombol untuk download PDF =
        downloadpdf: function() {
            var exportdatanya1 = this.M_pengguna.map(function(item) {
                return item.pengguna_paket_nama
            });
            // console.log("Tombolnya tertekan");
            const columns = [
                { title: "ID", dataKey: "pengguna_id" },
                { title: "Nama", dataKey: "pengguna_nama" },
                { title: "PPOE", dataKey: "pengguna_ppoe" },
                { title: "Telepon", dataKey: "pengguna_no_telepon" },
                { title: "Alamat", dataKey: "pengguna_alamat" },
                { title: "Paket", dataKey: "pengguna_paket", displayProperty: "pengguna_paket_nama" },
                { title: "Bulanan", dataKey: "pengguna_paket", displayProperty: "pengguna_paket_harga" },
            ];


            const doc = new jsPDF({
                orientation: "landscape",
                unit: "in",
                format: "letter"
            });
            // text is placed using x, y coordinates
            doc.setFontSize(16).text(this.heading, 0.5, 1.0);
            // create a line under heading 
            doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1);
            // Using autoTable plugin
            doc.autoTable({
                columns,
                body: this.M_pengguna,
                margin: { left: 0.5, top: 1.25 }
            });
            // Using array of sentences
            doc
                .setFont("helvetica")
                .setFontSize(12)
                .text(this.moreText, 0.5, 3.5, { align: "left", maxWidth: "7.5" });

            // Creating footer and saving file
            doc
                .setFont("times")
                .setFontSize(11)
                .setFontStyle("italic")
                .setTextColor(0, 0, 255)
                .text(
                    "This is a simple footer located .5 inches from page bottom",
                    0.5,
                    doc.internal.pageSize.height - 0.5
                )
                .save(`Data-Pelanggan(${this.pengguna_updated}).pdf`);
        },
        //Toggle jatuh tempo show up 
        handletempo: function() {
            this.istoggle = !this.istoggle;
            for (var i = 0; i < this.filterpelanggan.length; i++) {
                this.filterpelanggan[i]
                if (this.filterpelanggan[i].pengguna_penagihan.pengguna_penagihan_jatuh_tempo <= new Date().toISOString().slice(0, 10)) {
                    this.jatuh_tempo_pelanggan = this.filterpelanggan[i];
                } else {
                    // console.log('aman')
                }
            }
            var abc = [];
            abc.push(this.jatuh_tempo_pelanggan)
            // console.log(abc)
        },
        // Handle untuk memasukan pelanggan ke nonaktif
        handlenonaktif: function() {
            for (var i = 0; i < this.filtertempo.length; i++) {
                console.log(this.filtertempo[i]._id)
                axios.put(API + `/M_pengguna/${this.filtertempo[i]._id}`, {
                    pengguna_noc: "Y",
                    pengguna_noc_keterangan: "Pelanggan akan nonaktif"
                });
            }
            this.getdata();
            this.$swal("Berhasil", "Berhasil mengajukan pelanggan nonaktif", "success")
        },
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
        // Mendapatkan Aset 
        getaset() {
            axios.get(API + '/M_item')
                .then((response) => {
                    this.aset = response.data;
                });
        },
        // ----
        // Mencoba Mendapatkan tipe pelanggan 
        gettipes() {
            axios.get(API + '/pembantu_departmen/tipe_pelanggan')
                .then((response) => {
                    this.tipes = response.data;
                });
        },
        // ----
        // Coba ambil gambar
        getgambar() {
            axios.get(API + '/Gmbr_item')
                .then((response) => {
                    this.M_gambar = response.data;
                });
        },
        // ----
        // MEndapatkan Opsi untuk Departmen 
        getdepartmen() {
            axios.get(API + '/pembantu_departmen')
                .then((response) => {
                    this.options = response.data;
                });
        },
        // ----
        // Mendapatkan data Pelanggan baru
        getdata() {
            axios.get(API + '/M_pengguna/pelanggan')
                .then((response) => {
                    this.M_pengguna = response.data;
                });
        },
        // ----
        // MEndapatkan Data Pegawai 
        getpegawai() {
            axios.get(API + '/M_pengguna/pegawai')
                .then((response) => {
                    this.opsi = response.data;
                });
        },
        // ----
        hapuspengguna(id, status, nama) {
            this.id = id;
            this.pengguna_status = 'N';
            this.pengguna_nama = nama;
        },
        deleteds(status) {
            axios.put(API + `/M_pengguna/${this.id}`, {
                    pengguna_noc: "Y",
                    pengguna_noc_keterangan: "Pelanggan akan nonaktif",
                    pengguna_noc_catatan: "Nonaktif"
                })
                .then(() => {
                    this.getdata();
                    this.$swal("Berhasil", "Berhasil mengajukan pelanggan nonaktif", "success")
                });
        },
        deleteds1(status) {
            axios.put(API + `/M_pengguna/${this.id}`, {
                    pengguna_noc: "Y",
                    pengguna_noc_keterangan: "Pelanggan akan putus",
                    pengguna_noc_catatan: "Putus"
                })
                .then(() => {
                    this.getdata();
                    this.$swal("Berhasil", "Berhasil mengajukan pelanggan putus", "success");
                });
        },
        softdelete(id) {
            axios.delete(API + '/M_pengguna/' + id)
                .then(() => {
                    this.getdata();
                });
        }

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
        filtertempo: function() {
            return this.M_pengguna.filter(pelanggan => {
                var cari_tempo = pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo;


                return cari_tempo <= new Date().toISOString().slice(0, 10);
                console.log(this.M_pengguna[0])
            });
        },
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