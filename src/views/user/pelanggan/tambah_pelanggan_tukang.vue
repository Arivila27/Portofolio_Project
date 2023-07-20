<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6>Tambah Pelanggan Internet(Tukang)</h6>
                                </div>
                                <div class="pull-right">
                                    <router-link class="btn btn-danger" to="/pelanggan">
                                        Kembali
                                    </router-link>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="form-wrap">
                                        <form-wizard @on-complete="addToApi">
                                            <h4 slot="title">Registrasi Pelanggan</h4>
                                            <tab-content title="Data diri" icon="ti-user">
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Nama</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="M_pengguna.pengguna_nama" placeholder="Nama">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Alamat</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="M_pengguna.pengguna_alamat" placeholder="Alamat">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label>No.Telepon</label>
                                                        <input type="number" class="form-control" v-model="M_pengguna.pengguna_no_telepon">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">Jenis Kelamin</label>
                                                        <select id="inputState" v-model="M_pengguna.pengguna_jenis_kelamin" class="form-control">
                                                            <option value="Laki-Laki" selected>Laki-Laki</option>
                                                            <option value="Perempuan">Perempuan</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label>Type pelanggan</label>
                                                        <select class="form-control" v-model="M_pengguna.pengguna_tipe_pelanggan">
                                                            <option v-for="tipe in tipes" v-bind:key="tipe._id">{{tipe.pembantu_tipe_nama}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-12">
                                                            <label class="typo__label">Pilih Divisi</label>
                                                            <select class="form-control" v-model="M_pengguna.pengguna_departmen">
                                                                <option v-for="dpr in departmen" :key="dpr._id">{{dpr.pembantu_departmen_nama}}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tab-content>
                                            <tab-content title="KTP dan NPWP" icon="ti-id-badge">
                                                <div class="form-row" hidden>
                                                    <div class="form-group col-md-4">
                                                        <label for="inputAddress">Data pelanggan Ditambahkan</label>
                                                        <input type="date" class="form-control" v-model="created">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="Databarang">Data pelanggan Diupdate</label>
                                                        <input type="date" class="form-control" id="Databarang" v-model="updated" hidden>
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="inputState">Pengguna Yang Update Pelanggan</label>
                                                        <input type="text" class="form-control" id="inputState" v-model="createdBy">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label>No.KTP</label>
                                                        <input type="number" class="form-control" v-model="M_pengguna.pengguna_no_ktp">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label>NPWP</label>
                                                        <input type="number" class="form-control" v-model="M_pengguna.pengguna_no_npwp">
                                                    </div>
                                                </div>
                                            </tab-content>
                                            <tab-content title="Product" icon="ti-receipt">
                                                <div class="row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-local-offer mr-10"></i>Produk</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-row col-md-12">
                                                        <div class="form-group col-md-6">
                                                            <label>Produk</label>
                                                            <select class="form-control" v-model="selectedCart">
                                                                <option v-for="prod in cart" :key="prod._id" :value="prod">{{prod.item_nama}}</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label>Harga Produk</label>
                                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="selectedCart.item_harga" disabled />
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label>Biaya tambahan</label>
                                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="biaya_tambahan" />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label>Biaya Registrasi</label>
                                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="biaya_registrasi" />
                                                        </div>
                                                    </div>
                                                    <div class="form-row col-md-12">
                                                        <div class="form-group col-md-12">
                                                            <h3>Total:{{total | currency}}</h3>
                                                            <input type="hidden" class="form-control" v-model="total">
                                                        </div>
                                                    </div>
                                                </div>
                                            </tab-content>
                                        </form-wizard>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/tambah_pelanggan_tukang"></script>