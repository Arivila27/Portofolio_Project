<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Detail Closing</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="ubah">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="panel panel-default card-view">
                                                    <div class="panel-wrapper collapse in">
                                                        <div class="panel-body">
                                                            <div class="row">
                                                                <div class="col-md-3">
                                                                    <div class="item-big">
                                                                        <!-- START carousel-->
                                                                        <div id="carousel-example-captions-1" data-ride="carousel" class="carousel slide">
                                                                            <ol class="carousel-indicators">
                                                                                <li data-target="#carousel-example-captions-1" data-slide-to="0" class="active"></li>
                                                                                <li data-target="#carousel-example-captions-1" data-slide-to="1"></li>
                                                                            </ol>
                                                                            <div role="listbox" class="carousel-inner">
                                                                                <div class="item active"> <img src="../../../../assets/img/gallery/mock1.jpg" alt="First slide image"> </div>
                                                                                <div class="item"> <img src="../../../../assets/img/gallery/mock4.jpg" alt="Second slide image"> </div>
                                                                            </div>
                                                                        </div>
                                                                        <!-- END carousel-->
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-9">
                                                                    <div class="product-detail-wrap">
                                                                        <h3 class="mb-20 weight-500">{{pelanggan.pengguna_nama}}</h3>
                                                                        <div class="product-price head-font mb-30"></div>
                                                                        <p class="mb-50">{{pelanggan.pengguna_lokasi_pasang}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Row -->
                                        <!-- Row -->
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="panel panel-default card-view">
                                                    <div class="panel-wrapper collapse in">
                                                        <div class="panel-body">
                                                            <div class="tab-struct custom-tab-1 product-desc-tab">
                                                                <ul role="tablist" class="nav nav-tabs nav-tabs-responsive" id="myTabs_7">
                                                                    <li class="active" role="presentation"><a aria-expanded="true" data-toggle="tab" role="tab" id="descri_tab" href="#descri_tab_detail"><span>Informasi</span></a></li>
                                                                </ul>
                                                                <div class="tab-content" id="myTabContent_7">
                                                                    <div id="descri_tab_detail" class="tab-pane fade in pt-0 active" role="tabpanel">
                                                                        <div class="table-wrap">
                                                                            <div class="table-responsive">
                                                                                <table class="table  mb-0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="border-none">Nama</td>
                                                                                            <td class="border-none">{{pelanggan.pengguna_nama}}</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Alamat</td>
                                                                                            <td>{{pelanggan.pengguna_alamat}}</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>No.telp</td>
                                                                                            <td>{{pelanggan.pengguna_no_telepon}}</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Lokasi Pemasangan</td>
                                                                                            <td>{{pelanggan.pengguna_lokasi_pasang}}</td>
                                                                                        </tr>
                                                                                        <tr v-if="pelanggan.pengguna_status === 'N'">
                                                                                            <td>Tanggal Nonaktif</td>
                                                                                            <td>{{pelanggan.pengguna_updated}}</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Tanggal Pemasangan</td>
                                                                                            <td>{{pelanggan.pengguna_tanggal_pemasangan}}</td>
                                                                                        </tr> 
                                                                                        <tr>
                                                                                            <td>Biaya registrasi</td>
                                                                                            <td>{{pelanggan.pengguna_biaya_registrasi | currency }}</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Biaya tambahan</td>
                                                                                            <td>{{pelanggan.pengguna_biaya_tambahan | currency}}</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Biaya Prored</td>
                                                                                            <td>{{pelanggan.pengguna_biaya_prored | currency}}</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Biaya total</td>
                                                                                            <td>{{pelanggan.pengguna_biaya_tambahan + pelanggan.pengguna_biaya_prored + pelanggan.pengguna_biaya_registrasi | currency}}</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            pelanggan: {},
            complain: [],
            produk: [],
            penagihan: []
        }
        // ----
    },
    created() {
        this.getpelanggan()
    },
    mounted() {
        this.getcomplain()
        this.getproduk()
        this.getpenagihan()
    },
    methods: {
        // mendapatkan data pelanggan
        getpelanggan() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    this.pelanggan = response.data;
                });
        },
        // ---
        getcomplain() {
            axios.get(API + `/Tr_complain/list-pelanggan/${this.pelanggan._id}`)
                .then((response) => {
                    console.log(response.data)
                    this.complain = response.data;
                });
        },
        getproduk() {
            axios.get(API + `/M_upgrade/list-pelanggan/${this.pelanggan._id}`)
                .then((response) => {
                    this.produk = response.data
                });
        },
        getpenagihan() {
            axios.get(API + `/Tr_penagihan/list-pelanggan/${this.pelanggan._id}`)
                .then((response) => {
                    this.penagihan = response.data
                });
        }
    }
}
</script>