<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">

                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Closing Kas & Bank(Debit)</h6>
                                <!-- <h6>{{ detail_kasbank.kasbank_kredit }}</h6> -->
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="addKasBank">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label>Tipe Cash</label>
                                                        <!-- <select class="form-control" v-model="kasbank.tipe_cash">
                                                            <option v-for="kode in kode_akun">{{ kode.kode_akun }}
                                                            </option>
                                                        </select> -->
                                                        <input type="text" class="form-control" v-model="detail_kasbank.kasbank_tipe_cash" disabled>
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Kas Awal</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control"
                                                            id="hargasatuan" v-model="detail_kasbank.kasbank_kasawal" disabled></vue-numeric>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="">Menu</label>
                                                        <input type="text" class="form-control" v-model="detail_kasbank.kasbank_menu" disabled>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="">Bulan(*Silahkan Dipilih Terlebih Dahulu)</label>
                                                        <input type="month" class="form-control"
                                                            v-model="kasbank_bulan">
                                                    </div>
                                                    <div class="form-group col-md-6" v-if="$route.params.menu === 'Kosong'">
                                                        <label for="">Debit</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control"
                                                            id="hargasatuan" v-model="hitungtotalkas3"></vue-numeric>
                                                    </div>
                                                    <div class="form-group col-md-6" v-else>
                                                        <label for="">Debit</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control"
                                                            id="hargasatuan" v-model="hitungtotalkas2" disabled></vue-numeric>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12" v-if="$route.params.menu === 'Kosong'">
                                                        <label for="">Total</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control"
                                                            id="hargasatuan" v-model="jumlah_total2"
                                                            disabled></vue-numeric>
                                                    </div>
                                                    <div class="form-group col-md-12" v-else>
                                                        <label for="">Total</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control"
                                                            id="hargasatuan" v-model="jumlah_total"
                                                            disabled></vue-numeric>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="">Deskripsi</label>
                                                        <textarea cols="5" rows="5" class="form-control"
                                                            v-model="kasbank.description"></textarea>
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
                                            <th scope="col">Tanggal</th>
                                            <th scope="col">Debit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <!-- <tbody> -->
                                        <tr v-for="(beli, index) in Filterkas2" :key="beli._id">
                                            <th>{{ index + 1}}</th>
                                            <th>{{ beli.penagihan_id_pengguna }}</th>
                                            <th>{{ beli.penagihan_tanggal_pembayaran }}</th>
                                            <td>{{ beli.penagihan_biaya.penagihan_biaya_total | currency}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script src="./Service/closing_debit"></script>