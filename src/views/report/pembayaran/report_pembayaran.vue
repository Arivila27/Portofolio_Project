<template>
    <div class="user">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text center ml-10">Laporan Pembayaran</h3>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/report_pembayaran_bulanan">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" height="200px" width="200px" src="../../../assets/bisnis/icons8-address-book-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Pembayaran Bulanan(Bulanan)</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/report_pembayaran_registrasi">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" height="200px" width="200px" src="../../../assets/bisnis/icons8-address-book-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Pembayaran Registrasi(Bulanan)</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link to="/report_pembayaran_outstanding">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" height="200px" width="200px" src="../../../assets/bisnis/icons8-address-book-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Pembayaran Outstanding(Bulanan)</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-3 text-center">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <router-link :to="{name:'report_pembayaran_harian',params:{jumlah: jumlah_pelanggan}}">
                                    <div class="panel-body row">
                                        <div class="row">
                                            <img class=" img-circle" height="200px" width="200px" src="../../../assets/bisnis/icons8-address-book-500.png" />
                                        </div>
                                        <div class="row">
                                            <span class="text-center">Laporan Pembayaran Harian(All)</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="clearfix"><br></div>
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
<script>
import axios from 'axios';
export default {
    data() {
        return {
            jumlah_pelanggan : 0,
        }
    },
    created() {
        this.getpelangganaktiv();
    },
    
    methods: {
        getpelangganaktiv: function() {
          var domain = this.$store.getters.domain;
          axios.get(this.$API + '/M_pengguna/domain/pelanggan/' + domain)
              .then((response) => {
                  this.jumlah_pelanggan = response.data.length;
              });
        }
    }
};
</script>