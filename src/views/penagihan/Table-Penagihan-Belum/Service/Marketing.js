import axios from 'axios';
import moment from 'moment';
import API from '../../../../api.config'
export default {
    data() {
        return {
            closing1: '',
            closing: {
                jatuh_tempo1: '',
                jatuh_tempo2: '',
                total: 0
            },
            page: 1,
            perpage: 10,
            pages: [],
            page1: 1,
            perpage1: 10,
            pages1: [],
            pelanggan: [],
            cari_nama: '',
            cari_tanggal: moment(new Date().toLocaleDateString('en-CA')).format('YYYY-MM'),
            pengguna: {
                id: '',
                nama: '',
                pengguna_id: '',
                status_bayar: '',
                terakhir_bayar: '',
                jatuh_tempo: '',
                biaya_tambahan: '',
                biaya_total: '',
                biaya_ppn: '',
                paket_nama: '',
                paket_harga: '',
                paket_metode_bayar: '',
                paket_keterangan: ''
            },
            penagihan: [],
            cari_nama_penagihan: '',
            cari_tanggal_penagihan: '',
            penagihan_pembayaran: ''
        }
    },
    created() {
        this.getpelanggan();
        this.gettagihan();
    },
    watch: {
        pelanggan() {
            this.setPage()
        },
        penagihan() {
            this.setPage1()
        }
    },
    methods: {
        print() {
            var newWin
            var divToPrint = this.$refs.PrintTable
            newWin = window.open("");
            newWin.document.write(divToPrint.outerHTML);
            newWin.print();
            newWin.close();
        },
        setPage() {
            let numberOfPages = Math.ceil(this.FilterPelanggan.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterPelanggan) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterPelanggan.slice(from, to)
        },
        setPage1() {
            let numberOfPages = Math.ceil(this.FilterPenagihan.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages1.push(index);
            }
        },
        paginate1(FilterPenagihan) {
            let page1 = this.page1;
            let perpage1 = this.perpage1;
            let from = (page1 * perpage1) - perpage1;
            let to = (page1 * perpage1)
            return FilterPenagihan.slice(from, to)
        },
        getpelanggan : function() {
            axios.get(API + '/M_pengguna/domain/pelanggan/belumbayar/' + this.$store.getters.domain)
                .then((response) => {
                    this.pelanggan = response.data;

                });
        },
        gettagihan() {
            axios.get(API + '/Tr_penagihan/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.penagihan = response.data;
                });
        },
        gettagihanbank() {
            axios.get(API + `/Tr_penagihan/Bank`)
                .then((response) => {
                    this.penagihan = response.data;
                });
        },
        gettagihancash() {
            axios.get(API + `/Tr_penagihan/Cash`)
                .then((response) => {
                    this.penagihan = response.data;
                });
        },
        detailPenagihan(id, nama, pelid, status, terakhir, jatuh, tambahan, total, panam, pahar) {
            this.pengguna.id = id,
                this.pengguna.nama = nama,
                this.pengguna.pengguna_id = pelid,
                this.pengguna.status_bayar = status,
                this.pengguna.terakhir_bayar = terakhir,
                this.pengguna.jatuh_tempo = jatuh,
                this.pengguna.biaya_tambahan = tambahan,
                this.pengguna.biaya_total = total,
                this.pengguna.paket_nama = panam,
                this.pengguna.paket_harga = pahar
        },
        detail_delete(id) {
            this.penagihan_pembayaran = id
        },
        detailClosed(pelanggan) {
            this.closing1 = pelanggan
        },
        tambahInvoice() {
            let newInvoice = {
                penagihan_nama: this.pengguna.nama,
                penagihan_pengguna_id: this.pengguna.id,
                penagihan_id_pengguna: this.pengguna.pengguna_id,
                penagihan_status: "Y",
                penagihan_status_bayar: "Lunas",
                penagihan_tanggal_pembayaran: this.pengguna.terakhir_bayar,
                penagihan_paket: {
                    penagihan_paket_nama: this.pengguna.paket_nama,
                    penagihan_paket_harga: this.pengguna.paket_harga
                },
                penagihan_biaya: {
                    penagihan_biaya_tambahan: this.pengguna.biaya_tambahan,
                    penagihan_biaaya_ppn: this.pengguna.biaya_ppn,
                    penagihan_biaya_total: this.TotalBiaya
                },
                penagihan_metode_bayar: this.pengguna.paket_metode_bayar,
                penagihan_keterangan: this.pengguna.paket_keterangan
            }
            axios.post(API + '/Tr_penagihan', newInvoice)
                .then(() => {
                    this.$swal("Berhasil", "Berhasil Menambahkan Invoice Pelanggan", "success")
                });
        },
        updatePelanggan() {
            let newPelanggan = {
                pengguna_penagihan: {
                    pengguna_penagihan_status: "Belum",
                    pengguna_penagihan_terakhir: this.pengguna.terakhir_bayar,
                    pengguna_penagihan_jatuh_tempo: this.pengguna.jatuh_tempo
                }
            }
            axios.put(API + `/M_pengguna/${this.pengguna.id}`, newPelanggan)
                .then(() => {
                    this.getpelanggan();
                    this.gettagihan();
                    $('#modal_update').modal('hide');
                })
        },
        handler: function(arg1, arg2) {
            this.tambahInvoice(arg1);
            this.updatePelanggan(arg2);
        },
        closed() {
            let newPelangganClosing = {
                pengguna_penagihan: {
                    pengguna_penagihan_status: "Belum",
                    pengguna_penagihan_jatuh_tempo: this.closing.jatuh_tempo2,
                    pengguna_penagihan_terakhir: '-'
                },
                pengguna_biaya_total: this.closing.total
            }
            axios.put(API + `/M_pengguna/closing/${this.closing.jatuh_tempo1}`, newPelangganClosing)
                .then(() => {
                    this.getpelanggan();
                    this.gettagihan();
                    $('#modal_closing').modal('hide');
                })
        },
        closedPost() {
            axios.post(API + '/Tr_penagihan_belum', this.FilterClosed);
        },
        handler1(arg1, arg2) {
            this.closed(arg1);
            this.closedPost(arg2);
        },
        deletedsall(status) {
            axios.put(API + `/M_pengguna/nonaktifmasal/${this.cari_tanggal}`, {
                    pengguna_noc: "Y",
                    pengguna_noc_keterangan: "Pelanggan akan nonaktif",
                    pengguna_noc_catatan: "Nonaktif"
                })
                .then(() => {
                    this.getpelanggan();
                    this.$swal("Berhasil", "Berhasil mengajukan pelanggan nonaktif", "success")
                    this.$router.go('/penagihan_belum')
                });
        },
        deleteds1all(status) {
            axios.put(API + `/M_pengguna/nonaktifmasal/${this.cari_tanggal}`, {
                    pengguna_noc: "Y",
                    pengguna_noc_keterangan: "Pelanggan akan putus",
                    pengguna_noc_catatan: "Putus"
                })
                .then(() => {
                    this.getpelanggan();
                    this.$swal("Berhasil", "Berhasil mengajukan pelanggan nonaktif", "success")
                    this.$router.go('/penagihan_belum')
                });
        },
        deleteds(id) {
            axios.put(API + `/M_pengguna/${id}`, {
                    pengguna_noc: "Y",
                    pengguna_noc_keterangan: "Pelanggan akan nonaktif",
                    pengguna_noc_catatan: "Nonaktif"
                })
                .then(() => {
                    this.getpelanggan();
                    this.$swal("Berhasil", "Berhasil mengajukan pelanggan nonaktif", "success")
                    this.$router.go('/penagihan_belum')
                });
        },
        deleteds1(id) {
            axios.put(API + `/M_pengguna/${id}`, {
                    pengguna_noc: "Y",
                    pengguna_noc_keterangan: "Pelanggan akan putus",
                    pengguna_noc_catatan: "Putus"
                })
                .then(() => {
                    this.getpelanggan();
                    this.$swal("Berhasil", "Berhasil mengajukan pelanggan putus", "success");
                    // router.reload();
                    this.$router.go('/penagihan_belum')
                });
        }
    },
    computed: {
        totalfilter:function(){
            var subtotal = 0;
            for (var i = this.FilterPelanggan.length - 1; i >= 0; i--) {
                subtotal += this.FilterPelanggan[i].pengguna_paket.pengguna_paket_harga;
            }
            return subtotal;
        },
        FilterPelanggan() {
            return this.pelanggan.filter((pelanggan) => {
                var mencari_nama = pelanggan.pengguna_nama.toLowerCase().includes(this.cari_nama.toLowerCase());
                // var mencari_id = pelanggan.pengguna_id.match(this.cari_nama);
                var mencari_tanggal = pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo.match(this.cari_tanggal);
                return mencari_tanggal && mencari_nama;
            })
        },
        FilterPenagihan() {
            return this.penagihan.filter((penagihan) => {
                var mencari_nama_penagihan = penagihan.penagihan_nama.toLowerCase().includes(this.cari_nama_penagihan.toLowerCase());
                var mencari_id_penagihan = penagihan.penagihan_pengguna_id.match(this.cari_nama_penagihan);
                var mencari_tanggal_penagihan = penagihan.penagihan_tanggal_pembayaran.match(this.cari_tanggal_penagihan);
                return mencari_nama_penagihan || mencari_id && mencari_tanggal_penagihan;
            })
        },
        TotalBiaya: function() {
            var a = this.pengguna.biaya_ppn;
            var b = this.pengguna.biaya_total;
            var TotalBiaya = 0;
            return TotalBiaya = a + b;
        },
        DisplayedPelanggan() {
            return this.paginate(this.FilterPelanggan);
        },
    }
};
