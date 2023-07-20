import axios from 'axios';
import Multiselect from 'vue-multiselect';
// import PosPrinter from "electron-pos-printer";

import API from '../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            pengguna: [],
            select_month: '',
            tr_penagihan: [],
            tr_cash: [],
            tr_bca: [],
            tr_saldo: [],
            tr_bca_371: [],
            tr_mandiri: [],
            tr_mybitniaga_mst: [],
            tr_mybitniaga_bca: [],
            tr_closing: [],

            metode: '',
            cari_nama: '',
            cari_status: '',
            option_pembayaran: ['Cash', 'BANK-TRANSFER', 'BCA-371', 'Mandiri', 'mybitniaga-mst', 'mybitniaga-bca', 'saldo', 'mybitniaga-bni'],
            // option_pembayaran: [
            //     { nama: 'Cash', nama_bank: 'Cash' },
            //     { nama: 'Bank Transfer', nama_bank: 'BCA' },
            //     { nama: 'BCA-371', nama_bank: 'BCA-371' },
            //     { nama: 'Mandiri', nama_bank: 'Mandiri'},
            //     { nama: 'Mybitniaga-Indomaret', nama_bank: 'mybitniaga-mst' },
            //     { nama: 'Mybitniaga-BCA', nama_bank: 'mybitniaga-bca' },
            //     { nama: 'MIDTRANS', nama_bank: 'mybitniaga-bni' },
            //     { nama: 'Saldo', nama_bank: 'saldo' }
            // ]
        }
    },
    created() {
        this.getdata();
        this.getdatapenagihan();
        this.getdatapenagihanbca();
        this.getdatapenagihanmandiri();
        this.getdaatapenagihancash();
        this.getdaatapenagihansaldo()
        this.getdatapenagihanbca371();
        this.getdatapenagihanmybitniagamst();
        this.getdatapenagihanmybitniagabca();
        this.getdataClosingan();
    },
    methods: {
        // Ketika update langsung ke saldo 
        submit() {
            let new_history = {
                history_wd_bulan: this.select_month,
                history_wd_status: "Y",
                history_wd_domain: this.$store.getters.domain,
                history_wd_created: new Date().toISOString().slice(0, 10),
                history_wd_updated: new Date().toISOString().slice(0, 10)
            }
            axios.get(this.$API + '/Tr_history_wd/domain/' + this.select_month + '/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response.data)
                    if (response.data) {
                        console.log("ada datanya")
                        this.$swal("Gagal", "Data Pada tahun tersebut sudah ada", "error");
                    } else {
                        // console.log("gak ada datanya")
                        axios.post(this.$API + '/Tr_history_wd', new_history)
                        // Field yang dibutuhkan untuk masuk saldo 
                        // "pengguna_id": req.body.pengguna_id,
                        //     "sts": req.body.sts,
                        //     "idtopup": req.body.idtopup,
                        //     "jumlah": req.body.jumlah,
                        //     "total": req.body.total,
                        //     "created": req.body.created
                        let new_saldo = {
                            pengguna_id: this.$store.getters._id,
                            sts: "Topup",
                            idtopup: this.$store.getters._id,
                            jumlah: JSON.stringify(this.hitungtotalmybitniagapps),
                            total: JSON.stringify(this.hitungtotalmybitniagapps),
                            created: new Date().toISOString().slice(0, 10)
                        }
                        console.log(new_saldo)
                        axios.post("http://103.149.238.69:5035/mybitniaga/create-saldo/web/topup-transaksi", new_saldo, {
                                headers: {
                                    'Access-Control-Allow-Origin': '*'
                                }
                            })
                            .then((response) => {
                                this.$swal("Berhasil", "Berhasil masuk saldo", "success");

                            })

                    }
                });
            // axios.post(this.$API + '/Tr_history_wd', new_history)
        },
        // Mendapatkan data pelanggan 
        getdata() {
            axios.get(this.$API + '/M_pengguna/domain/pelanggan/' + this.$store.getters.domain)
                .then((response) => {
                    this.pengguna = response.data;
                    // console.log(response.data);
                });
        },
        // mendapatkan data penagihan semuanya 
        getdatapenagihan() {
            axios.get(this.$API + '/Tr_penagihan/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_penagihan = response.data;
                    console.log(response.data)
                });
        },
        getdataClosingan: function() {
            axios.get(this.$API + '/Tr_closing')
                .then((response) => {
                    this.tr_closing = response.data
                });
        },
        getdaatapenagihancash() {
            axios.get(this.$API + '/Tr_penagihan/domain/Cash/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_cash = response.data
                });
        },
        getdaatapenagihansaldo() {
            axios.get(this.$API + '/Tr_penagihan/domain/saldo/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_saldo = response.data
                });
        },
        getdatapenagihanbca() {
            axios.get(this.$API + '/Tr_penagihan/domain/BCA/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_bca = response.data;
                });
        },
        getdatapenagihanmandiri() {
            axios.get(this.$API + '/Tr_penagihan/domain/Mandiri/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_mandiri = response.data;
                });
        },
        getdatapenagihanbca371() {
            axios.get(this.$API + '/Tr_penagihan/domain/BCA-371/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_bca_371 = response.data
                });
        },
        getdatapenagihanmybitniagamst() {
            axios.get(this.$API + '/Tr_penagihan/domain/mybitniaga-mst/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_mybitniaga_mst = response.data
                });
        },
        getdatapenagihanmybitniagabca() {
            axios.get(this.$API + '/Tr_penagihan/domain/mybitniaga-bca/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_mybitniaga_bca = response.data
                });
        },
        coba_tanggal: function() {
            console.log(this.select_month)
        }
    },
    computed: {
        // getobjectid:function(){
        //     return this.$store.getters
        // },
        FilterPengguna: function() {
            return this.pengguna.filter((pelanggan) => {
                return pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // Komputasi untuk mendapatkan Transaksi Closing pada bulan tertentu 
        FilterClosing: function() {
            var FilterClosing = {};
            return this.tr_closing.filter((closing) => {
                FilterClosing = closing.penagihan_closing_tanggal.toLowerCase().includes(this.select_month.toLowerCase());
                return FilterClosing
            });
        },
        // Komputasi untuk memfilter dengan status / bulan / nama 
        FilterPenagihan: function() {
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
                var b = penagihan.penagihan_metode_bayar.toLowerCase().includes(this.metode.toLowerCase());
                var c = penagihan.penagihan_nama.toLowerCase().includes(this.cari_nama.toLowerCase());
                return a && b && c;
            })
        },
        // From this BCA 
        FilterBca: function() {
            return this.tr_bca.filter((bca) => {
                return bca.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // From this cash 
        FilterCash: function() {
            return this.tr_cash.filter((cash) => {
                return cash.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // From this saldo 
        FilterSaldo: function() {
            return this.tr_saldo.filter((saldo) => {
                return saldo.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // Komputasi untuk melakukan pendapatan dari bank mandiri 
        FilterMandiri: function() {
            return this.tr_mandiri.filter((mandiri) => {
                return mandiri.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // Komputasi untuk melakukan pendapatkan dari bank bca 371
        FilterBca371: function() {
            return this.tr_bca_371.filter((bca) => {
                return bca.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // Komputasi untuk mendapatkan dari mybitniaga-mst 
        Filtermybitniagamst: function() {
            return this.tr_mybitniaga_mst.filter((mybitniaga_mst) => {
                return mybitniaga_mst.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // Komputasi untuk mendapatkan dari mybitniaga-bca 
        Filtermybitniagabca: function() {
            return this.tr_mybitniaga_bca.filter((mybitniaga_bca) => {
                return mybitniaga_bca.penagihan_tanggal_pembayaran.toLowerCase().includes(this.select_month.toLowerCase());
            })
        },
        // Komputasi untuk menilai total semua penagihan pelanggan 
        hitungtotalpelanggan: function() {
            var pelanggantotal = 0;
            for (var i = 0; i < this.pengguna.length; i++) {

                if (this.pengguna[i].pengguna_status_potongan === 'Y') {
                    pelanggantotal += parseInt(this.pengguna[i].pengguna_paket.pengguna_paket_harga) - parseInt(this.pengguna[i].pengguna_potongan.jumlah_potongan);

                } else {
                    pelanggantotal += parseInt(this.pengguna[i].pengguna_paket.pengguna_paket_harga);

                }
                // pelanggantotal += this.pengguna[i].pengguna_paket.pengguna_paket_harga;
                // pelanggantotal = i;
            }
            return pelanggantotal;
        },
        // hitung total penagihan 
        hitungtotalpenagihan: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihan.length; i++) {
                // penagihantotal += parseInt(this.FilterPenagihan[i].penagihan_biaya.penagihan_biaya_total);
                if (this.FilterPenagihan[i].penagihan_metode_bayar === 'mybitniaga-mst') {
                    penagihantotal += parseInt(this.FilterPenagihan[i].penagihan_biaya.penagihan_biaya_total - 6000);
                } else if (this.FilterPenagihan[i].penagihan_metode_bayar === 'BCA') {
                    penagihantotal += parseInt(this.FilterPenagihan[i].penagihan_biaya.penagihan_biaya_total - 2500);
                } else if (this.FilterPenagihan[i].penagihan_metode_bayar === 'mybitniaga-bni') {
                    penagihantotal += parseInt(this.FilterPenagihan[i].penagihan_biaya.penagihan_biaya_total - 2500);
                } else {
                    penagihantotal += parseInt(this.FilterPenagihan[i].penagihan_biaya.penagihan_biaya_total);
                }
            }
            return penagihantotal;
        },
        // Komputasi untuk hitung total penagihan bank Saldo 
        hitungtotalsaldo: function() {
            var penagihansaldo = 0;
            for (var i = 0; i < this.FilterSaldo.length; i++) {
                penagihansaldo += parseInt(this.FilterSaldo[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihansaldo;
        },
        // Komputasi untuk hitung total penagihan bank bca 
        hitungtotalbca: function() {
            var penagihanbca = 0;
            for (var i = 0; i < this.FilterBca.length; i++) {
                penagihanbca += parseInt(this.FilterBca[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihanbca;
        },
        // Komputasi untuk hitung total penagihan bank mandiri 
        hitungtotalmandiri: function() {
            var penagihanmandiri = 0;
            for (var i = 0; i < this.FilterMandiri.length; i++) {
                penagihanmandiri += parseInt(this.FilterMandiri[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihanmandiri;
        },
        // Komputasi untuk hitung total penagihan lewat mybitniaga_mst
        hitungtotalmybitniagamst: function() {
            var penagihanmybitniagamst = 0;
            for (var i = 0; i < this.Filtermybitniagamst.length; i++) {
                penagihanmybitniagamst += parseInt(this.Filtermybitniagamst[i].penagihan_biaya.penagihan_biaya_total) - 6000;
            }
            return penagihanmybitniagamst;
        },
        // Komputasi untuk hitung total penagihan lewat mybitniaga_bca
        hitungtotalmybitniagabca: function() {
            var penagihanmybitniagabca = 0;
            for (var i = 0; i < this.Filtermybitniagabca.length; i++) {
                penagihanmybitniagabca += parseInt(this.Filtermybitniagabca[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihanmybitniagabca;
        },
        // Komputasi untuk hitung total penagihan mybitniaga-apps
        hitungtotalmybitniagapps: function() {
            var hitungtotalapps = 0
            hitungtotalapps = this.hitungtotalmybitniagabca + this.hitungtotalmybitniagamst + this.hitungtotalsaldo;
            return hitungtotalapps;
        },
        // Komputasi untuk menghitung penagihan cash 
        hitungtotalcash: function() {
            var penagihancash = 0;
            for (var i = 0; i < this.FilterCash.length; i++) {
                penagihancash += parseInt(this.FilterCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihancash;
        },

        // Komputasi dalam persen untuk menghitung selisi 
        pendapatan: function() {
            var a = this.hitungtotalpenagihan / this.hitungtotalpelanggan * 100;
            var hasilnya = parseInt(a)
            return hasilnya;
        }
    }
};