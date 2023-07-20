<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view panel-refresh">
                            <div class="refresh-container">
                                <div class="la-anim-1"></div>
                            </div>
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-light">Data Konfirmasi Upgrade/Downgrade(Paket-Internet)</h6>
                                </div>
                                <div class="pull-right">
                                    <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                        <i class="zmdi zmdi-replay txt-light"></i>
                                    </a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body">
                                <div class="form-group col-md-12">
                                    <div class="pull-right">
                                        <input type="text" class="form-control" v-model="cari">
                                    </div>
                                </div>
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nomor</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Paket Diajukan</th>
                                            <th scope="col">Paket Sebelumnya</th>
                                            <th scope="col">Tanggal pengajuan</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(konfirmasi,index) in Displayedkonfirmasi" :key="konfirmasi._id">
                                            <th>{{index + 1}}</th>
                                            <th>{{konfirmasi.konfirmasi_upgrade_pelanggan_pengguna_id}}</th>
                                            <th>{{konfirmasi.konfirmasi_upgrade_pelanggan_pengguna_nama}}</th>
                                            <th>{{konfirmasi.konfirmasi_upgade_paket}}</th>
                                            <th>{{konfirmasi.konfirmasi_before_paket}}</th>
                                            <th>{{konfirmasi.konfirmasi_created}}</th>
                                            <td v-if="konfirmasi.konfirmasi_status_upgrade === 'N'"><span class="label label-danger">Belum dikonfirmasi</span></td>
                                            <td v-else><span class="label label-success">Suda dikonfirmasi</span></td>
                                            <td v-if="konfirmasi.konfirmasi_status_upgrade === 'N'">
                                                <router-link :to="{name:'update_konfirmasi_upgrade_paket',params:{id:konfirmasi.konfirmasi_upgrade_pelanggan_pengguna_id}}">
                                                    <button class="btn btn-primary mr-25">Konfirmasi</button>
                                                </router-link>
                                                <button class="btn btn-danger mr-20" data-toggle="modal" data-target="#unlogin" v-on:click="hapuspengguna(konfirmasi._id)" >Batalkan</button>
                                            </td>
                                            <td v-else><span class="label label-success"></span></td>
                                        </tr>
                                    <div class="modal  bs-example-modal-sm" id="unlogin" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog ">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myModalLabel">Hapus</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Hapus pengajuan Pengguna Ini?</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="unupgrade()">Iya</button>
                                                    <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                    </div>
                                    </tbody>
                                </table>
                                <div class="clearfix btn-group col-md-6 offset-md-5">
                                    <button type="button" class="btn btn-sm btn-success" v-if="page != 1" @click="page--">
                                        Previous</button> <button type="button" class="btn btn-sm btn-success" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" v-bind:key="pageNumber"> {{pageNumber}}
                                    </button>
                                    <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-success"> NEXT </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>
<script src="./Service/list_konfirmasi_upgrade_paket"></script>