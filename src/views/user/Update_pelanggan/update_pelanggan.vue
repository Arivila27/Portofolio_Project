<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Detail Pelanggan</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="ubah">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="panel panel-default card-view">
                                                    <div class="panel-wrapper collapse in">
                                                        <div class="panel-body">
                                                            <div class="row">
                                                                <div class="col-md-3">
                                                                    <div class="item-big">
                                                                        <!-- START carousel-->
                                                                        <div id="carousel-example-captions-1" data-ride="carousel" class="carousel slide">
                                                                            <ol class="carousel-indicators">
                                                                                <li data-target="#carousel-example-captions-1" data-slide-to="0" class="active"></li>
                                                                                <li data-target="#carousel-example-captions-1" data-slide-to="1"></li>
                                                                            </ol>
                                                                            <div role="listbox" class="carousel-inner">
                                                                                <div class="item active"> <img src="../../../assets/img/gallery/mock1.jpg" alt="First slide image"> </div>
                                                                                <div class="item"> <img src="../../../assets/img/gallery/mock4.jpg" alt="Second slide image"> </div>
                                                                            </div>
                                                                        </div>
                                                                        <!-- END carousel-->
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-9">
                                                                    <div class="product-detail-wrap">
                                                                        <h3 class="mb-20 weight-500">{{pelanggan.pengguna_nama}}</h3>
                                                                        <div class="product-price head-font mb-30"></div>
                                                                        <p class="mb-50">{{pelanggan.pengguna_lokasi_pasang}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Row -->
                                        <!-- Row -->
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="panel panel-default card-view">
                                                    <div class="panel-wrapper collapse in">
                                                        <div class="panel-body">
                                                            <div class="tab-struct custom-tab-1 product-desc-tab">
                                                                <ul role="tablist" class="nav nav-tabs nav-tabs-responsive" id="myTabs_7">
                                                                    <li class="active" role="presentation"><a aria-expanded="true" data-toggle="tab" role="tab" id="descri_tab" href="#descri_tab_detail"><span>Informasi</span></a></li>
                                                                    <li @click.prevent="getcomplain()" role="presentation" class="next"><a data-toggle="tab" id="adi_info_tab" role="tab" href="#adi_info_tab_detail" aria-expanded="false"><span>Complain</span></a></li>
                                                                    <li @click.prevent="getproduk()" role="presentation" class=""><a data-toggle="tab" id="review_tab" role="tab" href="#review_tab_detail" aria-expanded="false"><span>Produk<span class="inline-block"></span></span></a></li>
                                                                    <li @click.prevent="getpenagihan()" role="presentation" class=""><a data-toggle="tab" id="penagihan_tab" role="tab" href="#penagihan_detail" aria-expanded="false"><span>Penagihan<span class="inline-block"></span></span></a></li>
                                                                </ul>
                                                                <div class="tab-content" id="myTabContent_7">
                                                                    <div id="adi_info_tab_detail" class="tab-pane fade in pt-0" role="tabpanel">
                                                                        <br>
                                                                        <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th scope="col">No.</th>
                                                                                    <th scope="col">Keluhan</th>
                                                                                    <th scope="col">Status</th>
                                                                                    <th scope="col">Tanggal keluhan</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr v-for="(keluhan,index) in complain" :key="keluhan._id">
                                                                                    <td>{{index + 1}}</td>
                                                                                    <td>{{keluhan.complain_pengguna_keluhan}}</td>
                                                                                    <td v-if="keluhan.complain_penyelesaian === 'Proses'"><span class="label label-warning">{{keluhan.complain_penyelesaian}}</span></td>
                                                                                    <td v-if="keluhan.complain_penyelesaian === 'Belum'"><span class="label label-danger">{{keluhan.complain_penyelesaian}}</span></td>
                                                                                    <td v-if="keluhan.complain_penyelesaian === 'Selesai'"><span class="label label-primary">{{keluhan.complain_penyelesaian}}</span></td>
                                                                                    <td>{{keluhan.complain_created}}</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div id="descri_tab_detail" class="tab-pane fade in pt-0 active" role="tabpanel">
                                                                        <div class="table-wrap">
                                                                            <div class="table-responsive">
                                                                                <table class="table  mb-0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="border-none">Terakhir Diupdate</td>
                                                                                            <td class="border-none">{{pelanggan.pengguna_updated}}</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Pelanggan ID</td>
                                                                                            <td><input type="text" class="form-control" v-model="pelanggan.pengguna_id"></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Nama</td>
                                                                                            <td><input type="text" class="form-control" v-model="pelanggan.pengguna_nama"></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Alamat</td>
                                                                                            <td><input type="text" class="form-control" v-model="pelanggan.pengguna_alamat"></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>No.telp</td>
                                                                                            <td><input type="text" class="form-control" v-model="pelanggan.pengguna_no_telepon"></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lokasi Pemasangan</td>
                                                                                            <td><input type="text" class="form-control" v-model="pelanggan.pengguna_lokasi_pasang"></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tanggal Pemasangan</td>
                                                                                            <td><input type="date" class="form-control" v-model="pelanggan.pengguna_tanggal_pemasangan"></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>KTP 1</td>
                                                                                            <td><input type="text" class="form-control" v-model="pelanggan.pengguna_no_ktp"></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Host</td>
                                                                                            <td><input type="text" class="form-control" v-model="pelanggan.pengguna_host"></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Port</td>
                                                                                            <td><input type="text" class="form-control" v-model="pelanggan.pengguna_port"></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Username / Winbox</td>
                                                                                            <td><input type="text" class="form-control" v-model="pelanggan.pengguna_winbox_username"></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Password</td>
                                                                                            <td><input type="text" class="form-control" v-model="pelanggan.pengguna_winbox_password"></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Biaya Registrasi</td>
                                                                                            <td>
                                                                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="pelanggan.pengguna_biaya_registrasi" />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Biaya tambahan</td>
                                                                                            <td>
                                                                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="pelanggan.pengguna_biaya_tambahan" />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Biaya paket yang dipilih(prored)</td>
                                                                                            <td>
                                                                                                <input type="number" name="" class="form-control" v-model.number="pelanggan.pengguna_biaya_prored">
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Total:{{totalall | currency}}</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                        <div class="clearfix"></div>
                                                                        <button class="btn btn-primary" @click.prevent="update">Update</button>
                                                                    </div>
                                                                    <div id="review_tab_detail" class="tab-pane pt-0 fade" role="tabpanel">
                                                                        <div class="row mt-40">
                                                                            <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th scope="col">No.</th>
                                                                                        <th scope="col">Nama Produk</th>
                                                                                        <th scope="col">Harga Produk</th>
                                                                                        <th scope="col">Tanggal</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr v-for="(paket,index) in produk" :key="produk._id">
                                                                                        <td>{{index + 1}}</td>
                                                                                        <td>{{paket.upgrade_paket_nama}}</td>
                                                                                        <td>{{paket.upgrade_paket_harga}}</td>
                                                                                        <td>{{paket.upgrade_created}}</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div id="penagihan_detail" class="tab-pane pt-0 fade" role="tabpanel">
                                                                        <div class="row mt-40">
                                                                            <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th scope="col">No.</th>
                                                                                        <th scope="col">Tanggal pembayaran</th>
                                                                                        <th scope="col">Nama paket</th>
                                                                                        <th scope="col">Harga paket</th>
                                                                                        <th scope="col">Total Biaya</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr v-for="(penagihan,index) in penagihan" :key="penagihan._id">
                                                                                        <td>{{index + 1}}</td>
                                                                                        <td>{{penagihan.penagihan_tanggal_pembayaran}}</td>
                                                                                        <td>{{penagihan.penagihan_paket.penagihan_paket_nama}}</td>
                                                                                        <td>{{penagihan.penagihan_paket.penagihan_paket_harga | currency}}</td>
                                                                                        <td>{{penagihan.penagihan_biaya.penagihan_biaya_total | currency}}</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
</template>
<script src="./Service/update_pelanggan.js"></script>