<template>
    <div class="penjualan">
        <div class="page-wrapper" style="min-height: 100vh !important">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text center ml-10">Laporan</h3>
                    </div>
                </div>
                <br>

                <div class="row" v-show="role === 'Finance' || role === 'Marketing' || role === 'Admin'">
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/report_project">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-wish-list-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Project</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <a href="http://absensi.bitniaga.com/">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-journal-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Absensi</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/report_penagihan">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" image" width="150" src="../../assets/bisnis/icons8-news-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Penagihan</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/report_barang">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" image" width="150" src="../../assets/bisnis/icons8-news-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Barang</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row" v-show="role === 'Tukang' || role === 'Marketing' || role === 'Admin'">
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/report_pelanggan">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" image" width="150" src="../../assets/bisnis/icons8-news-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan pelanggan</span>
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
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-work-500.png" />
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
                                <router-link to="/report_mybitniaga">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" width="150" src="../../assets/bisnis/icons8-flow-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Mybitniaga</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="row" v-show="role === 'Finance' || role === 'Admin' || role === 'Marketing'">
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
<script>
export default {
    computed: {
        role: function() {
            return this.$store.getters.role
        }
    }
}
</script>