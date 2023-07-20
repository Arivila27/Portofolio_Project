<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-light">Pengajuan Withdrawal</h6>
            </div>
            <div class="pull-right">
                <router-link to="/item" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-arrow-left txt-light"></i>
                </router-link>
                <a href="#" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-replay txt-light"></i>
                </a>
                <a href="#" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-fullscreen txt-light"></i>
                </a>
                <router-link to="/tambah_wd" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-file-plus txt-light"></i>
                </router-link>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div class="form-group col-md-12">
                <div class="pull-right">
                    <input type="text" class="form-control" v-model="cari" placeholder="Search">
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Domain</th>
                        <th>Rekening</th>
                        <th>Status<br>Pengajuan</th>
                        <th>Saldo <br>Diajukan</th>
                        <th class="text-center" width="100">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" (pro,index) in Displayedwd" :key="pro._id">
                        <td>{{index + 1}}</td>
                        <td>{{pro.wd_nama}}</td>
                        <td>{{pro.wd_domain.domain_kode}} / {{pro.wd_domain.domain_name}}</td>
                        <td>17098902</td>
                        <td v-if="pro.status_wd === 'Sudah'"><span class="label label-success">
                                {{pro.status_wd}}
                            </span></td>
                        <td v-else-if="pro.status_wd === 'Belum'"><span class="label label-warning">
                                {{pro.status_wd}}
                            </span></td>
                        <td>{{pro.wd_besaran_diajukan | currency}}</td>
                        <td>
                            <div class="pull-right">
                                <div class="dropdown  pull-left">
                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                    </a>
                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                        <li role="presentation">
                                            <router-link :to="{name:'edit_wd',params:{id:pro._id}}"><i class="icon wb-share" aria-hidden="true"></i>Konfirmasi</router-link>
                                        </li>
                                        <li role="presentation">
                                            <router-link :to="{name:'upload_wd',params:{id:pro._id}}"><i class="icon wb-share" aria-hidden="true"></i>Upload Bukti Transfer</router-link>
                                        </li>
                                        <li role="presentation">
                                            <router-link :to="{name:'detail_wd',params:{id:pro._id}}"><i class="icon wb-share" aria-hidden="true"></i>Detail</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                    </tr>
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
</template>
<script src="./Service/Admin"></script>