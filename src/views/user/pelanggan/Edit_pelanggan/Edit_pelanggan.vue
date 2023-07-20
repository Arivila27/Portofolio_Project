<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6>Ubah Data Pelanggan</h6>
                                </div>
                                <div class="pull-right">
                                    <router-link class="btn btn-danger" to="/pelanggan_2">
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
                                            <h4 slot="title">Ubah Data Pelanggan</h4>
                                            <tab-content title="Data diri" icon="ti-user">
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="inputname">Nama</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="M_pengguna.pengguna_nama" placeholder="Nama">
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
                                                </div>
                                            </tab-content>
                                            <tab-content title="Alamat Lengkap" icon="ti-map">
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="inputname">Kabupaten</label>
                                                        <select class="form-control" v-model.lazy="pilih_kabupaten">
                                                            <option v-for="(kabupaten,k) in list_kabupaten" :key="k">{{kabupaten.kabupaten}}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-8">
                                                        <label for="inputname">Kecamatan</label>
                                                        <select class="form-control" v-model.lazy="pilih_kecamatan">
                                                            <option v-for="(kecamatan,k) in list_kecamatan" :key="k">{{kecamatan.kecamatan}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-2">
                                                        <label for="inputname">RT</label>
                                                        <input type="text" class="form-control" v-model="alamat_rt">
                                                    </div>
                                                    <div class="form-group col-md-2">
                                                        <label for="inputname">RW</label>
                                                        <input type="text" class="form-control" v-model="alamat_rw">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="inputname">Dusun</label>
                                                        <input type="text" class="form-control" v-model="alamat_dusun">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="inputname">Desa</label>
                                                        <select class="form-control" v-model="pilih_desa">
                                                            <option v-for="(desa,k) in list_desa" :key="k">{{desa.desa}}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="inputname">Alamat(*Jika data kabupaten belum ada)</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_alamat">
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
<script src="./Service/edit_pelanggan"></script>