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
                                <h6 class="panel-title txt-dark">Laporan Pelanggan Complain Selesai</h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <router-link to="/report_complain">Back</router-link>
                                </h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Tahun</label>
                                    <input type="number" class="form-control" v-model="cari_tahun">
                                    <p></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Bulan</label>
                                    <input type="month" class="form-control" v-model="cari_bulan">
                                    <p></p>
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
                                    <input type="date" class="form-control" v-model="cari_tanggal">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="panel-heading">
                            <h6 class="panel-title txt-dark"></h6>
                        </div>
                        <div class="panel-body">
                            <table class="table table-borderless" v-if="DisplayedComplain.length === 0">
                                <h1>Tidak ada Data</h1>
                            </table>
                            <table class="table table-borderless" v-else>
                                <!-- v-else -->
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Status</th>
                                        <th>Nama</th>
                                        <th>PPOE</th>
                                        <th>Alamat</th>
                                        <th>Tanggal<br>Pemasangan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(complain,index) in DisplayedComplain" :key="complain._id">
                                        <td>{{index + 1}}</td>
                                        <td> <span class="label label-success">{{complain.complain_penyelesaian}}</span></td>
                                        <td>{{complain.complain_pengguna_nama}}</td>
                                        <td>{{complain.complain_pengguna_ppoe}}</td>
                                        <td>{{complain.complain_pengguna_alamat}}</td>
                                        <td>{{complain.complain_updated}}</td>
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
import API from '../../../../api.config'
export default {
    data() {
        return {
            complain: [],
            cari_tanggal: '',
            cari_bulan: '',
            cari_tahun: '',
             page: 1,
            perpage: 10,
            pages: [],
        }
    },
    created() {
        this.getcomplain()
    },
    watch:{
        complain(){
            this.setPage()
        }
    },
    methods: {
         setPage() {
            let numberOfPages = Math.ceil(this.Filtercomplain.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(Filtercomplain) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return Filtercomplain.slice(from, to)
        },
        getcomplain() {
            axios.get(API +'/Tr_complain/selesai')
                .then((response) => {
                    this.complain = response.data;
                })
        }
    },
    computed: {
        Filtercomplain: function() {
            return this.complain.filter((complain) => {
                var mencari_tanggal = complain.complain_updated.match(this.cari_tanggal);
                var mencari_bulan = complain.complain_updated.match(this.cari_bulan);
                var mencari_tahun = complain.complain_updated.match(this.cari_tahun);

                return mencari_tanggal && mencari_bulan && mencari_tahun;
            })
        },
        DisplayedComplain:function(){
            return this.paginate(this.Filtercomplain)
        }
    }
};
</script>