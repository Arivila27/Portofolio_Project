<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-dark">Data Komplain Pelanggan</h6>
            </div>
            <div class="pull-right">
                <router-link to="/dashboard_complain" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-arrow-left"></i>
                </router-link>
                <a href="#" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-replay"></i>
                </a>
                <a href="#" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-fullscreen"></i>
                </a>
                <router-link to="/tambah_complain">
                    <a href="#" class="pull-left inline-block">
                        <i class="zmdi zmdi-file-plus"></i>
                    </a>
                </router-link>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="total-tagihan">
                                <div class="mt-15 mb-10">
                                    <span class="block font-12 weight-400">Complain Yang telah Diselesaikan</span>
                                    <span class="txt-dark block counter weight-600 font-24">{{total_complain_selesai.length}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="total-tagihan">
                                <div class="mt-15 mb-10">
                                    <span class="block font-12 weight-400">Complain Yang telah Diproses</span>
                                    <span class="txt-dark block counter weight-600 font-24">{{total_complain_proses.length}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="total-tagihan">
                                <div class="mt-15 mb-10">
                                    <span class="block font-12 weight-400">Complain Yang Belum</span>
                                    <span class="txt-dark block counter weight-600 font-24">{{total_complain_belum.length}}</span>
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
                        <label>Cari</label>
                        <input type="text" class="form-control" v-model="cari" placeholder="Search">
                    </div>
                    <div class="col-md-4">
                        <label>Status Penyelesaian</label>
                        <select class="form-control" v-model="select_status">
                            <option>Selesai</option>
                            <option>Proses</option>
                            <option>Belum</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="mt-40">
                <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Status</th>
                            <th scope="col">Keterangan Status</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Updated</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(kluhan , index) in PageofItems" v-bind:key="kluhan._id">
                            <td>{{index + 1}}</td>
                            <td v-if="kluhan.complain_penyelesaian === 'Selesai'"><label class="label label-primary">{{kluhan.complain_penyelesaian}}</label></td>
                            <td v-else-if="kluhan.complain_penyelesaian === 'Proses'"><label class="label label-warning">{{kluhan.complain_penyelesaian}}</label></td>
                            <td v-else><label class="label label-danger">{{kluhan.complain_penyelesaian}}</label></td>
                            <td><label class="label label-warning">{{kluhan.complain_keterangan_status}}</label></td>
                            <td>{{kluhan.complain_pengguna_nama}}</td>
                            <td>{{kluhan.complain_updated}}</td>
                            <td>{{kluhan.complain_pengguna_alamat}}</td>
                            <td>
                                <div class="pull-right">
                                    <div class="dropdown  pull-left">
                                        <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                            <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                        </a>
                                        <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                            <li role="presentation"><a href="javascript:void(0)" v-on:click="       hapus_pelanggan(
                                                                kluhan._id,
                                                                kluhan.complain_pengguna_nama
                                                                )" role="menuitem" data-toggle="modal" data-target="#hapusselesai"><i class="icon wb-share" aria-hidden="true"></i>Delete</a></li>
                                            <li role="presentation"><a href="javascript:void(0)" v-on:click="detail_pelanggan(kluhan)" role="menuitem" data-toggle="modal" data-target="#updateselesai"><i class="icon wb-share" aria-hidden="true"></i>Update</a></li>
                                            <!-- <li role="presentation"><a href="javascript:void(0)" v-on:click="detail_pelanggan_detail(kluhan)" role="menuitem" data-toggle="modal" data-target="#detail"><i class="icon wb-share" aria-hidden="true"></i>Detail(On-Going)</a></li> -->
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <div class="modal fade bs-example-modal-lg" tabindex="-1" id="updateselesai" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h5 class="modal-title" id="myLargeModalLabel">Edit</h5>
                                    </div>
                                    <div class="modal-body">
                                        <div class="col-md-12">
                                            <div class="form-row">
                                                <input type="text" v-model="id" hidden>
                                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                                <hr class="light-grey-hr" />
                                                <div class="form-group col-md-4">
                                                    <label for="">Nama</label>
                                                    <input type="text" class="form-control" v-model="update_data.complain_pengguna_nama">
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="">Alamat</label>
                                                    <input type="text" class="form-control" v-model="update_data.complain_pengguna_alamat">
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-8">
                                                    <label for="">Keluhan</label>
                                                    <textarea class="form-control" name="" id="" cols="5" rows="5" v-model="update_data.complain_pengguna_keluhan"></textarea>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="">Status.Penyelesaian</label>
                                                    <select name="" id="" class="form-control" v-model="update_data.complain_penyelesaian">
                                                        <option v-for="opsi in opsipenyelesaian" v-bind:key="opsi._id">{{opsi.kode}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Pegawai Yang Menangani</h6>
                                                    <hr class="light-grey-hr" />
                                                    <label class="typo__label">Pilih Pegawai</label>
                                                    <multiselect v-model="update_data.complain_penangan" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="id" :options="options" :multiple="true" :taggable="true"></multiselect>
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="">Masalah</label>
                                                    <textarea class="form-control" cols="10" rows="5" v-model="update_data.complain_masalah"></textarea>
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="">Notice</label>
                                                    <textarea class="form-control" cols="10" rows="5" v-model="update_data.complain_notice"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary text-left" v-on:click="tangani()" data-dismiss="modal">Ubah</button>
                                        <button type="button" class="btn btn-danger text-left" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                                <!-- /.modal-content -->
                            </div>
                            <!-- /.modal-dialog -->
                        </div>
                        <!-- Modal Detail -->
                        
                        <!-- ---- -->
                        <div class="modal fade bs-example-modal-sm" id="hapusselesai" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog ">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h5 class="modal-title" id="myModalLabel">Modal Heading</h5>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mb-15">{{complain_pengguna_nama}}</h5>
                                        <p>Apakah Anda Yakin Iningin Menghapus ?</p>
                                        <input type="hidden" class="form-control" v-model="id">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteds()">Iya</button>
                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                                <!-- /.modal-content -->
                            </div>
                        </div>
                    </tbody>
                </table>
                <div class="clearfix btn-group col-md-12 offset-md-6 mt-10">
                    <JwPagination :pageSize="pageSize" :items="FilterComplain" @changePage="onChangePage"></JwPagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>