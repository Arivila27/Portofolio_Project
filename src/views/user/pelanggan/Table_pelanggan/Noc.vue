<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-dark" v-if="!istoggle">Data Pelanggan Aktiv : {{M_pengguna.length}}</h6>
            </div>
            <div class="pull-right">
                <router-link to="/dashboard_pelanggan" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-arrow-left txt-light"></i>
                </router-link>
                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-replay txt-light"></i>
                </a>
                <a href="#" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-fullscreen txt-light"></i>
                </a>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div class="form-group col-md-12" style="overflow-x: scroll">
                <div class="pull-right">
                    <input type="text" class="form-control" v-model="cari" placeholder="Search">
                </div>
                <table class="table table-borderless" v-if="!istoggle" style="width: 100% !important;">
                    <thead>
                        <tr style="width: 100%;">
                            <th scope="col" width="5%">No</th>
                            <th scope="col" width="10%">Pelanggan ID</th>
                            <th scope="col" width="18%">PPOE</th>
                            <th scope="col" width="15%">Nama</th>
                            <th scope="col" width="20%">Alamat</th>
                            <th scope="col" width="12%">Bayar</th>
                            <th scope="col" width="5%">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pelanggan , index) in filterpelanggan" v-bind:key="pelanggan._id">
                            <th>{{index + 1}}</th>
                            <th>{{parseInt(pelanggan.pengguna_id)}}</th>
                            <th>{{pelanggan.pengguna_ppoe}}</th>
                            <td>{{pelanggan.pengguna_nama}}</td>
                            <td>{{pelanggan.pengguna_alamat}}</td>
                            <td>{{pelanggan.pengguna_paket.pengguna_paket_harga | currency}}</td>
                            <td>
                                <div class="pull-right">
                                    <div class="dropdown  pull-left">
                                        <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                            <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                        </a>
                                        <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                            <li role="presentation">
                                                <router-link :to="{name:'detail_pelanggan',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Detail</router-link>
                                            </li>
                                            <!-- <li role="presentation">
                                                <router-link :to="{name:'edit_pelanggan',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Ubah Data(NOC)</router-link>
                                            </li> -->
                                            <li role="presentation">
                                                <router-link :to="{name:'edit_mikrotik_pelanggan',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Cek Akses</router-link>
                                            </li>
                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="hapuspengguna(pelanggan._id,pelanggan.pengguna_status,pelanggan.pengguna_nama,pelanggan.pengguna_ppoe)"><i class="icon wb-share" aria-hidden="true"></i>Expired</a></li>
                                            <li role="presentation">
                                                <router-link :to="{name:'upgrade_pelanggan',params:{id:pelanggan._id, ppoe:pelanggan.pengguna_ppoe}}"><i class="icon wb-share" aria-hidden="true"></i>Upgrade/Downgrade</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <div class="modal fade bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog ">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h5 class="modal-title" id="myModalLabel">Expired</h5>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mb-15">{{pengguna_nama}}</h5>
                                        <p>Apakah Anda Yakin Iningin Menghapus ?</p>
                                        <input type="hidden" class="form-control" v-model="id">
                                        <input type="hidden" class="form-control" v-model="pengguna_status">
                                        <input type="hidden" class="form-control" v-model="pengguna_tanggal_nonaktif">
                                        <input type="hidden" class="form-control" v-model="createdBy">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteds1('N')">Expired</button>
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
</template>
<script src="./Service/Noc"></script>