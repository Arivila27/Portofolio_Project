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
                                <h6 class="panel-title txt-dark">Laporan Pelanggan</h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <router-link to="/report">Back</router-link>
                                </h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Tahun</label>
                                    <input type="number" class="form-control" v-model="tahun">
                                    <p>{{tahun}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Bulan</label>
                                    <input type="month" class="form-control" v-model="bulan">
                                    <p>{{bulan}}</p>
                                </div>
                            </div>
                            <!--  <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Mingguan</label>
                                    <input type="week" class="form-control" v-model="minggu">
                                    <p>{{minggu}}</p>
                                </div>
                            </div> Pending Sebentar Mingguan -->
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Tanggal</label>
                                    <input type="date" class="form-control" v-model="cari">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Data pelanggan:{{cari}} {{bulan}} {{tahun}}</h6>
                            </div>
                            <div class="pull-right">
                                <h6 class="panel-title txt-dark">Total:{{FilterPelanggan.length}}</h6>
                                <button @click.prevent="print" type="button" class="btn btn-primary btn-anim"><i class="fa fa-print"></i><span class="btn-text">Print</span></button>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <table class="table table-borderless" v-if="DisplayedPelanggan.length === 0">
                                <h1>Tidak ada Data</h1>
                            </table>
                            <div class="form-group col-md-6" v-else>
                                <div class="pull-left">
                                    <label for="">Status</label>
                                   <!--  <multiselect v-model="pilih_pelanggan" :options="statusnya_pelanggan" :searchable="true" :close-on-select="true" :show-labels="false" placeholder="Pilih Cabang"></multiselect> -->
                                   <select class="form-control" v-model="pilih_pelanggan">
                                       <option value="Y">Aktiv</option>
                                       <option value="N">Nonaktif</option>
                                   </select>
                                </div>
                            </div>
                            <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Status</th>
                                        <th>Nama</th>
                                        <th>PPOE</th>
                                        <th>Alamat</th>
                                        <th>Tanggal<br>Pemasangan</th>
                                        <th>Yang Membuat/Mengupdate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(langgan,index) in FilterPelanggan" :key="langgan._id">
                                        <td>{{langgan.pengguna_id}}</td>
                                        <td v-if="langgan.pengguna_status === 'Y'"><span class="label label-primary">Aktiv</span></td>
                                        <td v-else><span class="label label-danger">Nonaktif</span></td>
                                        <td>{{langgan.pengguna_nama}}</td>
                                        <td>{{langgan.pengguna_ppoe}}</td>
                                        <td>{{langgan.pengguna_alamat}}</td>
                                        <td>{{langgan.pengguna_tanggal_pemasangan}}</td>
                                        <td>{{langgan.pengguna_user_updated}} / {{langgan.pengguna_user_aktivkan}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- <div class="panel panel-default card-view panel-refresh">
                        <div class="panel-heading">
                            <h6 class="panel-title txt-dark">Total</h6>
                        </div>
                        <div class="panel-body">
                            <h4>Total: {{hitungtotal | currency}}</h4>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import API from '../../../../api.config'
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    data() {
        return {
            cari: '',
            pelanggan: [],
            minggu: '',
            bulan: '',
            tahun: '',
            page: 1,
            perpage: 10,
            pages: [],
            pilih_pelanggan: '',
            statusnya_pelanggan: [
                { status_name: 'Aktiv', value: 'Y' },
                { status_name: 'Nonaktif', value: 'N' }
            ],
        }
    },
    created() {
        this.getapi();
    },
    watch: {
        pelanggan() {
            this.setPage()
        }
    },
    methods: {
        print: function() {
            var newWin
            var divToPrint = this.$refs.PrintTable
            newWin = window.open("");
            newWin.document.write(divToPrint.outerHTML);
            newWin.print();
            newWin.close();
        },
        setPage() {
            let numberOfPages = Math.ceil(this.FilterPelanggan.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterPelanggan) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterPelanggan.slice(from, to)
        },
        getapi() {
            axios.get(API + '/M_pengguna/pelanggan/get-all')
                .then((response) => {
                    this.pelanggan = response.data;
                });
        }
    },
    computed: {
        FilterPelanggan: function() {
            return this.pelanggan.filter((pelanggan) => {
                var cari_tanggal = pelanggan.pengguna_tanggal_pemasangan.match(this.cari);
                // var cari_minggu = pelanggan.pengguna_tanggal_pemasangan.match(this.minggu);
                var cari_bulan = pelanggan.pengguna_tanggal_pemasangan.match(this.bulan);
                var cari_tahun = pelanggan.pengguna_tanggal_pemasangan.match(this.tahun);
                var cari_status = pelanggan.pengguna_status.match(this.pilih_pelanggan);

                return cari_tanggal && cari_bulan && cari_tahun && cari_status;
            });
        },
        DisplayedPelanggan: function() {
            return this.paginate(this.FilterPelanggan)
        },
        hitungtotal: function() {
            var totalan = 0;
            for (let i = 0; i < this.FilterPelanggan.length; i++) {
                totalan += parseInt(this.FilterPelanggan[i].pengguna_biaya_total);
            }
            return totalan;
        }
    },

};
</script>