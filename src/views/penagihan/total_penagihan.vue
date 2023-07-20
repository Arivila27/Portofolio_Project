<template>
    <div class="pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
                <!-- /Row -->
            </div>
            <div class="row"></div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default card-view">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Total</h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-wrapper collapse in">
                            <div class="panel-body row">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Total:</th>
                                            <th>
                                                <h1>{{hitungtotal | currency}}</h1>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default card-view">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Penagihan Pelanggan: {{cari_tanggal_penagihan}}{{cari_nama_penagihan}}
                                </h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-wrapper collapse in">
                            <div class="panel-body row">
                                <div class="form-group col-md-6">
                                    <div class="pull-left">
                                        <label for="">Cari nama:</label>
                                        <input type="text" class="form-control" placeholder="Search" v-model="cari_nama_penagihan">
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <div class="pull-right">
                                        <label for="">Cari Bulan</label>
                                        <input type="month" class="form-control" placeholder="Search" v-model="cari_tanggal_penagihan">
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <div class="row">
                                        &nbsp;
                                        <button type="button" class="btn btn-default" @click="gettagihan">ALL</button> &nbsp;
                                        <button type="button" class="btn btn-primary" @click="gettagihancash">Cash</button>&nbsp;
                                        <button type="button" class="btn btn-success" @click="gettagihanbank">Bank</button>
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <div class="pull-right">
                                        <label for="">Cari Tanggal</label>
                                        <input type="date" class="form-control" placeholder="Search" v-model="cari_tanggal_penagihan">
                                    </div>
                                </div>
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="">ID pelanggan</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Tanggal<br>Membayar</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(penagihan,index) in DisplayedPenagihan" :key="penagihan._id">
                                            <th>{{index + 1}}</th>
                                            <td>{{penagihan.penagihan_id_pengguna}}</td>
                                            <td>{{penagihan.penagihan_nama}}</td>
                                            <td>{{penagihan.penagihan_tanggal_pembayaran}}</td>
                                            <td><span class="label label-success">{{penagihan.penagihan_status_bayar}}</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="clearfix btn-group col-md-6 offset-md-5">
                                    <button type="button" class="btn btn-sm btn-success" v-if="page1 != 1" @click="page--">
                                        Previous</button> <button type="button" class="btn btn-sm btn-success" v-for="pageNumber in pages1.slice(page-1, page+5)" @click="page1 = pageNumber" v-bind:key="pageNumber"> {{pageNumber}}
                                    </button>
                                    <button type="button" @click="page++" v-if="page1 < pages1.length" class="btn btn-sm btn-success"> NEXT </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import API from '../../api.config'
export default {
    data() {
        return {
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
                paket_harga: ''
            },
            penagihan: [],
            cari_nama_penagihan: '',
            cari_tanggal_penagihan: ''
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
        getpelanggan() {
            axios.get(API + '/M_pengguna/pelanggan')
                .then((response) => {
                    this.pelanggan = response.data;

                });
        },
        gettagihan() {
            axios.get(API + '/Tr_penagihan')
                .then((response) => {
                    this.penagihan = response.data;
                });
        },
    },
    computed: {
        FilterPelanggan() {
            return this.pelanggan.filter((pelanggan) => {
                var mencari_nama = pelanggan.pengguna_nama.toLowerCase().includes(this.cari_nama.toLowerCase());
                var mencari_tanggal = pelanggan.pengguna_penagihan.pengguna_penagihan_terakhir.match(this.cari_tanggal);
                return mencari_nama && mencari_tanggal;
            })
        },
        FilterPenagihan() {
            return this.penagihan.filter((penagihan) => {
                var mencari_nama_penagihan = penagihan.penagihan_nama.toLowerCase().includes(this.cari_nama_penagihan.toLowerCase());
                var mencari_tanggal_penagihan = penagihan.penagihan_tanggal_pembayaran.match(this.cari_tanggal_penagihan);
                return mencari_nama_penagihan && mencari_tanggal_penagihan;
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
        DisplayedPenagihan() {
            return this.paginate1(this.FilterPenagihan);
        },
        hitungtotal: function() {
            var totalan = 0;
            for (let i = 0; i < this.FilterPenagihan.length; i++) {
                totalan += parseInt(this.FilterPenagihan[i].penagihan_biaya.penagihan_biaya_total);
            }
            return totalan;
        }
    }
};
</script>