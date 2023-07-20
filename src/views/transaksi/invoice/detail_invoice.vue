<template>
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- Title -->
            <!-- <div class="row heading-bg">
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                    <h5 class="txt-light">invoice</h5>
                </div>
                <!-- Breadcrumb -->
                <!-- <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                    <ol class="breadcrumb">
                        <li><a href="index.html">Dashboard</a></li>
                        <li><a href="#"><span>Data Invoice</span></a></li>
                        <li class="active"><span>invoice</span></li>
                    </ol>
                </div> -->
                <!-- /Breadcrumb -->
            <!-- </div> -->
            <!-- /Title -->
            <!-- Row -->
            <div class="row mt-30">
                <div class="col-md-12">
                    <div class="panel panel-default card-view">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-light">Invoice</h6>
                            </div>
                            <div class="pull-right">
                                <h6 class="txt-light">{{detail_invoice.invoice_id}}</h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-wrapper collapse in">
                            <div class="panel-body">
                                <!-- <div class="row">
                                    <div class="col-xs-6">
                                        <span class="txt-dark head-font inline-block capitalize-font mb-5">Dikirim Oleh:</span>
                                        <address class="mb-15">
                                            <span class="address-head mb-5">{{detail_invoice.invoice_sender.sender_name}}</span>
                                            {{detail_invoice.invoice_sender.sender_email}}<br>
                                            Indonesia <br>
                                        </address>
                                    </div>
                                    <div class="col-xs-6 text-right">
                                        <span class="txt-dark head-font inline-block capitalize-font mb-5">Diterima Oleh</span>
                                        <address class="mb-15">
                                            <span class="address-head mb-5">{{detail_invoice.invoice_receiver.receiver_name}}</span>
                                            {{detail_invoice.invoice_receiver.receiver_email}}<br>
                                            Indonesia<br>
                                        </address>
                                    </div>
                                </div> -->
                                <!-- <div class="row">
                                    <div class="col-xs-6">
                                        <span class="txt-dark head-font inline-block capitalize-font mb-5">Metode Pembayaran</span>
                                        <address class="mb-15">
                                            <span class="address-head mb-5">{{detail_invoice.invoice_payment_method.payment_account}}</span>
                                            {{detail_invoice.invoice_payment_method.payment_number}}<br>
                                            Indonesia <br>
                                        </address>
                                    </div>
                                </div> -->

                                <div class="row mt-15">
                                    <div class="col-xs-6 text-left">
                                        <img src="./../../../assets/img/logobit.png" width="250" alt="Logo Bitniaga">
                                    </div>
                                    <div class="col-xs-6">
                                        <!-- Pengirim -->
                                        <div class="mt-15"></div>
                                        <span class="txt-grey head-font inline-block capitalize-font mb-5">Dikirim Oleh:</span>
                                        <address class="mb-15">
                                            <h5 class="mb-5 txt-bold">{{detail_invoice.invoice_sender.sender_name}}</h5>
                                            {{detail_invoice.invoice_sender.sender_email}}
                                            Indonesia <br>
                                        </address> <br>

                                        <!-- Penerima -->
                                        <!-- <span class="txt-grey head-font inline-block capitalize-font mb-5">Diterima Oleh</span>
                                        <address class="mb-15">
                                            <h5 class="mb-5 clr-butek txt-bold">{{detail_invoice.invoice_receiver.receiver_name}}</h5>
                                            {{detail_invoice.invoice_receiver.receiver_email}}
                                            Indonesia<br>
                                        </address> -->
                                    </div>
                                </div>

                                <div class="row mt-25">
                                    <div class="col-xs-3 text-left">
                                        <span class="txt-grey head-font inline-block capitalize-font mb-5">Diterima Oleh</span>
                                        <address class="mb-15">
                                            <h5 class="mb-5 clr-butek txt-bold">{{detail_invoice.invoice_receiver.receiver_name.pengguna_nama}}</h5>
                                            {{detail_invoice.invoice_receiver.receiver_email}}
                                            Indonesia<br>
                                        </address>
                                    </div>
                                    <div class="col-xs-3 text-left">
                                        <span class="txt-grey head-font inline-block capitalize-font mb-5">Metode Pembayaran</span>
                                        <address class="mb-15">
                                            <span class="address-head mb-5"><b>{{detail_invoice.invoice_payment_method.payment_account}}</b></span>
                                            {{detail_invoice.invoice_payment_method.payment_number}}<br>
                                            Indonesia <br>
                                        </address>
                                    </div>
                                    <div class="col-xs-3" v-if="detail_invoice.invoice_status_ailment === 'Belum'">
                                        <address>
                                            <span class="txt-dark head-font capitalize-font mb-5">Status Pembayaran:</span>
                                            <br>
                                            <span class="label label-danger">{{detail_invoice.invoice_status_ailment}}</span><br>
                                        </address>
                                    </div>
                                    <div class="col-xs-3" v-else>
                                        <address>
                                            <span class="txt-dark head-font capitalize-font mb-5">Status Pembayaran:</span>
                                            <br>
                                            <span class="label label-danger">{{detail_invoice.invoice_status_ailment}}</span><br>
                                        </address>
                                    </div>
                                    <div class="col-xs-3 text-left">
                                        <address>
                                            <span class="txt-dark head-font capitalize-font mb-5">Tanggal Order</span><br>
                                            {{detail_invoice.invoice_issue_date}} - {{detail_invoice.invoice_due_date}}<br><br>
                                        </address>
                                    </div>
                                </div>

                                <div class="seprator-block"></div>

                                <div class="invoice-bill-table">
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <thead class="bg-primary">
                                                <tr>
                                                    <th>Type</th>
                                                    <th>Deskripsi</th>
                                                    <th>Jumlah</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="invoice in detail_invoice.invoice_service">
                                                    <td>{{invoice.type_barang}}</td>
                                                    <td>{{invoice.description_barang}}</td>
                                                    <td>Rp.{{invoice.harga_barang}}</td>
                                                    <td>Rp.{{invoice.total_barang}}</td>
                                                </tr>
                                                <tr class="txt-dark">
                                                    <td></td>
                                                    <td></td>
                                                    <td>Subtotal</td>
                                                    <td>Rp.{{detail_invoice.invoice_subtotal}}</td>
                                                </tr>
                                                <tr class="txt-dark">
                                                    <td></td>
                                                    <td></td>
                                                    <td>Pajak</td>
                                                    <td>Rp.{{detail_invoice.invoice_tax}}</td>
                                                </tr>
                                                <tr class="txt-dark">
                                                    <td></td>
                                                    <td></td>
                                                    <td>Total</td>
                                                    <td>Rp.{{detail_invoice.invoice_total}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="button-list pull-right">
                                        <button type="submit" class="btn btn-success mr-10" @click.prevent="Konfirmasi()" v-show="detail_invoice.invoice_status_ailment === 'Belum' ">
                                            Konfirmasi
                                        </button>
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
            <!-- /Row -->
        </div>
    </div>
</template>
<script src="./Service/detail_invoice"></script>