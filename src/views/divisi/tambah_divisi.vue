<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6 class="txt-light">Tambah Divisi</h6>
                    </div>
                    <div class="clearfix"></div>
                    <div class="panel-wrapper collapse in">
                        <form @submit.prevent="addProject">
                            <div class="panel-body">
                                <div class="form-wrap">
                                    <div class="col-md-12">
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="nama">Nama Divisi</label>
                                                <input type="text" class="form-control" required v-model="divisi.nama">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <button class="btn btn-success ml-5">Tambah</button>&nbsp;
                                            <router-link to="/list_divisi" class="btn btn-danger">Kembali</router-link>
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
</template>
<script src="./Service/tambah_divisi"></script>