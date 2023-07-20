<template>
    <div class="panel panel-default card-view">
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="txt-light">Mengajukan Withdrawal</h6>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
        <div class="panel-wrapper collapse in">
            <form @submit.prevent="addProject">
                <div class="panel-body">
                    <div class="form-wrap">
                        <div class="col-md-12">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="nama">Atas Nama</label>
                                    <input type="text" class="form-control" required v-model="wd.wd_nama">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="nama">Pilih Kas / Bank</label>
                                    <!-- <input type="text" class="form-control" required v-model="wd.wd_nama"> -->
                                    <multiselect v-model="pilih_kode" track-by="_id" label="kode_akun" :options="kode_akun"></multiselect>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="nama">Nama Bank</label>
                                    <input type="text" class="form-control" required v-model="pilih_kode.kode_akun_nama" disabled>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="nama">No Rekening</label>
                                    <input type="text" class="form-control" required v-model="pilih_kode.kode_akun_rekening" disabled>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="total">Besaran yang diajukan</label>
                                    <vue-numeric currency="Rp." separator="," class="form-control" v-model="wd.wd_besaran_diajukan" />
                                </div>
                            </div>
                            <div class="form-row">
                                <button class="btn btn-success ml-5">Tambah</button>&nbsp;
                                <router-link to="/list_wd" class="btn btn-danger">Kembali</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>