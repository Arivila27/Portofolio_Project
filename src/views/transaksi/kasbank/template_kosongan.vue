<template>
    <div class="pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="jumbotron">
                            <h1 class="display-4">Hello, world!</h1>
                            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr class="my-4">
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <router-link to="/dashboard_pelanggan">
                                <a class="btn btn-danger btn-lg" role="button">Back</a>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="panel panel-info card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-light">panel info</h6>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="panel panel-info card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-light">panel info</h6>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="panel panel-info card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-light">panel info</h6>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <h6 class="panel-title txt-dark">Data Pelanggan</h6>
                            </div>
                            <div class="pull-right">
                                <a href="#"  class="pull-left inline-block refresh mr-15">
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
                                    <input type="text" class="form-control" v-model="cari" placeholder="Search">
                                </div>
                            </div>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-share" aria-hidden="true"></i>Update</a></li>
                                                        <!--  <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="hapuspengguna(pelanggan._id,pelanggan.pengguna_status)"><i class="icon wb-share" aria-hidden="true" disabled></i>Delete</a></li> -->
                                                       <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-share" aria-hidden="true"></i>Detail</a></li>
                                                        <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="icon wb-share" aria-hidden="true"></i>Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                      <div class="modal fade bs-example-modal-lg" tabindex="-1" id="update" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myLargeModalLabel">Aktifkan</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <form>
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                                                <hr class="light-grey-hr" />
                                                                <div class="form-group col-md-12">
                                                                    <label for="">ID</label>
                                                                    <input type="text" class="form-control" v-model="_id">
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label for="">Divisi</label>
                                                                <multiselect v-model="pengguna_departmen_group" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pembantu_nama" track-by="_id" :options="opsi" :multiple="true" :taggable="true" @tag="addTag"></multiselect>    
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="to">Nama</label>
                                                                    <input type="text" class="form-control" id="to" v-model="pengguna_nama">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="yng_update">Alamat</label>
                                                                    <input type="text" class="form-control" v-model="pengguna_alamat">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="">Jenis Kelamin</label>
                                                                    <select name="" class="form-control" id="" v-model="pengguna_jenis_kelamin">
                                                                        <option value="Laki-Laki">Laki-Laki</option>
                                                                        <option value="Perempuan">Perempuan</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="">No.Telepon</label>
                                                                    <input type="number" class="form-control" v-model="pengguna_no_telepon">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="">No.KTP</label>
                                                                    <input type="number" class="form-control" v-model="pengguna_no_ktp">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="">PPOE</label>
                                                                    <input type="text" class="form-control" v-model="pengguna_ppoe">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="">Tanggal Aktivasi</label>
                                                                    <input type="date" class="form-control" v-model="pengguna_tanggal_pemasangan">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="">Lokasi Pemasangan</label>
                                                                    <input type="text" class="form-control" v-model="pengguna_lokasi_pasang">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="">Paket</label>
                                                                    <input type="text" class="form-control" v-model="pengguna_paket">
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Pegawai Yang PSB</h6>
                                                                <hr class="light-grey-hr" />
                                                                <div class="form-row col-md-12">
                                                                <label class="typo__label">Pilih Pegawai</label>
                                                                <multiselect v-model="pengguna_nama_psb" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                                                </div>
                                                                <div class="form-row col-md-12">
                                                                    <p>&nbsp;</p>
                                                                </div>
                                                                <br>
                                                                <div class="clearfix"></div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger text-left">Ubah</button>
                                                    <button type="button" class="btn btn-danger text-left" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                        <!-- /.modal-dialog -->
                                    </div>
                                    <div class="modal fade bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog ">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myModalLabel">Modal Heading</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15">{{pengguna_nama}}</h5>
                                                    <p>Apakah Anda Yakin Iningin Menghapus ?</p>
                                                    <input type="hidden" class="form-control" v-model="_id">
                                                    <input type="hidden" class="form-control" v-model="pengguna_status">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Iya</button>
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
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
    </div>
</template>