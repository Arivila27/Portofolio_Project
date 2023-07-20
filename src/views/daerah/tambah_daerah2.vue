<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Tambah Daerah</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="addCabang">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-11">
                                                        <label for="inputname">Provinsi</label>
                                                        <input type="text" class="form-control" id="inputname">
                                                    </div>
                                                    <div class="form-group col-md-1">
                                                        <br>
                                                        <a class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm-1"><i class="fa fa-plus"></i></a>
                                                        <div class="modal fade bs-example-modal-sm-1" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                                            <div class="modal-dialog ">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                                        <h5 class="modal-title" id="myModalLabel">Tambah provinsi</h5>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <h5 class="mb-15"></h5>
                                                                        <label>Nama provinsi</label>
                                                                        <input type="text" name="" class="form-control" v-model="provinsi_modal.nama_provinsi">
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success" data-dismiss="modal" @click.prevent="addProvinsi">Tambah</button>
                                                                        <button type="button" class="btn btn-info" data-dismiss="modal">Tutup</button>
                                                                    </div>
                                                                </div>
                                                                <!-- /.modal-content -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-11">
                                                        <label for="">Kabupaten</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    <div class="form-group col-md-1">
                                                        <br>
                                                        <a class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm-2"><i class="fa fa-plus"></i></a>
                                                        <div class="modal fade bs-example-modal-sm-2" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                                            <div class="modal-dialog ">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                                        <h5 class="modal-title" id="myModalLabel">Tambah Kabupaten</h5>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <h5 class="mb-15"></h5>
                                                                        <div class="form-row">
                                                                            <div class="form-group col-md-12">
                                                                                <label>Provinsi</label>
                                                                                <!-- <multiselect v-model="pilih_provinsi" :options="provinsi" placeholder="Pilih salah satu"></multiselect> -->
                                                                                <select class="form-control" v-model="kabupaten_modal.pilih_provinsi">
                                                                                    <option v-for="(provinsinya, index) in list_provinsi">{{provinsinya.provinsi}}</option>
                                                                                </select>
                                                                            </div>
                                                                            <div class="form-group col-md-12">
                                                                                <label>Nama Kabupaten</label>
                                                                                <input type="text" name="" class="form-control" v-model="kabupaten_modal.nama_kabupaten">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success" data-dismiss="modal" @click.prevent="addKabupaten">Tambah</button>
                                                                        <button type="button" class="btn btn-info" data-dismiss="modal">Tutup</button>
                                                                    </div>
                                                                </div>
                                                                <!-- /.modal-content -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-11">
                                                        <label for="inputname">Kecamatan</label>
                                                        <input type="text" class="form-control" id="inputname">
                                                    </div>
                                                    <div class="form-group col-md-1">
                                                        <br>
                                                        <a class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm-3"><i class="fa fa-plus"></i></a>
                                                        <div class="modal fade bs-example-modal-sm-3" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                                            <div class="modal-dialog ">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                                        <h5 class="modal-title" id="myModalLabel">Tambah Kecamatan</h5>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <div class="form-row">
                                                                            <div class="form-group col-md-12">
                                                                                <label>Provinsi</label>
                                                                                <select class="form-control" v-model="kecamatan_modal.pilih_provinsi">
                                                                                    <option v-for="(provinsinya, index) in list_provinsi">{{provinsinya.provinsi}}</option>
                                                                                </select>
                                                                            </div>
                                                                            <div class="form-group col-md-12">
                                                                                <label>Kabupaten</label>
                                                                                <select class="form-control" v-model="kecamatan_modal.pilih_kabupaten">
                                                                                    <option v-for="(kabupatennya, index) in list_kabupaten">{{provinsinya.kabupaten}}</option>
                                                                                </select>
                                                                            </div>
                                                                            <div class="form-group col-md-12">
                                                                                <label>Nama Kabupaten</label>
                                                                                <input type="text" name="" class="form-control" v-model="kecamatan_modal.nama_kabupaten">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success" data-dismiss="modal" @click.prevent="addKecamatan">Tambah</button>
                                                                        <button type="button" class="btn btn-info" data-dismiss="modal">Tutup</button>
                                                                    </div>
                                                                </div>
                                                                <!-- /.modal-content -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="panel panel-default card-view panel-refresh col-md-12">
                                                        <div class="refresh-container">
                                                            <div class="la-anim-1"></div>
                                                        </div>
                                                        <div class="panel-heading">
                                                            <div class="pull-left">
                                                                <h6 class="panel-title txt-dark">Desa/Kelurahan</h6>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                        <div class="panel-body">
                                                            <table class="table table-borderless">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">No</th>
                                                                        <th scope="col">Nama Desa/Kelurahan</th>
                                                                        <th scope="col">Aksi</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="(desanya,k) in daerah_desa" :key="k">
                                                                        <th>{{k + 1}}</th>
                                                                        <td><input type="text" class="form-control" v-model="desanya.desa"></td>
                                                                        <td><button class="btn btn-danger btn-sm" @click.prevent="removedesa(k)" v-show="k || ( !k &&  daerah_desa.length > 1)"><i class="fa fa-minus"></i></button></td>
                                                                        <td><button class="btn btn-primary btn-sm" @click.prevent="adddesa(k)" v-show="k == daerah_desa.length-1"><i class="fa fa-plus"></i></button></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit" @click.prevent="addDaerah">Tambah</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/daerah">
                                                            Kembali
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-footer">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/tambah_daerah"></script>