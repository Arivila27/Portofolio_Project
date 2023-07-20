<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6>Detail Withdrawal</h6>
                    </div>
                    <div class="clearfix"></div>
                    <div class="panel-wrapper collapse in">
                        <div class="panel-body">
                            <div class="form-wrap">
                                <div class="col-md-12">
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="nama">Bukti Transfer</label>
                                            <!-- <input type="text" class="form-control" required v-model="wd.wd_nama" disabled> -->
                                            <img v-bind:src="wd.wd_image" alt=" Tidak Ada" width="450" height="350">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="nama">Atas Nama</label>
                                            <input type="text" class="form-control" required v-model="wd.wd_nama" disabled>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="kode">Nama Bank</label>
                                            <input type="text" class="form-control" required v-model="wd.wd_tipe_cash.wd_nama_cash" disabled>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="kode">No.Rekening(Catatan* Harus sesuai no-rekening)</label>
                                            <input type="text" class="form-control" required v-model="wd.wd_tipe_cash.wd_no_rekening" disabled>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="kode">Kode Domain</label>
                                            <input type="text" class="form-control" required v-model="wd.wd_domain.domain_kode" disabled>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="kode">Nama Domain</label>
                                            <input type="text" class="form-control" required v-model="wd.wd_domain.domain_name" disabled>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="total">Besaran yang diajukan</label>
                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model="wd.wd_besaran_diajukan" disabled />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <router-link to="/list_wd" class="btn btn-danger">Kembali</router-link>
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
<script src="./Service/detail_wd"></script>