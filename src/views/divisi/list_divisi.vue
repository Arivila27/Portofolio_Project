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
                                <h6 class="panel-title txt-light">Divisi</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/tambah_divisi">
                                    <a href="#" class="pull-left inline-block mr-15">
                                        <i class="zmdi zmdi-file-plus txt-light"></i>
                                    </a>
                                </router-link>
                                <a href="#" data-toggle="modal" data-target="#instruction" class="pull-left inline-block mr-15">
                                    <i class="zmdi zmdi-help txt-light"></i>
                                </a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
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
                                        <p>Menu Divisi ini digunakan untuk Data Master Divisi Jika Subnet/Cabang Bitniaga Mempunyai divisi selain Internet(Network)</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Tutup</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ---- -->
                        <div class="panel-body">
                            <div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="total-tagihan">
                                                <div class="mt-15 mb-10">
                                                    <span class="block font-12 weight-400">Total Divisi</span>
                                                    <span class="txt-dark block counter weight-600 font-24">{{division.length}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            <div class="mt-40" style="overflow-x: scroll">
                                <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Nama Divisi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for=" (pro,index) in PageofItems" :key="pro._id">
                                            <th>{{index + 1}}</th>
                                            <td>{{pro.divisi_nama}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="clearfix btn-group col-md-12 offset-md-6 mt-10">
                                    <JwPagination :pageSize="pageSize" :items="Filterdivisi" @changePage="onChangePage"></JwPagination>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/list_divisi"></script>