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
                                <h6 class="panel-title txt-light">Data Closing</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/list_closing" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left"></i>
                                </router-link>
                                <a href="#" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-replay"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen"></i>
                                </a>
                                <router-link to="/data_closing" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-file-plus"></i>
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
                                        <th scope="col">Id Closing</th>
                                        <th scope="col">Tanggal</th>
                                        <th scope="col">Total pemasukan</th>
                                        <th scope="col">Total pengeluaran</th>
                                        <th scope="col">Total pendapatan</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(closing,index) in Filterdata" :key="closing._id">
                                        <th>{{index + 1}}</th>
                                        <th>{{closing.closing_id}}</th>
                                        <td>{{closing.closing_tanggal}}</td>
                                        <td>{{closing.closing_total_pemasukan}}</td>
                                        <td>{{closing.closing_total_pengeluaran}}</td>
                                        <td>{{closing.closing_total_pendapatan}}</td>
                                        <td> 
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation">
                                                            <router-link :to="{name:'detail_closing',params:{id:closing._id , domain : closing.closing_domain}}"><i class="icon wb-share" aria-hidden="true"></i>Detail</router-link>
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
        </div>
    </div>
</template>
<script src="./Service/list_closing.js"></script>