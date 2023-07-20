<template>
    <div class="tab-content mt-5">
        <div id="internet" class="tab-pane fade in active">
            <div class="panel panel-default card-view">
                <div class="panel-heading">
                    <h6>Tambah KasBank</h6>
                </div>
                <div class="clearfix"></div>
                <div class="panel-wrapper collapse in">
                    <form @submit.prevent="addKasBank">
                        <div class="panel-body">
                            <div class="form-wrap">
                                <div class="col-md-12">
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="">Tipe Cash</label>
                                            <select class="form-control" v-model="kasbank.tipe_cash">
                                                <option v-for="kode in kode_akun">{{kode.kode_akun}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Tipe</label>
                                            <multiselect placeholder="Tambahkan Type" :options="status_kasbank" v-model="kasbank.type"></multiselect>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>No Referensi</label>
                                            <input type="text" class="form-control" v-model="kasbank.ref_code">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="">Kas-Awal</label>
                                            <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" v-model="kasbank.kasawal"></vue-numeric>
                                        </div>
                                        <div class="form-group col-md-12" v-if="kasbank.type === 'Debit'" hidden>
                                            <label for="">Debit</label>
                                            <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" v-model="kasbank.debit"></vue-numeric>
                                        </div>
                                        <div class="form-group col-md-12" v-else-if="kasbank.type === 'Kredit'" hidden>
                                            <label for="">Kredit</label>
                                            <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" v-model="kasbank.kredit"></vue-numeric>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="">Deskripsi</label>
                                            <textarea cols="5" rows="5" class="form-control" v-model="kasbank.description"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <button class="btn btn-success ml-5">Tambahkan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>