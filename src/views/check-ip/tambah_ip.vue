<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6>Tambah IP</h6>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form>
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="inputname">Network</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="network">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label>Nama pengguna</label>
                                                        <input type="text" class="form-control" v-model="nama_pengguna">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit" @click.prevent="tombol">Tambah</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/ip">
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
<script src="./Service/tambah_ip"></script>