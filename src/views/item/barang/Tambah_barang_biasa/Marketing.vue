<template>
    <div class="panel panel-default card-view">
        <div class="panel-heading">
            <h6>Tambah Data Barang</h6>
        </div>
        <div class="clearfix"></div>
        <div class="panel-wrapper collapse in">
            <form @submit.prevent="addbarang">
                <div class="panel-body">
                    <div class="form-wrap">
                        <div class="col-md-12">
                            <div class="form-row">
                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Barang</h6>
                                <hr class="light-grey-hr" />
                                <div class="form-group col-md-4">
                                    <label for="nama">Nama barang</label>
                                    <input type="text" class="form-control" v-model="barang_nama" required>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="stok">Stok</label>
                                    <vue-numeric class="form-control" v-model.number="barang_stok" required />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="harga">Harga barang</label>
                                    <vue-numeric currency="Rp." separator="," class="form-control" v-model="barang_harga" required />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="merk">Merk</label>
                                    <input type="text" class="form-control" v-model="barang_merk" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="total">Total harga</label>
                                    <vue-numeric currency="Rp." separator="," class="form-control" v-model="barang_harga_total" disabled />
                                </div>
                            </div>
                            <div class="form-row" hidden>
                                <div class="form-group col-md-4">
                                    <label for="created">Created</label>
                                    <input type="date" class="form-control" v-model="barang_created">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="updated">Updated</label>
                                    <input type="date" class="form-control" v-model="barang_updated">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="user_updated">User updated</label>
                                    <input type="text" class="form-control" v-model="createdBy">
                                </div>
                            </div>
                            <div class="form-row">
                                <button class="btn btn-success ml-5">Tambah</button>&nbsp;
                                <router-link to="/barang_biasa" class="btn btn-danger">Kembali</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>