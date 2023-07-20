import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
import jsPDF from 'jspdf'
import JwPagination from 'jw-vue-pagination';
import 'jspdf-autotable'
// import Table from '../Table/pelanggan_table'
export default {
    name: 'M_pengguna',
    components: {
        Multiselect,
        JwPagination
        // Table
    },
    data() {
        return {
            // Untuk memfilter Pelanggan 
            cari: '',
            cari_id: '',
            cari_alamat: '',
            cari_tipe: '',
            // ----
            pengguna_status: "",
            pengguna_tanggal_nonaktif: "",
            pageSize: 10,
            options: [],
            opsi: [],
            aset: [],
            M_gambar: [],
            tipes: [],
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            M_pengguna: [],
            tipe_pelanggan: [],
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
            PageofItems: [],
            // Untuk tampilan modal 
            pengguna_nama: '',
            id: ''
        }
    },
    created() {
        this.getdata()
        this.gettipepelanggan()
    },
    methods: {
        onChangePage: function(PageofItems) {
            this.PageofItems = PageofItems
            // console.log(pageSize)
        },
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
        gettipepelanggan() {
            axios.get(API + '/pembantu_type/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.tipe_pelanggan = response.data;
                })
        },
        // Mendapatkan data Pelanggan Aktif
        getdata() {
            var domain = this.$store.getters.domain;
            axios.get(API + '/M_pengguna/domain/pelanggan/' + domain)
                .then((response) => {
                    this.M_pengguna = response.data;
                });
        },
        // ----
        // ----
        hapuspengguna(id, status, nama) {
            this.id = id;
            this.pengguna_status = 'N';
            this.pengguna_nama = nama;
        },
        hapuspotongan(id, status, nama) {
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
                    // router.reload();
                    this.$router.go('/dashboard_pelanggan')
                });
        },
        deletedspotongan(status) {
            axios.put(API + `/M_pengguna/${this.id}`, {
                    pengguna_status_potongan: "N",
                })
                .then(() => {
                    this.getdata();
                    this.$swal("Berhasil", "Berhasil menghapus potongan", "success");
                    // router.reload();
                    this.$router.go('/pelanggan')
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
                var cari_tipe_pelanggan = pelanggan.pengguna_tipe_pelanggan.toLowerCase().includes(this.cari_tipe.toLowerCase());
                var cari_nama = pelanggan.pengguna_nama.toLowerCase().includes(this.cari.toLowerCase());
                var cari_id = pelanggan.pengguna_id.toLowerCase().includes(this.cari_id.toLowerCase());
                var cari_alamat = pelanggan.pengguna_alamat.toLowerCase().includes(this.cari_alamat.toLowerCase());

                var filter_jumlah = pelanggan < this.pageSize && pelanggan > 0;

                return cari_tipe_pelanggan && cari_nama && cari_id && cari_alamat || filter_jumlah;
                // console.log(this.M_pengguna[0]);
            });
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