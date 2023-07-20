<template>
    <div class="pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
                <!-- /Row -->
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default card-view">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Transaksi Masuk</h6>
                            </div>
                            <div class="pull-right">
                                <a class="pull-left inline-block mr-15" data-toggle="collapse" href="#collapse_closing" aria-expanded="true">
                                    <i class="zmdi zmdi-chevron-down"></i>
                                    <i class="zmdi zmdi-chevron-up"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen"></i>
                                </a>
                                <a href="#" class="pull-left inline-block">
                                    <i class="zmdi zmdi-print"></i>
                                </a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div id="collapse_closing" class="panel-wrapper collapse in">
                            <div class="panel-body">
                                <div class="table-wrap">
                                    <div class="pull-left">
                                        <button class="btn btn-primary" @click.prevent="tambahTransaksi">Tambah</button>
                                    </div>
                                    <!-- <p class="text-muted">Swipe Mode, ModeSwitch, Minimap, Sortable, SortableSwitch.</p> -->
                                    <div class="clearfix"></div>
                                    <div class="mt-40">
                                        <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                                            <thead>
                                                <tr>
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">No</th>
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Tanggal</th>
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Nama</th>
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1"><abbr title="Rotten Tomato Rating">Status</abbr></th>
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Bayar</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(masuk,index) in trans_masuk">
                                                    <td class="td">{{index + 1}}</td>
                                                    <td class="td">{{masuk.tanggal}}</td>
                                                    <td class="td">{{masuk.keterangan}}</td>
                                                    <td class="td"><span class="label label-warning">{{masuk.mutasi}}</span></td>
                                                    <td class="td">{{masuk.nominal | currency}}</td>
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
<script src="./Service/"></script>
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