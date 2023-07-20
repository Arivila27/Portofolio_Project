<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6 class="txt-light">Closing Pembayaran Ke Saldo MY-BITNIAGA</h6>
                    </div>
                    <div class="clearfix"></div>
                    <div class="panel-wrapper collapse in">
                        <form @submit.prevent="submit">
                            <div class="panel-body">
                                <div class="form-wrap">
                                    <div class="col-md-12">
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="nama">Pilih Bulan</label>
                                                <input type="month" class="form-control" v-model="select_month ">
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="nama">Nominal Yang bisa masuk Saldo</label>
                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="hitungtotalmybitniagapps" disabled />
                                            </div>
                                            <!-- <div class="form-group col-md-6">
                                                <label for="nama">No Rekening</label>
                                                <input type="text" class="form-control" required v-model="pilih_kode.kode_akun_rekening" disabled>
                                            </div> -->
                                        </div>
                                        <!-- <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="total">Besaran yang diajukan</label>
                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model="wd.wd_besaran_diajukan" />
                                            </div>
                                        </div> -->
                                        <div class="form-row">
                                            <button class="btn btn-success ml-5">Tambah</button>&nbsp;
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
<script src="./Service/saldo"></script>