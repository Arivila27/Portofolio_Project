<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Cek Pelanggan Akses : {{this.pengguna.pengguna_ppoe}}</h6>
                                <h6>Catatan * Data ini tidak masuk mikrotik hanya validasi dari pelanggan sebelumnya yang belum terdata</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="ubah">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="">PPOE</label>
                                                        <input type="text" class="form-control" v-model="pengguna.pengguna_ppoe">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="inputname">Host</label>
                                                        <input type="text" class="form-control" v-model="pengguna.pengguna_host">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Port</label>
                                                        <input type="text" class="form-control" v-model="pengguna.pengguna_port">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">User Winbox</label>
                                                        <input type="text" class="form-control" v-model="pengguna.pengguna_winbox_username">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Password Winbox</label>
                                                        <input type="password" class="form-control" v-model="pengguna.pengguna_winbox_password">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Password PPOE</label>
                                                        <input type="password" class="form-control" v-model="pengguna.pengguna_ppoe_password">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Local Address</label>
                                                        <input type="text" class="form-control" v-model="pengguna.pengguna_winbox_local_address">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Remote Address</label>
                                                        <input type="text" class="form-control" v-model="pengguna.pengguna_winbox_remote_address">
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="clearfix"></div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Update</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/pelanggan">
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
<script src="./Service/edit_mikrotik_pelanggan"></script>