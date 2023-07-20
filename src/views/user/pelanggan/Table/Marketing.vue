<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-light">Data pelanggan(Akan nonaktif / Putus):{{pelanggannoc.length}} </h6>
            </div>
            <div class="pull-right">
                <router-link to="/dashboard_pelanggan" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-arrow-left txt-light"></i>
                </router-link>
                <a href="#" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-fullscreen txt-light"></i>
                </a>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div class="form-group col-md-12">
                <div class="pull-right">
                    <input type="text" class="form-control" v-model="cari" placeholder="Search">
                </div>
            </div>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Pelanggan ID</th>
                        <th scope="col">Status</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Alamat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(pelanggan,index) in pelanggannoc" :key="pelanggan">
                        <th>{{index + 1}}</th>
                        <th>{{pelanggan.pengguna_id}}</th>
                        <th v-if="pelanggan.pengguna_noc_keterangan ==='Pelanggan akan nonaktif'"><span class="label label-warning">50%</span>{{pelanggan.pengguna_noc_keterangan}}</th>
                        <th v-else-if="pelanggan.pengguna_noc_keterangan ==='Pelanggan akan putus'"><span class="label label-danger">50%</span>{{pelanggan.pengguna_noc_keterangan}}</th>
                        <th v-else><span class="label label-danger">50%</span>Tidak ada keterangan</th>
                        <td>{{pelanggan.pengguna_nama}}</td>
                        <td>{{pelanggan.pengguna_alamat}}</td>
                    </tr>
                    <div class="modal  bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog ">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h5 class="modal-title" id="myModalLabel">Hapus</h5>
                                </div>
                                <div class="modal-body">
                                    <h5 class="mb-15">{{pengguna_nama}}</h5>
                                    <p>Apakah Anda Yakin Iningin Menghapus ?</p>
                                    <input type="hidden" class="form-control" v-model="id">
                                    <input type="hidden" class="form-control" v-model="pengguna_status">
                                </div>
                                <div class="modal-footer">
                                    <router-link :to="{name:'pelanggan_akan_mati'}">
                                        <button v-if="pengguna_noc_keterangan === 'Pelanggan akan nonaktif'" type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteds()">Iyaaaa</button>
                                        <button v-else type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteds1()">Iya</button>
                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                    </router-link>
                                </div>
                            </div>
                            <!-- /.modal-content -->
                        </div>
                    </div>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script src="./Service/marketing"></script>