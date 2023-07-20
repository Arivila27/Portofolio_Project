<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h1><b>Tambah Data Barang</b></h1>
            </div>
            <div class="row">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6>Tambah Data Barang</h6>
                    </div>
                    <div class="clearfix"></div>
                    <div class="panel-wrapper collapse in">
                        <form>
                            <div class="panel-body">
                                <div class="form-wrap">
                                    <div class="col-md-12">
                                        <div class="form-row">
                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data penyuplai</h6>
                                            <hr class="light-grey-hr" />
                                            <div class="form-group col-md-12 text-center">
                                                <button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Buka supplier</button>
                                                <div class="modal fade bd-example-modal-lg" tabindex="-1" id="update" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
                                                    <div class="modal-dialog modal-lg">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                                <h5 class="modal-title" id="myLargeModalLabel">Supplier</h5>
                                                            </div>
                                                            <div class="modal-body">
                                                                <div class="col-md-12">
                                                                    <div class="panel panel-default card-view panel-refresh">
                                                                        <div class="refresh-container">
                                                                            <div class="la-anim-1"></div>
                                                                        </div>
                                                                        <div class="panel-heading">
                                                                            <div class="pull-left">
                                                                                <h6 class="panel-title txt-dark">Data Supplier</h6>
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
                                                                            <table class="table table-borderless">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th scope="col">No</th>
                                                                                        <th scope="col">Perusahaan</th>
                                                                                        <th scope="col">Nama Penyuplai</th>
                                                                                        <th scope="col">Aksi</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr v-for="(sup,index) in M_supplier.slice(0,5) ">
                                                                                        <th>{{index + 1}}</th>
                                                                                        <th>{{sup.supplier_nama_perusahaan}}</th>
                                                                                        <td>{{sup.supplier_nama}}</td>
                                                                                        <td><button class="btn btn-primary" v-on:click="supplierget(sup.supplier_nama,sup.supplier_telephone,sup.supplier_nama_perusahaan,sup.supplier_telephone_perusahaan)">Pilih</button></td>
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
                                            <div class="form-group col-md-6">
                                                <label for="">Nama penyuplai</label>
                                                <input type="text" class="form-control" disabled v-model="supplay.supplier_nama">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputState">No.telp penyuplai</label>
                                                <input type="number" class="form-control" disabled v-model="supplay.supplier_telephone">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputState">Nama perusahaan</label>
                                                <input type="text" class="form-control" disabled v-model="supplay.supplier_nama_perusahaan">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputState">No.telp perusahaan</label>
                                                <input type="text" class="form-control" disabled v-model="supplay.supplier_telephone_perusahaan">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Kategori Dan Departemen</h6>
                                            <hr class="light-grey-hr" />
                                            <div class="form-group col-md-6">
                                                <label for="">Item Departemen</label>
                                                <select name="" id="" class="form-control" v-model="M_item.item_group">
                                                    <option v-for="gory in M_departmen">{{gory.pembantu_nama}}</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputState">Kategori</label>
                                                <select disabled id="inputState" class="form-control" v-model="M_item.item_kategori">
                                                    <option selected>Barang</option>
                                                </select>
                                                *Barang
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Detail Barang</h6>
                                            <hr class="light-grey-hr" />
                                            <div class="form-group col-md-4">
                                                <label for="">Merk</label>
                                                <input type="text" class="form-control" v-model="M_item.item_merk">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputname">Nama Barang</label>
                                                <input type="text" class="form-control" id="inputname" placeholder="Nama Barang" v-model="M_item.item_nama">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputstok">Stok</label>
                                                <input type="number" class="form-control" id="inputstok" placeholder="Stok Barang" v-model="M_item.item_stok">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label for="hargasatuan">Harga Barang</label>
                                                <input type="text" class="form-control" id="hargasatuan" v-model="M_item.item_harga">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Kode Barang</label>
                                                <input type="text" class="form-control" v-model="M_item.item_kode_barang">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">No.Seri</label>
                                                <input type="number" class="form-control" v-model="M_item.item_seri">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputAddress">Spesifikasi Barang</label>
                                                <textarea name="" id="" class="form-control" cols="5" rows="5" v-model="M_item.item_deskripsi"></textarea>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Upload Gambar</label>
                                                <input type="file" class="form-control">
                                            </div>
                                        </div>
                                        <div class="form-row" hidden>
                                            <div class="form-group col-md-3">
                                                <label for="Databarang">Data Barang Dibuat</label>
                                                <input type="date" class="form-control" id="Databarang" v-model="M_item.item_created" hidden>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <label for="item">Data Barang Diupdate</label>
                                                <input type="date" class="form-control" id="item" placeholder="Apartment, studio, or floor" v-model="M_item.item_updated" hidden>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <label for="admin">Siapa Yang Mengupdate/Membuat</label>
                                                <select id="admin" class="form-control" v-model="M_item.item_user_updated">
                                                    <option selected>Choose...</option>
                                                    <option>Admin</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <button type="submit" class="btn btn-primary" @click="addToApi">Tambah</button>
                                            </div>
                                            <div class=" form-group col-md-6">
                                                <router-link to="/barang_masuk">
                                                    <button type="button" class="btn btn-danger">Kembali</button>
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
</template>
<script>
import axios from 'axios';
import API from '../../../api.config'
export default {
    name: 'M_item',
    data() {
        return {
            M_supplier: [],
            M_departmen: [],
            M_kategori: [],
            supplay: {
                supplier_nama: '',
                supplier_telephone: '',
                supplier_nama_perusahaan: '',
                supplier_telephone_perusahaan: ''
            },

            M_item: {
                item_group: '',
                item_kategori: '',
                item_merk: '',
                item_nama: '',
                item_stok: '',
                item_harga: '',
                item_kode_barang: '',
                item_seri: '',
                item_deskripsi: '',
                item_created: new Date().toISOString().slice(0, 10),
                item_updated: new Date().toISOString().slice(0, 10),
                item_user_updated: '',
                item_status: 'Y',
                item_aset: 'Masuk'

            },
        }
    },
    mounted() {
        this.departmen()
        this.kategoris()
        this.getsupplier()
    },
    methods: {
        // MEndapat kan Data BArang masuk 
        addToApi() {
            let newM_item = {
                supplier: {
                    supplier_nama: this.supplay.supplier_nama,
                    supplier_telephone: this.supplay.supplier_telephone,
                    supplier_nama_perusahaan: this.supplay.supplier_nama_perusahaan,
                    supplier_telephone_perusahaan: this.supplay.supplier_telephone_perusahaan
                },
                item_group: this.M_item.item_group,
                item_kategori: "Barang",
                item_merk: this.M_item.item_merk,
                item_nama: this.M_item.item_nama,
                item_stok: this.M_item.item_stok,
                item_harga: this.M_item.item_harga,
                item_kode_barang: this.M_item.item_kode_barang,
                item_seri: this.M_item.item_seri,
                item_deskripsi: this.M_item.item_deskripsi,
                item_created: this.M_item.item_created,
                item_updated: this.M_item.item_updated,
                item_user_updated: this.M_item.item_user_updated,
                item_status: this.M_item.item_status,
                item_aset: "Masuk"

            }
            console.log(newM_item);

            axios.post(API + '/M_item', newM_item)
                .then((response) => {
                    console.log(response);
                    this.$router.push({ name: "barang_masuk" });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // ----
        // Mendapat kan Data Supplier Dari Database 
        getsupplier() {
            axios.get(API + '/M_supplier')
                .then((response) => {
                    console.log(response.data)
                    this.M_supplier = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        // ----
        // Mendapatkan data dari table ke form 
        supplierget(nama, telp, perusnama, perustelp) {
            this.supplay.supplier_nama = nama;
            this.supplay.supplier_telephone = telp;
            this.supplay.supplier_nama_perusahaan = perusnama;
            this.supplay.supplier_telephone_perusahaan = perustelp;
            $('#update').modal('hide');
        },
        // ----
        // Mendapat kan DAta DAri tabel Pembantu departmen 
        departmen() {
            axios.get(API + '/pembantu_departmen')
                .then((res) => {
                    console.log(res)
                    this.M_departmen = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // ----
        // Mendapat kan Data DAri Kategori Produk atau Barang 
        kategoris() {
            axios.get(API + '/M_item/kategori')
                .then((res) => {
                    console.log(res);
                    this.M_kategori = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        // ----

    }
};
</script>