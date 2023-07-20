<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Update Pelanggan</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="handler">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Produk</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-4">
                                                        <label for="">Produk</label>
                                                        <select v-model="selectedCart" class="form-control">
                                                            <option v-for="prod in produk" :key="prod._id" :value="prod">
                                                                {{prod.item_nama}}
                                                            </option>
                                                        </select>
                                                        <small>*Paket sebelumnya:{{pelanggan.pengguna_paket.pengguna_paket_nama}}</small>
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="">Harga produk</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="selectedCart.item_harga" disabled />
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="">Biaya tambahan</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="biaya_tambahan" />
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <h3>{{total | currency}}</h3>
                                                        <input type="hidden" v-model="total" class="form-control" disabled>
                                                    </div>
                                                </div>
                                                <div class="form-row"></div>
                                                <div class="form-row" hidden>
                                                    <div class="form-group col-md-6">
                                                        <label for="Databarang">Data pelanggan Diupdate</label>
                                                        <input type="date" class="form-control" id="Databarang" hidden v-model="eddit.sekarang">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">Pengguna Yang Update Pelanggan</label>
                                                        <select id="inputState" class="form-control" hidden>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <h6 class="txt-dark capitalize-font">&nbsp;</h6>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Update</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/pelanggan_2">
                                                            Kembali
                                                        </router-link>
                                                    </div>
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
            </div>
        </div>
    </div>
</template>
<script src="./Service/upgrade_pelanggan"></script>
