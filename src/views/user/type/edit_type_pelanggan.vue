<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Edit tipe pelanggan</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="edittipe">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Kode tipe</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="pembantu_type.pembantu_tipe_kode">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Nama tipe</label>
                                                        <input type="text" class="form-control" v-model="pembantu_type.pembantu_tipe_nama">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="inputState">Status Aktiv</label>
                                                        <multiselect v-model="pembantu_type.pembantu_tipe_status" :options="status_aktiv" placeholder="Pilih salah satu" label="text"></multiselect>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Update</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/type_pelanggan">
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
<script src="./Service/edit_type_pelanggan"></script>