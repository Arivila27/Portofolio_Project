<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6 class="txt-light">Tambah Master-harga</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="addHarga">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="inputname">Nama Potongan</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="harga.nama">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Nominal Potongan</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="harga.jumlah_potongan" />
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="clearfix"></div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Tambah</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/list_harga">
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
<script src="./Service/tambah_harga"></script>