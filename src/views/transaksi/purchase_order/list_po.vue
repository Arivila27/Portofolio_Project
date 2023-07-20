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
                                <h6 class="panel-title txt-dark">Purchase Order</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/penagihan" v-on:click="getdata()" class="pull-left inline-block back mr-15">
                                    <i class="zmdi zmdi-arrow-left"></i>
                                </router-link>
                                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-replay"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen"></i>
                                </a>
                                <router-link to="tambah_trpo" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-file-plus"></i>
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
                                        <th scope="col">Atas Nama</th>
                                        <th scope="col">Tanggal <br>transaksi</th>
                                        <th scope="col">Status tiba</th>
                                        <th scope="col">Status routing</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(invo,index) in Filterpo" :key="invo._id">
                                        <th>{{index + 1}}</th>
                                        <td>{{invo.po_pelanggan}}</td>
                                        <td>{{invo.po_tempo}}</td>
                                        <td v-if="invo.po_status_tiba === 'Y'"><span class="label label-primary">Sudah tiba</span></td>
                                        <td v-else><span class="label label-danger">Belom tiba</span></td>
                                        <td v-if="invo.po_status_routing === 'Y'"><span class="label label-primary">Sudah Routing</span></td>
                                        <td v-else><span class="label label-danger">Belom Routing</span></td>
                                        <td v-if="invo.po_status_routing === 'N'">
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td v-else>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation">
                                                            <router-link :to="{name:'detail_trpo',params:{id:invo._id}}" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-share" aria-hidden="true"></i>Detail</router-link>
                                                        </li>
                                                        <li role="presentation"><a href="javascript:void(0)" v-on:click="hapus(invo._id,invo.po_status)" role="menuitem" data-toggle="modal" data-target="#hapus"><i class="icon wb-share" aria-hidden="true"></i>Hapus</a></li>
                                                        <li v-if="invo.po_status_bayar =='Sudah'" role="presentation"><a v-on:click="belum(invo._id,invo.po_status_bayar)" href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target="#belum"><i class="icon wb-share" aria-hidden="true"></i>Belum</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- untuk hapus -->
                                            <div class="modal fade" id="hapus" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            Apakah yakin dihapus ?
                                                            <div class="form-group col-md-12" hidden>
                                                                <label for="">ID</label>
                                                                <input type="text" class="form-control" v-model="hapus_id">
                                                            </div>
                                                            <div class="form-group col-md-12" hidden>
                                                                <label for="">Status</label>
                                                                <input type="text" class="form-control" v-model="hapus_status">
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-danger" @click="gethapus">Ya!</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- untuk lunas -->
                                            <div class="modal fade" id="lunas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            Apakah Sudah Lunas ?
                                                            <div class="form-group col-md-6" hidden><label for="">id</label><input type="text" class="form-control" v-model="lunas_id"></div>
                                                            <div class="form-group col-md-6" hidden><label for="">Status bayar</label>
                                                                <input type="text" class="form-control" v-model="lunas_status"></div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-success" @click="getlunas">Lunas</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- untuk Belum lunas -->
                                            <div class="modal fade" id="belum" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            Apakah Sudah Lunas ?
                                                            <div class="form-group col-md-6" hidden><label for="">id</label><input type="text" class="form-control" v-model="lunas_id"></div>
                                                            <div class="form-group col-md-6" hidden><label for="">Status bayar</label>
                                                                <input type="text" class="form-control" v-model="lunas_status"></div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary" @click="getbelum">Update</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
    </div>
</template>
<script src="./Service/list_po"></script>