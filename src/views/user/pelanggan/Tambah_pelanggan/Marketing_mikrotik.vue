<template>
    <div class="tab-content mt-5">
        <div id="internet" class="tab-pane fade in active">
            <div class="panel panel-default card-view">
                <div class="panel-heading">
                    <div class="pull-left">
                        <h6 class="txt-light">Tambah Pelanggan Internet</h6>
                    </div>
                    <!-- <div class="pull-right">
                        <router-link class="btn btn-danger" to="/pelanggan">
                            Kembali
                        </router-link>
                    </div> -->
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
                <div class="panel-wrapper collapse in">
                    <div class="panel-body">
                        <div class="form-wrap">
                            <form-wizard @on-complete="addToApi">
                                <h4 slot="title">Registrasi Pelanggan</h4>
                                <tab-content title="Data diri" icon="ti-user">
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label>Pelanggan ID, ID terakhir = {{last_id}}</label>
                                            <div class="input-group mb-15" v-if="last_id === 'Kosong'">
                                                <span class="input-group-addon bg-grey2" v-if="m_id.id_kode">{{m_id.id_kode}}</span>
                                                <span class="input-group-addon bg-grey2" v-else>Jika tidak ada id depan isi manual saja</span>
                                                <input type="number" class="form-control" v-model="M_pengguna.pengguna_id" required v-if="last_id === 'Kosong'">
                                                <!-- <input type="number" class="form-control" v-model="M_pengguna.pengguna_id" required v-else> -->
                                            </div>
                                            <div class="input-group mb-15" v-else>
                                                <span class="input-group-addon bg-grey2">{{last_id_plust}}</span>
                                                <!-- <input type="number" class="form-control" v-model="M_pengguna.pengguna_id" required v-else> -->
                                            </div>
                                            <!-- <input type="number" class="form-control" v-model="M_pengguna.pengguna_id"> -->
                                        </div>
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
                                <tab-content title="Product" icon="ti-receipt">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Pilih Router</label>
                                                <select class="form-control" v-model="pilih_router"  @change="onChange($event)">
                                                    <option v-for="prod in M_router" :key="prod._id" :value="prod">{{prod.name}}</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label>Password PPOE</label>
                                                <input type="text" class="form-control" v-model="M_pengguna.password_ppoe">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Produk</label>
                                                <select class="form-control" v-model="selectedCart">
                                                    <option v-for="prod in cart" :key="prod._id" :value="prod">{{prod.item_nama}}</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Harga Produk</label>
                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="selectedCart.item_harga" disabled />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Biaya tambahan</label>
                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="biaya_tambahan" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Biaya Registrasi</label>
                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="biaya_registrasi" />
                                            </div>
                                        </div>
                                        <!-- <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Biaya Prored(Jika ada isi dengan minus)</label>
                                                <input type="number" class="form-control" v-model.number="biaya_prored">
                                            </div>
                                        </div> -->
                                        <div class="form-row col-md-12">
                                            <div class="form-group col-md-12">
                                                <h3>Total:{{total | currency}}</h3>
                                                <input type="hidden" class="form-control" v-model="total">
                                            </div>
                                        </div>
                                </tab-content>
                                <tab-content title="pegawai PSB" icon="ti-medall">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Pegawai</label>
                                            <multiselect v-model="M_pengguna.pengguna_nama_psb" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="opsi" :multiple="true" :taggable="true"></multiselect>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Fee PSB</label>
                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="M_pengguna.fee_psb" />
                                        </div>
                                    </div>
                                </tab-content>
                                <tab-content title="Alat" icon="ti-package">
                                    <div class="row">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Pilih Alat(Sewa)</label>
                                                <multiselect v-model="pilih_alat" :multiple="true" :options="M_alat" :searchable="true" label="item_nama" placeholder="Pilih Alat" track-by="_id"></multiselect>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Pilih Alat(Beli)</label>
                                                <multiselect v-model="pilih_alat_beli" :multiple="true" :options="M_alat" :searchable="true" label="item_nama" placeholder="Pilih Alat" track-by="_id"></multiselect>
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label>Lokasi Pemasangan</label>
                                                <input type="text" class="form-control" v-model="M_pengguna.pengguna_lokasi_pasang">
                                            </div>
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
</template>
<script src="./Service/Marketing_mikrotik"></script>