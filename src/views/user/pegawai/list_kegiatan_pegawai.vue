<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Detail Pelanggan</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="ubah">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="panel panel-default card-view">
                                                    <div class="panel-wrapper collapse in">
                                                        <div class="panel-body">
                                                            <div class="row">
                                                                <div class="col-md-3">
                                                                    <div class="item-big">
                                                                        <!-- START carousel-->
                                                                        <div id="carousel-example-captions-1" data-ride="carousel" class="carousel slide">
                                                                            <ol class="carousel-indicators">
                                                                                <li data-target="#carousel-example-captions-1" data-slide-to="0" class="active"></li>
                                                                                <li data-target="#carousel-example-captions-1" data-slide-to="1"></li>
                                                                            </ol>
                                                                            <div role="listbox" class="carousel-inner">
                                                                                <div class="item active"> <img src="../../../assets/img/gallery/mock1.jpg" alt="First slide image"> </div>
                                                                                <div class="item"> <img src="../../../assets/img/gallery/mock4.jpg" alt="Second slide image"> </div>
                                                                            </div>
                                                                        </div>
                                                                        <!-- END carousel-->
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-9">
                                                                    <div class="product-detail-wrap">
                                                                        <h3 class="mb-20 weight-500">{{pelanggan.pengguna_nama}}</h3>
                                                                        <div class="product-price head-font mb-30"></div>
                                                                        <p class="mb-50">{{pelanggan.pengguna_lokasi_pasang}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Row -->
                                        <!-- Row -->
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="panel panel-default card-view">
                                                    <div class="panel-wrapper collapse in">
                                                        <div class="panel-body">
                                                            <div class="tab-struct custom-tab-1 product-desc-tab">
                                                                <ul role="tablist" class="nav nav-tabs nav-tabs-responsive" id="myTabs_7">
                                                                    <li class="active" role="presentation"><a aria-expanded="true" data-toggle="tab" role="tab" id="descri_tab" href="#descri_tab_detail"><span>Informasi</span></a></li>
                                                                    <li role="presentation" class="next"><a data-toggle="tab" id="adi_info_tab" role="tab" href="#adi_info_tab_detail" aria-expanded="false"><span>Kegiata/Jadwal</span></a></li>
                                                                    
                                                                </ul>
                                                                <div class="tab-content" id="myTabContent_7">
                                                                    <div id="adi_info_tab_detail" class="tab-pane fade in pt-0" role="tabpanel">
                                                                        <br>
                                                                        <div class="table-wrap mt-20" id="printlang">
                                                                            <div class="row">
                                                                                <div class="col-md-6">
                                                                                    <label>Cari Bulan</label>
                                                                                    <input type="month" class="form-control" v-model="select_bulan_complain" placeholder="Nama">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="clearfix"></div>
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <table class="tablesaw table-bordered table-hover table mt-20" data-tablesaw-mode="swipe">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th scope="col">No.</th>
                                                                                            <th scope="col">Nama Pelanggan</th>
                                                                                            <th scope="col">Status</th>
                                                                                            <th scope="col">Tanggal</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr v-for="(keluhan,index) in PageOfComplain" :key="keluhan._id">
                                                                                            <td>{{index + 1}}</td>
                                                                                            <td>{{keluhan.complain_pengguna_nama}}</td>
                                                                                            <td v-if="keluhan.complain_route === 'Proses'"><span class="label label-warning">{{keluhan.complain_keterangan_status}}</span></td>
                                                                                            <td v-if="keluhan.complain_route === 'Selesai'"><span class="label label-success">{{keluhan.complain_route}}</span></td>
                                                                                            <td>{{keluhan.complain_penyelesaian_tanggal}}</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                                <div class="clearfix btn-group col-md-12 offset-md-6 mt-10">
                                                                                    <JwPagination :pageSize="PageSize" :items="FilterComplain" @changePage="onChangePageComplain"></JwPagination>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <table class="tablesaw table-bordered table-hover table mt-20" data-tablesaw-mode="swipe">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th scope="col">No.</th>
                                                                                            <th scope="col">Nama Pelanggan</th>
                                                                                            <th scope="col">Status</th>
                                                                                            <th scope="col">Tanggal</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr v-for="(psb,index) in PageOfPsb " :key="psb._id">
                                                                                            <td>{{index + 1}}</td>
                                                                                            <td>{{psb.psb_pengguna_nama}}</td>
                                                                                            <td v-if="psb.psb_route === 'S'"><span class="label label-danger">SurveyLokasi</span></td>
                                                                                            <td v-if="psb.psb_route === 'T'"><span class="label label-warning">Penarikan</span></td>
                                                                                            <td v-if="psb.psb_route === 'U'"><span class="label label-primary">Penyambungan</span></td>
                                                                                            <td v-if="psb.psb_route === 'L'"><span class="label label-success">Selesai</span></td>
                                                                                            <td>{{psb.psb_penyelesaian_tanggal}}</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                                <div class="clearfix btn-group col-md-12 offset-md-6 mt-10">
                                                                                    <JwPagination :pageSize="PageSize" :items="FilterPsb" @changePage="onChangePagePsb"></JwPagination>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="descri_tab_detail" class="tab-pane fade in pt-0 active" role="tabpanel">
                                                                        <div class="table-wrap">
                                                                            <div class="table-responsive">
                                                                                <table class="table  mb-0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="border-none">Nama</td>
                                                                                            <td class="border-none">{{pelanggan.pengguna_nama}}</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Alamat</td>
                                                                                            <td>{{pelanggan.pengguna_alamat}}</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>No.telp</td>
                                                                                            <td>{{pelanggan.pengguna_no_telepon}}</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
import JwPagination from 'jw-vue-pagination';
export default {
    components: {
        Multiselect,
        JwPagination
    },
    data() {
        return {
            // Filter Search bar 
            select_bulan_complain: "",
            select_bulan_psb: "",
            // ----
            pelanggan: {},
            complain: [],
            psb: [],
            PageOfComplain: [],
            PageOfPsb: [],
            PageSize: 25,
        }
        // ----
    },
    created() {
        this.getpelanggan()
        this.getcomplain()
        this.getpsb()
    },
    methods: {
        // Tr complain change page
        onChangePageComplain: function(PageOfComplain) {
            this.PageOfComplain = PageOfComplain
            // console.log(pageSize)
        },
        // Tr PSB Change PAge 
        onChangePagePsb: function(PageOfPsb) {
            this.PageOfPsb = PageOfPsb
            // console.log(pageSize)
        },
        // mendapatkan data pelanggan
        getpelanggan() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    this.pelanggan = response.data;
                });
        },
        // ---
        getcomplain() {
             axios.get(API + `/Tr_complain/pegawai/domain/selesai/${this.$store.getters.domain}`)
                .then((response) => {
                    const respon = response.data
                    const data = []
                    for (let index = 0; index < respon.length; index++) {
                        if (respon[index].complain_pengguna_pelanggan_id===this.$route.params.id) {
                            data.push(response.data[index])
                        }
                    }
                    this.complain = data
                });
        },
        getpsb() {
            axios.get(API + `/Tr_psb/pegawai/domain/selesai/${this.$store.getters.domain}`)
                .then((response) => {
                    const respon = response.data
                    const data = []
                    for (let index = 0; index < respon.length; index++) {
                        if (respon[index].psb_pengguna_pelanggan_id===this.$route.params.id) {
                            data.push(response.data[index])
                        }
                    }
                    this.psb = data
                });
        },
    },
    computed: {
        FilterComplain: function() {
            return this.complain.filter((complain) => {
                var a = complain.complain_penyelesaian_tanggal.toLowerCase().includes(this.select_bulan_complain.toLowerCase());
                var b = complain < this.pageSize && complain > 0;
                return a || b;
            })
        },
        FilterPsb: function() {
            return this.psb.filter((psb) => {
                var a = psb.psb_penyelesaian_tanggal.toLowerCase().includes(this.select_bulan_complain.toLowerCase());
                var b = psb < this.pageSize && psb > 0;
                return a || b;
            })
        }
    }
}
</script>