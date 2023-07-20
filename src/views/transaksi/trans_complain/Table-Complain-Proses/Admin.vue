<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-dark">Data Complains Proses</h6>
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
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div class="pull-right">
                <input type="text" class="form-control" v-model="cari" placeholder="Cari">
            </div>
            <div class="col-md-12">
                <div class="clearfix">
                    <br>
                </div>
            </div>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Alamat</th>
                        <th scope="col">PPOE</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(kluhan , index) in FilterComplain" v-bind:key="kluhan._id">
                        <th>{{index + 1}}</th>
                        <th>{{kluhan.complain_pengguna_nama}}</th>
                        <td>{{kluhan.complain_pengguna_alamat}}</td>
                        <td>{{kluhan.complain_pengguna_ppoe}}</td>
                        <td>
                            <div class="pull-right">
                                <div class="dropdown  pull-left">
                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                    </a>
                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                        <li role="presentation"><a v-on:click="hereki(kluhan._id,kluhan.complain_status,kluhan.complain_pengguna_nama)" href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="icon wb-share" aria-hidden="true"></i>Delete</a></li>
                                        <li role="presentation"><a href="javascript:void(0)" v-on:click="detail_pelanggan(kluhan._id,kluhan.complain_pengguna_nama,kluhan.complain_pengguna_alamat,kluhan.complain_pengguna_ppoe,kluhan.complain_pengguna_keluhan,kluhan.complain_penyelesaian,kluhan.complain_yang_menangani.complain_penangan_nama,kluhan.complain_pengguna_notice)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-share" aria-hidden="true"></i>Tangani</a></li>
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
                                    <h5 class="modal-title" id="myLargeModalLabel">Tangani</h5>
                                </div>
                                <div class="modal-body">
                                    <div class="col-md-12">
                                        <div class="form-row">
                                            <input type="text" v-model="id" hidden>
                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                            <hr class="light-grey-hr" />
                                            <div class="form-group col-md-4">
                                                <label for="">Nama</label>
                                                <input type="text" class="form-control" v-model="complain_pengguna_nama" disabled>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Alamat</label>
                                                <input type="text" class="form-control" v-model="complain_pengguna_alamat" disabled>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">PPOE</label>
                                                <input type="text" class="form-control" v-model="complain_pengguna_ppoe" disabled>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-8">
                                                <label for="">Keluhan</label>
                                                <input class="form-control" type="text" v-model="complain_pengguna_keluhan">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Status.Penyelesaian</label>
                                                <select name="" id="" class="form-control" v-model="complain_penyelesaian">
                                                    <option v-for="opsi in opsipenyelesaian" v-bind:key="opsi._id">{{opsi.kode}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group">
                                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Pegawai Yang Menangani</h6>
                                                <hr class="light-grey-hr" />
                                                <label class="typo__label">Pilih Pegawai</label>
                                                <multiselect v-model="complain_penangan" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="id" :options="options" :multiple="true" :taggable="true"></multiselect>
                                            </div>
                                            <div class="form-group col-md12">
                                                <label for="">Catatan</label>
                                                <textarea class="form-control" v-model="complain_notice" cols="5" rows="10"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger text-left" data-dismiss="modal" v-on:click="tangani()">Ubah</button>
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
                                    <h5 class="mb-15">{{complain_pengguna_nama}}</h5>
                                    <p>Apakah Anda Yakin Iningin Menghapus ?</p>
                                    <input type="hidden" class="form-control" v-model="id">
                                    <input type="hidden" class="form-control" v-model="complain_status">
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
            <div class="clearfix btn-group col-md-6 offset-md-5">
                <button type="button" class="btn btn-sm btn-success" v-if="page != 1" @click="page--">
                    Previous</button> <button type="button" class="btn btn-sm btn-success" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" v-bind:key="pageNumber"> {{pageNumber}}
                </button>
                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-success"> NEXT </button>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Admin"></script>