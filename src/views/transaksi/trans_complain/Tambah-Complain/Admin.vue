<template>
    <div>
        <h1><b>Tambah complain</b></h1>
        <div class="tab-content mt-5">
            <div id="internet" class="tab-pane fade in active">
                <h3>&nbsp;</h3>
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6>Tambah data complain</h6>
                    </div>
                    <div class="clearfix"></div>
                    <div class="panel-wrapper collapse in">
                        <div class="panel-body">
                            <div class="form-wrap">
                                <div class="col-md-12 text-center">
                                    <button class="btn btn-primary text-center" data-toggle="modal" data-target=".bd-example-modal-lg" style="text-align:center;">
                                        Buka List Pelanggan
                                    </button>
                                    <div class="clearfix">
                                        <br>
                                    </div>
                                    <div class="modal fade bd-example-modal-lg" tabindex="-1" id="list_pelanggan" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myLargeModalLabel">Pelanggan</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15">Pelanggan</h5>
                                                    <div class="col-md-12">
                                                        <div class="panel panel-default card-view panel-refresh">
                                                            <div class="refresh-container">
                                                                <div class="la-anim-1"></div>
                                                            </div>
                                                            <div class="panel-heading">
                                                                <div class="pull-left">
                                                                    <h6 class="panel-title txt-dark">List Pelanggan</h6>
                                                                </div>
                                                                <div class="pull-right">
                                                                    <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                                                        <i class="zmdi zmdi-replay"></i>
                                                                    </a>
                                                                    <a href="#" class="pull-left inline-block full-screen mr-15">
                                                                        <i class="zmdi zmdi-fullscreen"></i>
                                                                    </a>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </div>
                                                            <div class="panel-body">
                                                                <div class="form-group col-md-12">
                                                                    <div class="pull-right">
                                                                        <input type="text" class="form-control" v-model="mencari" placeholder="Search">
                                                                    </div>
                                                                </div>
                                                                <table class="table table-borderless">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">No</th>
                                                                            <th scope="col">Nama</th>
                                                                            <th scope="col">Alamat</th>
                                                                            <th scope="col">PPOE</th>
                                                                            <th scope="col">Pilih</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr v-for="(user, index) in filterpelanggan.slice(0,5)">
                                                                            <th>{{index + 1}}</th>
                                                                            <th>{{user.pengguna_nama}}</th>
                                                                            <td>{{user.pengguna_alamat}}</td>
                                                                            <td>{{user.pengguna_ppoe}}</td>
                                                                            <td><button class="btn btn-primary" v-on:click="pilihpelanggan(user._id,user.pengguna_nama,user.pengguna_alamat,user.pengguna_ppoe)">Pilih</button></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger text-left" v-on:click="updatepelanggan()">Ubah</button>
                                                    <button type="button" class="btn btn-danger text-left" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                        <!-- /.modal-dialog -->
                                    </div>
                                    <form @submit.prevent="addcomplain">
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label for="">Nama Pelanggan</label>
                                                <input type="text" class="form-control" disabled v-model="pengguna_nama">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Alamat</label>
                                                <input type="text" class="form-control" disabled v-model="pengguna_alamat">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">PPOE</label>
                                                <input type="text" class="form-control" disabled v-model="pengguna_ppoe">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="">Keluhan</label>
                                                <textarea name="" id="" cols="30" rows="10" class="form-control" v-model="pengguna_keluhan"></textarea>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Notice</label>
                                                <textarea cols="30" rows="10" v-model="pengguna_notice" class="form-control">
                                                        </textarea>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <button type="submit" class="btn btn-success">Tambah</button>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <button class="btn btn-succes">
                                                    <router-link to="/dashboard_complain">Kembali</router-link>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Admin"></script>