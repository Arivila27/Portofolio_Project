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
                                <h6 class="panel-title txt-dark">Domain</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/dashboard_pelanggan" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left"></i>
                                </router-link>
                                <router-link to="/tambah_domain">
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
                                        <th scope="col">Kode Domain</th>
                                        <th scope="col">Lokasi</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Nama Domain</th>
                                        <th scope="col">Tanggal masuk</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(domain,index) in FilterDomain" :key="domain._id">
                                        <th>{{index + 1}}</th>
                                        <td>{{domain.domain_kode}}</td>
                                        <td>{{domain.domain_kabupaten}}</td>
                                        <td v-if="domain.domain_status === 'Y'"><span class="label label-success">Aktiv</span></td>
                                        <td v-else-if="domain.domain_status === 'N'"><span class="label label-danger">Nonaktif</span></td>
                                        <td>{{domain.domain_nama}}</td>
                                        <td>{{domain.domain_created}}</td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation">
                                                            <router-link :to="{name:'edit_domain',params:{id:domain._id}}" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-reply" aria-hidden="true"></i>Update</router-link>
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
<script src="./Service/list_domain"></script>