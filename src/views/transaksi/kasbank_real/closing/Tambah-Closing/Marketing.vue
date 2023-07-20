<template>
    <div class="tab-content mt-5">
        <div id="internet" class="tab-pane fade in active">
            <div class="panel panel-default card-view">
                <div class="panel-heading">
                    <h6>Closing Kas & Bank</h6>
                </div>
                <div class="clearfix"></div>
                <div class="panel-wrapper collapse in">
                    <form @submit.prevent="addKasBank">
                        <div class="panel-body">
                            <div class="form-wrap">
                                <div class="col-md-12">
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label>Kode</label>
                                            <input type="text" class="form-control" v-model="kasbank.kode">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label>Tipe Cash</label>
                                            <select class="form-control" v-model="kasbank.tipe_cash">
                                                <option v-for="kode in kode_akun">{{kode.kode_akun}}</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="">Kas Awal</label>
                                            <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" v-model="kasbank.awal"></vue-numeric>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="">Bulan(*Silahkan Dipilih Terlebih Dahulu)</label>
                                            <input type="month" class="form-control" v-model="kasbank.bulan">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="">Penambahan Kas</label>
                                            <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" v-model="total_all" disabled></vue-numeric>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="">Total</label>
                                            <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" v-model="jumlah_total" disabled></vue-numeric>
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
        <div id="internet" class="tab-pane fade in active">
            <div class="panel panel-default card-view panel-refresh">
                <div class="refresh-container">
                    <div class="la-anim-1"></div>
                </div>
                <div class="panel-heading">
                    <div class="pull-left">
                        <h6 class="panel-title txt-dark">Tabel Item</h6>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Nomor</th>
                                <th scope="col">Kode</th>
                                <th scope="col">Bulan</th>
                                <th scope="col">Debit</th>
                                <th scope="col">Kredit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(beli,index) in FilterKas" :key="beli._id">
                                <th>{{index + 1}}</th>
                                <th>{{beli.kasbank_kode}}</th>
                                <th>{{beli.kasbank_tanggal}}</th>
                                <td>{{beli.kasbank_debit}}</td>
                                <td>{{beli.kasbank_kredit}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>