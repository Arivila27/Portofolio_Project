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
                                <h6 class="panel-title txt-dark">Cek IP</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/dashboard_pelanggan" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left"></i>
                                </router-link>
                                <router-link to="/tambah_ip">
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
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                            </div>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">IP</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Tanggal masuk</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ip,index) in M_ip" :key="index">
                                        <th>{{index + 1}}</th>
                                        <td>{{ip.ip}}</td>
                                        <td>{{ip.nama_pengguna}}</td>
                                        <td>{{ip.ip_created}}</td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                     <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation">
                                                            <router-link :to="{name:'edit_ip',params:{id:ip._id}}" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-reply" aria-hidden="true"></i>Edit</router-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
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
</template>
<script src="./Service/list_ip"></script>