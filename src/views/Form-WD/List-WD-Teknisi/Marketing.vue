<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-light">Pengajuan Withdrawal</h6>
            </div>
            <div class="pull-right">
                <a href="#" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-replay txt-light"></i>
                </a>
                <a href="#" data-toggle="modal" data-target="#instruction" class="pull-left inline-block mr-15">
                    <i class="zmdi zmdi-help txt-light"></i>
                </a>
                <a href="#" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-fullscreen txt-light"></i>
                </a>
                <router-link to="/tambah_wd" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-file-plus txt-light"></i>
                </router-link>
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
                        <p>Menu Withdrawal ini digunakan untuk melakukan penagihan pembayaran pelanggan lewat aplikasi ke pusat BITNIAGA</p>
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
                                    <span class="block font-12 weight-400">Total Perolehan Affilate</span>
                                    <span class="txt-dark block counter weight-600 font-24">{{Jumlahsaldo | currency}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="table-wrap mt-20" id="printlang">
                <div class="row">
                    <div class="col-md-4">
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
                    <div class="col-md-4">
                        <label>Cari Nama Affiliator</label>
                        <input type="text" class="form-control" v-model="cari" placeholder="Nama">
                    </div>
                    <div class="col-md-4">
                        <label>Bulan</label>
                        <input type="month" class="form-control" v-model="cari_tanggal">
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="mt-40" style="overflow-x: scroll">
                <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Pelanggan</th>
                            <th>Biaya<br>pemasangan</th>
                            <th>Tanggal<br>pembayaran/pemasangan</th>
                            <th>Affiliator</th>
                            <th>Status<br>Pengajuan</th>
                            <th>Fee</th>
                            <th class="text-center" width="100">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for=" (pro,index) in PageofItems" :key="pro._id">
                            <td>{{index + 1}}</td>
                            <td>{{pro.penagihan_nama}}</td>
                            <td>{{pro.penagihan_paket.penagihan_paket_harga | currency}}</td>
                            <td>{{pro.penagihan_tanggal_pembayaran}}</td>
                            <td>{{pro.penagihan_dapat_fee_nama}}</td>
                            <td v-if="pro.penagihan_keterangan_fee === 'Sudah'"><span class="label label-success">
                                    {{pro.penagihan_keterangan_fee}}
                                </span></td>
                            <td v-else-if="pro.penagihan_keterangan_fee === 'Belum'"><span class="label label-danger">
                                    {{pro.penagihan_keterangan_fee}}
                                </span></td>
                            <td>{{pro.penagihan_dapat_fee_total | currency}}</td>
                            <td>
                                <div class="pull-right">
                                    <div class="dropdown  pull-left">
                                        <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                            <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                        </a>
                                        <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                <li role="presentation"><a role="menuitem" data-toggle="modal" data-target="#unlogin" v-on:click="hapuspengguna(pro._id)"><i class="icon wb-share" aria-hidden="true"></i>Konfirmasi</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <div class="modal  bs-example-modal-sm" id="unlogin" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog ">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h5 class="modal-title" id="myModalLabel">Konfirmasi Withdraw</h5>
                                    </div>
                                    <div class="modal-body">
                                        <p>Konfirmasi Pengajuan Withdraw Teknisi Ini?</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="unlogin()">Konfirmasi</button>
                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                                <!-- /.modal-content -->
                            </div>
                        </div>
                    </tbody>
                </table>
                <div class="clearfix btn-group col-md-12 offset-md-6 mt-10">
                    <JwPagination :pageSize="pageSize" :items="Filterwd" @changePage="onChangePage"></JwPagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>