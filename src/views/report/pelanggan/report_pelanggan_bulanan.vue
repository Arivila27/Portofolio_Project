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
                                <h6 class="panel-title txt-dark">Laporan Pelanggan(Bulanan)</h6>
                            </div>
                            <div class="pull-right">
                                <a data-toggle="collapse" href="#collapse_closing">
                                    <button class="btn btn-success bg-success">Lihat Grafik</button>
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
                                                    <span class="block font-12 weight-400">Total pelanggan Difilter</span>
                                                    <span class="txt-dark block counter weight-600 font-24">{{Filterpelanggan.length}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="total-tagihan">
                                                    <span class="block font-10 weight-400 clr-white">T</span>
                                                    <span class="txt-dark block counter weight-600 font-24">{{report_aktif.length}}</span>
                                                    <div class="mt-15 mb-10">
                                                        <span class="label label-primary">Pelanggan Aktif</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="total-tagihan">
                                                    <span class="block font-10 weight-400 clr-white">T</span>
                                                    <span class="txt-dark block counter weight-600 font-24">{{report_baru.length}}</span>
                                                    <div class="mt-15 mb-10">
                                                        <span class="label label-success">Pelanggan Baru</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="total-tagihan">
                                                    <span class="block font-10 weight-400 clr-white">T</span>
                                                    <span class="txt-dark block counter weight-600 font-24">{{report_nonaktif.length}}</span>
                                                    <div class="mt-15 mb-10">
                                                        <span class="label label-warning">Pelanggan Nonaktif</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3" v-show="this.$store.getters.domain">
                                                <div class="total-tagihan">
                                                    <span class="block font-10 weight-400 clr-white">T</span>
                                                    <span class="txt-dark block counter weight-600 font-24">{{report_putus.length}}</span>
                                                    <div class="mt-15 mb-10">
                                                        <span class="label label-danger">Pelanggan Putus</span>
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
                                            <label>Tanggal(Aktif,Nonaktif,Putus,Baru)</label>
                                            <input type="month" class="form-control" v-model="select_month">
                                        </div>
                                        <div class="col-md-3">
                                            <label>Status Pelanggan</label>
                                            <!-- <multiselect v-model="metode" :options="option_status" label="name" track-by="name" placeholder="Pilih"></multiselect> -->
                                            <select class="form-control" v-model="metode">
                                                <option value="Y">Aktif</option>
                                                <option value="N">Putus</option>
                                                <option value="G">Nonaktif</option>
                                                <option value="B">Baru</option>
                                            </select>
                                        </div>
                                        <div class="col-md-3">
                                            <label>Paket(*Produk)</label>
                                            <multiselect v-model="cari_paket" :options="M_produk" label="item_nama" track-by="item_nama" placeholder="Pilih"></multiselect>
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
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="3">Status</th>
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1"><abbr title="Rotten Tomato Rating">Produk</abbr></th>
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Bayar</th>
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="5">Tanggal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(plg,index) in Filterpelanggan" :key="plg._id">
                                                    <td class="td"><a href="javascript:void(0)">{{index + 1}}</a></td>
                                                    <td class="td">{{plg.pengguna_id}}</td>
                                                    <td class="td">{{plg.pengguna_nama}}</td>
                                                    <td v-if="plg.pengguna_status === 'Y'" class="td"><span class="label label-success">Aktif</span></td>
                                                    <td v-else-if="plg.pengguna_status === 'B'" class="td"><span class="label label-warning">Baru</span></td>
                                                    <td v-else-if="plg.pengguna_status === 'Nonaktif'" class="td"><span class="label label-primary">{{plg.pengguna_status}}</span></td>
                                                    <td v-else-if="plg.pengguna_status === 'N'" class="td"><span class="label label-danger">Putus</span></td>
                                                    <td class="td"><span class="label label-success">{{plg.pengguna_paket.pengguna_paket_nama}}</span></td>
                                                    <td class="td">{{plg.pengguna_paket.pengguna_paket_harga | currency}}</td>
                                                    <td class="td">{{plg.pengguna_created}}</td>
                                                </tr>
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
<script src="./Service/report_pelanggan_bulanan"></script>
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