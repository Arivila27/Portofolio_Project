<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row"></div>
            <div class="row">
                <h3>&nbsp;</h3>
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6>Tambah Data PO</h6>
                    </div>
                    <div class="panel-body">
                        <div class="form-wrap">
                            <div class="col-md-12">
                                <form-wizard @on-complete="addpo">
                                    <h4 slot="title">Tambah PO</h4>
                                    <tab-content title="Data diri" icon="ti-user">
                                        <div class="form-row">
                                            <!--IF pelanggan = true -->
                                            <div class="form-group col-md-12">
                                                <label>Nama</label>
                                                <input type="text" name="text" class="form-control" v-model="po.pengguna_nama">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Tanggal</label>
                                                <input type="date" class="form-control" v-model="po.tempo">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Kode Kas/Bank</label>
                                                <select class="form-control" v-model="po.kodenya">
                                                    <option value="Kas">Kas</option>
                                                    <option value="Bank">Bank</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-row" v-if="po.kodenya === 'Kas'">
                                            <div class="form-group col-md-12">
                                                <label>Kode Kas</label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="form-row" v-else>
                                            <div class="form-group col-md-12">
                                                <label>Kode Bank</label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Keterangan</label>
                                                <textarea class="form-control" cols="30" rows="10" v-model="po.keterangan"></textarea>
                                            </div>
                                        </div>
                                    </tab-content>
                                    <tab-content title="Keranjang" icon="ti-id-badge">
                                        <div class="panel panel-default card-view panel-refresh">
                                            <div class="refresh-container"></div>
                                            <div class="panel-heading">
                                                <div class="pull-left">
                                                    <h6 class="panel-title txt-dark">PURCHASE ORDER</h6>
                                                </div>
                                                <div class="pull-right">
                                                    <vue-numeric currency="Rp." separator="," readonly class="form-control" v-model="subtotal" />
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                            <div class="panel-body">
                                                <table class="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Nama</th>
                                                            <th>Jumlah</th>
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
                                                <label for="">Total</label>
                                                <vue-numeric currency="Rp." separator="," readonly class="form-control" v-model="subtotal" />
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
<script src="./Service/tambah_po"></script>