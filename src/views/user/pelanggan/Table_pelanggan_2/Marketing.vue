<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-light">Pelanggan</h6>
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
            <div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="total-tagihan">
                                <div class="mt-15 mb-10">
                                    <span class="block font-12 weight-400">Pelanggan Yang Difilter:</span>
                                    <span class="txt-dark block counter weight-600 font-24">{{PageofItems.length}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="total-tagihan">
                                <div class="mt-15 mb-10">
                                    <span class="block font-12 weight-400">Pelanggan Aktiv</span>
                                    <span class="txt-dark block counter weight-600 font-24">{{M_pengguna.length}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="table-wrap mt-20" id="printlang">
                <div class="row">
                    <div class="col-md-2">
                        <label>Sortir Halaman</label>
                        <select class="form-control" v-model.number="pageSize">
                            <option value="1">1</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="500">500</option>
                            <option value="1000">1000</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label>Cari.Nama</label>
                        <input type="text" class="form-control" v-model="cari" placeholder="Nama">
                    </div>
                    <div class="col-md-2">
                        <label>Cari.ID / PPOE</label>
                        <input type="text" class="form-control" v-model="cari_id" placeholder="ID / PPOE">
                    </div>
                    <div class="col-md-4">
                        <label>Cari.Alamat</label>
                        <input type="text" class="form-control" v-model="cari_alamat" placeholder="Alamat">
                    </div>
                    <div class="col-md-2">
                        <label>Tipe Pelanggan</label>
                        <select class="form-control" v-model="cari_tipe">
                            <option v-for="(tp , index) in tipe_pelanggan">{{tp.pembantu_tipe_nama}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="mt-40" style="overflow-x: scroll">
                <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                    <thead>
                        <!-- <thead style="display: table; width: calc(100% - 17px);"> -->
                        <tr style="width: 100%;">
                            <th scope="col" width="5%">No</th>
                            <th scope="col" width="10%">Pelanggan ID</th>
                            <th scope="col" width="18%">PPOE</th>
                            <th scope="col" width="18%">Tipe Pelanggan</th>
                            <th scope="col" width="15%">Nama</th>
                            <th scope="col" width="20%">Alamat</th>
                            <th scope="col" width="20%">Ada.Potongan</th>
                            <th scope="col" width="12%">Bayar</th>
                            <th scope="col" width="5%">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tbody style="display: block; max-height: 200px; overflow-y: scroll;"> -->
                        <tr v-for="(pelanggan , index) in PageofItems" v-bind:key="pelanggan._id">
                            <th>{{index + 1}}</th>
                            <th>{{parseInt(pelanggan.pengguna_id)}}</th>
                            <th>{{pelanggan.pengguna_ppoe}}</th>
                            <th>{{pelanggan.pengguna_tipe_pelanggan}}</th>
                            <td>{{pelanggan.pengguna_nama}}</td>
                            <td>{{pelanggan.pengguna_alamat}}</td>
                            <td v-if="pelanggan.pengguna_status_potongan === 'Y'">IYA / {{pelanggan.pengguna_potongan.jumlah_potongan | currency}}</td>
                            <td v-else>TIDAK</td>
                            <td v-if="pelanggan.pengguna_status_potongan === 'Y'">{{pelanggan.pengguna_paket.pengguna_paket_harga - pelanggan.pengguna_potongan.jumlah_potongan | currency}}</td>
                            <td v-else>{{pelanggan.pengguna_paket.pengguna_paket_harga | currency}}</td>
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
                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target="#hapus" v-on:click="hapuspengguna(pelanggan._id,pelanggan.pengguna_status,pelanggan.pengguna_nama)"><i class="icon wb-share" aria-hidden="true"></i>Hapus</a></li>
                                            <li role="presentation">
                                                <router-link :to="{name:'upgrade_pelanggan',params:{id:pelanggan._id, ppoe:pelanggan.pengguna_ppoe}}"><i class="icon wb-share" aria-hidden="true"></i>Upgrade/Downgrade</router-link>
                                            </li>
                                            <li role="presentation">
                                                <router-link :to="{name:'upload_ktp',params:{id:pelanggan._id}}">
                                                    <i class="icon wb-share" arian-hidden="true"></i>Upload KTP
                                                </router-link>
                                            </li>
                                            <li role="presentation">
                                                <router-link :to="{name:'print_invoice',params:{id:pelanggan._id}}">
                                                    <i class="icon wb-share" arian-hidden="true"></i>
                                                    Print Kartu(On-Process)
                                                </router-link>
                                            </li>
                                            <li role="presentation" v-if="pelanggan.pengguna_status_potongan === 'Y'"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target="#hapus_potongan" v-on:click="hapuspotongan(pelanggan._id,pelanggan.pengguna_status,pelanggan.pengguna_nama)"><i class="icon wb-share" aria-hidden="true"></i>Hapus Potongan</a></li>
                                            <li role="presentation" v-else>
                                                <router-link :to="{name:'potongan',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Kasih Potongan</router-link>
                                            </li>
                                            <li role="presentation" v-if="roleBy === 'Tukang'">
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
                                        <h5 class="modal-title" id="myModalLabel">Hapus / Putus</h5>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="mb-15">{{pengguna_nama}}</h5>
                                        <p>Apakah Anda Yakin Ingin Menghapus ?</p>
                                        <input type="hidden" class="form-control" v-model="id">
                                        <input type="hidden" class="form-control" v-model="pengguna_status">
                                        <input type="hidden" class="form-control" v-model="pengguna_tanggal_nonaktif">
                                        <input type="hidden" class="form-control" v-model="createdBy">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteds1('N')">Pelanggan putus</button>
                                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteds('N')">Pelanggan Non-Aktif</button>
                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                                <!-- /.modal-content -->
                            </div>
                        </div>
                        <div class="modal fade bs-example-modal-sm" id="hapus_potongan" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog ">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h5 class="modal-title" id="myModalLabel">Hapus Potongan</h5>
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
                                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deletedspotongan('N')">Konfirmasi</button>
                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                                <!-- /.modal-content -->
                            </div>
                        </div>
                    </tbody>
                </table>
                <div class="clearfix btn-group col-md-12 offset-md-6 mt-10">
                    <JwPagination :pageSize="pageSize" :items="filterpelanggan" @changePage="onChangePage"></JwPagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>