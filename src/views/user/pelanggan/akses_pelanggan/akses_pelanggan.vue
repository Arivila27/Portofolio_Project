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
                                <h6 class="panel-title txt-light">Akses Pelanggan</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/dashboard_pelanggan" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left txt-light"></i>
                                </router-link>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen txt-light"></i>
                                </a>
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
                                        <th scope="col">Pelanggan ID</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">No.Telepon</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(pelanggan,index) in Filterdata" :key="pelanggan._id">
                                        <th>{{index + 1}}</th>
                                        <th>{{pelanggan.pengguna_id}}</th>
                                        <td>{{pelanggan.pengguna_nama}}</td>
                                        <td>{{pelanggan.pengguna_no_telepon}}</td>
                                        <td>{{pelanggan.pengguna_password}}</td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation"><a role="menuitem" data-toggle="modal" data-target="#unlogin" v-on:click="hapuspengguna(pelanggan._id,pelanggan.pengguna_nama,pelanggan.pengguna_noc_keterangan)"><i class="icon wb-share" aria-hidden="true"></i>Aktivasi Login</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- <div class="modal  bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog ">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myModalLabel">Hapus</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15">{{pengguna_nama}}</h5>
                                                    <p>Apakah Anda Yakin Iningin Menghapus ?</p>
                                                    <input type="hidden" class="form-control" v-model="id">
                                                    <input type="hidden" class="form-control" v-model="pengguna_status">
                                                </div>
                                                <div class="modal-footer">
                                                    <router-link :to="{name:'pelanggan_akan_mati'}">
                                                        <button v-if="pengguna_noc_keterangan === 'Pelanggan akan nonaktif'" type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteds()">Iyaaaa</button>
                                                        <button v-else type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteds1()">Iya</button>
                                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                    </router-link>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div> -->
                                    <div class="modal  bs-example-modal-sm" id="unlogin" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog ">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myModalLabel">Aktivasi</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15">{{pengguna_nama}}</h5>
                                                    <p>Aktivasi Login Pengguna Ini?</p>
                                                    <input type="hidden" class="form-control" v-model="id">
                                                    <input type="hidden" class="form-control" v-model="pengguna_status">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="unlogin()">Iya</button>
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
<script src="./Service/akses_pelanggan.js"></script>