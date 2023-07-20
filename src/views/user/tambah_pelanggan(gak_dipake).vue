<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
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
                                                    <div class="form-group col-md-12">
                                                        <label for="">Type pelanggan</label>
                                                        <multiselect v-model="M_pengguna.pengguna_tipe_pelanggan" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="type_nama" track-by="_id" :options="tipes"></multiselect>
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
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Login</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-12 text-center">
                                                        <div class="form-group col-md-6">
                                                            <label for="">Username</label>
                                                            <input type="text" class="form-control">
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="">Password</label>
                                                            <input type="password" class="form-control">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Aset dan produk</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-12 text-center">
                                                        <label class="typo__label">Pilih aset/produk</label>
                                                        <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Cari dan Pilih " label="item_nama" track-by="_id" :options="cart" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                                    </div>
                                                </div>
                                                <div class="form-row col-md-12">
                                                    <div class="clearfix"></div>
                                                    <br>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="panel panel-default card-view panel-refresh">
                                                            <div class="panel-heading">
                                                                <div class="pull-left">
                                                                    <h6 class="panel-title txt-dark">Cart</h6>
                                                                </div>
                                                                <div class="pull-right">
                                                                    <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                                                        <i class="zmdi zmdi-replay"></i>
                                                                    </a>
                                                                    <a href="#" class="pull-left inline-block full-screen mr-15">
                                                                        <i class="zmdi zmdi-fullscreen"></i>
                                                                    </a>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </div>
                                                            <div class="panel-body">
                                                                <div class="form-group col-md-12">
                                                                    <form action="">
                                                                        <table class="table table-borderless">
                                                                            <tr>
                                                                                <th>No.</th>
                                                                                <th>Nama.aset</th>
                                                                                <th>Departmen</th>
                                                                                <th>Jumlah</th>
                                                                                <th>Stok awal</th>
                                                                                <th>Stok akhir</th>
                                                                                <th>Harga</th>
                                                                            </tr>
                                                                            <tr v-for="(value,index) in value">
                                                                                <td><b>{{index + 1}}</b></td>
                                                                                <td><input type="text" class="form-control" v-model="value.item_nama"></td>
                                                                                <td><input type="text" class="form-control" v-model="value.item_group"></td>
                                                                                <td><input type="number" class="form-control" v-model="item_ambil"></td>
                                                                                <td><input type="number" class="form-control" v-model="value.item_stok"></td>
                                                                                <td><input type="number" class="form-control" v-model="item_stok"></td>
                                                                                <td><input type="text" class="form-control" v-model="value.item_harga"></td>
                                                                            </tr>
                                                                        </table>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
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
    components: { Multiselect },
    name: 'M_pengguna',
    data() {
        return {
            created: new Date().toISOString().slice(0, 10),
            updated: new Date().toISOString().slice(0, 10),
            barangs: [],
            tipes:[],
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
                pengguna_departmen: '',
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
            cart: [],

            item_ambil: '',
            item_hasil: '',
            value: [{
                item_stok: ''
            }]
        }
    },
    mounted() {
        this.getdepartmen()
        this.getcart()
        this.gettipe()
    },
    computed: {
        item_hasil: function() {
            return this.value[0].item_stok - this.item_ambil;
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
    },
    methods: {
        // Mendapat kan Data DEpartmen 
        getdepartmen() {
            axios.get('http://localhost:5000/pembantu_departmen')
                .then((response) => {
                    console.log(response.data);
                    this.options = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // --
        // Mendapatkan Data Tipe Pelanggan 
        gettipe(){
            axios.get('http://localhost:5000/pembantu_departmen/tipe_pelanggan')
            .then((response) =>{
                console.log(response.data);
                this.tipes = response.data;
            })
            .catch((error) =>{
                console.log(error);
            });
        },
        // ----
        // MEnambah Ke Collection Pengguna/Pelanggan 
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
                    pengguna_departmen_group: this.M_pengguna.pengguna_departmen
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
        // ----
        // MEndapatkan Data Aset/Produk Untuk Keranjang Belanja 
        getcart() {
            axios.get('http://localhost:5000/M_item')
                .then((response) => {
                    console.log(response.data);
                    this.cart = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        // ----

    },


};
</script>