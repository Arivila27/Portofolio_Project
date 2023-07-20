import axios from 'axios';
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
            cari_tempo: '',
            page: 1,
            perpage: 10,
            pages: [],
            page1: 1,
            perpage1: 10,
            pages1: [],
            pelanggan: [],
            cari_nama: '',
            cari_tanggal: '',
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
    },
    watch: {
        pelanggan() {
            this.setPage()
        }
    },
    methods: {
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
        getpelanggan() {
            axios.get(API + '/M_pengguna/pelanggan')
                .then((response) => {
                    this.pelanggan = response.data;
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
        // Untuk membuat history Closing 
        saveClosing: function() {
            let saved = {
                penagihan_belum: this.FilterPelanggan,
                penagihan_selesai: this.FilterPelanggansudahbayar,
                penagihan_total: this.pelanggan,
                penagihan_closing_tanggal: this.cari_tanggal,
                penagihan_total_belum_bayar: this.HitungtotalBelumBayar,
                penagihan_total_sudah_bayar: this.HitungtotalSudahBayar,
                penagihan_total_pelanggan_bayar: this.HitungAllBayar
            }
            axios.post(API + `/Tr_closing`, saved)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil melakukan closing bulan ini', 'success');
                })
        },
        // Fungsi untuk mengganti tanggal jatuh tempo untuk pelanggan yang belum membayar
        EditallPelanggan: function() {
            for (var i = 0; i < this.FilterPelanggan.length; i++) {
                let ubah_jatuh_tempo = {
                    pengguna_penagihan: {
                        pengguna_penagihan_status: this.FilterPelanggan[i].pengguna_penagihan.pengguna_penagihan_status,
                        pengguna_penagihan_terakhir: this.FilterPelanggan[i].pengguna_penagihan.pengguna_penagihan_terakhir,
                        pengguna_penagihan_jatuh_tempo: this.cari_tempo
                    }
                };
                axios.put(API + `/M_pengguna/${this.FilterPelanggan[i]._id}`, ubah_jatuh_tempo)
                    .then((response) => {
                        console.log(response)
                    });
            }
        },
        // Fungsi untuk menambahkan invoice penagihan dengan status belum bayar 
        TambahInvoice: function() {
            for (var i = 0; i < this.FilterPelanggan.length; i++) {
                this.FilterPelanggan[i]
                let newInvoice = {
                    penagihan_nama: this.FilterPelanggan[i].pengguna_nama,
                    penagihan_pengguna_id: this.FilterPelanggan[i]._id,
                    penagihan_id_pengguna: this.FilterPelanggan[i].pengguna_id,
                    penagihan_status: "Y",
                    penagihan_status_bayar: "Belum",
                    penagihan_tanggal_pembayaran: this.cari_tanggal,
                    penagihan_paket: {
                        penagihan_paket_nama: this.FilterPelanggan[i].pengguna_paket.pengguna_paket_nama,
                        penagihan_paket_harga: this.FilterPelanggan[i].pengguna_paket.pengguna_paket_harga
                    },
                    penagihan_biaya: {
                        penagihan_biaya_tambahan: 0,
                        penagihan_biaya_ppn: 0,
                        penagihan_biaya_total: this.FilterPelanggan[i].pengguna_paket.pengguna_paket_harga
                    },
                    penagihan_metode_bayar: "Belum Bayar",
                    penagihan_keterangan: "Belum Bayar"
                }
                // console.log(newInvoice);
                axios.post(API + '/Tr_penagihan', newInvoice)
                    .then(() => {
                        this.$swal("Berhasil", "Berhasil Menambahkan Invoice Pelanggan", "success")
                    });
            }

        },
        // Fungsi untuk membuat 3 Request menjadi 1 
        handlerAll: function(arg1, arg2, arg3) {
            this.saveClosing(arg1);
            this.EditallPelanggan(arg2);
            this.TambahInvoice();
        }
    },
    computed: {
        // Komputasi untuk memfilter pelanggan yang belum  bayar 

        FilterPelanggan() {
            return this.pelanggan.filter((pelanggan) => {
                var mencari_nama = pelanggan.pengguna_nama.toLowerCase().includes(this.cari_nama.toLowerCase());
                // var mencari_id = pelanggan.pengguna_id.match(this.cari_nama);
                var mencari_tanggal = pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo.match(this.cari_tanggal);
                return mencari_nama && mencari_tanggal;
            })
        },
        // Komputasi untuk memfilter pelanggan yang sudah bayar 
        FilterPelanggansudahbayar() {
            return this.pelanggan.filter((pelanggan) => {
                return pelanggan.pengguna_penagihan.pengguna_penagihan_terakhir.match(this.cari_tanggal)
            });
        },
        // Komputasi untuk mendisplay pelanggan yang ada di table 
        DisplayedPelanggan() {
            return this.paginate(this.FilterPelanggan);
            console.log(this.FilterPelanggan);
        },
        // Komputasi untuk menghitung pelanggan byang belum bayar 
        HitungtotalBelumBayar: function() {
            var HitungtotalBelumBayar = 0;
            for (var i = 0; i < this.FilterPelanggan.length; i++) {
                HitungtotalBelumBayar += this.FilterPelanggan[i].pengguna_paket.pengguna_paket_harga;
            }
            return HitungtotalBelumBayar;
        },
        // komputasi untuk menghitung pelanggan yang sudah bayar 
        HitungtotalSudahBayar: function() {
            var HitungtotalSudahBayar = 0;
            for (var i = 0; i < this.FilterPelanggansudahbayar.length; i++) {
                HitungtotalSudahBayar += this.FilterPelanggansudahbayar[i].pengguna_paket.pengguna_paket_harga;
            }
            return HitungtotalSudahBayar;
        },
        // Komputasi untuk menghitung semua pelanggan 
        HitungAllBayar: function() {
            var HitungAllBayar = 0;
            for (var i = 0; i < this.pelanggan.length; i++) {
                HitungAllBayar += this.pelanggan[i].pengguna_paket.pengguna_paket_harga;
            }
            return HitungAllBayar;
        }
    }
};