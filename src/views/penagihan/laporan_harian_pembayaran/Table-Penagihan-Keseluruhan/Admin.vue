<template>
    <div class="panel panel-default card-view">
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-dark">Laporan Closing</h6>
            </div>
            <div class="pull-right">
                <a data-toggle="collapse" href="#collapse_closing">
                    <button class="btn btn-success bg-success">Lihat Grafik1</button>
                </a>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-wrapper collapse in">
            <div class="panel-body">
                <div class="row collapse" id="collapse_closing">
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="total-tagihan">
                                    <span class="block font-12 weight-400">Total Tagihan Bulan Ini</span>
                                    <span class="txt-dark block counter weight-600 font-24">{{hitungtotalpenagihan | currency}}</span>
                                    <table width="100%">
                                        <tr>
                                            <td>
                                                <span class="block">Seharusnya(secara Closing): <br>
                                                    <bold class="txt-dark weight-600 font-16" v-for="(closing,index) in FilterClosing" :key="closing._id">{{closing.penagihan_total_pelanggan_bayar | currency}}</bold>
                                                </span>
                                            </td>
                                            <td>
                                                <span class="block">Seharusnya(secara pelanggan): <br>
                                                    <bold class="txt-dark weight-600 font-16">{{hitungtotalpelanggan | currency}}</bold>
                                                </span>
                                            </td>
                                            <td align="right">
                                                <span class="block font-10 clr-white">sf</span>
                                                <div class="label label-danger font-18">{{pendapatan}}%</div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="total-tagihan">
                                    <span class="block font-10 weight-400 clr-white">T</span>
                                    <span class="txt-dark block counter weight-600 font-24">{{hitungtotalbca | currency}}</span>
                                    <div class="mt-15 mb-10">
                                        <span class="label label-primary">BCA</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="total-tagihan">
                                    <span class="block font-10 weight-400 clr-white">T</span>
                                    <span class="txt-dark block counter weight-600 font-24">{{hitungtotalbca371 | currency}}</span>
                                    <div class="mt-15 mb-10">
                                        <span class="label label-primary">BCA-371</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="total-tagihan">
                                    <span class="block font-10 weight-400 clr-white">T</span>
                                    <span class="txt-dark block counter weight-600 font-24">{{hitungtotalmandiri | currency}}</span>
                                    <div class="mt-15 mb-10">
                                        <span class="label label-warning">MANDIRI</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="total-tagihan">
                                    <span class="block font-10 weight-400 clr-white">T</span>
                                    <span class="txt-dark block counter weight-600 font-24">{{hitungtotalcash | currency}}</span>
                                    <div class="mt-15 mb-10">
                                        <span class="label label-success">CASH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-wrap mt-20">
                    <!-- <p class="text-muted">Swipe Mode, ModeSwitch, Minimap, Sortable, SortableSwitch.</p> -->
                    <div class="row">
                        <div class="col-md-3">
                            <label>Bulan membayar</label>
                            <input type="month" class="form-control" v-model="select_month">
                        </div>
                        <div class="col-md-3">
                            <label>Metode pembayaran</label>
                            <multiselect v-model="metode" :options="option_pembayaran" placeholder="Pilih"></multiselect>
                        </div>
                        <div class="col-md-3">
                            <label>Status pembayaran</label>
                            <multiselect v-model="cari_status" :options="option_status" placeholder="Pilih"></multiselect>
                        </div>
                        <div class="col-md-3">
                            <label>Cari nama</label>
                            <input type="text" class="form-control" v-model="cari_nama">
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="mt-40">
                        <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                            <thead>
                                <tr>
                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">No</th>
                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">ID</th>
                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Nama</th>
                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1"><abbr title="Rotten Tomato Rating">Status</abbr></th>
                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Bayar</th>
                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="5">Tanggal</th>
                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="6">Status</th>
                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="8">Keterangan</th>
                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="7" width="3%">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(pngh,index) in FilterPenagihan" :key="pngh._id">
                                    <td class="td"><a href="javascript:void(0)">{{index + 1}}</a></td>
                                    <td class="td">{{pngh.penagihan_id_pengguna}}</td>
                                    <td class="td">{{pngh.penagihan_nama}}</td>
                                    <td class="td"><span class="label label-warning">{{pngh.penagihan_status_bayar}}</span></td>
                                    <td class="td">{{pngh.penagihan_biaya.penagihan_biaya_total | currency}}</td>
                                    <td class="td">{{pngh.penagihan_tanggal_pembayaran}}</td>
                                    <td class="td" v-if="pngh.penagihan_metode_bayar === 'BCA'"><span class="label label-primary">{{pngh.penagihan_metode_bayar}}</span></td>
                                    <td class="td" v-if="pngh.penagihan_metode_bayar === 'BCA-371'"><span class="label label-primary">{{pngh.penagihan_metode_bayar}}</span></td>
                                    <td class="td" v-if="pngh.penagihan_metode_bayar === 'Mandiri'"><span class="label label-info">{{pngh.penagihan_metode_bayar}}</span></td>
                                    <td class="td" v-if="pngh.penagihan_metode_bayar === 'Cash'"><span class="label label-success">{{pngh.penagihan_metode_bayar}}</span></td>
                                    <td class="td" v-if="pngh.penagihan_metode_bayar === 'Belum Bayar'"><span class="label label-danger">Belum Bayar</span></td>
                                    <td class="td" v-if="pngh.penagihan_keterangan === 'Belum Bayar'">{{pngh.penagihan_keterangan}} & Diclosing</td>
                                    <td class="td" v-else>{{pngh.penagihan_keterangan}}</td>
                                    <td class="td"><button class="btn btn-danger" style="padding: 6px 12px !important" @click.prevent="Delete(pngh._id)"><i class="zmdi zmdi-delete"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Admin"></script>