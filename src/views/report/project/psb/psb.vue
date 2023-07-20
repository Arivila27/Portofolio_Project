<template>
    <div class="report-pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <div class="row">
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="refresh-container">
                            <div class="la-nim-1"></div>
                        </div>
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Laporan Data PSB</h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <router-link to="/report_complain">Back</router-link>
                                </h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Bulan</label>
                                    <input type="month" class="form-control" v-model="cari_bulan">
                                    <p></p>
                                </div>
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Cari nama</label>
                                    <input type="text" class="form-control" v-model="cari_nama">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="panel-heading">
                            <h6 class="panel-title txt-dark"></h6>
                        </div>
                        <div class="panel-body">
                            <table class="table table-borderless" v-if="Displayedpelanggan.length === 0">
                                <h1>Tidak ada Data</h1>
                            </table>
                            <table class="table table-borderless" v-else>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Tanggal<br>Pemasangan</th>
                                        <th>Pegawai yang<br>Pasang</th>
                                        <th>Fee</th>
                                        <th>Fee(Perorangan)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(pelanggan,index) in Displayedpelanggan" :key="pelanggan._id">
                                        <td>{{index + 1}}</td>
                                        <td>{{pelanggan.pengguna_nama}}</td>
                                        <!-- <td>{{pelanggan.pengguna_yang_psb.pengguna_nama_psb.pengguna_nama}}</td> -->
                                        <td>{{pelanggan.pengguna_tanggal_pemasangan}}</td>
                                        <td><label v-for="pegawai in pelanggan.pengguna_yang_psb.pengguna_nama_psb" :key="pegawai" class="label label-primary">{{pegawai.pengguna_nama}}</label></td>
                                        <td>{{pelanggan.pengguna_fee_psb | currency}}</td>
                                        <td>{{pelanggan.pengguna_fee_psb / pelanggan.pengguna_yang_psb.pengguna_nama_psb.length | currency }}</td>
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import API from '../../../../api.config'
export default {
    data() {
        return {
            pelanggan: [],
            cari_nama:'',
            cari_bulan: '',
            cari_pegawai: '',
            page: 1,
            perpage: 10,
            pages: [],
            picked: '',
            M_pegawai: [],
            angka1: 1,
            angka2: 2
        }
    },
    created() {
        this.getpelanggan();
        this.getpegawai();
    },
    watch: {
        pelanggan() {
            this.setPage()
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.Filterpelanggan.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(Filterpelanggan) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return Filterpelanggan.slice(from, to)
        },
        getpelanggan() {
            axios.get(API + '/M_pengguna/pelanggan')
                .then((response) => {
                    this.pelanggan = response.data
                    console.log(response.data);
                })
        },
        getpegawai() {
            axios.get(API + '/M_pengguna/pegawai')
                .then((response) => {
                    this.M_pegawai = response.data;
                    console.log(response.data);
                })
        }
    },
    computed: {
        Filterpelanggan: function() {
            return this.pelanggan.filter((pelanggan) => {
                var mencari_bulan = pelanggan.pengguna_tanggal_pemasangan.match(this.cari_bulan);
                var mencari_nama = pelanggan.pengguna_nama.match(this.cari_nama);
                // var mencari_pegawai = pelanggan.pengguna_yang_psb.match(this.cari_pegawai);
                return mencari_bulan && mencari_nama;
            })
        },
        Displayedpelanggan: function() {
            return this.paginate(this.Filterpelanggan)
        }
    }
}
</script>