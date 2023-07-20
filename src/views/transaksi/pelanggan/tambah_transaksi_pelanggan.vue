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
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 text-center">
                                                        <button class="btn btn-success" data-toggle="modal" data-target=".bs-example-modal-lg">Buka List Pelanggan</button>
                                                    </div>
                                                    <!-- Modal Untuk Memilih Pelanggan -->
                                                    <div class="modal fade bs-example-modal-lg" tabindex="-1" id="update" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
                                                        <div class="modal-dialog modal-lg">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                                    <h5 class="modal-title" id="myLargeModalLabel">Edit</h5>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <h5 class="mb-15">Pilih Data</h5>
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-default card-view panel-refresh">
                                                                            <div class="refresh-container">
                                                                                <div class="la-anim-1"></div>
                                                                            </div>
                                                                            <div class="panel-heading">
                                                                                <div class="pull-left">
                                                                                    <h6 class="panel-title txt-dark">Data Pelanggan</h6>
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
                                                                                <div class="form-group col-md-12">
                                                                                    <div class="pull-right">
                                                                                        <input type="text" class="form-control" v-model="cari" placeholder="Search">
                                                                                    </div>
                                                                                </div>
                                                                                <table id="datable_1" class="table table-hover display  pb-30">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th scope="col">#</th>
                                                                                            <th scope="col">Nama</th>
                                                                                            <th scope="col">Departmen</th>
                                                                                            <th scope="col">PPOE</th>
                                                                                            <th scope="col">Alamat</th>
                                                                                            <th scope="col">Select</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr v-for="(pelanggan , index) in filterpelanggan">
                                                                                            <th>{{index + 1}}</th>
                                                                                            <th>{{pelanggan.pengguna_nama}}</th>
                                                                                            <td>{{pelanggan.pengguna_group}}</td>
                                                                                            <td>{{pelanggan.pengguna_ppoe}}</td>
                                                                                            <td>{{pelanggan.pengguna_alamat}}</td>
                                                                                            <td><button data-dissmiss="modal" class="btn btn-primary" modal v-on:click="list_pelanggan(pelanggan._id,pelanggan.pengguna_nama,pelanggan.pengguna_group,pelanggan.pengguna_ppoe)"><i class="fa fa-plus"></i></button></td>
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
                                                    <!---->
                                                    <div class="clearfix"></div>
                                                    <br>
                                                    </br>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-4">
                                                        <label for="">Nama</label>
                                                        <input type="text" class="form-control" v-model="nama">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="">Departemen</label>
                                                        <input type="text" class="form-control" v-model="group">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="">PPOE</label>
                                                        <input type="email" class="form-control" v-model="ppoe">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Barang Yang dipakai</h6>
                                                    <hr class="light-grey-hr" />
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-8">
                                                        <div id="scroller">
                                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" v-for="barang in M_produk">
                                                                <div class="panel panel-success card-view">
                                                                    <div class="panel-heading">
                                                                        <div class="pull-left">
                                                                            <h6 class="panel-title txt-light">Kategori Barang</h6>
                                                                        </div>
                                                                        <div class="clearfix"></div>
                                                                    </div>
                                                                    <div class="panel-wrapper collapse in">
                                                                        <div class="panel-body text-center">
                                                                            <div class="col-md-12">
                                                                                <img class="img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9UjXhEHAgwdDh1_K8N32ipI_mrC_Wm_AjDDskdXN7QZ4AlorYw" alt="gambar">
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <h5>{{barang.item_nama}}</h5>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <h5>{{barang.item_merk}}</h5>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <h5>{{barang.item_seri}}</h5>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <h5>{{barang.item_kode_barang}}</h5>
                                                                            </div>
                                                                            <h6>RP.{{barang.item_harga}}</h6>
                                                                            <div class="clearfix"></div>
                                                                            <button class="btn btn-success" @click="keranjang(barang)">Tambah</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="panel panel-default card-view panel-refresh">
                                                            <div class="panel-heading">
                                                                <div class="pull-left">
                                                                    <h6 class="panel-title txt-dark">Data Yang Diambil</h6>
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
                                                                <table id="datable_1" class="table table-hover display  pb-30">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Y</th>
                                                                            <th>Y</th>
                                                                            <th>Y</th>
                                                                            <th>Y</th>
                                                                            <th>Y</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr v-for="barang in barangs">
                                                                            <td>{{barang.item_stok}}</td>
                                                                            <td>{{barang.item_nama}}</td>
                                                                            <td>{{barang.item_merk}}</td>
                                                                            <td>{{barang.item_seri}}</td>
                                                                            <td>{{barang.item_harga}}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <h1 style="margin-top:30px; background-color:#F1F1F1;">Total:{{Total}}</h1>
                                                        <input type="hidden" v-model="Total" class="form-control">
                                                    </div>
                                                    <div class="col-md-3 mt-30">
                                                        &nbsp;
                                                    </div>
                                                    <div class="form-group col-md-3 mt-30">
                                                        <router-link to="/pelanggan">
                                                            <p type="submit" class="btn btn-primary ml-10" @click="addToApi">Tambah</p>
                                                        </router-link>
                                                        <router-link to="/pelanggan">
                                                            <p type="button" class="btn btn-danger ml-5">Kembali</p>
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
export default {
    name: 'M_pengguna',
    data() {
        return {
            // Variabel Yang diinputkan oleh User
            nama: '',
            group: '',
            ppoe: '',
            // ----
            bilangan: 12,
            ambil: '',
            cari: '',
            M_pelanggan: [],
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
                pengguna_status: 'Y',
                pengguna_alamat: '',
                pengguna_no_ktp: '',
                pengguna_no_npwp: '',
                pengguna_paket: '',
                pengguna_tanggal_pemasangan: '',
                pengguna_nama_produk: '',
                pengguna_produk_seri: '',
                pengguna_produk_kode: '',
                pengguna_penggunaan: '',
                pengguna_ppoe: '',
                pengguna_lokasi_pasang: '',
                pengguna_biaya: '',
                pengguna_total_produk: ''
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
            setok: ''

        }
    },
    mounted() {
        this.getproduk()
        this.getdata()
        this.getbarang()
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
        },
        // Mencari Data Dari Table Modal
        filterpelanggan: function() {
            return this.M_pelanggan.filter((pelanggan) => {
                return pelanggan.pengguna_nama.match(this.cari);
            });
        }
    },
    methods: {
        // Membuat Keranjang Belanja
        keranjang(barang) {
            barang.item_stok += 1;
            this.barangs.push(barang);
        },
        // ----
        // Menghapus Dari Keranjang Belanja
        removeFromCart(item) {
      item.quantity -= 1;
      this.items.splice(this.items.indexOf(item), 1);
    },
        // ----
        addToApi() {
            let newM_pengguna = {
                pengguna_email: this.M_pengguna.pengguna_email,
                pengguna_group: this.M_pengguna.pengguna_group,
                pengguna_nama: this.M_pengguna.pengguna_nama,
                pengguna_role: this.M_pengguna.pengguna_role,
                pengguna_jenis_kelamin: this.M_pengguna.pengguna_jenis_kelamin,
                pengguna_created: this.M_pengguna.pengguna_created,
                pengguna_updated: this.M_pengguna.pengguna_updated,
                pengguna_no_telepon: this.M_pengguna.pengguna_no_telepon,
                pengguna_user_updated: this.M_pengguna.pengguna_user_updated,
                pengguna_status: this.M_pengguna.pengguna_status,
                pengguna_alamat: this.M_pengguna.pengguna_alamat,
                pengguna_no_ktp: this.M_pengguna.pengguna_no_ktp,
                pengguna_no_npwp: this.M_pengguna.pengguna_no_npwp,
                pengguna_ppoe: this.M_pengguna.pengguna_ppoe,
                pengguna_lokasi_pasang: this.M_pengguna.pengguna_lokasi_pasang,
                pengguna_tanggal_pemasangan: this.M_pengguna.pengguna_tanggal_pemasangan,
                pengguna_produk: {
                    pengguna_produk_id: this._id2,
                    pengguna_produk_merk: this.M_pengguna.pengguna_paket,
                    pengguna_produk_nama: this.M_pengguna.pengguna_nama_produk,
                    pengguna_produk_seri: this.M_pengguna.pengguna_produk_seri,
                    pengguna_produk_kode: this.M_pengguna.pengguna_produk_kode,
                    pengguna_produk_konsumsi: this.M_pengguna.pengguna_penggunaan,
                    pengguna_produk_biaya: this.M_pengguna.pengguna_biaya,
                },
                pengguna_barang: {
                    pengguna_barang_id: this._id,
                    pengguna_barang_nama: this.item_nama,
                    pengguna_barang_seri: this.item_seri_barang,
                    pengguna_barang_kode: this.item_kode_barang,
                    pengguna_barang_merk: this.item_merk,
                    pengguna_barang_konsumsi: this.item_ambil,
                    pengguna_barang_biaya: this.item_biaya,

                },
                pengguna_total_bayar: this.Total
            }
            let newM_barang = {
                item_id: this._id,
                item_stok: this.item_hasil,
            }
            let newM_produk = {
                item_id: this._id2,
                item_stok: this.hasil2
            }
            console.log(newM_pengguna);

            axios.post('http://localhost:5000/M_pengguna', newM_pengguna)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            axios.put(`http://localhost:5000/M_item/${this._id}`, newM_barang)
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
            axios.put(`http://localhost:5000/M_item/${this._id2}`, newM_produk)
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        list_pelanggan(_id, nama, group, ppoe) {
            this,
            _id = _id;
            this.nama = nama;
            this.group = group
            this.ppoe = ppoe;
            $('#update').modal('hide');
        },
        detail_produk(_id, group, nama, paket, seri, stok, kode, harga) {
            this._id2 = _id;
            this.M_pengguna.pengguna_group = group;
            this.M_pengguna.pengguna_paket = paket;
            this.M_pengguna.pengguna_nama_produk = nama;
            this.item2_seri_produk = seri;
            this.item2_stok = stok;
            this.item2_kode_produk = kode;
            this.M_pengguna.pengguna_biaya = harga;
            $('#update').modal('hide');
        },
        getbarang() {
            axios.get('http://localhost:5000/M_pengguna/pelanggan')
                .then((response) => {
                    console.log(response.data);
                    this.M_pelanggan = response.data;
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


    }

};
</script>
<style scoped>
#scroller {
    overflow: scroll;
    width: 100%;
    height: 400px;
    overflow-x: hidden;
}
</style>