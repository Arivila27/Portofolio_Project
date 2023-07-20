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
                                <h6 class="panel-title txt-dark">Laporan Virtual Account</h6>
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
                                    <input type="number" class="form-control" v-model="tahun" @click.prevent="getpenagihan()">
                                    <p>{{tahun}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Bulan</label>
                                    <input type="month" class="form-control" v-model="bulan" @click.prevent="getpenagihan()">
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
                                    <input type="date" class="form-control" data-date-format="DD/MM/YYYY" v-model="tanggal">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Data:{{tanggal}} {{bulan}} {{tahun}}</h6>
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
                                        <th>VA Code</th>
                                        <th>Nama</th>
                                        <th>Tanggal<br>Pembayaran</th>
                                        <th>Biaya Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(penagihan,index) in DisplayedPenagihan" :key="penagihan._id">
                                        <td>{{index + 1}}</td>
                                        <td>{{penagihan.CompanyCode + penagihan.CustomerNumber}}</td>
                                        <td>{{penagihan.CustomerName}}</td>
                                        <td>{{penagihan.TransactionDate}}</td>
                                        <td>{{penagihan.TotalAmount}}</td>
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
<script src="./Service/report_va"></script>