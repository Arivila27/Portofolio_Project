<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form>
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label>Hari</label>
                                                        <select class="form-control" v-model="jadwal.hari">
                                                            <option v-for="day in day" :key="day.id">{{day.name}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="inputname">Tanggal masuk</label>
                                                        <input type="date" class="form-control" v-model="jadwal.tanggal">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="inputState">Pegawai yang masuk</label>
                                                        <multiselect v-model="jadwal.pegawai_masuk" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pegawai" :multiple="true" :taggable="true"></multiselect>
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="inputState">Pegawai yang libur</label>
                                                        <multiselect v-model="jadwal.pegawai_libur" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pegawai" :multiple="true" :taggable="true"></multiselect>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit" @click.prevent="addjadwal">Tambah</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/penjadwalan">
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
<script src="./Service/tambah_penjadwalan"></script>