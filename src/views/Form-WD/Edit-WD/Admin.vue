<template>
    <div class="panel panel-default card-view">
        <div class="panel-heading">
            <h6>Mengajukan Withdrawal</h6>
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
                            <!-- <div class="form-row">
                                <label>Bukti Transfer</label>
                                <input type="file" ref="file" id="file" class="form-control" v-on:change="handleupload()">
                            </div> -->
                            <div class="form-row">
                                <button class="btn btn-success ml-5">Setujui</button>&nbsp;
                                <router-link to="/list_wd" class="btn btn-danger">Kembali</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script src="./Service/Admin"></script>