<template>
    <div class="pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
                <!-- /Row -->
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="refresh-container">
                            <div class="la-anim-1"></div>
                        </div>
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-light">Tipe Cash</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/dashboard_pelanggan" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left txt-light"></i>
                                </router-link>
                                <a href="#" data-toggle="modal" data-target="#instruction" class="pull-left inline-block mr-15">
                                    <i class="zmdi zmdi-help txt-light"></i>
                                </a>
                                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-replay txt-light"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen txt-light"></i>
                                </a>
                                <router-link to="/tambah_kode_akun">
                                    <a href="#" class="pull-left inline-block">
                                        <i class="zmdi zmdi-file-plus txt-light"></i>
                                    </a>
                                </router-link>
                            </div>
                            <div class="clearfix"></div>
                            <!-- --- Modal for instruction  -->
                            <div class="modal fade" id="instruction" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle">Petunjuk</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Menu Kode Akun ini digunakan untuk Menyimpan Akun Anda Suatu Saat Bisa berguna untuk Dompet APlikasi Khusus Mybitniaga </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Tutup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ---- -->
                        </div>
                        <div class="panel-body">
                            <div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="total-tagihan">
                                                <div class="mt-15 mb-10">
                                                    <span class="block font-12 weight-400">Total Data</span>
                                                    <span class="txt-dark block counter weight-600 font-24">{{akun.length}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-wrap mt-20" id="printlang">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Sortir Halaman</label>
                                        <select class="form-control" v-model.number="pageSize">
                                            <option value="1">1</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                            <option value="200">200</option>
                                            <option value="500">500</option>
                                            <option value="1000">1000</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <label>Cari.Nama</label>
                                        <input type="text" class="form-control" v-model="cari" placeholder="Nama">
                                    </div>
                                    <div class="col-md-3">
                                        <label>Cari Subklasifikasi</label>
                                        <!-- <input type="date" class="form-control" v-model="cari_sub" placeholder="Nama"> -->
                                        <select class="form-control" v-model="cari_sub">
                                            <option>KAS</option>
                                            <option>BANK</option>
                                        </select>
                                    </div>
                                    <div class="col-md-3">
                                        <label>Cari Bank</label>
                                        <!-- <input type="date" class="form-control" v-model="cari_sub" placeholder="Nama"> -->
                                        <select class="form-control" v-model="cari_bank">
                                            <option v-for="(item, i) in bank" :key="i" :value="item.value">
                                                {{ item.label }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="mt-40" style="overflow-x: scroll">
                                <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Kode</th>
                                            <th scope="col">BANK</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Subklasifikasi</th>
                                            <th scope="col">No.Rekening</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(kdakun,index) in PageofItems" :key="kdakun._id">
                                            <th>{{index + 1}}</th>
                                            <td>{{kdakun.kode_akun}}</td>
                                            <td>{{kdakun.kode_akun_nama_bank}}</td>
                                            <td>{{kdakun.kode_akun_nama}}</td>
                                            <td>{{kdakun.kode_akun_subklasifikasi}}</td>
                                            <td>{{kdakun.kode_akun_rekening}}</td>
                                            <td v-if="kdakun.kode_akun_status === 'Aktiv'"><span class="label label-primary">{{kdakun.kode_akun_status}}</span></td>
                                            <td v-if="kdakun.kode_akun_status === 'Nonaktif'"><span class="label label-warning">{{kdakun.kode_akun_status}}</span></td>
                                            <td>
                                                <div class="pull-right">
                                                    <div class="dropdown  pull-left">
                                                        <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                            <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                            <li role="presentation"><a href="javascript:void(0)" @click="detail(kdakun)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="icon wb-share" aria-hidden="true"></i>Hapus</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <div class="modal fade bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog ">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                        <h5 class="modal-title" id="myModalLabel">Hapus Departmen</h5>
                                                    </div>
                                                    <div class="modal-body">
                                                        <h5 class="mb-15"></h5>
                                                        <p>Apakah Anda Yakin Ingin Menghapus <b>{{kode_akun.kode_akun_nama}}</b> ?</p>
                                                        <input type="hidden" class="form-control" v-model="kode_akun._id">
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteds">Iya</button>
                                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                                <!-- /.modal-content -->
                                            </div>
                                        </div>
                                    </tbody>
                                </table>
                                <div class="clearfix btn-group col-md-12 offset-md-6 mt-10">
                                    <JwPagination :pageSize="pageSize" :items="FilterAkun" @changePage="onChangePage"></JwPagination>
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
<script>
import axios from 'axios';
import API from '../../api.config'
import JwPagination from 'jw-vue-pagination';
export default {
    components: {
        JwPagination
        // Table
    },
    data() {
        return {
            cari: '',
            cari_sub: '',
            cari_bank : '',
            akun: [],
            bank : [],
            kode_akun: '',
            PageofItems: [],
            pageSize: 10
        }
    },
    created() {
        this.getdata(),
        this.getdatabank()
    },
    methods: {
        onChangePage: function(PageofItems) {
            this.PageofItems = PageofItems
            // console.log(pageSize)
        },
        detail(kdakun) {
            this.kode_akun = kdakun
        },
        deleteds() {
            axios.put(API + `/M_kode_akun/${this.kode_akun._id}`, {
                    kode_status: "N",
                    kode_akun_updated: new Date().toISOString().slice(0, 10)
                })
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menghapus data', 'success');
                    this.getdata()
                });
        },
        getdatabank() {
            axios.get(API + '/M_bank_list')
                .then((response) => {
                    this.bank = response.data.map(item => ({
                                label: item.bank_name, 
                                value: item.bank_name
                                }))
                });
        },
        getdata() {
            axios.get(API + '/M_kode_akun/' + this.$store.getters.domain)
                .then((response) => {
                    this.akun = response.data
                });
        }
    },
    computed: {
        FilterAkun: function() {
            return this.akun.filter((akun) => {
                var b = akun.kode_akun_nama.toLowerCase().includes(this.cari.toLowerCase());
                var c = akun.kode_akun_subklasifikasi.toLowerCase().includes(this.cari_sub.toLowerCase());
                var a = akun.kode_akun_nama_bank.toLowerCase().includes(this.cari_bank.toLowerCase());
                var d = akun < this.pageSize && akun > 0;

                return b && c  && a || d;
            })
        },
    }
};
</script>