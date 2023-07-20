<template>
    <div class="pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
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
                                <h6 class="panel-title txt-dark">Departmen</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/dashboard_pelanggan" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left"></i>
                                </router-link>
                                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-replay"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen"></i>
                                </a>
                                <router-link to="/tambah_departmen">
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
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Kode departmen</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Nama departmen</th>
                                        <th scope="col">Tanggal masuk</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(dpm,index) in displayedDep" :key="dpm._id">
                                        <th>{{index + 1}}</th>
                                        <td>{{dpm.pembantu_departmen_kode}}</td>
                                        <td v-if="dpm.pembantu_departmen_status === ''">{{dpm.pembantu_departmen_status}}</td>
                                        <td v-if="dpm.pembantu_departmen_status === 'Aktiv'"><span class="label label-primary">{{dpm.pembantu_departmen_status}}</span></td>
                                        <td v-else-if="dpm.pembantu_departmen_status === 'Nonaktif'"><span class="label label-danger">{{dpm.pembantu_departmen_status}}</span></td>
                                        <td>{{dpm.pembantu_departmen_nama}}</td>
                                        <td>{{dpm.pembantu_departmen_created}}</td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation"><router-link :to="{name:'edit_departmen',params:{id:dpm._id}}" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-reply" aria-hidden="true"></i>Update</router-link></li>
                                                        <li role="presentation"><a href="javascript:void(0)" @click="detail(dpm)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-reply" aria-hidden="true"></i>Detail</a></li>
                                                        <li role="presentation"><a href="javascript:void(0)" @click="detail(dpm)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="icon wb-share" aria-hidden="true"></i>Hapus</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <div class="modal fade bs-example-modal-lg" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog ">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myModalLabel">Detail Departmen</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15"></h5>
                                                    <div class="row">
                                                    <div class="form-group col-md-6 text-center">
                                                      <h6>Nama Departmen</h6>
                                                      <h6>Kode Departmen</h6>
                                                      <h6>Status</h6>
                                                      <h6>Dibuat tanggal</h6>
                                                      <h6>Diupdate tanggal</h6>
                                                      <h6>User yang update</h6>
                                                    </div>
                                                    <div class="form-group col-md-6 pull-left">
                                                      <h6> :{{selectedDepartmen.pembantu_departmen_nama}}</h6>
                                                      <h6> :{{selectedDepartmen.pembantu_departmen_kode}}</h6>
                                                      <h6> :{{selectedDepartmen.pembantu_departmen_status}}</h6>
                                                      <h6> :{{selectedDepartmen.pembantu_departmen_created}}</h6>
                                                      <h6> :{{selectedDepartmen.pembantu_departmen_updated}}</h6>
                                                      <h6> :{{selectedDepartmen.pembantu_departmen_user_updated}}</h6>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Iya</button>
                                                    <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                    </div>
                                    <div class="modal fade bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog ">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myModalLabel">Hapus Departmen</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15"></h5>
                                                    <p>Apakah Anda Yakin Ingin Menghapus <b>{{selectedDepartmen.pembantu_departmen_nama}}</b> ?</p>
                                                    <input type="hidden" class="form-control" v-model="selectedDepartmen._id">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteDepartmen">Iya</button>
                                                    <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                    </div>
                                </tbody>
                            </table>
                            <div class="clearfix btn-group col-md-6 offset-md-5">
                                <button type="button" class="btn btn-sm btn-success" v-if="page != 1" @click="page--">
                                    Previous</button> <button type="button" class="btn btn-sm btn-success" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" v-bind:key="pageNumber"> {{pageNumber}}
                                </button>
                                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-success"> NEXT </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>
<script src="./Service/departmen"></script>