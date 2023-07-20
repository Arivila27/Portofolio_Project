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
                                <h6 class="panel-title txt-dark">Pengeluaran</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/trkasbank" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left"></i>
                                </router-link>
                                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-replay"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen"></i>
                                </a>
                                <router-link to="/tambah_pengeluaran">
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
                                        <th scope="col">Tanggal</th>
                                        <th scope="col">No.Referensi</th>
                                        <th scope="col">Diajukan <br> Oleh</th>
                                        <th scope="col">Diketahui <br>Oleh</th>
                                        <th scope="col">Disetujui <br>Oleh</th>
                                        <th scope="col">Deskripsi</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(pengeluaran,index) in pengeluaran" :key="pengeluaran._id">
                                        <th>{{index + 1}}</th>
                                        <td>{{pengeluaran.pengeluaran_tanggal}}</td>
                                        <td>{{pengeluaran.pengeluaran_no}}</td>
                                        <td>{{pengeluaran.pengeluaran_diajukan.pengguna_nama}}</td>
                                        <td>{{pengeluaran.pengeluaran_diketahui.pengguna_nama}}</td>
                                        <td>{{pengeluaran.pengeluaran_disetujui.pengguna_nama}}</td>
                                        <td>{{pengeluaran.pengeluaran_deskripsi}}</td>
                                        <td></td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation">
                                                            <router-link :to="{name:'edit_pengeluaran',params:{id:pengeluaran._id}}" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-reply" aria-hidden="true"></i>Update</router-link>
                                                        </li>
                                                        <li role="presentation">
                                                            <router-link :to="{name:'pengeluaran_invoice',params:{id:pengeluaran._id}}" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-reply" aria-hidden="true"></i>Invoice</router-link>
                                                        </li>
                                                        <li role="presentation"><a href="javascript:void(0)" @click="detail(pengeluaran)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="icon wb-share" aria-hidden="true"></i>Hapus</a></li>
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
                                                    <h5 class="modal-title" id="myModalLabel">Hapus Departmen</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15"></h5>
                                                    <p>Apakah Anda Yakin Ingin Menghapus <b>{{selectedPengeluaran.pengeluaran_no}}</b> ?</p>
                                                    <input type="hidden" class="form-control" v-model="selectedPengeluaran._id">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteds">Iya</button>
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
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>
<script src="./Service/pengeluaran"></script>