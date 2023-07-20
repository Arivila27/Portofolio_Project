<template>
	<div class="page-wrapper">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-primary card-view">
                <div class="panel-heading">
                    <div class="pull-left">
                        <h5 class=" txt-light">Pengeluaran</h5>
                    </div>
                    <div class="pull-right">
                        <h6 class="txt-light">PT. Bitniaga Cipta Gemilang </h6>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="panel-wrapper collapse in">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-xs-6">
                                <address class="mb-15">
                                    <span class="address-head mb-5">Untuk:</span>
                                    {{pengeluaran.pengeluaran_penerima.username}}
                                    <br>
                                </address>
                            </div>
                            <div class="col-xs-6 text-right">
                                <address class="mb-15">
                                    <span class="address-head mb-5">No referensi:</span>
                                      {{pengeluaran.pengeluaran_no}}
                                      <br>
                                </address>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <address class="mb-15">
                                    <span class="txt-dark head-font capitalize-font mb-5">Dari:</span>
                                    <br>{{pengeluaran.pengeluaran_pengirim.kode_akun_nama}}
                                    <br>
                                </address>
                            </div>
                            <div class="col-xs-6 text-right">
                                <address class="mb-15">
                                    <span class="txt-dark head-font capitalize-font mb-5">Tanggal:</span>
                                   <br>{{pengeluaran.pengeluaran_tanggal}}
                                   <br>
                                </address>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <address class="mb-15">
                                    <span class="txt-dark head-font capitalize-font mb-5">Divisi:</span>
                                    <br>{{pengeluaran.pengeluaran_divisi}}
                                    <br>
                                </address>
                            </div>
                            <div class="col-xs-6 text-right">
                                <address class="mb-15">
                                    <span class="txt-dark head-font capitalize-font mb-5">Proyek:</span>
                                   <br>{{pengeluaran.pengeluaran_proyek.item_nama}}
                                   <br>
                                </address>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <address class="mb-15">
                                    <span class="txt-dark head-font capitalize-font mb-5">Deskripsi:</span>
                                    <br>{{pengeluaran.pengeluaran_deskripsi}}
                                    <br>
                                </address>
                            </div>
                        </div>
                        <div class="seprator-block"></div>
                        <div class="invoice-bill-table">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr class="bg-primary txt-light">
                                            <th class="txt-light">Kode akun</th>
                                            <th class="txt-light">Nama akun</th>
                                            <th class="txt-light">Catatan</th>
                                            <th class="txt-light">Nominal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        	<td>{{pengeluaran.pengeluaran_pengirim.kode_akun}}</td>
                                        	<td>{{pengeluaran.pengeluaran_pengirim.kode_akun_nama}}</td>
                                        	<td>{{pengeluaran.pengeluaran_deskripsi}}</td>
                                        	<td>{{pengeluaran.pengeluaran_nominal | currency}}</td>
                                        </tr>
                                        <tr class=" bg-primary txt-light">
                                            <td></td>
                                            <td></td>
                                            <td>Total</td>
                                            <td>{{pengeluaran.pengeluaran_nominal | currency}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row text-center">
                                    <div class="col-xs-6">
                                        <h6>Dibuat Oleh:</h6>
                                        <br>
                                        <br>
                                        <br>
                                        <hr class="light-grey-hr">
                                        <h6>{{pengeluaran.pengeluaran_user_updated}} -</h6>
                                    </div>
                                    <div class="col-xs-6">
                                        <h6>Diterima Oleh: </h6>
                                        <br>
                                        <br>
                                        <br>
                                        <hr class="light-grey-hr">
                                    </div>
                                </div>
                            <div class="button-list pull-right">
                                <button type="button" class="btn btn-primary btn-outline btn-icon left-icon" onclick="javascript:window.print();">
                                    <i class="fa fa-print"></i><span> Print</span>
                                </button>
                            </div>
                            <div class="clearfix"></div>
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
	export default{
        data(){
            return{
                pengeluaran:{}
            }
        },
        created(){
            this.getpengeluaran()
        },
        methods:{
            getpengeluaran(){
                axios.get(API + `/Tr_pengeluaran/${this.$route.params.id}`)
                .then((response) =>{
                    this.pengeluaran = response.data
                });
            }
        }
    };
</script>