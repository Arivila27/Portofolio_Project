<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-dark">Data pembelian</h6>
            </div>
            <div class="pull-right">
                <router-link to="/pembelian" v-on:click="getdata()" class="pull-left inline-block back mr-15">
                    <i class="zmdi zmdi-arrow-left"></i>
                </router-link>
                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-replay"></i>
                </a>
                <a href="#collapse_closing" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-fullscreen"></i>
                </a>
                <router-link to="/tambah_pembelian" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-file-plus"></i>
                </router-link>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="total-tagihan">
                                <div class="mt-15 mb-10">
                                    <span class="block font-12 weight-400">Total Pengeluaran</span>
                                    <span class="txt-dark block counter weight-600 font-24">{{hitungtotalpembelian | currency}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-wrap mt-20" id="printlang">
                <div class="row">
                    <div class="col-md-3">
                        <label>Bulan</label>
                        <input type="month" class="form-control" v-model="select_month">
                        <button @click.prevent="coba_tanggal">Coba_tanggal</button>
                    </div>
                    <div class="col-md-3">
                        <label>Cari No.Transaksi</label>
                        <input type="text" class="form-control" v-model="cari">
                    </div>
                    <div class="col-md-3">
                        <label>Cari Supplier</label>
                        <select class="form-control" v-model="cari_supplier">
                            <option v-for="(supplier,k) in M_supplier">{{supplier.supplier_nama}}</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label>Cari Divisi</label>
                        <select class="form-control" v-model="cari_divisi">
                            <option v-for="(M_divisi,k) in M_divisi">{{M_divisi.divisi_nama}}</option>
                        </select>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="mt-40">
                    <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                        <thead>
                            <tr>
                                <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">No</th>
                                <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">No.Transaksi</th>
                                <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Divisi</th>
                                <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Supplier</th>
                                <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Tanggal</th>
                                <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1"><abbr title="Rotten Tomato Rating">Total</abbr></th>
                                <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="7" width="3%">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(beli,index) in DisplayedPembelian" :key="beli._id">
                                <td class="td"><a href="javascript:void(0)">{{index + 1}}</a></td>
                                <td class="td">{{beli.pembelian_no_transaksi}}</td>
                                <td class="td">{{beli.pembelian_divisi}}</td>
                                <td class="td">{{beli.pembelian_supplier}}</td>
                                <td class="td">{{beli.pembelian_created}}</td>
                                <td class="td">{{beli.pembelian_total | currency}}</td>
                                <td class="td">
                                    <router-link :to="{name:'detail_pembelian',params:{id:beli._id}}"><button class="btn btn-primary" style="padding: 6px 12px !important"><i class="zmdi zmdi-print">
                                            </i></button></router-link>
                                    </i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="clearfix">
                        <button type="button" class="btn btn-sm btn-success" v-if="page != 1" @click="page--">
                            Previous</button> <button type="button" class="btn btn-sm btn-success" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" v-bind:key="pageNumber"> {{pageNumber}}
                        </button>
                        <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-success"> NEXT </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>