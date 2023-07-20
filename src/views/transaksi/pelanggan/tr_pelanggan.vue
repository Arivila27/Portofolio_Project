<template>
    <div class="pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="jumbotron">
                            <h1 class="display-4">Hello, world!</h1>
                            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr class="my-4">
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <router-link to="/user">
                                <a class="btn btn-danger btn-lg" role="button">Back</a>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="panel panel-info card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-light">panel info</h6>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="panel panel-info card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-light">panel info</h6>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="panel panel-info card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-light">panel info</h6>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Row -->
            </div>
            <div class="row">
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
                                <router-link to="/tambah_transaksi_pelanggan">
                                    <a href="#" class="pull-left inline-block">
                                        <i class="zmdi zmdi-file-plus"></i>
                                    </a>
                                </router-link>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div class="form-group col-md-4">
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group col">
                                <button type="button" class="btn btn-default" style="margin-right:300px"><i class="fa fa-search"></i></button>
                            </div>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Group</th>
                                        <th>Nama</th>
                                        <th>Alamat</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(pelanggan, index) in M_pengguna">
                                        <th>{{index + 1}}</th>
                                        <th>{{pelanggan.pengguna_group}}</th>
                                        <td>{{pelanggan.pengguna_nama}}</td>
                                        <td>{{pelanggan.pengguna_alamat}}</td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg" v-on:click="editpengguna(pelanggan._id,pelanggan.pengguna_group,pelanggan.pengguna_nama,pelanggan.pengguna_role,pelanggan.pengguna_jenis_kelamin,pelanggan.pengguna_created,pelanggan.pengguna_updated,pelanggan.pengguna_user_updated,pelanggan.pengguna_no_telepon,pelanggan.pengguna_status,pelanggan.pengguna_alamat,pelanggan.pengguna_no_ktp,pelanggan.pengguna_no_npwp,pelanggan.pengguna_paket,pelanggan.pengguna_ppoe,pelanggan.pengguna_lokasi_pasang,pelanggan.pengguna_tanggal_pemasangan,pelanggan.pengguna_produk.pengguna_produk_id,pelanggan.pengguna_produk.pengguna_produk_merk,pelanggan.pengguna_produk.pengguna_produk_nama,pelanggan.pengguna_produk.pengguna_produk_seri,pelanggan.pengguna_produk.pengguna_produk_kode,pelanggan.pengguna_produk.pengguna_produk_konsumsi,pelanggan.pengguna_produk.pengguna_produk_biaya,pelanggan.pengguna_barang.pengguna_barang_id,pelanggan.pengguna_barang.pengguna_barang_nama,pelanggan.pengguna_barang.pengguna_barang_seri,pelanggan.pengguna_barang.pengguna_barang_kode,pelanggan.pengguna_barang.pengguna_barang_merk,pelanggan.pengguna_barang.pengguna_barang_konsumsi,pelanggan.pengguna_barang.pengguna_barang_biaya,pelanggan.pengguna_total_bayar)"><i class="icon wb-reply" aria-hidden="true"></i>Update</a></li>
                                                        <!--  <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="hapuspengguna(pelanggan._id,pelanggan.pengguna_status)"><i class="icon wb-share" aria-hidden="true" disabled></i>Delete</a></li> -->
                                                        <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg" v-on:click="editpengguna(pelanggan._id,pelanggan.pengguna_group,pelanggan.pengguna_nama,pelanggan.pengguna_role,pelanggan.pengguna_jenis_kelamin,pelanggan.pengguna_created,pelanggan.pengguna_updated,pelanggan.pengguna_user_updated,pelanggan.pengguna_no_telepon,pelanggan.pengguna_status,pelanggan.pengguna_alamat,pelanggan.pengguna_no_ktp,pelanggan.pengguna_paket,pelanggan.pengguna_email,pelanggan.pengguna_biaya)"><i class="icon wb-share" aria-hidden="true"></i>Detail</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <div class="modal fade bs-example-modal-lg" tabindex="-1" id="update" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myLargeModalLabel">Edit</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15">Edit Data</h5>
                                                    <div class="col-md-12">
                                                        <div class="row">
                                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                                            <hr class="light-grey-hr" />
                                                            <div class="form-group col-md-4">
                                                                <label for="from">Divisi</label>
                                                                <select name="" id="" class="form-control" v-model="pengguna_group">
                                                                    <option value="Internet" selected>Internet</option>
                                                                    <option value="Software">Software</option>
                                                                    <option value="CCTV">CCTV</option>
                                                                </select>
                                                            </div>
                                                            <div class="form-group col-md-4">
                                                                <label for="to">Nama</label>
                                                                <input type="text" class="form-control" id="to" v-model="pengguna_nama">
                                                            </div>
                                                            <div class="form-group col-md-4">
                                                                <label for="yng_update">Alamat</label>
                                                                <input type="text" class="form-control" v-model="pengguna_alamat">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="">Jenis Kelamin</label>
                                                                <select name="" class="form-control" id="">
                                                                    <option value="Laki-Laki">Laki-Laki</option>
                                                                    <option value="Perempuan">Perempuan</option>
                                                                </select>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="">No.Telepon</label>
                                                                <input type="number" class="form-control" v-model="pengguna_no_telepon">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="upo">Data Pelanggan Updated</label>
                                                                <input type="date" id="upo" class="form-control" v-model="pengguna_updated">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="upl">Pelanggan Created</label>
                                                                <input type="date" id="upl" class="form-control" v-model="pengguna_created">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="">User Updated</label>
                                                                <input type="text" class="form-control" v-model="pengguna_user_updated">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>KTP Dan NPWP</h6>
                                                            <hr class="light-grey-hr" />
                                                            <div class="form-group col-md-6">
                                                                <label for="">No.KTP</label>
                                                                <input type="number" class="form-control" v-model="pengguna_no_ktp">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="">Upload KTP</label>
                                                                <input type="file" class="form-control">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="">No.NPWP</label>
                                                                <input type="number" class="form-control" v-model="pengguna_no_npwp">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="">Upload NPWP</label>
                                                                <input type="file" class="form-control">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Produk</h6>
                                                            <hr class="light-grey-hr" />
                                                            <div class="form-group col-md-4">
                                                                <label for="">Paket</label>
                                                                <input type="text" class="form-control" v-model="pengguna_produk_merk">
                                                            </div>
                                                            <div class="form-group col-md-4">
                                                                <label for="">PPOE</label>
                                                                <input type="text" class="form-control" v-model="pengguna_ppoe">
                                                            </div>
                                                            <div class="form-group col-md-4">
                                                                <label for="">Jumlah Yang Dipakai</label>
                                                                <input type="number" class="form-control" v-model="pengguna_produk_konsumsi">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label for="">Lokasi Pemasangan</label>
                                                                <input type="text" class="form-control" v-model="pengguna_lokasi_pasang">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="">Tanggal Pemasangan</label>
                                                                <input type="date" class="form-control" v-model="pengguna_tanggal_pemasangan">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-12">
                                                                <label for="">Biaya</label>
                                                                <input type="text" class="form-control" v-model="pengguna_produk_biaya">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Barang Yang digunakan</h6>
                                                            <hr class="light-grey-hr" />
                                                            <div class="form-group col-md-6">
                                                                <label for="">Merk Barang</label>
                                                                <input type="text" class="form-control" v-model="pengguna_barang_merk">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="">Nama Barang</label>
                                                                <input type="text" class="form-control" v-model="pengguna_barang_nama">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-4">
                                                                <label for="">Stok Digunakan</label>
                                                                <input type="text" class="form-control" v-model="pengguna_barang_konsumsi">
                                                            </div>
                                                            <div class="form-group col-md-4">
                                                                <label for="">Nomor Seri</label>
                                                                <input type="text" class="form-control" v-model="pengguna_barang_seri">
                                                            </div>
                                                            <div class="form-group col-md-4">
                                                                <label for="">Kode Barang</label>
                                                                <input type="text" class="form-control" v-model="pengguna_barang_kode">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-12">
                                                                <label for="">Biaya</label>
                                                                <input type="number" class="form-control" v-model="pengguna_barang_biaya">
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
                                    <div class="modal fade bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog ">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myModalLabel">Modal Heading</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15">[Number]</h5>
                                                    <p>Apakah Anda Yakin Iningin Menghapus ?</p>
                                                    <input type="text" class="form-control" v-model="_id">
                                                    <input type="text" class="form-control" v-model="pengguna_status">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteds()">Iya</button>
                                                    <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                    </div>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'M_pengguna',
    data() {
        return {
            M_pengguna: [],
            _id: '',
            pengguna_group: '',
            pengguna_nama: '',
            pengguna_role: '',
            pengguna_jenis_kelamin: '',
            pengguna_created: '',
            pengguna_updated: '',
            pengguna_user_updated: '',
            pengguna_no_telepon: '',
            pengguna_status: '',
            pengguna_alamat: '',
            pengguna_no_ktp: '',
            pengguna_no_npwp: '',
            pengguna_paket: '',
            pengguna_ppoe: '',
            pengguna_lokasi_pasang: '',
            pengguna_tanggal_pemasangan: '',
            pengguna_produk_id: '',
            pengguna_produk_merk: '',
            pengguna_produk_nama: '',
            pengguna_produk_seri: '',
            pengguna_produk_kode: '',
            pengguna_produk_konsumsi: '',
            pengguna_produk_biaya: '',
            pengguna_barang_id: '',
            pengguna_barang_nama: '',
            pengguna_barang_seri: '',
            pengguna_barang_kode: '',
            pengguna_barang_merk: '',
            pengguna_barang_konsumsi: '',
            pengguna_barang_biaya: '',
            pengguna_total_bayar: ''
        }
    },
    mounted() {
        this.getdata()
    },
    methods: {
        getdata() {
            axios.get('http://localhost:5000/M_pengguna/pelanggan')
                .then((response) => {
                    console.log(response.data);
                    this.M_pengguna = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        editpengguna(_id, group, nama, role, jenis, created, updated, user, telp, status, alamat, ktp, npwp, paket, ppoe, lokasi, tanggal, proid, promerk, pronam, proser, prokod, prokon, probi, barid, barnam, barser, barkod, barmerk, barkon, barbi, total) {
            this._id = _id;
            this.pengguna_group = group;
            this.pengguna_nama = nama;
            this.pengguna_role = role;
            this.pengguna_jenis_kelamin = jenis;
            this.pengguna_created = created;
            this.pengguna_updated = updated;
            this.pengguna_user_updated = user;
            this.pengguna_no_telepon = telp;
            this.pengguna_status = status;
            this.pengguna_alamat = alamat;
            this.pengguna_no_ktp = ktp;
            this.pengguna_no_npwp = npwp;
            this.pengguna_paket = paket;
            this.pengguna_ppoe = ppoe;
            this.pengguna_lokasi_pasang = lokasi;
            this.pengguna_tanggal_pemasangan = tanggal;
            this.pengguna_produk_id = proid;
            this.pengguna_produk_merk = promerk;
            this.pengguna_produk_nama = pronam;
            this.pengguna_produk_seri = proser;
            this.pengguna_produk_kode = prokod;
            this.pengguna_produk_konsumsi = prokon;
            this.pengguna_produk_biaya = probi;
            this.pengguna_barang_id = barid;
            this.pengguna_barang_nama = barnam;
            this.pengguna_barang_seri = barser;
            this.pengguna_barang_kode = barkod;
            this.pengguna_barang_merk = barmerk;
            this.pengguna_barang_konsumsi = barkon;
            this.pengguna_barang_biaya = barbi;
            this.pengguna_total_bayar = total;
        },
        hapuspengguna(_id, status) {
            this._id = _id;
            this.pengguna_status = 'N';
        },
        updatepelanggan() {
            let newpelanggan = {
                pengguna_group: this.pengguna_group,
                pengguna_nama: this.pengguna_nama,
                pengguna_jenis_kelamin: this.pengguna_jenis_kelamin,
                pengguna_user_updated: this.pengguna_user_updated,
                pengguna_no_telepon: this.pengguna_no_telepon,
                pengguna_alamat: this.pengguna_alamat,
                pengguna_no_ktp: this.pengguna_no_ktp,
                pengguna_paket: this.pengguna_paket,
                pengguna_email: this.pengguna_email,
                pengguna_biaya: this.pengguna_biaya
            }
            console.log(newpelanggan);
            axios.put(`http://localhost:5000/M_pengguna/${this._id}`, newpelanggan)
                .then((res) => {
                    this.getdata()
                    console.log(res)
                    $("#update").modal('hide');
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        deleteds() {
            axios.put(`http://localhost:5000/M_pengguna/${this._id}`, {
                    pengguna_status: this.pengguna_status
                })
                .then((res) => {
                    this.pengguna_status = 'N',
                        this.getdata()
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        softdelete(id) {
            axios.delete('http://localhost:5000/M_pengguna/' + id)
                .then((res) => {
                    this.getdata()
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                });
        }

    }

};
</script>