<template>
    <div class="penagihan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text center ml-10">
                            Daftar Penagihan
                        </h3>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/penagihan_bulanan">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-notification-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Pembayaran</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/total_penagihan_keseluruhan">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-approval-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan pelanggan sudah bayar</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/penagihan_belum">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-profit-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan pelanggan belum bayar</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/laporan_harian">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-approval-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Harian</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/penagihan_bulanan_versi_2">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-notification-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Pembayaran 1.2(Coming Soon)</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/total_penagihan_regis">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-approval-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Pembayaran Registrasi</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="clearfix">
                        <br>
                        <br>
                        <br>
                    </div>
                    <div class="clearfix">
                        <br><br>
                    </div>
                </div>
                <div class="row">
                    <div class="clearfix">
                        <br>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>