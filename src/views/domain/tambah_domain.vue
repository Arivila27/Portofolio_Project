<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Tambah Domain</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="addDomain">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Kode domain</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="domain.domain_kode">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Nama domain</label>
                                                        <input type="text" class="form-control" v-model="domain.domain_nama">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Nama Kabupaten</label>
                                                        <input type="text" class="form-control" v-model="domain.domain_kabupaten">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="inputState">Status Aktiv</label>
                                                        <multiselect v-model="domain.status" :options="status_aktiv" placeholder="Pilih salah satu" label="text"></multiselect>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Tambah</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/domain">
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
<script src="./Service/tambah_domain"></script>