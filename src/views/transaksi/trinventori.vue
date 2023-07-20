<template>
    <div class="user">
        <div class="page-wrapper" style="min-height: 100vh !important">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text center ml-10">
                            Daftar Inventori
                        </h3>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/item">
                                <div class="panel-body row">
                                    <div class="row">
                                        <img class=" image" width="150" src="../../assets/bisnis/icons8-journal-500.png" />
                                    </div>
                                    <div class="row">
                                        <span class="text-center">Aset</span>
                                    </div>
                                </div>
                                    </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/report_barang_masuk">
                                <div class="panel-body row">
                                    <div class="row">
                                        <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-inspection-500.png" />
                                    </div>
                                    <div class="row">
                                        <span class="text-center">Laporan Barang Masuk</span>
                                    </div>
                                </div>
                                    </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/supplier">
                                <div class="panel-body row">
                                    <div class="row">
                                        <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-businessman-500.png" />
                                    </div>
                                    <div class="row">
                                        <span class="text-center">Supplier</span>
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
                    </br>
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
    </div>
</template>