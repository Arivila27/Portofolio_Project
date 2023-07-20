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
                                <h6 class="panel-title txt-light">Transaksi Voucher</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/voucher" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left"></i>
                                </router-link>
                                <a href="#" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-replay"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen"></i>
                                </a>
                                <a href="#" data-toggle="modal" data-target="#tambah_voucher" class="pull-left inline-block mr-15">
                                    <i class="zmdi zmdi-file-plus"></i>
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
                                        <th scope="col">Id pembelian</th>
                                        <th scope="col">Tanggal pembelian</th>
                                        <th scope="col">Pembeli</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Jumlah voucher</th>
                                        <th scope="col">Total harga</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(voucher,index) in Filterdata" :key="voucher._id">
                                        <th>{{index + 1}}</th>
                                        <th>{{voucher.voucher_id}}</th>
                                        <td>{{voucher.voucher_tanggal}}</td>
                                        <td>{{voucher.voucher_nama}}</td>
                                        <td>{{voucher.voucher_alamat}}</td>
                                        <td>{{voucher.voucher_jumlah_item}}</td>
                                        <td>{{voucher.voucher_total_harga}}</td>
                                        <td> 
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation"><a role="menuitem" data-toggle="modal" data-target="#hapus" v-on:click="editvoucher(voucher._id)"><i class="icon wb-share" aria-hidden="true"></i>Ajukan Hapus</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <div class="modal  bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog ">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myModalLabel">Hapus</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Apakah Anda Yakin Ini ingin mengajukan Menghapus ?</p>
                                                </div>
                                                <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteds1()">Iya</button>
                                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div class="modal fade" id="tambah_voucher" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Transaksi Voucher</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="">ID Voucher</label>
                                                            <input type="text" class="form-control" v-model="voucher.voucher_id">
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="">Nama Pembeli</label>
                                                            <input type="text" class="form-control" v-model="voucher.voucher_nama">
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="">Tanggal pembelian</label>
                                                            <input type="date" class="form-control" v-model="voucher.voucher_tanggal">
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="">Alamat</label>
                                                            <input type="text" class="form-control" v-model="voucher.voucher_alamat">
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="">Jumlah voucher</label>
                                                            <input type="number" class="form-control" v-model.number="voucher.voucher_jumlah_item">
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="">Harga satuan</label>
                                                            <input type="number" class="form-control" v-model.number="voucher.voucher_harga_satuan" >
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="">Diskon/Potongan harga</label>
                                                            <input type="number" class="form-control" v-model.number="voucher.voucher_diskon">
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="">Keterangan</label>
                                                            <input type="text" class="form-control" v-model="voucher.voucher_keterangan" >
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-12">
                                                            <label for="">Total harga</label>
                                                            <input type="number" class="form-control" v-model.number="TotalBiaya" disabled="true">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="handler">Tambah</button>
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
        </div>
    </div>
</template>
<script src="./Service/voucher.js"></script>