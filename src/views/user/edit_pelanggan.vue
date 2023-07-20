<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Update Pelanggan</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="ubah">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-12">
                                                        <label for="inputname">Nama</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="pelanggan.pengguna_nama" placeholder="Nama">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="inputname">Kabupaten</label>
                                                        <select class="form-control" v-model.lazy="pilih_kabupaten">
                                                            <option v-for="(kabupaten,k) in list_kabupaten" :key="k">{{kabupaten.kabupaten}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Kecamatan</label>
                                                        <select class="form-control" v-model.lazy="pilih_kecamatan">
                                                            <option v-for="(kecamatan,k) in list_kecamatan" :key="k">{{kecamatan.kecamatan}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Desa</label>
                                                        <select class="form-control" v-model="pilih_desa">
                                                            <option v-for="(desa,k) in list_desa" :key="k">{{desa.desa}}</option>
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
                                                    <div class="form-group col-md-8">
                                                        <label for="inputname">Dusun</label>
                                                        <input type="text" class="form-control" v-model="alamat_dusun">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">No.Telepon</label>
                                                        <input type="number" class="form-control" v-model="pelanggan.pengguna_no_telepon">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">Jenis Kelamin</label>
                                                        <select id="inputState" class="form-control" v-model="pelanggan.pengguna_jenis_kelamin">
                                                            <option value="Laki-Laki">Laki-Laki</option>
                                                            <option value="Perempuan">Perempuan</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Type pelanggan</label>
                                                        <select class="form-control" v-model="pelanggan.pengguna_tipe_pelanggan">
                                                            <option v-for="tipe in tipes" v-bind:key="tipe._id">{{tipe.type_nama}}</option>
                                                        </select>
                                                        <!-- <multiselect v-model="pelanggan.tipe_pelanggan" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="type_nama" track-by="_id" :options="tipes" ></multiselect> -->
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Status Pembayaran</label>
                                                        <select class="form-control" v-model="pelanggan.pengguna_status_bayar">
                                                            <option>Pascabayar</option>
                                                            <option>Prabayar</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label class="typo__label">Pilih Divisi</label>
                                                        <multiselect v-model="pelanggan.pengguna_departmen_group" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pembantu_departmen_nama" track-by="_id" :options="departmen" :multiple="true" :taggable="true"></multiselect>
                                                    </div>
                                                </div>
                                                <div class="form-row" hidden>
                                                    <div class="form-group col-md-4">
                                                        <label for="inputAddress">Data pelanggan Ditambahkan</label>
                                                        <input type="date" class="form-control">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="Databarang">Data pelanggan Diupdate</label>
                                                        <input type="date" class="form-control" id="Databarang" hidden v-model="pelanggan.sekarang">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="inputState">Pengguna Yang Update Pelanggan</label>
                                                        <select id="inputState" class="form-control" hidden>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-card mr-10"></i>KTP dan NPWP</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-6">
                                                        <label for="">No.KTP</label>
                                                        <input type="number" class="form-control" v-model="pelanggan.pengguna_no_ktp">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">NPWP</label>
                                                        <input type="number" class="form-control" v-model="pelanggan.pengguna_no_npwp">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-cast-connected mr-10"></i>PPOE</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-4">
                                                        <label for="">PPOE</label>
                                                        <input type="email" class="form-control" v-model="pelanggan.pengguna_ppoe">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="">Tanggal aktivasi</label>
                                                        <input type="date" class="form-control" v-model="pelanggan.pengguna_tanggal_pemasangan" disabled>
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="">Lokasi Pemasangan</label>
                                                        <input type="text" class="form-control" v-model="pelanggan.pengguna_lokasi_pasang">
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Pegawai yang PSB</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-12 text-center">
                                                        <div class="form-group col-md-6">
                                                            <label for="">Pegawai yang PSB</label>
                                                            <multiselect v-model="pelanggan.pengguna_yang_psb.pengguna_nama_psb" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pegawai" :multiple="true" :taggable="true"></multiselect>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="">Fee PSB</label>
                                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="pelanggan.pengguna_fee_psb" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Pegawai yang PSB</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-12 text-center">
                                                        <div class="form-group col-md-12">
                                                            <label></label>
                                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="pelanggan.pengguna_fee_psb" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <h6 class="txt-dark capitalize-font">&nbsp;</h6>
                                                <hr class="light-grey-hr" />
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
<script src="./Service/edit_pelanggan"></script>