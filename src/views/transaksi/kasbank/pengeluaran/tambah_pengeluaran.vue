<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Tambah Pengeluaran</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="addPengeluaran">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="">Divisi</label>
                                                        <select class="form-control" v-model="pengeluaran.divisi">
                                                            <option v-for="dpr in departmen" :key="dpr._id">{{dpr.pembantu_departmen_nama}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">No Referensi</label>
                                                        <input type="text" class="form-control" v-model="pengeluaran.no">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-4">
                                                        <label>Diajukan Oleh</label>
                                                        <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pengguna" v-model="pengeluaran.diajukan"></multiselect>
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label>Diketahui Oleh</label>
                                                        <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pengguna" v-model="pengeluaran.diketahui"></multiselect>
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label>Disetujui Oleh</label>
                                                        <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pengguna" v-model="pengeluaran.disetujui"></multiselect>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="">Tanggal</label>
                                                        <input type="date" class="form-control" v-model="pengeluaran.tanggal">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Status Pengeluaran</label>
                                                        <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="id" :options="status_pengeluaran" v-model="pengeluaran.status_pengeluaran"></multiselect>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="">Deskripsi</label>
                                                        <textarea cols="5" rows="5" class="form-control" v-model="pengeluaran.deskripsi"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-footer">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="panel panel-default card-view panel-refresh">
                            <div class="refresh-container"></div>
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-dark">Keranjang</h6>
                                </div>
                                <div class="pull-right">
                                    <button class="btn btn-success" style="background-color:#8bc34a" @click.prevent="add(1)">tambah kolom</button>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body">
                                <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Uraian</th>
                                            <th>Harga</th>
                                            <th>Jumlah</th>
                                            <th>Total</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,k) in barang" :key="k">
                                            <td>{{k + 1}}</td>
                                            <td><input type="text" class="form-control" v-model="item.uraian"></td>
                                            <td>
                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="item.harga" />
                                            </td>
                                            <td><input type="text" class="form-control" v-model="item.jumlah"></td>
                                            <td>
                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="item.total" disabled />
                                            </td>
                                            <td><button class="btn btn-danger btn-sm" @click.prevent="remove(k)" v-show="k || ( !k &&  barang.length > 1)"><i class="fa fa-minus"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">Total Keseluruhan</td>
                                            <td colspan="3">{{hasil | currency}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br>
                                <div class="form-row">
                                    <div class="col-md-12">
                                        <button class="btn btn-primary" type="submit" @click.prevent="addPengeluaran()">Tambah</button>
                                        &nbsp;
                                        <router-link class="btn btn-danger" to="/pengeluaran">
                                            Kembali
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/tambah_pengeluaran"></script>