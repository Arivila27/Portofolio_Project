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
                                <h6 class="panel-title txt-dark">Laporan Pelanggan Nonaktif</h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <router-link to="/report_pelanggan">Back</router-link>
                                </h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Tahun</label>
                                    <input type="text"  class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Bulan</label>
                                    <input type="month" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Tanggal</label>
                                    <input type="date" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="panel-heading">
                            <h6 class="panel-title txt-dark">Data pelanggan:
                                <!-- {{cari}} -->
                            </h6>
                        </div>
                        <div class="panel-body">
                          <!--   <table class="table table-borderless" v-if="hariFilter.length === 0">
                          <h1>Tidak ada Data</h1>
                        </table> -->
                            <table class="table table-borderless">
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
                                    <tr >
                                        <td></td>
                                        <td><span class="label label-danger">Tidak aktif</span></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>