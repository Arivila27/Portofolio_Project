<template>
    <div class="user">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="pull-left">
                            <h3 class="text center ml-10">
                                Jadwal
                            </h3>
                            <div class="clearfix">
                                <br>
                            </div>
                            <div class="form-group">
                                <label>Cari bulan</label>
                                <input type="month" class="form-control" v-model="cari_bulan">
                            </div>
                        </div>
                        <div class="pull-right">
                            <router-link :to="{name:'tambah_penjadwalan'}">
                                <button class="btn btn-primary">Tambah</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class=" col-md-2 text-center" v-for="jadwal in Filterjadwal" :key="jadwal">
                        <div class="panel panel-default contact-card card-view">
                            <div class="panel-wrapper collapse in">
                                <h4 class="text-center">{{jadwal.hari}}</h4>
                                <div class="panel-body row">
                                    <div class="row">
                                        <span class="text-center">{{jadwal.tanggal}}</span>
                                        <p> <span class="label label-success" v-for="pegawai in jadwal.pegawai_masuk" :key="pegawai">{{pegawai.pengguna_nama}}</span></p>
                                    </div>
                                    <div class="clearfix">
                                        <br>
                                    </div>
                                    <button class="btn btn-warning" @click.prevent="clickdetail(jadwal)">Detail</button>
                                </div>
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
<script src="./Service/penjadwalan"></script>