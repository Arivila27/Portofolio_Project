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
                                <h6 class="panel-title txt-dark">Data pelanggan nonaktif : {{M_pengguna.length}}</h6>
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
                                        <th scope="col">Pengguna ID</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Tanggal(Nonaktif)</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(pelanggan , index) in filterpelanggan" v-bind:key="pelanggan._id">
                                        <th>{{index + 1}}</th>
                                        <td>{{pelanggan.pengguna_id}}</td>
                                        <td><span class="label label-danger">Tidak Aktif</span></td>
                                        <td>{{pelanggan.pengguna_nama}}</td>
                                        <td>{{pelanggan.pengguna_alamat}}</td>
                                        <td>{{pelanggan.pengguna_tanggal_nonaktif}}</td>
                                        <td v-if="$store.getters.role === 'Tukang'"></td>
                                        <td v-else>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg" v-on:click="detail_pelanggan(pelanggan._id,pelanggan.pengguna_nama,pelanggan.pengguna_alamat,pelanggan.pengguna_jenis_kelamin,pelanggan.pengguna_no_telepon,pelanggan.pengguna_no_ktp,pelanggan.pengguna_no_npwp,pelanggan.pengguna_ppoe,pelanggan.pengguna_tanggal_pemasangan,pelanggan.pengguna_lokasi_pasang,pelanggan.pengguna_paket)"><i class="icon wb-reply" aria-hidden="true"></i>Update</a></li>
                                                        <!--  <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="hapuspengguna(pelanggan._id,pelanggan.pengguna_status)"><i class="icon wb-share" aria-hidden="true" disabled></i>Delete</a></li> -->
                                                        <li role="presentation">
                                                            <router-link :to="{name:'detail_pelanggan',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Detail</router-link>
                                                        </li>
                                                        <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="hapuspengguna(pelanggan._id,pelanggan.pengguna_nama,pelanggan.pengguna_status)"><i class="icon wb-share" aria-hidden="true"></i>Aktifkan</a></li>
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
                                                    <h5 class="modal-title" id="myLargeModalLabel">Edit</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15">Edit Data</h5>
                                                    <div class="col-md-12">
                                                        <div class="row">
                                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                                            <hr class="light-grey-hr" />
                                                            <div class="form-group col-md-12">
                                                                <label for="">ID</label>
                                                                <input type="text" class="form-control" v-model="id">
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
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-4">
                                                                <label for="upo">Data Pelanggan Updated</label>
                                                                <input type="date" id="upo" class="form-control" v-model="pengguna_updated">
                                                            </div>
                                                            <div class="form-group col-md-4">
                                                                <label for="upl">Pelanggan Created</label>
                                                                <input type="date" id="upl" class="form-control" v-model="pengguna_created">
                                                            </div>
                                                            <div class="form-group col-md-4">
                                                                <label for="">User Updated</label>
                                                                <input type="text" class="form-control" v-model="pengguna_user_updated">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>KTP Dan NPWP</h6>
                                                            <hr class="light-grey-hr" />
                                                            <div class="form-group col-md-6">
                                                                <label for="">No.KTP</label>
                                                                <input type="number" class="form-control" v-model="pengguna_no_ktp">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="">Upload KTP</label>
                                                                <input type="file" class="form-control">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="">No.NPWP</label>
                                                                <input type="number" class="form-control" v-model="pengguna_no_npwp">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="">Upload NPWP</label>
                                                                <input type="file" class="form-control">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Produk Dipakai</h6>
                                                            <hr class="light-grey-hr" />
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
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-12">
                                                                <label for="">Paket</label>
                                                                <input type="text" class="form-control" v-model="pengguna_paket">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger text-left" v-on:click="updatepelanggan()" data-dismiss="modal">Ubah</button>
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
                                                    <p>Apakah Anda Yakin Ingin Mengaktifkan ?</p>
                                                    <input type="hidden" class="form-control" v-model="id">
                                                    <input type="hidden" class="form-control" v-model="pengguna_status">
                                                    <input type="hidden" class="form-control" v-model="pengguna_aktiv_kembali">
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
                            <!-- <div class="clearfix btn-group col-md-6 offset-md-5">
                                <button type="button" class="btn btn-sm btn-success" v-if="page != 1" @click="page--">Previous</button>
                                <button type="button" class="btn btn-sm btn-success" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" v-bind:key="pageNumber"> {{pageNumber}}
                                </button>
                                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-success"> NEXT </button>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>
<script src="./Service/pelanggan_nonaktif.js"></script>