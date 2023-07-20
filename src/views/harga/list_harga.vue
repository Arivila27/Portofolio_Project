<template>
    <div class="pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
                <!-- /Row -->
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="refresh-container">
                            <div class="la-anim-1"></div>
                        </div>
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-light">Master-Harga</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/dashboard_pelanggan" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left txt-light"></i>
                                </router-link>
                                <a href="#" data-toggle="modal" data-target="#instruction" class="pull-left inline-block mr-15">
                                    <i class="zmdi zmdi-help txt-light"></i>
                                </a>
                                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-replay txt-light"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen txt-light"></i>
                                </a>
                                <router-link to="/tambah_harga">
                                    <a href="#" class="pull-left inline-block">
                                        <i class="zmdi zmdi-file-plus txt-light"></i>
                                    </a>
                                </router-link>
                            </div>
                            <div class="clearfix"></div>
                            <!-- --- Modal for instruction  -->
                            <div class="modal fade" id="instruction" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle">Petunjuk</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Menu Harga ini digunakan untuk melakukan Master Data Harga & Potongan Harga Kebeberapa Pelanggan *Contoh: Pelanggan Yang dititipin Alat</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Tutup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ---- -->
                        </div>
                        <div class="panel-body">
                            <div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="total-tagihan">
                                                <div class="mt-15 mb-10">
                                                    <span class="block font-12 weight-400">Total Data</span>
                                                    <span class="txt-dark block counter weight-600 font-24">{{harga.length}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="table-wrap mt-20" id="printlang">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Sortir Halaman</label>
                                        <select class="form-control" v-model.number="pageSize">
                                            <option value="1">1</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                            <option value="200">200</option>
                                            <option value="500">500</option>
                                            <option value="1000">1000</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Cari.Nama</label>
                                        <input type="text" class="form-control" v-model="cari" placeholder="Nama">
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="mt-20" style="overflow-x: scroll">
                                <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Nama Potongan</th>
                                            <th scope="col">Nominal Potongan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(kdharga,index) in PageofItems" :key="kdharga._id">
                                            <th>{{index + 1}}</th>
                                            <td>{{kdharga.harga_nama}}</td>
                                            <td>{{kdharga.harga_potongan | currency}}</td>
                                        </tr>
                                        <div class="modal fade bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog ">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                        <h5 class="modal-title" id="myModalLabel">Nonaktifkan</h5>
                                                    </div>
                                                    <div class="modal-body">
                                                        <h5 class="mb-15"></h5>
                                                        <p>Apakah Anda Yakin Ingin Menonaktifkan Potongan harga <b>{{kode_harga.harga_nama}}</b> ?</p>
                                                        <input type="hidden" class="form-control" v-model="kode_harga._id">
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteds">Iya</button>
                                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                                <!-- /.modal-content -->
                                            </div>
                                        </div>
                                    </tbody>
                                </table>
                                <div class="clearfix btn-group col-md-12 offset-md-6 mt-10">
                                    <JwPagination :pageSize="pageSize" :items="FilterHarga" @changePage="onChangePage"></JwPagination>
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
<script src="./Service/list_harga"></script>