<template>
    <div class="page-wrapper">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default card-view" ref="printTable">
                    <div class="panel-heading">
                        <div class="pull-left">
                            <h6 class="panel-title txt-dark">Invoice</h6>
                        </div>
                        <div class="pull-right">
                            <h6 class="txt-dark">{{invoice._id}}</h6>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="panel-wrapper collapse in">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xs-12 text-center">
                                    <img class="brand-img" src="../../../assets/logo-invoice.png" alt="lg" height="70" width="70" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6">
                                    <span class="txt-dark head-font inline-block capitalize-font mb-5">{{invoice.invoice_pelanggan.pengguna_nama}}</span>
                                    <address class="mb-15">
                                        <span class="address-head mb-5"></span>
                                        {{invoice.invoice_pelanggan.pengguna_alamat}} <br>
                                        <abbr></abbr>{{invoice.invoice_pelanggan.pengguna_no_telepon}}
                                    </address>
                                </div>
                                <div class="col-xs-6 text-right">
                                    <span class="txt-dark head-font inline-block capitalize-font mb-5">Bitniaga Admin</span>
                                    <address class="mb-15">
                                        <span class="address-head mb-5">Sarirejo gang 4 no.11</span>
                                        Mojokerto Jawatimur 61382<br>
                                        <abbr></abbr>Indonesia
                                    </address>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6">
                                    <address>
                                        <span class="txt-dark head-font capitalize-font mb-5">Tanggal Invoice:</span><br>
                                        {{invoice.invoice_dibuat}}<br><br>
                                    </address>
                                </div>
                                <div class="col-xs-6 text-right">
                                    <address>
                                        <span class="txt-dark head-font capitalize-font mb-5">Tanggal jatuh tempo:</span><br>
                                        {{invoice.invoice_tempo}}<br><br>
                                    </address>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6">
                                </div>
                                <div class="col-xs-6 text-right">
                                    <address>
                                        <span class="txt-dark head-font capitalize-font mb-5">Total pembayaran</span><br>
                                        {{invoice.invoice_total_transaksi | currency}}<br><br>
                                    </address>
                                </div>
                            </div>
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
                                            <tr v-for="phi in invoice.invoice_transaksi">
                                                <td>{{phi.nama_barang}}</td>
                                                <td>{{phi.harga}}</td>
                                                <td>{{phi.quanty_barang}}</td>
                                                <td>{{phi.total_harga | currency}}</td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td>Rp.Subtotal</td>
                                                <td>{{invoice.invoice_subtotal_transaksi | currency}}</td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td>PPN</td>
                                                <td>{{invoice.invoice_transaksi_ppn | currency}}</td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td>Total</td>
                                                <td>{{invoice.invoice_total_transaksi | currency}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <p>Terms</p>
                                    <p>1. Tagihan ini berlaku sebagai faktur pajak. (Peraturan DirjenPajak No.IDP/PJT/2010. Tanggal 09 Maret
                                        2010)
                                    </p>
                                    <p>2. Saat ini anda bisa melakukan pembayaran melalui :- Bank Central Asia pembantu Mojosari :6140855551
                                        a.n BITNIAGA CIPTA GEMILANG- Cash Di Kantor Bitniaga
                                    </p>
                                    <p>
                                        3. Jika Pembayaran melalui transfer maka sertakan bukti TRANSFER
                                    </p>
                                    <p>4. Abaikan informasi ini jika sudah melakukan pembayaran</p>
                                </div>
                                <div class="button-list pull-right">
                                    <button id="printpagebutton" type="button" class="btn btn-primary btn-outline btn-icon left-icon" onclick="javascript:window.print();">
                                        <i class="fa fa-print"></i><span> Print</span>
                                    </button>
                                    <button @click.prevent="print" type="button" class="btn btn-primary btn-outline btn-icon left-icon">
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
    export default {
    data() {
        return {
            invoice: {}
        }
    },
    mounted() {
        this.getinvoice()
    },
    methods: {
        print() {
            var divToPrint = this.$refs.printTable
            var newWin;
            newWin = window.open("");
            newWin.document.write(divToPrint.outerHTML);
            newWin.print();
            newWin.close();
        },
        getinvoice() {
            this.$http.get(this.$API + `/Tr_invoice/${this.$route.params.id}`)
                .then((response) => {
                    console.log(response.data);
                    this.invoice = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
</script>
<style type="text/css" media="print">
@page {
    size: auto;
    /* auto is the initial value */
    margin: 0;
    /* this affects the margin in the printer settings */
}

#printpage {
    display: none;
}
</style>