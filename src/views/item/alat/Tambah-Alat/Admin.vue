<template>
    <div class="panel panel-default card-view">
        <div class="panel-heading">
            <h6>Tambah Data alat</h6>
        </div>
        <div class="clearfix"></div>
        <div class="panel-wrapper collapse in">
            <form @submit.prevent="addalat">
                <div class="panel-body">
                    <div class="form-wrap">
                        <div class="col-md-12">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="nama">Nama Alat</label>
                                    <input type="text" class="form-control" required v-model="alat.item_nama">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="kode">Kode Alat</label>
                                    <input type="text" class="form-control" required v-model="alat.item_kode">
                                    <small>*example:ZJOPLS123</small>
                                </div>
                            </div>
                            <div class="form-row" hidden>
                                <div class="form-group col-md-4">
                                    <label for="created">Created</label>
                                    <input type="date" class="form-control" v-model="alat.item_created">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="updated">Updated</label>
                                    <input type="date" class="form-control" v-model="alat.item_updated">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="user_updated">User updated</label>
                                    <input type="text" class="form-control" v-model="alat.item_user_updated">
                                </div>
                            </div>
                            <div class="form-row">
                                <button class="btn btn-success ml-5">Tambah</button>&nbsp;
                                <router-link to="/alat" class="btn btn-danger">Kembali</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script src="./Service/Admin"></script>