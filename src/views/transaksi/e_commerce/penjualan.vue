<template>
    <div class="penjualan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text center ml-10">Pembelian</h3>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class=" col-md-6 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/record_penjualan">
                                <div class="panel-body row">
                                    <div class="row">
                                        <img class=" image" height="200px" width="200px" src="../../../assets/bisnis/icons8-small-business-500.png" />
                                    </div>
                                    <div class="row">
                                        <span class="text-center">History Penjualan</span>
                                    </div>
                                </div>
                                    </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-6 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/menjual">
                                <div class="panel-body row">
                                    <div class="row">
                                        <img class=" img-circle" height="200px" width="200px" src="../../../assets/bisnis/icons8-accounting-500.png" />
                                    </div>
                                    <div class="row">
                                        <span class="text-center">Penjualan</span>
                                    </div>
                                </div>
                            </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <br>
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