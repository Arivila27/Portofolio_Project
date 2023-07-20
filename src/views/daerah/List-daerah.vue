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
                                <h6 class="panel-title txt-light">Daerah</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/tambah_daerah">
                                    <a href="#" class="pull-left inline-block">
                                        <i class="zmdi zmdi-file-plus txt-light"></i>
                                    </a>
                                </router-link>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div class="form-group col-md-12">
                                <div class="pull-right">
                                    <input type="text" class="form-control" placeholder="Search" v-model="cari">
                                </div>
                            </div>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Nama Kabupaten</th>
                                        <th scope="col">Nama Kecamatan</th>
                                        <th scope="col">Nama Desa/Kelurahan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(daerah,k) in Filterdaerah">
                                        <th>{{k + 1}}</th>
                                        <td>{{daerah.kabupaten}}</td>
                                        <td>{{daerah.kecamatan}}</td>
                                        <td>{{daerah.desa}}</td>
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
<script src="./Service/list_daerah"></script>