<template>
    <div class="page-wrapper">
        <div class="col-md-12 text-center"></div>
        <div class="clearfix">
            <br>
        </div>
        <div class="col-md-12">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8">
                        <div class="panel panel-default card-view panel-refresh">
                            <div class="refresh-container">
                                <div class="la-anim-1"></div>
                            </div>
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-dark">Pembelian</h6>
                                </div>
                                <div class="pull-right">
                                    <a href="#" class="pull-left inline-block full-screen mr-15">
                                        <i class="zmdi zmdi-fullscreen"></i>
                                    </a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body" style="overflow-y: scroll; min-height: 100; max-height: 400px;">
                                <div class="col-md-4" v-for="kranjang in items">
                                    <div class="panel panel-default  card-view panel-refresh">
                                        <div class="panel-heading">
                                            <div class="pull-left">
                                                <h6 class="panel-title txt-dark">&nbsp;</h6>
                                                <div class="clearfix"></div>
                                            </div>
                                        </div>
                                        <!--  <div class="panel-body" v-if="kranjang.item_stok === 0">
                                            <div class="panel-wrapper collapse in">
                                                <div class="panel-body row text-center">
                                                    <h6>{{kranjang.item_nama}}</h6>
                                                    <h6>{{kranjang.item_kode_barang}}</h6>
                                                    <h6>{{kranjang.item_harga}}</h6>
                                                    <h6 style="color: red;">Stok Habis!!!!</h6>
                                                </div>
                                            </div>
                                        </div> -->
                                        <div class="panel-body">
                                            <div class="panel-wrapper collapse in">
                                                <div class="panel-body row text-center">
                                                    <h6></h6>
                                                    <h6></h6>
                                                    <h6></h6>
                                                    <h6></h6>
                                                    <button class="btn btn-primary text-center"><i class="fa fa-cart-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="panel panel-default card-view panel-refresh">
                            <div class="refresh-container">
                                <div class="la-anim-1"></div>
                            </div>
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-dark">Keranjang</h6>
                                </div>
                                <div class="pull-right">
                                    <a href="#" class="pull-left inline-block full-screen mr-15">
                                        <i class="zmdi zmdi-fullscreen"></i>
                                    </a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body">
                                <!--  <div v-if="carts.length === 0">
                                    <h6>Tidak Ada cart</h6>
                                </div> -->
                                <form>
                                    <div v-show="carts.length > 0" class="row" style="min-height: 100px;max-height: 200px; overflow-y: scroll;">
                                        <table class="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th>jumlah</th>
                                                    <th>Nama</th>
                                                    <th>Harga</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><input type="number" class="form-control" v-model="jumlah" disabled></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td><button class="btn btn-danger"><i class="fa fa-trash"></i></button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col-md-12">
                                        <h6></h6>
                                        <input type="number" class="form-cotrol" v-model="total">
                                    </div>
                                    <button class="btn btn-success">Tambah</button>
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
export default {}
</script>