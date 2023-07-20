<template>
    <div class="user">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text center ml-10">Transaksi kas&bank</h3>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class=" col-md-4 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/pengeluaran">
                                <div class="panel-body row">
                                    <div class="row">
                                        <img class=" image" height="200px" width="200px" src="../../../assets/bisnis/icons8-profit-500.png" />
                                    </div>
                                    <div class="row">
                                        <span class="text-center">Pengeluaran</span>
                                    </div>
                                </div>
                                    </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-4 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/pemasukan">
                                <div class="panel-body row">
                                    <div class="row">
                                        <img class=" img-circle" height="200px" width="200px" src="../../../assets/bisnis/icons8-accounting-500.png" />
                                    </div>
                                    <div class="row">
                                        <span class="text-center">Pemasukan</span>
                                    </div>
                                </div>
                            </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-4 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/transfer">
                                <div class="panel-body row">
                                    <div class="row">
                                        <img class=" img-circle" height="200px" width="200px" src="../../../assets/bisnis/icons8-finance-document-500.png" />
                                    </div>
                                    <div class="row">
                                        <span class="text-center">Transfer tunai</span>
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
</template>