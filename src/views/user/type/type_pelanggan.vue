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
                                <h6 class="panel-title txt-dark">Tipe Pelanggan</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/dashboard_pelanggan" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left"></i>
                                </router-link>
                                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-replay"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen"></i>
                                </a>
                                <router-link v-if="" to="/tambah_type_pelanggan">
                                    <a href="#" class="pull-left inline-block">
                                        <i class="zmdi zmdi-file-plus"></i>
                                    </a>
                                </router-link>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div class="form-group col-md-12">
                                <div class="pull-right">
                                    <input type="text" class="form-control" v-model="cari" placeholder="Search">
                                </div>
                            </div>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Kode Tipe</th>
                                        <th scope="col">Nama Type</th>
                                        <th scope="col">Tanggal masuk</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(tipe,index) in FilterTipe" :key="tipe._id">
                                        <th>{{index + 1}}</th>
                                        <td>{{tipe.pembantu_tipe_kode}}</td>
                                        <td v-if="tipe.pembantu_tipe_status === 'Aktiv'"><span class="label label-primary">{{tipe.pembantu_tipe_status}}</span></td>
                                        <td v-else-if="tipe.pembantu_tipe_status === 'Nonaktif'"><span class="label label-warning">{{tipe.pembantu_tipe_status}}</span></td>
                                        <td>{{tipe.pembantu_tipe_nama}}</td>
                                        <td>{{tipe.pembantu_tipe_created}}</td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation">
                                                            <router-link :to="{name:'edit_type_pelanggan',params:{id:tipe._id}}" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-reply" aria-hidden="true"></i>Edit</router-link>
                                                        </li>
                                                        <li role="presentation"><a href="javascript:void(0)" @click="detail(tipe)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-reply" aria-hidden="true"></i>Detail</a></li>
                                                        <li role="presentation"><a href="javascript:void(0)" @click="detail(tipe)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="icon wb-share" aria-hidden="true"></i>Hapus</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <div class="modal fade bs-example-modal-lg" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog ">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myModalLabel">Detail tipe</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15"></h5>
                                                    <div class="row">
                                                        <div class="form-group col-md-6 text-center">
                                                            <h6>Nama type</h6>
                                                            <h6>Kode type</h6>
                                                            <h6>Dibuat pada tanggal</h6>
                                                            <h6>Diupdate pada tanggal</h6>
                                                            <h6>User yang membuat</h6>
                                                        </div>
                                                        <div class="form-group col-md-6 pull-left">
                                                            <h6>: {{tipes.pembantu_tipe_nama}}</h6>
                                                            <h6>: {{tipes.pembantu_tipe_kode}}</h6>
                                                            <h6>: {{tipes.pembantu_tipe_created}}</h6>
                                                            <h6>: {{tipes.pembantu_tipe_updated}}</h6>
                                                            <h6>: {{tipes.pembantu_tipe_user_updated}}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                    </div>
                                    <div class="modal fade bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog ">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myModalLabel">Modal Heading</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15"></h5>
                                                    <p>Apakah Anda Yakin Ingin Menghapus {{tipes.pembantu_tipe_nama}} ?</p>
                                                    <input type="hidden" class="form-control" v-model="tipes._id">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/type_pelanggan"></script>