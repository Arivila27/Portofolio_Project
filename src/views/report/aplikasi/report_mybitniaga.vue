<!-- Rating Pelanggan []
Data Tempat []
visi Traffic []
 -->
<template>
    <div class="home">
        <div class="page-wrapper" style="min-height: 100vh !important;">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div class="card-info mtm-25" style="background: linear-gradient(90deg, rgba(26,116,222,1) 0%, rgba(73,212,109,1) 100%);">
                            <div class="sm-data-box">
                                <div class="container-fluid">
                                    <div class="row">
                                        <router-link :to="{name:'pelanggan'}">
                                            <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                                <span class="clr-white weight-600 block counter"><span>{{jumlah_pelanggan.length}}</span></span>
                                                <span class="weight-400 block font-14 clr-white">Pelanggan Aktif</span>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div class="card-info mtm-25" style="background: linear-gradient(to right top, #d16ba5, #e16f9c, #ed7491, #f67c87, #fc867d, #fa956e, #f2a665, #e6b763, #c9ce71, #a6e192, #80f0c0, #5ffbf1);">
                            <div class="sm-data-box">
                                <div class="container-fluid">
                                    <div class="row">
                                        <router-link :to="{name:'pelanggan'}">
                                            <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                                <span class="clr-white weight-600 block counter"><span>{{online_pelanggan.length}}</span></span>
                                                <span class="weight-400 block font-14 clr-white">Pelanggan(Menggunakan Aplikasi)</span>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="card-info mt-25">
                            <div class="sm-data-box">
                                <div class="container-fluid">
                                    <div class="row">
                                        <router-link :to="{name:'pelanggan'}">
                                            <div class="col-xs-8 pl-0 pr-0 data-wrap-left">
                                                <span class="clr-butek weight-600 block counter"><span>{{jumlah_pelanggan.length}}</span></span>
                                                <span class="weight-400 block font-14 clr-grey">Pelanggan</span>
                                            </div>
                                            <div class="col-xs-4 pl-0 pr-0 pt-25  data-wrap-right" align="right">
                                                <img src="../../../../public/img/icon/aktif.svg" width="50" alt="">
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="card-info mt-25">
                            <div class="sm-data-box">
                                <div class="container-fluid">
                                    <div class="row">
                                        <router-link :to="{name:'pelanggan_baru'}">
                                            <div class="col-xs-8 pl-0 pr-0 data-wrap-left">
                                                <span class="clr-butek weight-600 block counter"><span>{{baru.length}}</span></span>
                                                <span class="weight-400 block font-14 clr-grey">Pelanggan Baru</span>
                                            </div>
                                            <div class="col-xs-4 pl-0 pr-0 pt-25 data-wrap-right" align="right">
                                                <img src="../../../../public/img/icon/new.svg" width="50" alt="">
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="card-info mt-25">
                            <div class="sm-data-box">
                                <div class="container-fluid">
                                    <div class="row">
                                        <router-link :to="{name:'pegawai'}">
                                            <div class="col-xs-8 pl-0 pr-0 data-wrap-left">
                                                <span class="clr-butek weight-600 block counter"><span>{{pegawai.length}}</span></span>
                                                <span class="weight-400 block font-14 clr-grey">Pegawai</span>
                                            </div>
                                            <div class="col-xs-4 pl-0 pr-0 pt-25  data-wrap-right" align="right">
                                                <img src="../../../../public/img/icon/pegawai.svg" width="50" alt="">
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="card-info mt-25">
                            <div class="sm-data-box">
                                <div class="container-fluid">
                                    <div class="row">
                                        <router-link :to="{name:'pelanggan_putus'}">
                                            <div class="col-xs-8 pl-0 pr-0 data-wrap-left">
                                                <span class="clr-butek weight-600 block counter"><span>{{nonaktif.length}}</span></span>
                                                <span class="weight-400 block font-14 clr-grey">Pelanggan Putus</span>
                                            </div>
                                            <div class="col-xs-4 pl-0 pr-0 pt-25 data-wrap-right" align="right">
                                                <img src="../../../../public/img/icon/non.svg" width="50" alt="">
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-25">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="panel panel-default card-view panel-refresh">
                            <div class="refresh-container">
                                <div class="la-anim-1"></div>
                            </div>
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-light">Pelanggan Menggunakan Aplikasi : {{online_pelanggan.length}} {{FilterComplainpegawai}}</h6>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-wrapper collapse in">
                                <div class="table-wrap">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-striped mb-0">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Nama</th>
                                                    <th>ID.Pelanggan</th>
                                                    <th>Alamat</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(com,index) in online_pelanggan">
                                                    <td>{{index + 1}}</td>
                                                    <td>{{com.pengguna_nama}}</td>
                                                    <td><span class="label label-success">{{com.pengguna_id}}</span></td>
                                                    <td>{{com.pengguna_alamat}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- <div class="panel-body row pa-0">
                            </div> -->
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-lg-4 col-md-7 col-sm-12 col-xs-12">
                        <div class="panel panel-default card-view panel-refresh">
                            <div class="refresh-container">
                                <div class="la-anim-1"></div>
                            </div>
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-light">Complain Terbaru</h6>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-wrapper collapse in">
                                <div class="table-wrap">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-striped mb-0">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Nama</th>
                                                    <th>Tanggal
                                                        <br>Complain</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(com,index) in complain.slice(0,5)">
                                                    <td>{{index + 1}}</td>
                                                    <td>{{com.complain_pengguna_nama}}</td>
                                                    <td>{{com.complain_pengguna_tanggal}}</td>
                                                    <td v-if="com.complain_penyelesaian === 'Belum'"><span class="label label-danger">{{com.complain_penyelesaian}}</span></td>
                                                    <td v-if="com.complain_penyelesaian === 'Proses'"><span class="label label-primary">{{com.complain_penyelesaian}}</span></td>
                                                    <td v-if="com.complain_penyelesaian === 'Selesai'"><span class="label label-success">{{com.complain_penyelesaian}}</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- <div class="panel-body row pa-0">
                            </div>
                            </div>
                        </div>
                    </div> --> -->
                </div>
                <!-- Row -->
                <!-- Footer -->
                <footer class="footer container-fluid pl-30 pr-30">
                    <div class="row">
                        <div class="col-sm-12">
                            <p></p>
                        </div>
                    </div>
                </footer>
                <!-- /Footer -->
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import { GChart } from 'vue-google-charts'
import axios from 'axios'
export default {
    components: {
        GChart
    },
    name: 'home',
    data() {
        return {
            chartData: [
                ['Year', 'Sales', 'Expenses', 'Profit', 'Tulips', 'Reddoz', 'Black'],
                ['2014', 1000, 400, 200, 300, 400, 500],
                // ['2015', 1170, 460, 250, 400, 500, 700],
                // ['2016', 660, 1120, 300, 500, 900, 900],
                // ['2017', 1030, 540, 350, 780, 1111, 1000],
                // ['2018', 1030, 540, 350, 780, 1111, 1000],
                // ['2019', 1030, 540, 350, 780, 1111, 1000],
                // ['2020', 1030, 540, 350, 780, 1111, 1000],
                // ['2021', 1030, 540, 350, 780, 1111, 1000],
                // ['2022', 1030, 540, 350, 780, 1111, 1000]
            ],
            chartOptions1: {
                chart: {
                    title: 'Company Performance',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                }
            },
            chartOptions: {
                chart: {
                    title: 'Pembayaran Pelanggan',
                    subtitle: 'Pembayaran pelanggan dinamis tahunnya ',
                }
            },
            // Menghitung Jumlah Collection
            jumlah_pelanggan_baru: '',
            jumlah_pelanggan: '',
            baru: '',
            nonaktif: '',
            jumlah_aset: '',
            jumlah_produk: '',
            jumlah_complain: '',
            jumlah_complain_proses: '',
            jumlah_complain_selesai: '',
            // ----
            // Data Object Untuk Tabel
            complain: [],
            complain_selesai: [],
            complain_nama: [],
            pegawai: [],
            // Untuk mendapatkan data pembayaran bulan ini 
            bulan_ini: new Date().getMonth() + 1,
            tahun_ini: new Date().getFullYear(),
            tr_penagihan: [],
            tr_penagihan_cash: [],
            jumlah_pegawai_complain: [],
            online_pelanggan:[]
            // ---- 

        }
    },
    mounted() {
        // Menghitung total DAri Collection
        this.getpegawai()
        this.getpelanggan()
        this.getpelanggan1()
        this.getpelanggan2()
        this.getaset()
        this.getproduct()
        this.getcomjum()
        this.getcomjumpros()
        this.getcomjumses()
        this.getdatapenagihancash()
        // ----
        // Mendapatkan Data Object Dari collection 
        this.getcomplain()
        this.getcomplainselesai()
        this.getppegawai()
        this.getdatapenagihan()
        this.getcomplainpegawainama();
        this.getonlinepelanggan();
    },
    methods: {
        getonlinepelanggan() {
            axios.get(this.$API + '/M_pengguna/domain/pelanggan/get-all-online-user/' + this.$store.getters.domain)
                .then((response) => {
                    this.online_pelanggan = response.data;
                    console.log(response.data)
                });
        },
        // Untuk mendapatkan data penagihan 
        getdatapenagihan() {
            axios.get(this.$API + '/Tr_penagihan/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_penagihan = response.data;
                });
        },
        // Untuk mendapatkan data penagihan cash
        getdatapenagihancash() {
            axios.get(this.$API + '/Tr_penagihan/domain/Cash/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_penagihan_cash = response.data;
                });
        },
        // Total Dari Sebuah Collection 
        // Menghitung Data Pegawai
        getpegawai() {
            axios.get(this.$API + '/M_pengguna/domain/pelanggan_baru_jumlah/' + this.$store.getters.domain)
                .then((response) => {
                    this.jumlah_pelanggan_baru = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // ----
        // MEnghitung jumlah Pelanggan 
        getpelanggan() {
            axios.get(this.$API + '/M_pengguna/domain/pelanggan/' + this.$store.getters.domain)
                .then((response) => {
                    this.jumlah_pelanggan = response.data;

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        // ----
        // Menghitung Jumlah Pelanggan Baru 
        getpelanggan1() {
            axios.get(this.$API + '/M_pengguna/domain/pelanggan/baru/' + this.$store.getters.domain)
                .then((response) => {
                    this.baru = response.data;

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        // ----

        // Menghitung Jumlah Pelanggan Nonaktif 
        getpelanggan2() {
            axios.get(this.$API + '/M_pengguna/domain/pelanggan/nonaktif/' + this.$store.getters.domain)
                .then((response) => {
                    this.nonaktif = response.data;

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        // ----
        // Menghitung Aset 
        getaset() {
            axios.get(this.$API + '/M_item/domain/aset_jumlah/' + this.$store.getters.domain)
                .then((response) => {

                    this.jumlah_aset = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // ----
        // MEndapatkan Data Product 
        getproduct() {
            axios.get(this.$API + '/M_item/domain/produk_jumlah/' + this.$store.getters.domain)
                .then((response) => {

                    this.jumlah_produk = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // ----
        // Mendapat Jumlah Complain 
        getcomjum() {
            axios.get(this.$API + '/Tr_complain/domain/complain_jumlah/' + this.$store.getters.domain)
                .then((response) => {

                    this.jumlah_complain = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        getcomjumpros() {
            axios.get(this.$API + '/Tr_complain/domain/complain_jumlah_proses/' + this.$store.getters.domain)
                .then((response) => {

                    this.jumlah_complain_proses = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        getcomjumses() {
            axios.get(this.$API + '/Tr_complain/domain/complain_jumlah_selesai/' + this.$store.getters.domain)
                .then((response) => {

                    this.jumlah_complain_selesai = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        // ----
        // ----
        // Mendapatkan Data Complain
        getcomplain() {
            axios.get(this.$API + '/Tr_complain/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.complain = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // ---
        // Mendapatkan Data complain yang sudah selesai
        getcomplainselesai() {
            axios.get(this.$API + '/Tr_complain/domain/selesai/' + this.$store.getters.domain)
                .then((response) => {
                    this.complain_selesai = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        // ----

        // MEndapatkan Semua Data Pegawai 
        getppegawai() {
            axios.get(this.$API + '/M_pengguna/domain/pegawai/' + this.$store.getters.domain)
                .then((response) => {
                    this.pegawai = response.data;

                })
                .catch((error) => {
                    console.log(error);
                });
        },

        // Mendapatkan nama pegawai yang mengatasi complain 
        getcomplainpegawainama() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var last_month = year + '-' + month;
            axios.get(this.$API + '/Tr_complain/pegawai/domain/selesai-tanggal/' + last_month + '/' + this.$store.getters.domain)
                .then((response) => {
                    this.jumlah_pegawai_complain = response.data;

                })
                .catch((error) => {
                    console.log(error);
                });

        },
        // // ----
    },
    computed: {
        // Untuk memfilter pelanggan yang belum bayar 
        filtertempo: function() {
            return this.jumlah_pelanggan.filter(pelanggan => {
                var cari_tempo = pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo;


                return cari_tempo <= new Date().toISOString().slice(0, 10);
            });
        },
        hitungtotalpelangganexpired: function() {
            var pelanggantotal = 0;
            for (var i = 0; i < this.filtertempo.length; i++) {
                pelanggantotal += parseInt(this.filtertempo[i].pengguna_paket.pengguna_paket_harga);
                // pelanggantotal += this.pengguna[i].pengguna_paket.pengguna_paket_harga;
                // pelanggantotal = i;
            }
            return pelanggantotal;
        },
        // menghitung pembayaran seharusnya bulan ini 
        hitungtotalpelanggan: function() {
            var pelanggantotal = 0;
            for (var i = 0; i < this.jumlah_pelanggan.length; i++) {
                pelanggantotal += parseInt(this.jumlah_pelanggan[i].pengguna_paket.pengguna_paket_harga);
                // pelanggantotal += this.pengguna[i].pengguna_paket.pengguna_paket_harga;
                // pelanggantotal = i;
            }
            return pelanggantotal;
        },
        // Filter Penagihan Cash
        FilterPenagihanCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + month);
                return a;
            })
        },
        // Filter Penagihan 
        FilterPenagihan: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + month);
                return a;
            })
        },
        hitungtotalpenagihan: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihan.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihan[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk Chart filter penagihan Cash
        // Untuk januariCash 

        FilterPenagihanJanuariCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '01');
                return a;
            })
        },
        hitungtotalpenagihanJanuariCash: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanJanuariCash.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanJanuariCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk FebCashruari
        FilterPenagihanFebCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '02');
                return a;
            })
        },
        hitungtotalpenagihanFebCash: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanFebCash.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanFebCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk MaretCash 
        FilterPenagihanMaretCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '03');
                return a;
            })
        },
        hitungtotalpenagihanMaretCash: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanMaretCash.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanMaretCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk APRILCash
        FilterPenagihanAprilCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '04');
                return a;
            })
        },
        hitungtotalpenagihanAprilCash: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanAprilCash.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanAprilCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk Mey 
        FilterPenagihanmayCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '05');
                return a;
            })
        },
        hitungtotalpenagihanmayCash: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanmayCash.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanmayCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk juniCash 
        FilterPenagihanjuniCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '06');
                return a;
            })
        },
        hitungtotalpenagihanjuniCash: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanjuniCash.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanjuniCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk JulyCash 
        FilterPenagihanjulyCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '07');
                return a;
            })
        },
        hitungtotalpenagihanjulyCash: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanjulyCash.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanjulyCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk agustusCash 
        FilterPenagihanagustusCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '08');
                return a;
            })
        },
        hitungtotalpenagihanagustusCash: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanagustusCash.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanagustusCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk septCashember 
        FilterPenagihanseptCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '09');
                return a;
            })
        },
        hitungtotalpenagihanseptCash: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanseptCash.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanseptCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk OktoberCash 
        FilterPenagihanoktoberCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '10');
                return a;
            })
        },
        hitungtotalpenagihanoktoberCash: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanoktoberCash.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanoktoberCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk novCashember 
        FilterPenagihannovCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '11');
                return a;
            })
        },
        hitungtotalpenagihannovCash: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihannovCash.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihannovCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk desember 
        FilterPenagihandesCash: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan_cash.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '12');
                return a;
            })
        },
        hitungtotalpenagihandesCash: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihandesCash.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihandesCash[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk Chart filter penagihan biasa
        // Untuk januari 
        FilterPenagihanJanuari: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '01');
                return a;
            })
        },
        hitungtotalpenagihanJanuari: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanJanuari.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanJanuari[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk Februari
        FilterPenagihanFeb: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '02');
                return a;
            })
        },
        hitungtotalpenagihanFeb: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanFeb.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanFeb[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk Maret 
        FilterPenagihanMaret: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '03');
                return a;
            })
        },
        hitungtotalpenagihanMaret: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanMaret.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanMaret[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk APRIL
        FilterPenagihanApril: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '04');
                return a;
            })
        },
        hitungtotalpenagihanApril: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanApril.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanApril[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk Mey 
        FilterPenagihanmay: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '05');
                return a;
            })
        },
        hitungtotalpenagihanmay: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanmay.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanmay[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk juni 
        FilterPenagihanjuni: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '06');
                return a;
            })
        },
        hitungtotalpenagihanjuni: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanjuni.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanjuni[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk July 
        FilterPenagihanjuly: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '07');
                return a;
            })
        },
        hitungtotalpenagihanjuly: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanjuly.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanjuly[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk agustus 
        FilterPenagihanagustus: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '08');
                return a;
            })
        },
        hitungtotalpenagihanagustus: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanagustus.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanagustus[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk september 
        FilterPenagihansept: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '09');
                return a;
            })
        },
        hitungtotalpenagihansept: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihansept.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihansept[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk Oktober 
        FilterPenagihanoktober: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '10');
                return a;
            })
        },
        hitungtotalpenagihanoktober: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihanoktober.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihanoktober[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk november 
        FilterPenagihannov: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '11');
                return a;
            })
        },
        hitungtotalpenagihannov: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihannov.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihannov[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },
        // Untuk desember 
        FilterPenagihandes: function() {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var dt = new Date().getDate();

            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return this.tr_penagihan.filter((penagihan) => {
                var a = penagihan.penagihan_tanggal_pembayaran.toLowerCase().includes(year + '-' + '12');
                return a;
            })
        },
        hitungtotalpenagihandes: function() {
            var penagihantotal = 0;
            for (var i = 0; i < this.FilterPenagihandes.length; i++) {
                penagihantotal += parseInt(this.FilterPenagihandes[i].penagihan_biaya.penagihan_biaya_total);
            }
            return penagihantotal;
        },

    }

};
</script>