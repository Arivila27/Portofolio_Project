<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1>Pemasukan</h1>
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
                                    <router-link to="/tambah_Pemasukan">
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
                                    <div class="panel-heading">Table Pemasukan</div>
                                    <!-- Table -->
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th width="10">Number</th>
                                                <th width="100">departemen</th>
                                                <th width="100">Project</th>
                                                <th width="100">Jumlah</th>
                                                <th width="100">Harga</th>
                                                <th width="100">Total</th>
                                                <th class="text-center" width="110">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="pemasukan in Tr_pemasukan" v-bind:key="pemasukan._id" v-bind:pemasukannumber="pemasukan.pemasukan_number">
                                                <td>{{pemasukan.pemasukan_number}}</td>
                                                <td>{{pemasukan.pemasukan_departmen}}</td>
                                                <td>{{pemasukan.pemasukan_project}}</td>
                                                <td>{{pemasukan.pemasukan_jumlah}}</td>
                                                <td>{{pemasukan.pemasukan_harga}}</td>
                                                <td>{{pemasukan.pemasukan_jumlah*pemasukan.pemasukan_harga}}</td>
                                                <td>
                                                    <div class="row">
                                                        <div class="col-md-4 text-center" style="margin-left:-30px;">
                                                            <button type="button" class="btn btn-info" style="width: 50px; margin-right:-50px;"><i class="text-center fa fa-edit"></i></button>
                                                        </div>
                                                        <div class="col-md-4 text-center">
                                                            <button type="button" class="btn btn-primary text-center" style="width: 50px; margin-right:-50px;" data-toggle="update" data-target=".update" v-on:click="editpemasukan(pemasukan._id,pemasukan.pemasukan_from,pemasukan.pemasukan_for,pemasukan.pemasukan_number,pemasukan.pemasukan_tanggal,pemasukan.pemasukan_created,pemasukan.pemasukan_updated,pemasukan.pemasukan_user_updated,pemasukan.pemasukan_email,pemasukan.pemasukan_kode_akun,pemasukan.pemasukan_approval_status,pemasukan.pemasukan_notes,pemasukan.pemasukan_jumlah,pemasukan.pemasukan_harga,pemasukan.pemasukan_departmen,pemasukan.pemasukan_project)"><i class="text-center fa fa-edit"></i></button>
                                                        </div>
                                                        <div class="col-md-4 text-center">
                                                            <button type="button" class="btn btn-danger" style="width: 50px; margin-right:-50px;" alt="default" data-toggle="hapus" data-target=".hapus" v-on:click="hapuspemasukan(pemasukan._id,pemasukan.pemasukan_number,pemasukan.pemasukan_status)"><i class="text-center fa fa-trash"></i></button>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="row">
                                                        <div class="col-md-4">
                                                            <button type="button" class="btn btn-info" style="width: 80px; margin-right:-50px;">Detail</button>
                                                        </div>
                                                        <div class="col-md-4">
                                                          <router-link :to="{name:'edit_pemasukan' , params:{id:pemasukan._id}}">
                                                             <button type="button" class="btn btn-primary" style="width: 80px; margin-right:-50px;">Edit</button>
                                                         </router-link>
                                                        </div>
                                                        <div class="col-md-4">
                                                             <button type="button" class="btn btn-danger" style="width: 80px; margin-right:-50px;"
                                                             @click="softdelete(pemasukan._id)">Hapus</button>
                                                        </div>
                                                    </div> -->
                                                </td>
                                            </tr>
                                            <!-- untuk mengupdate data -->
                                            <div class="modal fade update" id="update" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
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
                                                                        <label for="from">Pemasukan Dari</label>
                                                                        <input type="text" class="form-control" id="from" placeholder="Nama Yang pemasukan" v-model="pemasukan_from">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="to">Penerima Pemasukan</label>
                                                                        <input type="text" class="form-control" id="to" placeholder="Nama Yang Menerima pemasukan" v-model="pemasukan_for">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="number">No.Pemasukan</label>
                                                                        <input type="text" class="form-control" style="text-transform: uppercase" id="number" v-model="pemasukan_number">
                                                                        <small>Contoh:*C201</small>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="form-group col-md-4">
                                                                        <label for="tgl_pemasukan">Tanggal Pemasukan</label>
                                                                        <input type="date" class="form-control" id="tgl_pemasukan" v-model="pemasukan_tanggal">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="trans_buat">Data pemasukan Dibuat</label>
                                                                        <input type="text" class="form-control" id="trans_buat" disabled="true" v-model="pemasukan_created">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="kudet">Data pemasukan Diupdate</label>
                                                                        <input type="text" class="form-control" id="kudet" disabled="true" v-model="pemasukan_updated">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="form-group col-md-4">
                                                                        <label for="yng_update">Yang update</label>
                                                                        <input type="text" class="form-control" id="yng_update" v-model="pemasukan_user_updated">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="pengirim_em">Email</label>
                                                                        <input type="email" class="form-control" id="pengirim_em" placeholder="name@bitniaga.com" v-model="pemasukan_email">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="kd_account">Kode Akun</label>
                                                                        <input type="text" class="form-control" id="kd_account" v-model="pemasukan_kode_akun">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="form-group col-md-4">
                                                                        <label for="exampleFormControlInput1">Status Approval</label>
                                                                        <select class="form-control" id="exampleFormControlSelect1">
                                                                            <option>{{pemasukan_approval_status}}</option>
                                                                            <option>Accept</option>
                                                                            <option>Pending</option>
                                                                        </select>
                                                                        <!--  <input type="  text" class="form-control" v-model="pemasukan_approval_status"> -->
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="catatan">Catatan</label>
                                                                        <input type="text" class="form-control" id="catatan" placeholder="*Catatan" v-model="pemasukan_notes">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="total">Jumlah</label>
                                                                        <input type="number" class="form-control" id="total" v-model="pemasukan_jumlah">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="form-group col-md-4">
                                                                        <label for="harga">Harga</label>
                                                                        <input type="number" class="form-control" id="harga" v-model="pemasukan_harga">RP.
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="departemen_untuk">Departemen</label>
                                                                        <select class="form-control" id="departemen_untuk">
                                                                            <option v-model>{{pemasukan_departmen}}</option>
                                                                        </select>
                                                                        <!--  <input type="text" v-model="pemasukan_departmen"> -->
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="departemen_untuk">Projek</label>
                                                                        <select class="form-control" id="departemen_untuk">Software</select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-primary" v-on:click="updatepemasukan">Save Changes</button>
                                                            <button type="button" class="btn btn-danger text-left" data-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                    <!-- /.modal-content -->
                                                </div>
                                                <!-- /.modal-dialog -->
                                            </div>
                                            <!-- Untuk Menghapus Data -->
                                            <div id="hapus" class="modal fade hapus" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                            <h5 class="modal-title" id="myModalLabel">Modal Heading</h5>
                                                        </div>
                                                        <div class="modal-body">
                                                            <h5 class="mb-15">{{pemasukan_number}}</h5>
                                                            <p>Apakah Anda Yakin Ingin Menghapus ?</p>
                                                            <input type="text" class="form-control" v-model="pemasukan_number">
                                                            <input type="text" class="form-control" v-model="pemasukan_status">
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="softdelete()">Iya</button>
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
            M_pengguna: [],
            Tr_pemasukan: [],
            _id: '',
            pemasukan_from: '',
            pemasukan_for: '',
            pemasukan_number: '',
            pemasukan_tanggal: '',
            pemasukan_created: '',
            pemasukan_updated: '',
            pemasukan_user_updated: '',
            pemasukan_email: '',
            pemasukan_kode_akun: '',
            pemasukan_approval_status: '',
            pemasukan_notes: '',
            pemasukan_jumlah: '',
            pemasukan_harga: '',
            pemasukan_departmen: '',
            pemasukan_project: '',
            pemasukan_status: ''
        }
    },
    mounted() {
        this.getdata()
        this.getselect()
    },
    methods: {
        getselect() {
            axios.get('http://localhost:5000/M_pengguna')
                .then((response) => {
                    console.log(response);
                    this.M_pengguna = response.dta;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        getdata() {
            axios.get('http://localhost:5000/Tr_pemasukan')
                .then((response) => {
                    console.log(response);
                    this.Tr_pemasukan = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        editpemasukan(_id, from, ro, number, tanggal, created, updated, user, email, kode, approve, notes, jumlah, harga, departmen, project) {
            $('#update').modal('show');
            this._id = _id,
                this.pemasukan_from = from,
                this.pemasukan_for = ro,
                this.pemasukan_number = number,
                this.pemasukan_tanggal = tanggal,
                this.pemasukan_created = created,
                this.pemasukan_updated = updated,
                this.pemasukan_user_updated = user,
                this.pemasukan_email = email,
                this.pemasukan_kode_akun = kode,
                this.pemasukan_approval_status = approve,
                this.pemasukan_notes = notes,
                this.pemasukan_jumlah = jumlah,
                this.pemasukan_harga = harga,
                this.pemasukan_departmen = departmen,
                this.pemasukan_project = project
        },
        hapuspemasukan(_id, number, status) {
            $("#hapus").modal('show');
            this._id = _id;
            this.pemasukan_number = number;
            this.pemasukan_status = 'N';
        },
        updatepemasukan() {
            let newpemasukan = {
                pemasukan_from: this.pemasukan_from,
                pemasukan_for: this.pemasukan_for,
                pemasukan_number: this.pemasukan_number,
                pemasukan_tanggal: this.pemasukan_tanggal,
                pemasukan_created: this.pemasukan_created,
                pemasukan_updated: this.pemasukan_updated,
                pemasukan_user_updated: this.pemasukan_user_updated,
                pemasukan_email: this.pemasukan_email,
                pemasukan_kode_akun: this.pemasukan_kode_akun,
                pemasukan_approval_status: this.pemasukan_approval_status,
                pemasukan_notes: this.pemasukan_notes,
                pemasukan_jumlah: this.pemasukan_jumlah,
                pemasukan_harga: this.pemasukan_harga,
                pemasukan_departmen: this.pemasukan_departmen,
                pemasukan_project: this.pemasukan_project
            }
            console.log(newpemasukan);
            axios.put(`http://localhost:5000/Tr_pemasukan/${this._id}`, newpemasukan)
                .then((res) => {
                    this.getdata()
                    console.log(res)
                    $("#update").modal('hide');
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        softdelete() {
            axios.put(`http://localhost:5000/Tr_pemasukan/${this._id}`, { pemasukan_status: this.pemasukan_status })
                .then((res) => {
                    this.pemasukan_status = 'N',
                        this.getdata()
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
};
</script>