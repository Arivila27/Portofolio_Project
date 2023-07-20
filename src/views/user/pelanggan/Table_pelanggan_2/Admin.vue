<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-light" v-if="!istoggle">Data Pelanggan Aktiv : {{M_pengguna.length}}</h6>
                <h6 class="panel-title txt-light" v-else>Data Pelanggan jatuh tempo : {{filtertempo.length}}</h6>
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
                <router-link to="/tambah_pelanggan_tukang" v-if="roleBy === 'Tukang'">
                    <a href="#" class="pull-left inline-block">
                        <i class="zmdi zmdi-file-plus txt-light"></i>
                    </a>
                </router-link>
                <router-link to="/tambah_pelanggan" v-else>
                    <a href="#" class="pull-left inline-block">
                        <i class="zmdi zmdi-file-plus txt-light"></i>
                    </a>
                </router-link>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div class="form-group col-md-12" style="overflow-x: scroll">
                <div class="pull-left">
                    <button class="btn btn-warning" @click.prevent="handletempo" v-if="!istoggle">Jatuh tempo</button>
                    <button class="btn btn-success" @click.prevent="handletempo" v-else>Semua</button> &nbsp;
                    <button class="btn btn-primary" @click.prevent="handlenonaktif" v-show="istoggle">Nonaktifkan tempo</button>
                    <button class="btn btn-danger" @click.prevent="downloadpdf" v-if="!istoggle2">PDF</button> &nbsp;
                    <button class="btn btn-success" @click.prevent="downloadexcel('table','data-pelanggan')" v-if="!istoggle2">EXCEL</button> &nbsp;
                    <button class="btn btn-primary" @click.prevent="buttontoggle2" v-if="istoggle2">PRINT</button> &nbsp;
                </div>
                <div class="pull-right">
                    <input type="text" class="form-control" v-model="cari" placeholder="Search">
                </div>
                <table class="table table-borderless" v-if="!istoggle" style="width: 100% !important;display: inline-grid;">
                    <thead style="display: flex;">
                        <tr style="width: 100%;">
                            <th scope="col" width="5%">No</th>
                            <th scope="col" width="10%">Pelanggan ID</th>
                            <th scope="col" width="8%">Status pembayaran</th>
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
                            <th v-if="!pelanggan.pengguna_status_bayar"><span class="label label-danger">Belum diset</span></th>
                            <th v-if="pelanggan.pengguna_status_bayar === 'Pascabayar'"><span class="label label-primary">{{pelanggan.pengguna_status_bayar}}</span></th>
                            <th v-if="pelanggan.pengguna_status_bayar === 'Prabayar'"><span class="label label-warning">{{pelanggan.pengguna_status_bayar}}</span></th>
                            <th>{{pelanggan.pengguna_ppoe}}</th>
                            <td>{{pelanggan.pengguna_nama}}</td>
                            <td>{{pelanggan.pengguna_alamat}}</td>
                            <td>{{pelanggan.pengguna_paket.pengguna_paket_harga | currency}}</td>
                            <td v-if="roleBy === 'Tukang'"></td>
                            <td v-else>
                                <div class="pull-right">
                                    <div class="dropdown  pull-left">
                                        <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                            <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                        </a>
                                        <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                            <li role="presentation">
                                                <router-link :to="{name:'detail_pelanggan',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Detail</router-link>
                                            </li>
                                            <li role="presentation">
                                                <router-link :to="{name:'edit_pelanggan',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Ubah Data</router-link>
                                            </li>
                                            <li role="presentation">
                                                <router-link :to="{name:'Ganti_alat',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Ganti alat</router-link>
                                            </li>
                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="hapuspengguna(pelanggan._id,pelanggan.pengguna_status,pelanggan.pengguna_nama)"><i class="icon wb-share" aria-hidden="true"></i>Hapus</a></li>
                                            <li role="presentation">
                                                <router-link :to="{name:'upgrade_pelanggan',params:{id:pelanggan._id, ppoe:pelanggan.pengguna_ppoe}}"><i class="icon wb-share" aria-hidden="true"></i>Upgrade/Downgrade</router-link>
                                            </li>
                                            <li role="presentation">
                                                <router-link :to="{name:'print_nota',params:{id:pelanggan._id}}">
                                                    <i class="icon wb-share" arian-hidden="true"></i>Print Nota
                                                </router-link>
                                            </li>
                                            <li role="presentation" v-if="roleBy === 'Finance'">
                                                <router-link :to="{name:'print_invoice',params:{id:pelanggan._id}}">
                                                    <i class="icon wb-share" arian-hidden="true"></i>
                                                    Print Invoice
                                                </router-link>
                                            </li>
                                            <li role="presentation" v-else-if="roleBy === 'Marketing'">
                                                <router-link :to="{name:'print_invoice',params:{id:pelanggan._id}}">
                                                    <i class="icon wb-share" arian-hidden="true"></i>
                                                    Print Invoice
                                                </router-link>
                                            </li>
                                            <li role="presentation" v-if="roleBy === 'Tukang'">
                                            </li>
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
                                        <h5 class="modal-title" id="myLargeModalLabel">Ubah</h5>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-12">
                                                        <label for="">ID</label>
                                                        <input type="text" class="form-control" v-model="id">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Tipe.pelanggan</label>
                                                        <multiselect v-model="pengguna_tipe_pelanggan" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="type_nama" track-by="id" :options="tipes"></multiselect>
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
                                                    <div class="form-group col-md-6">
                                                        <label for="">Tanggal Aktivasi</label>
                                                        <input type="date" class="form-control" v-model="pengguna_tanggal_pemasangan">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Lokasi Pemasangan</label>
                                                        <input type="text" class="form-control" v-model="pengguna_lokasi_pasang">
                                                    </div>
                                                    <div class="form-group col-md-12" hidden>
                                                        <label for="">Updated</label>
                                                        <input type="text" class="form-control" v-model="pengguna_updated">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">User update</label>
                                                        <input type="text" class="form-control" v-model="pengguna_user_updated" disabled>
                                                    </div>
                                                </div>
                                                <div class="row" hidden>
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Login</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-row col-md-12">
                                                        <div class="form-group col-md-6">
                                                            <label class="typo__label">Username</label>
                                                            <input type="text" class="form-control" v-model="pengguna_username">
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="">Password</label>
                                                            <input type="password" class="form-control" v-model="pengguna_password">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Pegawai Yang PSB</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-row col-md-12">
                                                        <label class="typo__label">Pilih Pegawai</label>
                                                        <multiselect v-model="pengguna_nama_psb" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="id" :options="opsi" :multiple="true"></multiselect>
                                                    </div>
                                                    <div class="form-row col-md-12">
                                                        <p>&nbsp;</p>
                                                    </div>
                                                    <br>
                                                    <div class="clearfix"></div>
                                                </div>
                                                <div class="row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Produk</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-row col-md-12">
                                                        <label class="typo__label">Pilih produk</label>
                                                        <multiselect v-model="pengguna_produk" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="item_nama" track-by="id" :options="aset" :multiple="true"></multiselect>
                                                    </div>
                                                    <div class="clearfix">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger text-left" v-on:click="updatepelanggan()">Aktifkan</button>
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
                                        <h5 class="modal-title" id="myModalLabel">Hapus / Putus</h5>
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
                                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteds1('N')">Pelanggan putus</button>
                                        <button type="button" class="btn btn-warning" data-dismiss="modal" v-on:click="deleteds(`Nonaktif`)">Pelanggan nonaktif</button>
                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                                <!-- /.modal-content -->
                            </div>
                        </div>
                    </tbody>
                </table>
                <table class="table table-borderless" v-else>
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Pelanggan ID</th>
                            <th scope="col">Status pembayaran</th>
                            <th scope="col">PPOE</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Bayar</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pelanggan , index) in filtertempo" v-bind:key="pelanggan._id">
                            <th>{{index + 1}}</th>
                            <th>{{parseInt(pelanggan.pengguna_id)}}</th>
                            <th v-if="!pelanggan.pengguna_status_bayar"><span class="label label-danger">Belum diset</span></th>
                            <th v-if="pelanggan.pengguna_status_bayar === 'Pascabayar'"><span class="label label-primary">{{pelanggan.pengguna_status_bayar}}</span></th>
                            <th v-if="pelanggan.pengguna_status_bayar === 'Prabayar'"><span class="label label-warning">{{pelanggan.pengguna_status_bayar}}</span></th>
                            <th>{{pelanggan.pengguna_ppoe}}</th>
                            <td>{{pelanggan.pengguna_nama}}</td>
                            <td>{{pelanggan.pengguna_alamat}}</td>
                            <td>{{pelanggan.pengguna_paket.pengguna_paket_harga | currency}}</td>
                            <td v-if="roleBy === 'Tukang'"></td>
                            <td v-else>
                                <div class="pull-right">
                                    <div class="dropdown  pull-left">
                                        <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                            <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                        </a>
                                        <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                            <li role="presentation">
                                                <router-link :to="{name:'detail_pelanggan',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Detail</router-link>
                                            </li>
                                            <li role="presentation">
                                                <router-link :to="{name:'edit_pelanggan',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Ubah Data</router-link>
                                            </li>
                                            <li role="presentation">
                                                <router-link :to="{name:'edit_pelanggan1',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Ubah Data(Form petak)</router-link>
                                            </li>
                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="hapuspengguna(pelanggan._id,pelanggan.pengguna_status,pelanggan.pengguna_nama)"><i class="icon wb-share" aria-hidden="true"></i>Hapus</a></li>
                                            <li role="presentation">
                                                <router-link :to="{name:'upgrade_pelanggan',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Upgrade/Downgrade</router-link>
                                            </li>
                                            <li role="presentation">
                                                <router-link :to="{name:'print_nota',params:{id:pelanggan._id}}">
                                                    <i class="icon wb-share" arian-hidden="true"></i>Upload KTP
                                                </router-link>
                                            </li>
                                            <!-- <li role="presentation">
                                                <router-link :to="{name:'print_nota',params:{id:pelanggan._id}}">
                                                    <i class="icon wb-share" arian-hidden="true"></i>Print Nota
                                                </router-link>
                                            </li> -->
                                            <!-- <li role="presentation" v-if="roleBy === 'Finance'">
                                                <router-link :to="{name:'print_invoice',params:{id:pelanggan._id}}">
                                                    <i class="icon wb-share" arian-hidden="true"></i>
                                                    Print Invoice
                                                </router-link>
                                            </li> -->
                                            <!-- <li role="presentation" v-else-if="roleBy === 'Marketing'">
                                                <router-link :to="{name:'print_invoice',params:{id:pelanggan._id}}">
                                                    <i class="icon wb-share" arian-hidden="true"></i>
                                                    Print Invoice
                                                </router-link>
                                            </li> -->
                                            <li role="presentation" v-if="roleBy === 'Tukang'">
                                            </li>
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
                                        <h5 class="modal-title" id="myLargeModalLabel">Ubah</h5>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-12">
                                                        <label for="">ID</label>
                                                        <input type="text" class="form-control" v-model="id">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Tipe.pelanggan</label>
                                                        <multiselect v-model="pengguna_tipe_pelanggan" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="type_nama" track-by="id" :options="tipes"></multiselect>
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
                                                    <div class="form-group col-md-6">
                                                        <label for="">Tanggal Aktivasi</label>
                                                        <input type="date" class="form-control" v-model="pengguna_tanggal_pemasangan">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Lokasi Pemasangan</label>
                                                        <input type="text" class="form-control" v-model="pengguna_lokasi_pasang">
                                                    </div>
                                                    <div class="form-group col-md-12" hidden>
                                                        <label for="">Updated</label>
                                                        <input type="text" class="form-control" v-model="pengguna_updated">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">User update</label>
                                                        <input type="text" class="form-control" v-model="pengguna_user_updated" disabled>
                                                    </div>
                                                </div>
                                                <div class="row" hidden>
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Login</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-row col-md-12">
                                                        <div class="form-group col-md-6">
                                                            <label class="typo__label">Username</label>
                                                            <input type="text" class="form-control" v-model="pengguna_username">
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="">Password</label>
                                                            <input type="password" class="form-control" v-model="pengguna_password">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Pegawai Yang PSB</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-row col-md-12">
                                                        <label class="typo__label">Pilih Pegawai</label>
                                                        <multiselect v-model="pengguna_nama_psb" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="id" :options="opsi" :multiple="true"></multiselect>
                                                    </div>
                                                    <div class="form-row col-md-12">
                                                        <p>&nbsp;</p>
                                                    </div>
                                                    <br>
                                                    <div class="clearfix"></div>
                                                </div>
                                                <div class="row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Produk</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-row col-md-12">
                                                        <label class="typo__label">Pilih produk</label>
                                                        <multiselect v-model="pengguna_produk" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="item_nama" track-by="id" :options="aset" :multiple="true"></multiselect>
                                                    </div>
                                                    <div class="clearfix">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger text-left" v-on:click="updatepelanggan()">Aktifkan</button>
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
                                        <h5 class="modal-title" id="myModalLabel">Hapus / Putus</h5>
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
                                        <button type="button" class="btn btn-danger" v-on:click="deleteds1('N')">Pelanggan putus</button>
                                        <button type="button" class="btn btn-warning" v-on:click="deleteds(`Nonaktif`)">Pelanggan nonaktif</button>
                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
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
                <table class="table table-borderless" v-if="!istoggle2">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Pelanggan ID</th>
                            <th scope="col">Status pembayaran</th>
                            <th scope="col">PPOE</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Bayar</th>
                            <th scope="col">Paket</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pelanggan , index) in displayedPel" v-bind:key="pelanggan._id">
                            <th>{{index + 1}}</th>
                            <th>{{parseInt(pelanggan.pengguna_id)}}</th>
                            <th v-if="!pelanggan.pengguna_status_bayar"><span class="label label-danger">Belum diset</span></th>
                            <th v-if="pelanggan.pengguna_status_bayar === 'Pascabayar'"><span class="label label-primary">{{pelanggan.pengguna_status_bayar}}</span></th>
                            <th v-if="pelanggan.pengguna_status_bayar === 'Prabayar'"><span class="label label-warning">{{pelanggan.pengguna_status_bayar}}</span></th>
                            <th>{{pelanggan.pengguna_ppoe}}</th>
                            <td>{{pelanggan.pengguna_nama}}</td>
                            <td>{{pelanggan.pengguna_alamat}}</td>
                            <td>{{pelanggan.pengguna_paket.pengguna_paket_harga | currency}}</td>
                            <td>{{pelanggan.pengguna_paket.pengguna_paket_nama}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>