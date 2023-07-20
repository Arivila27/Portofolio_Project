<template>
    <div class="user">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row heading-bg">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h5 class="txt-dark">Pembelian</h5>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="panel panel-default card-view">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Pembelian yang belum diverifikasi</h6>
                            </div>
                            <div class="pull-right">
                                <a href="#" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-replay"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen"></i>
                                </a>
                                <router-link to="tambah_pembelian" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-file-plus"></i>
                                </router-link>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div class="form-group col-md-12">
                                <div class="pull-right">
                                    <input type="text" class="form-control" v-model="supname" placeholder="Search">
                                </div>
                            </div>
                            <table class="table table-hover display  pb-30">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Supplier</th>
                                        <th>Nama <br>Perusahaan Supplier</th>
                                        <th>Tanggal<br>Pembelian</th>
                                        <th>Status</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(pembelian,index) in FilterBelum" :key="pembelian._id">
                                        <td>{{index + 1}}</td>
                                        <td>{{pembelian.pembelian_supplier.supplier_nama}}</td>
                                        <td>{{pembelian.pembelian_supplier.supplier_nama_perusahaan}}</td>
                                        <td>{{pembelian.pembelian_created}}</td>
                                        <td> <span class="label label-warning">{{pembelian.pembelian_verifikasi}}</span></td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation"><router-link :to="{name:'detail_pembelian',params:{id:pembelian._id}}" role="menuitem"><i class="icon wb-reply" aria-hidden="true"></i>Detail</router-link></li>
                                                        <li role="presentation"><router-link :to="{name:'verifikasi_pembelian',params:{id:pembelian._id}}" role="menuitem"><i class="icon wb-share" aria-hidden="true"></i>Verifikasi</router-link></li>
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
                <div class="row">
                    <div class="panel panel-default card-view">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Pembelian yang Sudah diverifikasi</h6>
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
                                    <input type="text" class="form-control" v-model="supname1" placeholder="Search">
                                </div>
                            </div>
                            <table class="table table-hover display  pb-30">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Supplier</th>
                                        <th>Nama <br>Perusahaan Supplier</th>
                                        <th>Status</th>
                                        <th>Tanggal<br>Pembelian</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(pembelian,index) in FilterLunas" :key="pembelian._id">
                                        <td>{{index + 1}}</td>
                                        <td>{{pembelian.pembelian_supplier.supplier_nama}}</td>
                                        <td>{{pembelian.pembelian_supplier.supplier_nama_perusahaan}}</td>
                                        <td><span class="label label-success">{{pembelian.pembelian_verifikasi}}</span></td>
                                        <td>{{pembelian.pembelian_created}}</td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation"><router-link :to="{name:'detail_pembelian',params:{id:pembelian._id}}" role="menuitem"><i class="icon wb-reply" aria-hidden="true"></i>Detail</router-link></li>
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
            </div> <!-- tutup container -->
            <div class="row">
                <div class="col-md-12"></div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import API from '../../../api.config'
export default {
    data() {
        return {
            supname: '',
            supname1: '',
            pembelian_belum: [],
            pembelian_selesai: [],
            supplier: []
        }
    },
    created() {
        this.getpembelianb();
        this.getpembelianl();
        this.getsupplier();
    },
    methods: {
        getpembelianb() {
            axios.get(API + '/Tr_pembelian/belum')
                .then((response) => {
                    this.pembelian_belum = response.data
                });
        },
        getpembelianl() {
            axios.get(API + '/Tr_pembelian/lunas')
                .then((response) => {
                    this.pembelian_selesai = response.data
                });
        },
        getsupplier() {
            axios.get(API + '/M_supplier')
                .then((response) => {
                    this.supplier = response.data
                });
        }
    },
    computed: {
        FilterBelum:function() {
            return this.pembelian_belum.filter((pembelian) => {
                return pembelian.pembelian_supplier.supplier_nama.match(this.supname);
            });
        },
        FilterLunas:function(){
            return this.pembelian_selesai.filter((pembelian) =>{
                return pembelian.pembelian_supplier.supplier_nama.match(this.supname1);
            });
        }
    }
};
</script>