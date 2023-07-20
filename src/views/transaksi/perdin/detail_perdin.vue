<template>
    <div class="page-wrapper">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <div class="pull-left">
                            <h6 class="panel-title txt-dark">Perjalanan Dinas</h6>
                        </div>
                        <div class="pull-right">
                            <h6 class="txt-dark">{{perdin.erdin_no}}</h6>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="panel-wrapper collapse in">
                        <div class="panel-body">
                            <div class="row">
                                <!-- <div class="col-xs-6">
                                    <span class="txt-dark head-font inline-block capitalize-font mb-5">Billed to:</span>
                                    <address class="mb-15">
                                        <span class="address-head mb-5">{{pembelian.pembelian_shipped_to.nama}}</span>
                                        {{pembelian.pembelian_shipped_to.alamat}} <br>
                                        <abbr title="Phone"></abbr>{{pembelian.pembelian_shipped_to.telephone}}
                                    </address>
                                </div> -->
                                <div class="col-xs-6 text-left">
                                    <img src="./../../../assets/img/logobit.png" width="250" alt="Logo Bitniaga">
                                </div>
                                <div class="col-xs-6 text-right">
                                    <!--   <span class="txt-dark head-font inline-block capitalize-font mb-5">Dikirim:</span>
                                    <address class="mb-15">
                                        <span class="address-head mb-5">{{pembelian.pembelian_shipped_to.nama}}</span>
                                        {{pembelian.pembelian_shipped_to.alamat}}<br>
                                        <abbr title="Phone"></abbr>{{pembelian.pembelian_shipped_to.telephone}}
                                    </address> -->
                                    <address>
                                        <span class="txt-dark head-font capitalize-font mb-5">Tanggal Perjalanan Dinas</span><br>
                                        {{perdin.perdin_created}}<br><br>
                                    </address>
                                </div>
                            </div>
                            <div class="seprator-block"></div>
                            <div class="invoice-bill-table">
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama Keperluan</th>
                                                <th colspan="2">Biaya yang dikeluarkan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(phi,k) in perdin.perdin_keperluan">
                                                <td>{{k + 1}}</td>
                                                <td>{{phi.nama_keperluan}}</td>
                                                <td colspan="2">{{phi.biaya_keperluan | currency}}</td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td>Total</td>
                                                <td>{{perdin.perdin_jumlah | currency}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
import API from '../../../api.config'
export default {
    data() {
        return {
            perdin: {},
        }
    },
    created: function() {
        this.getperdin();
    },
    methods: {
        getperdin() {
            axios.get(API + `/Tr_perdin/detail/${this.$route.params.id}`)
                .then((response) => {
                    console.log(response.data.length);
                    this.perdin = response.data;
                    // console.log('########### AXIOS: ', response.data.length);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // perolehan:function(){
        //     for (var i = 0; i < this.pembelian.pembelian_barang.length; i++) {
        //         const phila = this.pembelian.pembelian_barang[i];
        //         this.pembelian.pembelian_barang[i].nama_barang = phila.nama_barang

        //     }
        // }
    }
};
</script>