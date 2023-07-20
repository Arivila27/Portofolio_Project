<template>
    <div class="user">
        <div class="page-wrapper">
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
                    <div class=" col-md-4 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/pelanggan">
                                <div class="panel-body row">
                                    <div class="row">
                                        <img class=" image" width="150" src="../../assets/bisnis/icons8-people-500.png" />
                                    </div>
                                    <div class="row">
                                        <span class="text-center">Data Pelanggan</span>
                                    </div>
                                </div>
                                    </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-4 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/pegawai">
                                <div class="panel-body row">
                                    <div class="row">
                                        <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-technical-support-500.png" />
                                    </div>
                                    <div class="row">
                                        <span class="text-center">Calon Pelanggan/Pemasangan Baru</span>
                                    </div>
                                </div>
                            </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-4 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/jadwal_kerja">
                                <div class="panel-body row">
                                    <div class="row">
                                        <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-schedule-500.png" />
                                    </div>
                                    <div class="row">
                                        <span class="text-center">Pelanggan Putus</span>
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