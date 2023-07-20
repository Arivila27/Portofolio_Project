<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-dark">Data Pelanggan Baru : {{M_pengguna.length}}</h6>
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
                <router-link to="/tambah_pelanggan">
                    <a href="#" class="pull-left inline-block">
                        <i class="zmdi zmdi-file-plus"></i>
                    </a>
                </router-link>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div class="form-group col-md-12" style="overflow-x: scroll">
                <div class="pull-right">
                    <input type="text" class="form-control" v-model="cari" placeholder="Search">
                </div>
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Pelanggan ID</th>
                            <th scope="col">PPOE</th>
                            <th scope="col">Status</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pelanggan , index) in filterpelanggan" v-bind:key="pelanggan._id">
                            <th>{{index + 1}}</th>
                            <th>{{pelanggan.pengguna_id}}</th>
                            <th>{{pelanggan.pengguna_ppoe}}</th>
                            <th><span class="label label-warning">Baru</span></th>
                            <td>{{pelanggan.pengguna_nama}}</td>
                            <td>{{pelanggan.pengguna_alamat}}</td>
                            <td>
                                <div class="pull-right">
                                    <div class="dropdown  pull-left">
                                        <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                            <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                        </a>
                                        <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target="#aktifkan" v-on:click="detailpengguna(pelanggan._id,pelanggan.pengguna_ppoe,pelanggan.pengguna_paket.pengguna_paket_nama)"><i class="icon wb-share" aria-hidden="true"></i>Aktifkan</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <div class="modal fade bs-example-modal-sm" id="aktifkan" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog ">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h5 class="modal-title" id="myModalLabel">Aktifkan</h5>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mb-15"></h5>
                                        <div class="form-group col-md-12">
                                            <label for="inputname">PPOE(*Catatan:Semua Inputan di-bawah harus sesuai dengan Mikrotik)</label>
                                            <input type="text" class="form-control" id="inputname" v-model="detail.pengguna_ppoe" placeholder="Nama" disabled>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label>Pilih Host</label>
                                            <!-- <input type="text" class="form-control" v-model="winbox.pengguna_host"> -->
                                            <!--  <select class="form-control" v-model="pilih_host">
                                                <option v-for="host in M_host">{{host}}</option>
                                            </select> -->
                                            <multiselect v-model="pilih_host" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="host" track-by="_id" :options="M_host" :taggable="true"></multiselect>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Host</label>
                                            <input type="text" class="form-control" v-model="pilih_host.host" disabled>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Port</label>
                                            <input type="text" class="form-control" v-model="pilih_host.port" disabled>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>User Winbox</label>
                                            <input type="text" class="form-control" v-model="pilih_host.user_winbox" disabled>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Password Winbox</label>
                                            <input type="password" class="form-control" v-model="pilih_host.password_winbox" disabled>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label>Password PPOE</label>
                                            <input type="password" class="form-control" v-model="winbox.pengguna_ppoe_password">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Local Address</label>
                                            <input type="text" class="form-control" v-model="winbox.pengguna_local_address">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Remote Address</label>
                                            <input type="text" class="form-control" v-model="winbox.pengguna_remote_address">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-warning" data-dismiss="modal" v-on:click="aktifkan">Aktifkan</button>
                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>