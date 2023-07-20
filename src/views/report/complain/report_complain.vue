<template>
    <div class="user">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text center ml-10">Laporan Complain Pelanggan</h3>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class=" col-md-6 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/report_complain_baru">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" height="200px" width="200px" src="../../../assets/bisnis/icons8-company-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Complain Baru</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-6 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/report_complain_selesai">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" height="200px" width="200px" src="../../../assets/bisnis/icons8-address-book-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Complain Selesai</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                     <div class=" col-md-12 text-center">
                         <div class="clearfix"><br></div>
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