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
                                            <form @submit.prevent="register">
                                                <div class="form-group">
                                                    <label class="control-label mb-10" for="Nama">Nama</label>
                                                    <input type="text" class="form-control" required="true" id="Nama" placeholder="Masukan Nama" v-model="username">
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label mb-10" for="email">Email</label>
                                                    <input type="text" class="form-control" required="true" id="email" placeholder="Masukan Email" v-model="email">
                                                </div>
                                                <div class="form-group">
                                                    <label class="pull-left control-label mb-10" for="password">Password</label>
                                                    <div class="clearfix"></div>
                                                    <input type="password" class="form-control" required="true" id="password" placeholder="Masukan Password" v-model="password">
                                                </div>
                                                <div class="form-group">
                                                    <label class="pull-left control-label mb-10" for="password">Domain</label>
                                                    <div class="clearfix"></div>
                                                    <multiselect v-model="pilih_domain" track-by="_id" label="domain_nama" :options="domain"></multiselect>
                                                </div>
                                                <div class="form-group text-center">
                                                    <button type="submit" class="btn btn-primary btn-rounded">Daftar</button>
                                                </div>
                                            </form>
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
<script src="./Tambah_admin_cabang"></script>