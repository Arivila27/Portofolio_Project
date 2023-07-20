<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12 text-center"></div>
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
                                    <h6 class="panel-title txt-dark">Barang/Aset</h6>
                                </div>
                                <div class="pull-right">
                                    <!-- <router-link to="/trinventori" class="pull-left inline-block refresh mr-15">
                                        <i class="zmdi zmdi-arrow-left"></i>
                                    </router-link> -->
                                    <router-link to="/trinventori" class="pull-left inline-block refresh mr-15">
                                        <i class="zmdi zmdi-arrow-left"></i>
                                    </router-link>
                                    <a href="#" class="pull-left inline-block refresh mr-15" v-on:click="getdata()">
                                        <i class="zmdi zmdi-replay"></i>
                                    </a>
                                    <a href="#" class="pull-left inline-block full-screen mr-15">
                                        <i class="zmdi zmdi-fullscreen"></i>
                                    </a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Tanggal masuk</th>
                                            <th>Nama</th>
                                            <th>Harga satuan</th>
                                            <th>Stok</th>
                                            <th>Total harga</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(masuk,index) in pemasukan.slice(0,5)" v-bind:key="masuk._id">
                                            <td>{{index + 1}}</td>
                                            <td>{{masuk.pemasukan_created}}</td>
                                            <td>{{masuk.pemasukan_nama}}</td>
                                            <td>{{masuk.pemasukan_harga}}</td>
                                            <td>{{masuk.pemasukan_stok}}</td>
                                            <td>{{masuk.pemasukan_total}}</td>
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
    </div>
</template>
<script>
import axios from 'axios';
import API from '../../../api.config'
export default {
    name: 'barang_masuk',
    data() {
        return {
            pemasukan: []
        }
    },
    created() {
        this.getpemasukan()
    },
    methods: {
        getpemasukan() {
            axios.get(API + '/M_item/pemasukan')
                .then((response) => {
                    this.pemasukan = response.data;
                });
        }
    }

};
</script>