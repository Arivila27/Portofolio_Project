<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1>Pengeluaran</h1>
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
                                        <p>Loremtr ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
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
                        <div class="panel">
                            <div class="panel-header">
                                <br>
                                <div class="col-md-6">
                                    <router-link to="/tambah_Pengeluaran">
                                        <button type="button" class="btn btn-primary">Tambah Data</button>
                                    </router-link>
                                    <router-link to="/trkasbank">
                                        <button type="button" class="btn btn-danger">Kembali</button>
                                    </router-link>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="panel panel-default" style="margin-top:40px;">
                                    <!-- Default panel contents -->
                                    <div class="panel-heading">Table Pengeluaran</div>
                                    <!-- Table -->
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th width="10">Number</th>
                                                <th width="100">Departemen</th>
                                                <th width="100">E-mail Pengirim</th>
                                                <th width="100">Pengirim</th>
                                                <th width="100">Penerima</th>
                                                <th class="text-center" width="100">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="pengeluaran in Tr_pengeluaran" v-bind:key="pengeluaran._id" v-bind:pengeluarannumber="pengeluaran.pengeluaran_number">
                                                <td>{{pengeluaran.pengeluaran_number}}</td>
                                                <td>{{pengeluaran.pengeluaran_departmen}}</td>
                                                <td>{{pengeluaran.pengeluaran_email}}</td>
                                                <td>{{pengeluaran.pengeluaran_from}}</td>
                                                <td>{{pengeluaran.pengeluaran_for}}</td>
                                                <td>
                                                 <div class="col-md-4 text-center">
                                                            <button type="button" class="btn btn-primary text-center" style="width: 50px; margin-right:-50px;" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="text-center fa fa-edit"></i></button>
                                                        </div>
                                                <div class="col-md-4 text-center">
                                                            <button type="button" class="btn btn-danger" style="width: 50px; margin-right:-50px;" alt="default" data-toggle="modal" data-target="#myModal"><i class="text-center fa fa-trash"></i></button>
                                                </div>
                                                </td>
                                                <!-- <td>
                                                    <router-link :to="{name:'edit_pengeluaran',params:{id:pengeluaran._id}}" class="btn btn-primary">Edit</router-link>
                                                </td> -->
                                                <!-- <td><button class="btn btn-danger" v-on:click="softdelete(pengeluaran._id)">{{pengeluaran._id}}</button></td> -->
                                            </tr>
                                            <!-- untuk mengupdate data -->
                                              <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
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
                                                                    <div class="form-group col-md-4">
                                                                        <label for="from">Transfer Dari</label>
                                                                        <input type="text" class="form-control" id="from" placeholder="Nama Yang Transfer">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="to">Penerima Transfer</label>
                                                                        <input type="text" class="form-control" id="to" placeholder="Nama Yang Menerima Transfer">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="number">No.Transfer</label>
                                                                        <input type="text" class="form-control" style="text-transform: uppercase" id="number">
                                                                        <small>Contoh:*C201</small>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="form-group col-md-4">
                                                                        <label for="tgl_transfer">Tanggal Transfer</label>
                                                                        <input type="date" class="form-control" id="tgl_transfer">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="trans_buat">Data Transfer Dibuat</label>
                                                                        <input type="text" class="form-control" id="trans_buat" disabled="true">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="kudet">Data Transfer Diupdate</label>
                                                                        <input type="text" class="form-control" id="kudet" disabled="true">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="form-group col-md-4">
                                                                        <label for="yng_update">Yang update</label>
                                                                        <input type="text" class="form-control" id="yng_update">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="pengirim_em">Email Pengirim</label>
                                                                        <input type="email" class="form-control" id="pengirim_em" placeholder="name@bitniaga.com">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="kd_account">Kode Akun</label>
                                                                        <input type="text" class="form-control" id="kd_account">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="form-group col-md-4">
                                                                        <label for="exampleFormControlInput1">Status Approval</label>
                                                                        <select class="form-control" id="exampleFormControlSelect1">
                                                                            <option>Accept</option>
                                                                            <option>Pending</option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="catatan">Catatan</label>
                                                                        <input type="text" class="form-control" id="catatan" placeholder="*Catatan">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="total">Total Transfer</label>
                                                                        <input type="number" class="form-control" id="total">RP.
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="form-group col-md-6">
                                                                        <label for="departemen_dari">Dari Departemen</label>
                                                                        <select class="form-control" id="departemen_dari">Software</select>
                                                                    </div>
                                                                    <div class="form-group col-md-6">
                                                                        <label for="departemen_untuk">Untuk Departemen</label>
                                                                        <select class="form-control" id="departemen_untuk">Software</select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-danger text-left" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary">Tambah</button>
                                                        </div>
                                                    </div>
                                                    <!-- /.modal-content -->
                                                </div>
                                                <!-- /.modal-dialog -->
                                            </div>
                                             <!-- Untuk Menghapus Data -->
                                            <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                            <h5 class="modal-title" id="myModalLabel">Modal Heading</h5>
                                                        </div>
                                                        <div class="modal-body">
                                                            <h5 class="mb-15">[Number]</h5>
                                                            <p>Apakah Anda Yakin Iningin Menghapus ?</p>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Iya</button>
                                                            <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                    <!-- /.modal-content -->
                                                </div>
                                                <!-- /.modal-dialog -->
                                            </div>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for=" barang in M_item">
                                            <th>{{barang.item_group}}</th>
                                            <td>{{barang.item_nama}}</td>
                                            <td>{{barang.item_stok}}</td>
                                            <td>
                                                <router-link to="/edit_Pengeluaran">
                                                <button class="btn btn-warning">Edit</button>
                                                </router-link>
                                                <br>
                                                <button class="btn btn-danger">Hapus</button>

                                            </td>
                                        </tr>
                                        <tr></tr>
                                        <tr></tr>
                                    </tbody>
                                </table> -->
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
    data() {
        return {
            Tr_pengeluaran: [],
            _id: '',
            pengeluaran_number: ''
        }
    },
    mounted() {
        this.getdata()
    },
    methods: {
        getdata() {
            axios.get('http://localhost:5000/Tr_pengeluaran')
                .then((response) => {
                    console.log(response.data);
                    this.Tr_pengeluaran = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        editproduk(number, _id) {
            this._id = _id
            this.pengeluaran_number = number
        },
        softdelete(_id) {
            // let soft ='http://localhost:5000/Tr_pengeluaran/delete/'+_id;
            // this.axios.get(soft);
            axios.delete('http://localhost:5000/Tr_pengeluaran/delete/'+_id)
                .then((response) => {
                    this.getdata();
                    console.log(response.data);
                }).catch((err) => {
                    console.log(err);
                });
        }
    }
}
</script>