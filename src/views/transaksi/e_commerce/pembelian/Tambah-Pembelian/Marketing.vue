<template>
    <form-wizard @on-complete="addpembelian">
        <h4 slot="title">Pembelian</h4>
        <tab-content title="Supplier" icon="ti-user">
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label>Supplier</label>
                    <select class="form-control" v-model="pilih_supplier">
                        <option v-for="(M_supplier,k) in M_supplier">{{M_supplier.supplier_nama}}</option>
                    </select>
                </div>
            </div>
        </tab-content>
        <tab-content title="Detail Pembelian/ Pengiriman" icon="ti-id-badge">
            <div class="form-group col-md-12">
                <label for="">No Pembelian</label>
                <input type="text" class="form-control" v-model="noTrans" disabled="true">
            </div>
            <div class="form-group col-md-4">
                <label for="">*Divisi</label>
                <select class="form-control" v-model="pilih_divisi">
                    <option v-for="(M_divisi,k) in M_divisi">{{M_divisi.divisi_nama}}</option>
                </select>
                <!--  <multiselect v-model="pilih_divisi" :options="M_divisi" :searchable="true" :close-on-select="true" :show-labels="false" label="divisi_nama" placeholder="Pilih Divisi"></multiselect> -->
            </div>
            <div class="form-group col-md-8">
                <label for="">*Tanggal Pembelian</label>
                <input type="date" class="form-control" v-model="pembelian_created">
            </div>
        </tab-content>
        <tab-content title="Barang" icon="ti-receipt">
            <div class="row">
                <div class="form-group col-md-12">
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
                                        <th>Kode barang</th>
                                        <th>Nama</th>
                                        <th>Merk</th>
                                        <th>Quanty</th>
                                        <th>Harga</th>
                                        <th>Total harga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item,k) in barang" :key="k">
                                        <td>{{k + 1}}</td>
                                        <td><input type="text" class="form-control" v-model="item.kode_barang"></td>
                                        <td><input type="text" class="form-control" v-model="item.nama_barang"></td>
                                        <td><input type="text" class="form-control" v-model="item.merk_barang"></td>
                                        <td><input type="number" class="form-control" v-model="item.quanty_barang"></td>
                                        <td><input type="number" class="form-control" v-model="item.harga_barang"></td>
                                        <td><input type="number" class="form-control" v-model="item.total_barang" disabled></td>
                                        <td><button class="btn btn-danger btn-sm" @click.prevent="remove(k)" v-show="k || ( !k &&  barang.length > 1)"><i class="fa fa-minus"></i></button></td>
                                        <td><button class="btn btn-primary btn-sm" @click.prevent="add(k)" v-show="k == barang.length-1"><i class="fa fa-plus"></i></button></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="">
                                        Subtotal
                                    </label>
                                    <input type="number" class="form-control" v-model.number="hasil">
                                </div>
                                <div class="fomr-group col-md-6">
                                    <label for="">
                                        PPN
                                    </label>
                                    <input type="number" class="form-control" v-model.number="ppn">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="">Total harga</label>
                                    <input type="number" class="form-control" v-model.number="total">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </tab-content>
    </form-wizard>
</template>
<script src="./Service/Marketing"></script>