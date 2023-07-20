<template>
    <div>
        <div class="page-wrapper">
            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default card-view" id="printMe" ref="content">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Invoice</h6>
                            </div>
                            <div class="pull-right">
                                <h6 class="txt-dark"></h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-wrapper collapse in">
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <span class="txt-dark head-font inline-block capitalize-font mb-5">Kepada:</span>
                                        <address class="mb-15">
                                            <span class="address-head mb-5">{{detail.pengguna_nama}}</span>
                                            {{detail.pengguna_alamat}}<br>
                                            <abbr title="Phone"></abbr>{{detail.pengguna_no_telepon}}
                                        </address>
                                    </div>
                                    <div class="col-xs-6 text-right">
                                        <img src="../../assets/JDN.png" alt="">
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6">
                                        <address>
                                            <span class="txt-dark head-font capitalize-font mb-5"></span>
                                            <br>
                                            <br>
                                        </address>
                                    </div>
                                    <div class="col-xs-6 text-right">
                                        <address>
                                            <span class="txt-dark head-font capitalize-font mb-5">Tanggal:</span><br>
                                            <b>{{tanggal}}</b><br><br>
                                        </address>
                                    </div>
                                </div>
                                <div class="seprator-block"></div>
                                <div class="invoice-bill-table">
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Item</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Totals</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{{detail.pengguna_paket.pengguna_paket_nama}}</td>
                                                    <td>{{detail.pengguna_paket.pengguna_paket_harga | currency}}</td>
                                                    <td>1</td>
                                                    <td>{{detail.pengguna_paket.pengguna_paket_harga | currency}}</td>
                                                </tr>
                                                <tr class="txt-dark">
                                                    <td></td>
                                                    <td></td>
                                                    <td>Rp.Subtotal</td>
                                                    <td>{{detail.pengguna_paket.pengguna_paket_harga | currency}}</td>
                                                </tr>
                                                <tr class="txt-dark">
                                                    <td></td>
                                                    <td></td>
                                                    <td>PPN</td>
                                                    <td></td>
                                                </tr>
                                                <tr class="txt-dark">
                                                    <td></td>
                                                    <td></td>
                                                    <td>Total</td>
                                                    <td>{{detail.pengguna_paket.pengguna_paket_harga | currency}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button-list pull-right">
                <button type="button" class="btn btn-primary btn-outline btn-icon left-icon" onclick="javascript:window.print();">
                    <i class="fa fa-print"></i><span> Print</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import jsPDF from 'jspdf'
import html2canvas from "html2canvas"
import axios from 'axios'
import API from '../../api.config'
export default {
    data() {
        return {
            detail: {},
            tanggal: new Date().toISOString().slice(0, 10)
        }
    },
    created() {
        this.getDetail()
    },
    methods: {
        htmlprint() {
            this.$htmlToPaper('printMe');
        },
        getDetail() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    this.detail = response.data
                });
        },
        printPDF() {
            const doc = new jsPDF("p", "mm", "Letter");
            /** WITH CSS */
            var width = doc.internal.pageSize.getWidth();
            var height = doc.internal.pageSize.getHeight();
            var canvasElement = document.createElement('canvas');
            html2canvas(document.getElementById("content")).then(function(canvas) {
                const img = canvas.toDataURL("image/jpeg", 1);
                doc.addImage(img, 'JPEG', 20, 50);
                doc.save("sample.pdf");
            });
        }
    }
};
</script>