<template>
	<div class="page-wrapper">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-primary card-view">
                <div class="panel-heading">
                    <div class="pull-left">
                        <h5 class=" txt-light">Transfer Tunai</h5>
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
                                    {{transfer.transfer_penerima.kode_akun_nama}}
                                    <br>
                                </address>
                            </div>
                            <div class="col-xs-6 text-right">
                                <address class="mb-15">
                                    <span class="address-head mb-5">No referensi:</span>
                                      {{transfer.transfer_no}}
                                      <br>
                                </address>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <address class="mb-15">
                                    <span class="txt-dark head-font capitalize-font mb-5">Dari:</span>
                                    <br>{{transfer.transfer_pengirim.kode_akun_nama}}
                                    <br>
                                </address>
                            </div>
                            <div class="col-xs-6 text-right">
                                <address class="mb-15">
                                    <span class="txt-dark head-font capitalize-font mb-5">Tanggal:</span>
                                   <br>{{transfer.transfer_tanggal}}
                                   <br>
                                </address>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <address class="mb-15">
                                    <span class="txt-dark head-font capitalize-font mb-5">Divisi:</span>
                                    <br>{{transfer.transfer_divisi}}
                                    <br>
                                </address>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <address class="mb-15">
                                    <span class="txt-dark head-font capitalize-font mb-5">Deskripsi:</span>
                                    <br>{{transfer.transfer_deskripsi}}
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
                                            <th class="txt-light">Credit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        	<td>{{transfer.transfer_pengirim.kode_akun}}</td>
                                        	<td>{{transfer.transfer_pengirim.kode_akun_nama}}</td>
                                        	<td>{{transfer.transfer_nominal | currency}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr class="bg-primary txt-light">
                                            <th class="txt-light">Kode akun</th>
                                            <th class="txt-light">Nama akun</th>
                                            <th class="txt-light">Debit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{transfer.transfer_penerima.kode_akun}}</td>
                                            <td>{{transfer.transfer_penerima.kode_akun_nama}}</td>
                                            <td>{{transfer.transfer_nominal | currency}}</td>
                                        </tr>
                                        <tr class=" bg-primary txt-light">
                                            <td></td>
                                            <td>Total</td>
                                            <td>{{transfer.transfer_nominal | currency}}</td>
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
                                        <h6>{{transfer.transfer_user_updated}} -</h6>
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
                transfer:{}
            }
        },
        created(){
            this.gettransfer()
        },
        methods:{
            gettransfer(){
                axios.get(API + `/Tr_transfer/${this.$route.params.id}`)
                .then((response) =>{
                    this.transfer = response.data
                });
            }
        }
    };
</script>