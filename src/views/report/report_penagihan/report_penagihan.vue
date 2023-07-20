<template>
    <div class="report-pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <div class="row">
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="refresh-container">
                            <div class="la-nim-1"></div>
                        </div>
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Laporan Penagihan</h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <router-link to="/report_penagihan">Back</router-link>
                                </h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Tahun</label>
                                    <input type="number" class="form-control" v-model="tahun">
                                    <p>{{tahun}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Bulan</label>
                                    <input type="month" class="form-control" v-model="bulan">
                                    <p>{{bulan}}</p>
                                </div>
                            </div>
                            <!--  <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Mingguan</label>
                                    <input type="week" class="form-control" v-model="minggu">
                                    <p>{{minggu}}</p>
                                </div>
                            </div> Pending Sebentar Mingguan -->
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Tanggal</label>
                                    <input type="date" class="form-control" v-model="tanggal">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Data Barang:{{tanggal}} {{bulan}} {{tahun}}</h6>
                            </div>
                            <div class="pull-right">
                                <a href="#" @click="print" class="pull-left inline-block">
                                    <i class="zmdi zmdi-print"></i>
                                </a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <table class="table table-borderless" v-if="DisplayedPenagihan.length === 0">
                                <h1>Tidak ada Data</h1>
                            </table>
                            <table class="table table-borderless" v-else ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                                <!-- v-else -->
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Status</th>
                                        <th>Nama</th>
                                        <th>Tanggal<br>Pembayaran</th>
                                        <th>Biaya Total</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(penagihan,index) in DisplayedPenagihan" :key="penagihan._id">
                                        <td>{{index + 1}}</td>
                                        <td><span class="label label-success">{{penagihan.penagihan_status_bayar}}</span></td>
                                        <td>{{penagihan.penagihan_nama}}</td>
                                        <td>{{penagihan.penagihan_tanggal_pembayaran}}</td>
                                        <td>{{penagihan.penagihan_biaya.penagihan_biaya_total | currency}}</td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation">
                                                            <router-link to=""><i class="icon wb-share" aria-hidden="true"></i>Detail</router-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="clearfix btn-group col-md-6 offset-md-5">
                                <button type="button" class="btn btn-sm btn-success" v-if="page != 1" @click="page--">
                                    Previous</button> <button type="button" class="btn btn-sm btn-success" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" v-bind:key="pageNumber"> {{pageNumber}}
                                </button>
                                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-success"> NEXT </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import API from '../../../api.config'
export default {
    data() {
        return {
            tanggal: '',
            penagihan: [],
            minggu: '',
            bulan: '',
            tahun: '',
            page: 1,
            perpage: 10,
            pages: [],
        }
    },
    created() {
        this.getpenagihan();
    },
    watch: {
        penagihan() {
            this.setPage()
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterPenagihan.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterPenagihan) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterPenagihan.slice(from, to)
        },
        getpenagihan() {
            axios.get(API + '/Tr_penagihan')
                .then((response) => {
                    this.penagihan = response.data;
                });
        },
         print() {
            var newWin
            var divToPrint = this.$refs.PrintTable
            newWin = window.open("");
            newWin.document.write(divToPrint.outerHTML);
            newWin.print();
            newWin.close();
        }
    },
    computed: {
        FilterPenagihan: function() {
            return this.penagihan.filter((penagihan) => {
                var cari_tanggal = penagihan.penagihan_tanggal_pembayaran.match(this.tanggal);
                var cari_bulan = penagihan.penagihan_tanggal_pembayaran.match(this.bulan);
                var cari_tahun = penagihan.penagihan_tanggal_pembayaran.match(this.tahun);

                return cari_tanggal && cari_bulan && cari_tahun
            });
        },
        DisplayedPenagihan: function() {
            return this.paginate(this.FilterPenagihan)
        }
    },

};
</script>