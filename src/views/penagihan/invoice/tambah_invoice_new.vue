<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row"></div>
            <div class="row">
                <h3>&nbsp;</h3>
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6>Tambah data invoice</h6>
                    </div>
                    <div class="panel-body">
                        <div class="form-wrap">
                            <div class="col-md-12">
                                <form-wizard @on-complete="addInvoice">
                                    <h4 slot="title">Tambah invoice</h4>
                                    <tab-content title="Data diri" icon="ti-user">
                                        <div class="form-row">
                                            <!--IF pelanggan = true -->
                                            <div class="form-group col-md-12">
                                                <label>Nama</label>
                                                <multiselect v-model="invoice.pengguna_nama" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pelanggan" :taggable="true"></multiselect>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Lokasi Pengiriman</label>
                                                <textarea class="form-control" cols="30" rows="10" v-model="invoice.lokasi_kirim"></textarea>
                                            </div>
                                        </div>
                                    </tab-content>
                                    <tab-content title="Keranjang" icon="ti-id-badge">
                                        <div class="panel panel-default card-view panel-refresh">
                                            <div class="refresh-container"></div>
                                            <div class="panel-heading">
                                                <div class="pull-left">
                                                    <h6 class="panel-title txt-dark">Keranjang</h6>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                            <div class="panel-body">
                                                <table class="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Nama</th>
                                                            <th>Stok</th>
                                                            <th>Harga</th>
                                                            <th>Total harga</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(item,k) in barang" :key="k">
                                                            <td>{{k + 1}}</td>
                                                            <td><input type="text" class="form-control" v-model="item.nama_barang"></td>
                                                            <td><input type="number" class="form-control" v-model="item.quanty_barang"></td>
                                                            <td>
                                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model="item.harga" />
                                                            </td>
                                                            <td>
                                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model="item.total_harga" />
                                                            </td>
                                                            <td><button class="btn btn-danger btn-sm" @click.prevent="remove(k)" v-show="k || ( !k &&  barang.length > 1)"><i class="fa fa-minus"></i></button></td>
                                                            <td><button class="btn btn-primary btn-sm" @click.prevent="add(k)" v-show="k == barang.length-1"><i class="fa fa-plus"></i></button></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="form-row col-md-12">
                                            <div class="form-group col-md-6">
                                                <label for="">PPn</label>
                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model="ppn" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Total</label>
                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model="subtotal" />
                                            </div>
                                        </div>
                                        <div class="form-row col-md-12">
                                            <div class="form-group col-md-12">
                                                <label for="">Total</label>
                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model="total" />
                                            </div>
                                        </div>
                                    </tab-content>
                                    <tab-content title="Pembayaran" icon="ti-medall">
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Metode Pembayaran</label>
                                                <select class="form-control" v-model="if_paymend_methods">
                                                    <option value="Bank">Bank</option>
                                                    <option value="Cash">Cash</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-row" v-show="if_paymend_methods === 'Bank'">
                                            <!-- //if Metode Pembayaran Bank -->
                                            <div class="form-group col-md-6">
                                                <label>Nama bank</label>
                                                <select class="form-control" v-model="invoice.nama_bank">
                                                    <option value="BCA">BCA</option>
                                                    <option value="Mandiri">Mandiri</option>
                                                    <option value="BNI">BNI</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>No.Rekening</label>
                                                <input type="text" class="form-control" v-model="invoice.no_rekening">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Tanggal/Jatuh-Tempo</label>
                                                <input type="date" class="form-control" v-model="invoice.tempo">
                                            </div>
                                        </div>
                                    </tab-content>
                                </form-wizard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/tambah_invoice"></script>