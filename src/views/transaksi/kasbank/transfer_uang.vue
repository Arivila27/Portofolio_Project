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
                            <router-link to="/dashboard_pelanggan">
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
                                <h6 class="panel-title txt-dark">Data Pelanggan</h6>
                            </div>
                            <div class="pull-right">
                                <a href="#" class="pull-left inline-block refresh mr-15">
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
                                <div class="pull-right">
                                    <input type="text" class="form-control" v-model="cari" placeholder="Search">
                                </div>
                            </div>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Number</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Nominal</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(little , index) in Tr_transfer.slice(0,5)">
                                        <th>{{index + 1}}</th>
                                        <td>{{little.transfer_number}}</td>
                                        <td>{{little.transfer_approval_status}}</td>
                                        <td>{{little.transfer_total}}</td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation"><a href="javascript:void(0)" v-on:click="detaul(little._id,little.transfer_for.transfer_untuk,little.transfer_from.transfer_dari,little.transfer_number,little.transfer_tanggal,little.transfer_updated,little.transfer_user_updated,little.transfer_email,little.transfer_kode_akun,little.transfer_approval_status,little.transfer_notes,little.transfer_total)"  role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-share" aria-hidden="true"></i>Update</a></li>
                                                        <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-share" aria-hidden="true"></i>Detail</a></li>
                                                        <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="icon wb-share" aria-hidden="true"></i>Delete</a></li>
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
                                                    <h5 class="modal-title" id="myLargeModalLabel">Aktifkan</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <form>
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                                                <hr class="light-grey-hr" />
                                                                <div class="form-group col-md-12">
                                                                    <label for="">ID</label>
                                                                    <input type="text" class="form-control" v-model="transfer_id">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="">Pengirim</label>
                                                                    <multiselect v-model="transfer_from" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="M_pegawai" :taggable="true" @tag="addTag"></multiselect>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="">Penerima</label>
                                                                    <multiselect v-model="transfer_for" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="M_pegawai" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="to">Number</label>
                                                                    <input type="text" class="form-control" id="to" v-model="transfer_number">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="yng_update">Dibuat.tanggal</label>
                                                                    <input type="date" class="form-control" v-model="transfer_tanggal">
                                                                </div>
                                                                <div class="form-group col-md-6" hidden>
                                                                    <label for="">Updated</label>
                                                                    <input type="date" v-model="transfer_updated">
                                                                </div>
                                                                <div class="form-group col-md-6" hidden>
                                                                    <label for="">User Updated</label>
                                                                    <input type="text" v-model="transfer_user_updated">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="">Email</label>
                                                                    <input type="text" class="form-control" v-model="transfer_email">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="">Kode.akun</label>
                                                                    <input type="text" class="form-control" v-model="transfer_kode_akun">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="">Approve Status</label>
                                                                    <input type="text" class="form-control" v-model="transfer_approval_status">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="">Notes</label>
                                                                    <input type="text" class="form-control" v-model="transfer_notes">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="">Total.transfer</label>
                                                                    <input type="number" class="form-control" v-model="transfer_total">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger text-left">Ubah</button>
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
                                                    <h5 class="mb-15">{{transfer_from}}</h5>
                                                    <p>Apakah Anda Yakin Iningin Menghapus ?</p>
                                                    <input type="hidden" class="form-control" v-model="transfer_id">
                                                    <input type="hidden" class="form-control" v-model="transfer_status">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Iya</button>
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
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    data() {
        return {
            Tr_transfer: [],
            transfer_id: '',
            transfer_from: '',
            transfer_for: '',
            transfer_number: '',
            transfer_tanggal: '',
            transfer_created: '',
            transfer_updated: '',
            transfer_user_updated: '',
            transfer_email: '',
            transfer_kode_akun: '',
            transfer_approval_status: '',
            transfer_notes: '',
            transfer_total: '',
            transfer_departmen_from: '',
            transfer_departmen_for: '',
            transfer_status: '',
            M_pegawai: []
        }
    },
    mounted() {
        this.getdata()
        this.getpegawai()
    },
    methods: {
        // Mendapatkan Data PEgawai 
        getpegawai() {
            axios.get('http://localhost:5000/M_pengguna/pegawai')
                .then((response) => {
                    console.log(response.data);
                    this.M_pegawai = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // ----
        getdata() {
            axios.get('http://localhost:5000/Tr_transfer')
                .then((response) => {
                    console.log(response.data);
                    this.Tr_transfer = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // v-on:click="detaul(little._id,little.transfer_for.transfer_untuk,little.transfer_from.transfer_dari,little.transfer_number,little.transfer_tanggal,little.transfer_updated,little.transfer_user_updated,little.transfer_email,little.transfer_kode_akun,little.transfer_approval_status,little.transfer_notes,little.transfer_total)"
        detaul(id, rof, from, number, tanggal, updated, user, email, kode, approve, notes, total) {
            $("#update").modal('show');
            this.transfer_id = id;
            this.transfer_for = rof;
            this.transfer_from = from;
            this.transfer_number = number;
            this.transfer_tanggal = tanggal;
            this.transfer_updated = updated;
            this.transfer_user_updated = user;
            this.transfer_email = email;
            this.transfer_kode_akun = kode;
            this.transfer_approval_status = approve;
            this.transfer_notes = notes;
            this.transfer_total = total;
        },
        hapustransfer(_id, number, status) {
            $("#hapus").modal('show');
            this.transfer_id = _id;
            this.transfer_number = number;
            this.transfer_status = 'N';

        },
        updatetransfer() {
            let newtransfer = {
                transfer_from: this.transfer_from,
                transfer_for: this.transfer_for,
                transfer_number: this.transfer_number,
                transfer_tanggal: this.transfer_tanggal,
                transfer_created: this.transfer_created,
                transfer_updated: this.transfer_updated,
                transfer_user_updated: this.transfer_user_updated,
                transfer_email: this.transfer_email,
                transfer_kode_akun: this.transfer_kode_akun,
                transfer_approval_status: this.transfer_approval_status,
                transfer_notes: this.transfer_notes,
                transfer_total: this.transfer_total,
                transfer_departmen_from: this.transfer_departmen_from,
                transfer_departmen_for: this.transfer_departmen_for
            }
            console.log(newtransfer);
            axios.put(`http://localhost:5000/Tr_transfer/${this.transfer_id}`, newtransfer)
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
            axios.put(`http://localhost:5000/Tr_transfer/${this.transfer_id}`, {
                    transfer_status: this.transfer_status
                })
                .then((res) => {
                    this.transfer_status = 'N',
                        this.getdata()
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
};
</script>