<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Tambah Master-ID</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="addMasterID">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Kode master</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="id.id_kode">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Cabang Master-ID</label>
                                                        <multiselect v-model="id.id_domain" tag-placeholder="Cari Domain" label="domain_nama" track-by="_id" :options="domain" :taggable="true"></multiselect>
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="inputState">Status Aktiv</label>
                                                        <multiselect v-model="id.status" :options="status_aktiv" placeholder="Pilih salah satu" label="text"></multiselect>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Tambah</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/master">
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
<script src="./Service/tambah_master_id"></script>