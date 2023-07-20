<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Detail Pelanggan</h6>
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
                                                                <form action="upload_ktp_submit" method="get" accept-charset="utf-8">
                                                                    <div class="col-md-9">
                                                                        <div class="product-detail-wrap">
                                                                            <h3 class="mb-20 weight-500">{{pelanggan.pengguna_nama}}</h3>
                                                                            <div class="product-price head-font mb-30"></div>
                                                                            <label>Upload KTP</label>
                                                                            <input type="file" ref="file" id="file" class="form-control" v-on:change="handleupload()">
                                                                        </div>
                                                                    </div>
                                                                    <br>
                                                                    <div class="clearfix"></div>
                                                                    <div class="col-md-12">
                                                                        <button class="btn btn-primary">Upload</button> &nbsp;
                                                                        <router-link class="btn btn-danger" to="/pelanggan_2">
                                                                            Kembali
                                                                        </router-link>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Row -->
                                        <!-- Row -->
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
<script src="./Service/upload_ktp.js"></script>