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
                                    <input type="text" class="form-control" required v-model="wd.wd_nama">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="kode">No.Rekening(Catatan* Harus sesuai no-rekening)</label>
                                    <input type="text" class="form-control" required v-model="wd.wd_rekening">
                                    <small>*Contoh:614*****</small>
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