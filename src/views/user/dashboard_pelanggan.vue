<template>
    <div class="user">
        <div class="page-wrapper" style="min-height: 100vh">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text center ml-10">
                            Daftar Pengguna
                        </h3>
                    </div>
                </div>
                <br>
                <div class="row">
                    <!-- <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/pelanggan">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" image" width="150" src="../../assets/bisnis/icons8-people-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Pelanggan Aktiv</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div> -->
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/pelanggan_2">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" image" width="150" src="../../assets/bisnis/icons8-people-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Pelanggan Aktiv</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/pelanggan_baru">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" image" width="150" src="../../assets/bisnis/icons8-people-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Pelanggan Baru</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/pelanggan_nonaktif">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-commercial-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Pelanggan Nonaktif</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/pelanggan_putus">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-commercial-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Pelanggan Putus</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/pelanggan_akan_aktif">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-collaboration-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Pelanggan Pra-aktif</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/pelanggan_akan_mati">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-collaboration-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Pelanggan Pra-putus / Pra-nonaktif</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/type_pelanggan">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-conference-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Tipe Pelanggan</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/akses_pelanggan">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-privacy-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Akses Pelanggan</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/jumlah_pegawai_psb">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-trust-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Jumlah PSB(Pegawai)</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div> -->
                </div>
                <!-- <div class="row">
                </div> -->
            </div> <!-- tutup container -->
            <div class="row">
                <div class="col-md-12"></div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>