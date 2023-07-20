<template>
    <div class="panel panel-default card-view">
        <div class="panel-heading">
            <h6>Tambah Data project</h6>
        </div>
        <div class="clearfix"></div>
        <div class="panel-wrapper collapse in">
            <form @submit.prevent="addProject">
                <div class="panel-body">
                    <div class="form-wrap">
                        <div class="col-md-12">
                            <div class="form-row">
                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Proyek</h6>
                                <hr class="light-grey-hr" />
                                <div class="form-group col-md-12">
                                    <label for="nama">Nama Proyek</label>
                                    <input type="text" class="form-control" required v-model="project.item_nama">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="">Biaya<br> Operasional</label>
                                    <vue-numeric currency="Rp." separator="," class="form-control" v-model="project.item_biaya_operasional" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="">Biaya <br>Lain-lain</label>
                                    <vue-numeric currency="Rp." separator="," class="form-control" v-model="project.item_biaya_lain" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="kode">Kode proyek</label>
                                    <input type="text" class="form-control" required v-model="project.item_kode">
                                    <small>*example:ZJOPLS123</small>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="">Pegawai</label>
                                    <multiselect v-model="project.item_pegawai" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="id" :options="pegawai" :multiple="true"></multiselect>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="total">Total Biaya</label>
                                    <vue-numeric currency="Rp." separator="," class="form-control" disabled v-model="totalBiaya" />
                                </div>
                            </div>
                            <div class="form-row" hidden>
                                <div class="form-group col-md-4">
                                    <label for="created">Created</label>
                                    <input type="date" class="form-control" v-model="project.item_created">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="updated">Updated</label>
                                    <input type="date" class="form-control" v-model="project.item_updated">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="user_updated">User updated</label>
                                    <input type="text" class="form-control" v-model="project.item_user_updated">
                                </div>
                            </div>
                            <div class="form-row">
                                <button class="btn btn-success ml-5">Tambah</button>&nbsp;
                                <router-link to="/project" class="btn btn-danger">Kembali</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script src="./Service/Admin"></script>