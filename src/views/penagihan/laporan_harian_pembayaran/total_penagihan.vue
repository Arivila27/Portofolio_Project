<template>
    <div class="pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <!-- /Row -->
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default card-view">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Pembayaran Hari ini</h6>
                            </div>
                            <div class="pull-right">
                                <router-link :to="{name:'report_pembayaran_harian',params:{jumlah: jumlah_pelanggan}}">
                                    <button class="btn btn-success bg-success">Lihat Grafik</button>
                                </router-link>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-wrapper collapse in">
                            <div class="panel-body">
                                <div class="table-wrap mt-20">
                                    <!-- <p class="text-muted">Swipe Mode, ModeSwitch, Minimap, Sortable, SortableSwitch.</p> -->
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label>Tanggal membayar</label>
                                            <input type="date" class="form-control" v-model="select_month">
                                        </div>
                                        <div class="col-md-3">
                                            <label>Metode pembayaran</label>
                                            <multiselect v-model="metode" :options="option_pembayaran" placeholder="Pilih"></multiselect>
                                        </div>
                                        <div class="col-md-3">
                                            <label>Type pembayaran</label>
                                            <multiselect v-model="cari_type" :options="option_type" placeholder="Pilih"></multiselect>
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
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="6">Metode</th>
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="8">Type</th>
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
                                                    <td v-if="pngh.penagihan_metode_bayar === 'mybitniaga-mst'" class="td">{{pngh.penagihan_biaya.penagihan_biaya_total - 6000 | currency}}</td>
                                                    <td v-else class="td">{{pngh.penagihan_biaya.penagihan_biaya_total | currency}}</td>
                                                    <td class="td">{{momentt(pngh.penagihan_tanggal_pembayaran)}}</td>
                                                    <td class="td" v-if="pngh.penagihan_metode_bayar === 'BANK-TRANSFER'"><span class="label label-danger">BANK Transfer</span></td>
                                                    <td class="td" v-if="pngh.penagihan_metode_bayar === 'mybitniaga-bca'"><span class="label label-info">{{pngh.penagihan_metode_bayar}}</span></td>
                                                    <td class="td" v-if="pngh.penagihan_metode_bayar === 'mybitniaga-mst'"><span class="label label-info">{{pngh.penagihan_metode_bayar}}</span></td>
                                                    <td class="td" v-if="pngh.penagihan_metode_bayar === 'mybitniaga-bni'"><span class="label label-primary">MIDTRANS</span></td>
                                                    <td class="td" v-if="pngh.penagihan_metode_bayar === 'Cash'"><span class="label label-success">{{pngh.penagihan_metode_bayar}}</span></td>
                                                    <td class="td" v-if="pngh.penagihan_metode_bayar === 'saldo'"><span class="label label-success">{{pngh.penagihan_metode_bayar}}</span></td>
                                                    <td class="td" v-if="pngh.penagihan_type_keterangan === 'Y'"><span class="label label-success">Pembayaran Bulanan</span></td>
                                                    <td class="td" v-if="pngh.penagihan_type_keterangan === 'O'"><span class="label label-info">Pembayaran Outstanding</span></td>
                                                    <td class="td" v-if="pngh.penagihan_type_keterangan === 'R'"><span class="label label-primary">Pembayaran Registrasi</span></td>
                                                    <td class="td" >{{pngh.penagihan_keterangan}}</td>
                                                    <td>
                                                        <div class="pull-right">
                                                            <div class="dropdown  pull-left">
                                                                <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                                    <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                                </a>
                                                                <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                                    <li role="presentation">
                                                                        <router-link :to="{name:'print_penagihan_thermal',params:{id:pngh._id}}"><i class="icon wb-share" aria-hidden="true"></i>Print(Thermal) </router-link>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <router-link :to="{name:'print_penagihan',params:{id:pngh._id}}"><i class="icon wb-share" aria-hidden="true"></i>Print</router-link>
                                                                    </li>
                                                                    <li role="presentation" >
                                                                        <a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target="#hapus_tagihan" v-on:click="hapustagihan(pngh._id)"><i class="icon wb-share" aria-hidden="true"></i>Ajukan Hapus?</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <div class="modal fade bs-example-modal-sm" id="hapus_tagihan" tabindex="-1" role="dialog" aria-hidden="true">
                                                    <div class="modal-dialog ">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                                <h5 class="modal-title" id="myModalLabel">Ajukan Hapus</h5>
                                                            </div>
                                                            <div class="modal-body">
                                                                <h5 class="mb-15">{{pengguna_nama}}</h5>
                                                                <p>Ajukan delete transaksi/tagihan ini ?</p>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deletedsstatus()">Ajukan</button>
                                                                <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                        <!-- /.modal-content -->
                                                    </div>
                                                </div>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>
<script src="./Service/total_penagihan"></script>
<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

.td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

.bortm {
    background-color: red;
}
</style>