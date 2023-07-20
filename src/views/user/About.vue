<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h1><b>Tambah Data pelanggan</b></h1>
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <h3>&nbsp;</h3>
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Tambah Pelanggan Internet</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="form-wrap">
                                        <div class="col-md-12">
                                            <form>
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Nama</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="M_pengguna.pengguna_nama" placeholder="Nama">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Alamat</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="M_pengguna.pengguna_alamat" placeholder="Alamat">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">No.Telepon</label>
                                                        <input type="number" class="form-control" v-model="M_pengguna.pengguna_no_telepon">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">Jenis Kelamin</label>
                                                        <select id="inputState" v-model="M_pengguna.pengguna_jenis_kelamin" class="form-control">
                                                            <option selected>Choose...</option>
                                                            <option value="Laki-Laki">Laki-Laki</option>
                                                            <option value="Perempuan">Perempuan</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label class="typo__label">Pilih Divisi</label>
                                                        <multiselect v-model="M_pengguna.pengguna_departmen" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pembantu_nama" track-by="_id" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                                    </div>
                                                </div>
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
                                                        <select id="inputState" class="form-control" v-model="M_pengguna.pengguna_user_updated" hidden>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>KTP dan NPWP</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-6">
                                                        <label for="">No.KTP</label>
                                                        <input type="number" class="form-control" v-model="M_pengguna.pengguna_no_ktp">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Upload KTP</label>
                                                        <input type="file" class="form-control">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">NPWP</label>
                                                        <input type="number" class="form-control" v-model="M_pengguna.pengguna_no_npwp">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Upload NPWP</label>
                                                        <input type="file" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Barang</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-12 text-center">
                                                        <button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg1">Buka Barang</button>
                                                        <div class="modal fade bd-example-modal-lg1" tabindex="-1" id="update-barang" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
                                                            <div class="modal-dialog modal-lg">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                                        <h5 class="modal-title" id="myLargeModalLabel">Edit</h5>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <h5 class="mb-15">Edit Data</h5>
                                                                        <div class="col-md-12">
                                                                            <div class="panel panel-default card-view panel-refresh">
                                                                                <div class="refresh-container">
                                                                                    <div class="la-anim-1"></div>
                                                                                </div>
                                                                                <div class="panel-heading">
                                                                                    <div class="pull-left">
                                                                                        <h6 class="panel-title txt-dark">Data Complains Terbaru</h6>
                                                                                    </div>
                                                                                    <div class="pull-right">
                                                                                        <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                                                                            <i class="zmdi zmdi-replay"></i>
                                                                                        </a>
                                                                                        <a href="#" class="pull-left inline-block full-screen mr-15">
                                                                                            <i class="zmdi zmdi-fullscreen"></i>
                                                                                        </a>
                                                                                        <router-link to="/tambah_pelanggan">
                                                                                            <a href="#" class="pull-left inline-block">
                                                                                                <i class="zmdi zmdi-file-plus"></i>
                                                                                            </a>
                                                                                        </router-link>
                                                                                    </div>
                                                                                    <div class="clearfix"></div>
                                                                                </div>
                                                                                <div class="panel-body">
                                                                                    <table class="table table-borderless">
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th scope="col">#</th>
                                                                                                <th scope="col">Group</th>
                                                                                                <th scope="col">Nama</th>
                                                                                                <th scope="col">Merk</th>
                                                                                                <th scope="col">Aksi</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr v-for="barang in M_barang">
                                                                                                <th>1</th>
                                                                                                <th>{{barang.item_group}}</th>
                                                                                                <td>{{barang.item_nama}}</td>
                                                                                                <td>{{barang.item_merk}}</td>
                                                                                                <td><button class="btn btn-primary" v-on:click="detailnya(barang._id,barang.item_nama,barang.item_merk,barang.item_seri,barang.item_stok,barang.item_kode_barang,barang.item_harga)">Pilih</button></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-danger text-left" v-on:click="updatepelanggan()">Ubah</button>
                                                                        <button type="button" class="btn btn-danger text-left" data-dismiss="modal">Close</button>
                                                                    </div>
                                                                </div>
                                                                <!-- /.modal-content -->
                                                            </div>
                                                            <!-- /.modal-dialog -->
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">ID Barang</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_barang_id" disabled>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">No.Seri</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_barang_seri" disabled>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">Kode.Barang</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_barang_kode" disabled>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Nama Barang</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_barang_nama" disabled>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputAddress">Merk</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_barang_merk" disabled>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Produk</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-12 text-center">
                                                        <button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Buka Produk</button>
                                                        <div class="modal fade bd-example-modal-lg" tabindex="-1" id="update" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
                                                            <div class="modal-dialog modal-lg">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                                        <h5 class="modal-title" id="myLargeModalLabel">Edit</h5>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <h5 class="mb-15">Edit Data</h5>
                                                                        <div class="col-md-12">
                                                                            <div class="panel panel-default card-view panel-refresh">
                                                                                <div class="refresh-container">
                                                                                    <div class="la-anim-1"></div>
                                                                                </div>
                                                                                <div class="panel-heading">
                                                                                    <div class="pull-left">
                                                                                        <h6 class="panel-title txt-dark">Data Complains Terbaru</h6>
                                                                                    </div>
                                                                                    <div class="pull-right">
                                                                                        <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                                                                            <i class="zmdi zmdi-replay"></i>
                                                                                        </a>
                                                                                        <a href="#" class="pull-left inline-block full-screen mr-15">
                                                                                            <i class="zmdi zmdi-fullscreen"></i>
                                                                                        </a>
                                                                                        <router-link to="/tambah_pelanggan">
                                                                                            <a href="#" class="pull-left inline-block">
                                                                                                <i class="zmdi zmdi-file-plus"></i>
                                                                                            </a>
                                                                                        </router-link>
                                                                                    </div>
                                                                                    <div class="clearfix"></div>
                                                                                </div>
                                                                                <div class="panel-body">
                                                                                    <table class="table table-borderless">
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th scope="col">#</th>
                                                                                                <th scope="col">Group</th>
                                                                                                <th scope="col">Nama</th>
                                                                                                <th scope="col">Merk</th>
                                                                                                <th scope="col">Aksi</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr v-for="barang in M_produk">
                                                                                                <th>1</th>
                                                                                                <th>{{barang.item_group}}</th>
                                                                                                <td>{{barang.item_nama}}</td>
                                                                                                <td>{{barang.item_merk}}</td>
                                                                                                <td><button class="btn btn-primary" v-on:click="detail_produk(barang._id,barang.item_group,barang.item_nama,barang.item_merk,barang.item_seri,barang.item_stok,barang.item_kode_barang,barang.item_harga)">Pilih</button></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-danger text-left" v-on:click="updatepelanggan()">Ubah</button>
                                                                        <button type="button" class="btn btn-danger text-left" data-dismiss="modal">Close</button>
                                                                    </div>
                                                                </div>
                                                                <!-- /.modal-content -->
                                                            </div>
                                                            <!-- /.modal-dialog -->
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Produk ID</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_produk_id" disabled>
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="inputState">Group Produk</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_group" disabled>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Nama Produk</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_produk_nama" disabled>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputAddress">Paket</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_produk_merk" disabled>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputAddress">Kode Produk</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_produk_kode" disabled>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputAddress">Seri Produk</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_produk_seri" disabled>
                                                    </div>
                                                    <div class="form-group col-md-3">
                                                        <label for="inputAddress">PPOE</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_ppoe">
                                                        <small>*Ambon@bitniaga.com</small>
                                                    </div>
                                                    <div class="form-group col-md-3">
                                                        <label for="">Tanggal Aktivasi</label>
                                                        <input type="date" class="form-control" v-model="M_pengguna.pengguna_tanggal_pemasangan" disabled>
                                                        <small>*Dapat diisi ketika mengaktifkan pelanggan</small>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputAddress">Alamat Pemasangan</label>
                                                        <input type="text" class="form-control" v-model="M_pengguna.pengguna_lokasi_pasang">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <router-link to="/pelanggan_baru">
                                                            <button type="submit" class="btn btn-primary" @click="addToApi">Tambah</button>
                                                        </router-link>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <router-link to="/pelanggan_baru">
                                                            <button type="button" class="btn btn-danger">Kembali</button>
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect'
export default {
    components : {Multiselect},
    name: 'M_pengguna',
    data() {
        return {
            created: new Date().toISOString().slice(0, 10),
            updated: new Date().toISOString().slice(0, 10),
            barangs: [],
            ambil: '',
            M_barang: [],
            M_produk: [],
            M_tagihan: [],
            M_pengguna: {
                internet: 'Internet',
                pengguna_email: '',
                pengguna_group: '',
                pengguna_nama: '',
                pengguna_role: 'pelanggan',
                pengguna_created: '',
                pengguna_updated: '',
                pengguna_user_updated: '',
                pengguna_no_telepon: '',
                pengguna_jenis_kelamin: '',
                pengguna_status: 'B',
                pengguna_alamat: '',
                pengguna_departmen:'',
                pengguna_no_ktp: '',
                pengguna_no_npwp: '',
                pengguna_paket: '',
                pengguna_tanggal_pemasangan: '',
                pengguna_produk_id: '',
                pengguna_produk_nama: '',
                pengguna_produk_seri: '',
                pengguna_produk_kode: '',
                pengguna_produk_merk: '',
                pengguna_penggunaan: '',
                pengguna_ppoe: '',
                pengguna_lokasi_pasang: '',
                pengguna_barang_id: '',
                pengguna_barang_nama: '',
                pengguna_barang_merk: '',
                pengguna_barang_seri: '',
                pengguna_barang_kode: ''
            },
            _id: '',
            item_nama: '',
            item_kode_barang: '',
            item_seri_barang: '',
            item_merk: '',
            item_seri: '',
            item_stok: '',
            item_ambil: '',
            item_kode_barang: '',
            item_biaya: '',
            _id2: '',
            item2_group: '',
            item2_nama: '',
            item2_merk: '',
            item2_seri_produk: '',
            item2_stok: '',
            item2_ambil: '',
            item2_kode_produk: '',
            setok: '',
            options:[],

        }
    },
    mounted() {
        this.getproduk()
        this.getdata()
        this.getbarang()
        this.getdepartmen()
    },
   
    methods: {
        // Mendapat kan Data DEpartmen 
        getdepartmen(){
            axios.get('http://localhost:5000/pembantu_departmen')
            .then((response) =>{
                console.log(response.data);
                this.options= response.data;
            })
            .catch((error) =>{
                console.log(error);
            });
        },
        // ----
        addcart(barang) {
            barang.item_diambil += 1;
            this.barangs.push(barang);
        },
        removecart(barang) {
            barang.item_diambil -= 1;
            this.barangs.splice(this.barangs.indexOf(barang), 1);
        },
        addToApi() {
            let newM_pengguna = {
                pengguna_nama: this.M_pengguna.pengguna_nama,
                pengguna_jenis_kelamin: this.M_pengguna.pengguna_jenis_kelamin,
                pengguna_created: this.M_pengguna.pengguna_created,
                pengguna_updated: this.M_pengguna.pengguna_updated,
                pengguna_role: this.M_pengguna.pengguna_role,
                pengguna_no_telepon: this.M_pengguna.pengguna_no_telepon,
                pengguna_user_updated: this.M_pengguna.pengguna_user_updated,
                pengguna_status: this.M_pengguna.pengguna_status,
                pengguna_alamat: this.M_pengguna.pengguna_alamat,
                pengguna_no_ktp: this.M_pengguna.pengguna_no_ktp,
                pengguna_no_npwp: this.M_pengguna.pengguna_no_npwp,
                pengguna_ppoe: this.M_pengguna.pengguna_ppoe,
                pengguna_lokasi_pasang: this.M_pengguna.pengguna_lokasi_pasang,
                pengguna_tanggal_pemasangan: this.M_pengguna.pengguna_tanggal_pemasangan,
                pengguna_departmen: {
                            pengguna_departmen_group:this.M_pengguna.pengguna_departmen
                },
                pengguna_produk: {
                    pengguna_produk_id: this.M_pengguna.pengguna_produk_id,
                    pengguna_produk_nama: this.M_pengguna.pengguna_produk_nama,
                    pengguna_produk_merk: this.M_pengguna.pengguna_produk_merk,
                    pengguna_produk_seri: this.M_pengguna.pengguna_produk_seri,
                    pengguna_produk_kode: this.M_pengguna.pengguna_produk_kode
                },
                pengguna_barang: {
                    pengguna_barang_id: this.M_pengguna.pengguna_barang_id,
                    pengguna_barang_nama: this.M_pengguna.pengguna_barang_nama,
                    pengguna_barang_merk: this.M_pengguna.pengguna_barang_merk,
                    pengguna_barang_kode: this.M_pengguna.pengguna_barang_kode,
                    pengguna_barang_seri: this.M_pengguna.pengguna_barang_seri
                }

            }
            console.log(newM_pengguna);

            axios.post('http://localhost:5000/M_pengguna', newM_pengguna)
                .then((response) => {
                    console.log(response);
                    this.$router.push({ name: 'pelanggan_baru' })
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        detailnya(_id, nama, merk, seri, stok, kode, harga) {
            this.M_pengguna.pengguna_barang_id = _id;
            this.M_pengguna.pengguna_barang_nama = nama;
            this.M_pengguna.pengguna_barang_merk = merk;
            this.M_pengguna.pengguna_barang_seri = seri;
            this.M_pengguna.pengguna_barang_stok = stok;
            this.M_pengguna.pengguna_barang_kode = kode;
            this.item_biaya = harga;
            $('#update-barang').modal('hide');
        },
        detail_produk(_id, group, nama, paket, seri, stok, kode, harga) {
            this.M_pengguna.pengguna_produk_id = _id;
            this.M_pengguna.pengguna_group = group;
            this.M_pengguna.pengguna_produk_merk = paket;
            this.M_pengguna.pengguna_produk_nama = nama;
            this.M_pengguna.pengguna_produk_seri = seri;
            this.item2_stok = stok;
            this.M_pengguna.pengguna_produk_kode = kode;
            this.M_pengguna.pengguna_biaya = harga;
            $('#update').modal('hide');
        },
        getbarang() {
            axios.get('http://localhost:5000/M_item/barang')
                .then((response) => {
                    console.log(response.data);
                    this.M_barang = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getproduk() {
            axios.get('http://localhost:5000/M_item/produk')
                .then((response) => {
                    console.log(response.data);
                    this.M_produk = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        getdata() {
            axios.get('http://localhost:5000/M_tagihan')
                .then((response) => {
                    console.log(response.data);
                    this.M_tagihan = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    },
     computed: {
        item_hasil: function() {
            return this.item_stok - this.item_ambil;
        },
        hasil2: function() {
            return this.item2_stok - this.M_pengguna.pengguna_penggunaan;
        },
        total_biaya: function() {
            return this.item_biaya * this.item_ambil;
        },
        total_produk: function() {
            return this.M_pengguna.pengguna_biaya * this.M_pengguna.pengguna_penggunaan;
        },
        Total: function() {
            return this.total_biaya + this.total_produk;
        }
    }

};
</script>