<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Update Alat Pelanggan: "Nama Pelanggan"</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="addAkun">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Kode</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="kode.kode">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Nama</label>
                                                        <input type="text" class="form-control" v-model="kode.nama">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Subklasifikasi</label>
                                                        <input type="text" class="form-control" v-model="kode.subklasifikasi">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="inputState">Status Aktiv</label>
                                                        <select id="inputState" class="form-control" v-model="kode.status">
                                                            <option selected>Choose...</option>
                                                            <option value="Aktiv">Aktiv</option>
                                                            <option value="Nonaktif">Nonaktif</option>
                                                        </select>
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
<script src="./Service/Ganti_alat"></script>