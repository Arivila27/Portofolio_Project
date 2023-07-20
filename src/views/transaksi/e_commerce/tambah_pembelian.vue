/5<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h3>&nbsp;</h3>
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6>Pembelian</h6>
                    </div>
                    <div class="panel-body">
                        <div class="form-wrap">
                            <div class="col-md-12">
                                <form @submit.prevent="addpembelian">
                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Supplie1r</h6>
                                    <hr class="light-grey-hr" />
                                    <div class="form-row col-md-12 text-center">
                                        <a class="btn btn-primary" data-toggle="modal" data-target="#bukasup">Buka</a>
                                        <div class="modal fade" id="bukasup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                        <a type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </a>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="form-group col-md-12">
                                                            <div class="panel panel-default card-view panel-refresh">
                                                                <div class="refresh-container"></div>
                                                                <div class="panel-heading">
                                                                    <h6>Keranjang</h6>
                                                                </div>
                                                                <div class="panel-body">
                                                                    <table class="table table-borderless">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col">No</th>
                                                                                <th scope="col">Nama</th>
                                                                                <th scope="col">Perusahaan</th>
                                                                                <th scope="col">Choose</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr v-for="(sup,index) in M_supplier.slice(0,5)">
                                                                                <td>{{index + 1}}</td>
                                                                                <td>{{sup.supplier_nama}}</td>
                                                                                <td>{{sup.supplier_nama_perusahaan}}</td>
                                                                                <td><a class="btn btn-primary" v-on:click="detailsup(sup._id,sup.supplier_nama,sup.supplier_nama_perusahaan,sup.supplier_telephone_perusahaan)">Pilih</a></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <a class="btn btn-secondary" data-dismiss="modal">Close</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearfix">
                                        <br>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputState">Nama supplier</label>
                                            <input type="text" class="form-control" disabled v-model="supplier.nama">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputhari">Perusahaan</label>
                                            <input type="text" class="form-control" disabled v-model="supplier.perusahaan_nama">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="">No</label>
                                            <input type="number" class="form-control" disabled v-model="supplier.no_perusahaan">
                                        </div>
                                    </div>
                                    <div class="clearfix">
                                        <br>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="form-row">
                                        <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Shipped to</h6>
                                        <hr class="light-grey-hr" />
                                        <div class="form-group col-md-12">
                                            <label for="">No Pembelian</label>
                                            <input type="text" class="form-control" v-model="noTrans" disabled="true">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="">Nama</label>
                                            <input type="text" class="form-control" v-model="ship.nama">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="">Company</label>
                                            <input type="text" class="form-control" v-model="ship.company">
                                            <small>*example:PT.XXXXXXXX</small>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="">No.hp</label>
                                            <input type="number" class="form-control" v-model="ship.telephone">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="">Alamat</label>
                                            <input type="text" class="form-control" v-model="ship.alamat">
                                        </div>
                                    </div>
                                    <div class="clearfix">
                                        <br>
                                    </div>
                                    <div class="form-row">
                                        <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Barang</h6>
                                        <hr class="light-grey-hr" />
                                        <div class="form-group col-md-12">
                                            <div class="panel panel-default card-view panel-refresh">
                                                <div class="refresh-container"></div>
                                                <div class="panel-heading">
                                                    <div class="pull-left">
                                                        <h6 class="panel-title txt-dark">Keranjang</h6>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                                <div class="panel-body">
                                                    <table class="table table-borderless">
                                                        <thead>
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Kode barang</th>
                                                                <th>Nama</th>
                                                                <th>Merk</th>
                                                                <th>Quanty</th>
                                                                <th>Harga</th>
                                                                <th>Total harga</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(item,k) in barang" :key="k">
                                                                <td>{{k + 1}}</td>
                                                                <td><input type="text" class="form-control" v-model="item.kode_barang"></td>
                                                                <td><input type="text" class="form-control" v-model="item.nama_barang"></td>
                                                                <td><input type="text" class="form-control" v-model="item.merk_barang"></td>
                                                                <td><input type="number" class="form-control" v-model="item.quanty_barang"></td>
                                                                <td><input type="number" class="form-control" v-model="item.harga_barang"></td>
                                                                <td><input type="number" class="form-control" v-model="item.total_barang" disabled></td>
                                                                <td><button class="btn btn-danger btn-sm" @click.prevent="remove(k)" v-show="k || ( !k &&  barang.length > 1)"><i class="fa fa-minus"></i></button></td>
                                                                <td><button class="btn btn-primary btn-sm" @click.prevent="add(k)" v-show="k == barang.length-1"><i class="fa fa-plus"></i></button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="">
                                                                Subtotal
                                                            </label>
                                                            <input type="number" class="form-control" v-model.number="hasil">
                                                        </div>
                                                        <div class="fomr-group col-md-6">
                                                            <label for="">
                                                                PPN
                                                            </label>
                                                            <input type="number" class="form-control" v-model.number="ppn">
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-12">
                                                            <label for="">Total harga</label>
                                                            <input type="number" class="form-control" v-model.number="total">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <button type="submit" class="btn btn-primary">Tambah</button>
                                    </div>
                                    <div class="col-md-2">
                                        <router-link to="/membeli" class="btn btn-danger">
                                            Kembali
                                        </router-link>
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
<script>
import axios from 'axios'
import API from '../../../api.config'
export default {
    data() {
        return {
            M_supplier: [],
            ship: {
                nama: '',
                company: '',
                telephone: '',
                alamat: ''
            },
            supplier: {
                _id: '',
                nama: '',
                perusahaan_nama: '',
                no_perusahaan: ''
            },
            barang: [{
                kode_barang: '',
                nama_barang: '',
                merk_barang: '',
                quanty_barang: 0,
                harga_barang: 0,
                total_barang: 0
            }],
            angka1: '',
            angka2: '',
            ppn: 0,
            jumlah_pembelian: '',

        }

    },
    beforeUpdate() {
        this.gettotal();
    },
    mounted() {
        this.getsupplier();
        this.getjumlah();
    },
    computed: {
        hasil() {
            var hasil = 0;
            for (var i = 0; i < this.barang.length; i++) {
                hasil += this.barang[i].total_barang;
            }
            return hasil;
        },
        total() {
            return this.hasil + this.ppn;
        },
        noTrans: function() {
            var a = "PMBL-";
            var b = this.jumlah_pembelian;
            var noTrans = "";
            return noTrans = a + b;
        },
        createdBy:function(){
            return this.$store.getters.username;
        }
    },
    methods: {
        gettotal() {
            for (let i = 0; i < this.barang.length; i++) {
                const lom = this.barang[i];
                this.barang[i].total_barang = lom.harga_barang * lom.quanty_barang
            }
        },
        add(index) {
            this.barang.push({
                kode_barang: '',
                nama_barang: '',
                merk_barang: '',
                quanty_barang: 0,
                harga_barang: 0,
                total_barang: 0,
            });
        },
        remove(index) {
            this.barang.splice(index, 1);
        },
        getsupplier() {
            axios.get(API + '/M_supplier')
                .then((response) => {
                    console.log(response.data);
                    this.M_supplier = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getjumlah() {
            axios.get(API + '/Tr_pembelian/jumlah')
                .then((response) => {
                    this.jumlah_pembelian = response.data;
                });
        },
        detailsup(id, nama, perusnam, perusno) {
            this.supplier._id = id;
            this.supplier.nama = nama;
            this.supplier.perusahaan_nama = perusnam;
            this.supplier.no_perusahaan = perusno;
            $('#bukasup').modal('hide');
        },
        addpembelian() {
            let pembelian = {
                pembelian_supplier: {
                    supplier_nama: this.supplier.nama,
                    supplier_nama_perusahaan: this.supplier.perusahaan_nama,
                    supplier_telephone_perusahaan: this.supplier.no_perusahaan
                },
                pembelian_no_transaksi:this.noTrans,
                pembelian_verifikasi:"Belum",
                pembelian_shipped_to: this.ship,
                pembelian_barang: this.barang,
                pembelian_status: "Y",
                pembelian_subtotal: this.hasil,
                pembelian_ppn: this.ppn,
                pembelian_total: this.total,
                pembelian_created: new Date().toISOString().slice(0, 10),
                pembelian_updated: new Date().toISOString().slice(0, 10),
                pembelian_user_update: this.createdBy
            }
            console.log(pembelian);
            axios.post(API + '/Tr_pembelian', pembelian)
                .then((response) => {
                    console.log(response.data);
                    this.$swal("Berhasil", "Berhasil menambahkan data", "success");
                    this.$router.push("/membeli");

                })
                .catch((error) => {
                    console.log(error);
                    this.$swal("Gagal", "Gagal menambah data", "error");
                });
        }
    }

};
</script>