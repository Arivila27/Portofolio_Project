<template>
    <div class="panel panel-default card-view">
        <div class="panel-heading">
            <h6>Tambah Data Produk</h6>
        </div>
        <div class="clearfix"></div>
        <div class="panel-wrapper collapse in">
            <form>
                <div class="panel-body">
                    <div class="form-wrap">
                        <div class="col-md-12">
                            <div class="form-row">
                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Kategori Dan Departemen</h6>
                                <hr class="light-grey-hr" />
                                <div class="form-group col-md-12">
                                    <label for="">Item Departemen</label>
                                    <select v-model="M_item.item_dkepartmen" class="form-control">
                                        <option v-for="departmen in M_departmen">{{departmen.pembantu_departmen_nama}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Detail Barang</h6>
                                <hr class="light-grey-hr" />
                                <div class="form-group col-md-6">
                                    <label for="inputname">Nama produk</label>
                                    <input type="text" class="form-control" id="inputname" placeholder="Nama produk" v-model="M_item.item_nama">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="hargasatuan">Harga Barang</label>
                                    <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" v-model="M_item.item_harga "></vue-numeric>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="">Kode Produksi</label>
                                    <input type="text" class="form-control" v-model="M_item.item_kode">
                                </div>
                            </div>
                            <div class="form-row" hidden>
                                <div class="form-group col-md-3">
                                    <label for="Databarang">Data Barang Dibuat</label>
                                    <input type="date" class="form-control" id="Databarang" v-model="M_item.item_created" hidden>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="item">Data Barang Diupdate</label>
                                    <input type="date" class="form-control" id="item" placeholder="Apartment, studio, or floor" v-model="M_item.item_updated" hidden>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="admin">Siapa Yang Mengupdate/Membuat</label>
                                    <select id="admin" class="form-control" v-model="M_item.item_user_updated">
                                        <option selected>Choose...</option>
                                        <option>Admin</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <router-link to="/produk">
                                        <button type="submit" class="btn btn-primary" @click="addToApi">Tambah</button>
                                    </router-link>
                                </div>
                                <div class=" form-group col-md-6">
                                    <router-link to="/produk">
                                        <button type="button" class="btn btn-danger">Kembali</button>
                                    </router-link>
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
</template>
<script src="./Service/Admin"></script>