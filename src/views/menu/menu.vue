<template>
    <div class="menu">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1>menu</h1>
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
                                    <h6 class="panel-title txt-dark">Data Pegawai</h6>
                                </div>
                                <div class="pull-right">
                                    <a href="#" class="pull-left inline-block refresh mr-15">
                                        <i class="zmdi zmdi-replay"></i>
                                    </a>
                                    <a href="#" class="pull-left inline-block full-screen mr-15">
                                        <i class="zmdi zmdi-fullscreen"></i>
                                    </a>
                                    <router-link to="/tambah_pegawai">
                                        <a href="#" class="pull-left inline-block">
                                            <i class="zmdi zmdi-file-plus"></i>
                                        </a>
                                    </router-link>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th width="10">No</th>
                                            <th width="100">kategori</th>
                                            <th width="100">nama</th>
                                            <th width="100">created</th>
                                            <th class="text-center" width="100">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="menu in M_menu">
                                            <th>1</th>
                                            <td>{{menu.menu_group}}</td>
                                            <td>{{menu.menu_nama}}</td>
                                            <td>{{menu.menu_created}}</td>
                                            <td>
                                                <div class="pull-right">
                                                    <div class="dropdown  pull-left">
                                                        <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                            <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-reply" aria-hidden="true"></i>Update</a></li>
                                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target="#hapus"><i class="icon wb-share" aria-hidden="true"></i>Delete</a></li>
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
                                                                <div class="form-group col-md-6">
                                                                    <label for="from">Menu Group</label>
                                                                    <select name="" id="" class="form-control">
                                                                        <option value="Master" selected>Master</option>
                                                                        <option value="Transaksi">Transaksi</option>
                                                                        <option value="Report">Report</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="to">Nama Menu</label>
                                                                    <input type="text" class="form-control" id="to" placeholder="Name">
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label for="yng_update">Tanggal Dibuat</label>
                                                                    <input type="date" class="form-control">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="upl">Tanggal Diupdate</label>
                                                                    <input type="date" id="upl" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger text-left" v-on:click="updatetransfer()">Ubah</button>
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
                                                        <input type="text" class="form-control" v-model="transfer_number">
                                                        <input type="text" class="form-control" v-model="transfer_status">
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="softdelete()">Iya</button>
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
    name: 'M_menu',
    data() {
        return {
            M_menu: [],
        }
    },
    mounted() {
        this.getdata()
    },
    methods: {
        getdata() {
            axios.get('http://localhost:5000/M_menu')
                .then((response) => {
                    console.log(response.data);
                    this.M_menu = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        softdelete(id) {
            axios.delete('http://localhost:5000/M_menu/' + id)
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