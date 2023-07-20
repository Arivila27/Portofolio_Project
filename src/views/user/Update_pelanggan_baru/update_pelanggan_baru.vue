<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6>Update Pelanggan Baru</h6>
                                </div>
                                <div class="pull-right">
                                    <router-link class="btn btn-danger" to="/pelanggan_baru">
                                        Kembali
                                    </router-link>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="form-wrap">
                                        <form-wizard @on-complete="mencoba">
                                            <h4 slot="title">Registrasi Pelanggan</h4>
                                            <tab-content title="Data diri" icon="fa fa-user">
                                                <Datadiri />
                                            </tab-content>
                                            <tab-content title="Setting" icon="ti-id-badge">
                                                <Setting />
                                            </tab-content>
                                            <tab-content title="Pegawai" icon="fa fa-users">
                                                <Pegawai :pegawai="pegawai"/>
                                            </tab-content>
                                            <tab-content title="Product" icon="fa fa-gears">
                                                <div class="form-row col-md-12">
                                                    <div class="form-group col-md-6">
                                                        <label for="">Produk</label>
                                                        <select class="form-control" v-model="selectedCart">
                                                            <option v-for="prod in produk" :key="prod._id" :value="prod">{{prod.item_nama}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Harga Produk</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="selectedCart.item_harga" disabled />
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="">Biaya tambahan</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="biaya_tambahan" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Biaya Registrasi</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="biaya_registrasi" />
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label>Total Biaya</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="biaya_registrasi" v-model="total" disabled="true" />
                                                    </div>
                                                </div>
                                            </tab-content>
                                            <tab-content title="Alat yang dipakai" icon="fa fa-shopping-cart">
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        <div class="panel panel-default card-view">
                                                            <div class="panel-heading">
                                                                <div class="pull-left">
                                                                    <h6>Alat Yang disediakan</h6>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </div>
                                                            <div class="panel-body">
                                                                <h2>Helo</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <h2>Hello world2</h2>
                                                        <p>Something</p>
                                                    </div>
                                                </div>
                                            </tab-content>
                                        </form-wizard>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// Components  Slide 
import Datadiri from './Slide/data_diri';
import Setting from './Slide/setting';
import Pegawai from './Slide/pegawai';
import Product from './Slide/product';
import Alat from './Slide/alat';
// ----
import HitungTotalMixin from './Mixins/HitungTotal'
import multiselect from 'vue-multiselect';
import API from '../../../api.config'
import axios from 'axios';
export default {
    components: {
        multiselect,
        Datadiri,
        Setting,
        Pegawai,
        Product,
        Alat
    },
    data() {
        return {
            tipes: [],
            pegawai: [],
            produk: [],
            selectedCart: {},
            biaya_tambahan: '',
            biaya_registrasi: '',
            detail: {}
        }
    },
    created() {
        this.getdetail();
        this.gettipes();
        this.getpegawai();
        this.getproduk();
    },
    methods: {
        mencoba() {
            console.log("haha")
        },
        gettipes() {
            axios.get(API + '/pembantu_type')
                .then((response) => {
                    this.tipes = response.data;
                });
        },
        getpegawai() {
            axios.get(API + '/M_pengguna/pegawai')
                .then((response) => {
                    this.pegawai = response.data
                })
        },
        getproduk() {
            axios.get(API + '/M_item/produk')
                .then((response) => {
                    this.produk = response.data
                });
        },
        getdetail() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    this.detail = response.data
                    console.log(response.data);
                })
        }
    },
    mixins: [HitungTotalMixin]

}
</script>