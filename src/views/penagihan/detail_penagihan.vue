<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
           <div class="row heading-bg">
                        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h5 class="txt-dark">Tagihan</h5>
                        </div>
                        <!-- Breadcrumb -->
                        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <ol class="breadcrumb">
                                <li><a href="index.html">Dashboard</a></li>
                                <li><a href="#"><span>Data Penagihan</span></a></li>
                                <li class="active"><span>Tagihan</span></li>
                            </ol>
                        </div>
                        <!-- /Breadcrumb -->
                    </div>
            <div class="row">
                <div class="col-md-12">
                    
                            <div class="panel panel-default card-view">
                                <div class="panel-heading">
                                    <div class="pull-left">
                                        <h6 class="panel-title txt-dark">Invoice</h6>
                                    </div>
                                    <div class="pull-right">
                                        <h6 class="txt-dark">Order # 12345</h6>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-xs-6">
                                                <span class="txt-dark head-font inline-block capitalize-font mb-5">Billed to:</span>
                                                <address class="mb-15">
                                                    <span class="address-head mb-5">CV.BitNiaga</span>
                                                    Sarirejo gg 4 , Mojosari <br>
                                                    Jawa Timur, Indonesia <br>
                                                    <abbr title="Phone">P:</abbr>(0343) 456-7890
                                                </address>
                                            </div>
                                            <div class="col-xs-6 text-right">
                                                <span class="txt-dark head-font inline-block capitalize-font mb-5">shiped to:</span>
                                                <address class="mb-15">
                                                    <span class="address-head mb-5">Xyz, Inc.</span>
                                                    795 Folsom Ave, Suite 600 <br>
                                                    San Francisco, CA 94107 <br>
                                                    <abbr title="Phone">P:</abbr>(123) 456-7890
                                                </address>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-xs-6">
                                                <address>
                                                    <span class="txt-dark head-font capitalize-font mb-5">Payment Method:</span>
                                                    <br>
                                                    Visa ending **** 4242<br>
                                                    jsmith@email.com
                                                </address>
                                            </div>
                                            <div class="col-xs-6 text-right">
                                                <address>
                                                    <span class="txt-dark head-font capitalize-font mb-5">order date:</span><br>
                                                    March 7, 2018<br><br>
                                                </address>
                                            </div>
                                        </div>
                                        
                                        <div class="seprator-block"></div>
                                        
                                        <div class="invoice-bill-table">
                                            <div class="table-responsive">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Produk</th>
                                                            <th>Harga</th>
                                                            <th>Stok</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>BS-200</td>
                                                            <td>$10.99</td>
                                                            <td>1</td>
                                                            <td>$10.99</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BS-400</td>
                                                            <td>$20.00</td>
                                                            <td>3</td>
                                                            <td>$60.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BS-1000</td>
                                                            <td>$600.00</td>
                                                            <td>1</td>
                                                            <td>$600.00</td>
                                                        </tr>
                                                        <tr class="txt-dark">
                                                            <td></td>
                                                            <td></td>
                                                            <td>Subtotal</td>
                                                            <td>$670.99</td>
                                                        </tr>
                                                        <tr class="txt-dark">
                                                            <td></td>
                                                            <td></td>
                                                            <td>Pengiriman</td>
                                                            <td>$15</td>
                                                        </tr>
                                                        <tr class="txt-dark">
                                                            <td></td>
                                                            <td></td>
                                                            <td>Total</td>
                                                            <td>$685.99</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="button-list pull-right">
                                                <button type="submit" class="btn btn-success mr-10">
                                                    Proceed to payment 
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
        </div>
    </div>
</template>