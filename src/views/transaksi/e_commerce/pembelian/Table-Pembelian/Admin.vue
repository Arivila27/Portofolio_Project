<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-dark">Data pembelian</h6>
            </div>
            <div class="pull-right">
                <router-link to="/pembelian" v-on:click="getdata()" class="pull-left inline-block back mr-15">
                    <i class="zmdi zmdi-arrow-left"></i>
                </router-link>
                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-replay"></i>
                </a>
                <a href="#" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-fullscreen"></i>
                </a>
                <router-link to="/tambah_pembelian" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-file-plus"></i>
                </router-link>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div class="form-group col-md-6">
                <div class="pull-left">
                    <button class="btn btn-default" @click="getpembelian">All</button> &nbsp;
                    <button class="btn btn-warning" @click="getpembelianbelum">Belum</button> &nbsp;
                    <button class="btn btn-success" @click="getpembeliansudah">Sudah</button>
                </div>
            </div>
            <div class="form-group col-md-6">
                <div class="pull-right">
                    <input type="text" class="form-control" v-model="cari">
                </div>
            </div>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Nomor</th>
                        <th scope="col">Status</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Nama <br>Perusahaan</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(beli,index) in DisplayedPembelian" :key="beli._id">
                        <th>{{index + 1}}</th>
                        <td v-if="beli.pembelian_verifikasi === 'Belum'"><span class="label label-warning">{{beli.pembelian_verifikasi}}</span></td>
                        <td v-else-if="beli.pembelian_verifikasi === 'Lunas'"><span class="label label-success">{{beli.pembelian_verifikasi}}</span></td>
                        <td>{{beli.pembelian_created}}</td>
                        <td>{{beli.pembelian_supplier.supplier_nama}}</td>
                        <td>{{beli.pembelian_supplier.supplier_nama_perusahaan}}</td>
                        <td>
                            <router-link :to="{name:'detail_pembelian',params:{id:beli._id}}">Lihat</router-link>
                            <!--  :to="{name: 'Edit', params: { id: item._id }}" -->
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