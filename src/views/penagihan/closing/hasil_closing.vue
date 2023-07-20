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
                                <h6 class="panel-title txt-dark">Hasil closing</h6>
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
                                                    <span class="block font-12 weight-400">Total Tagihan Bulan Ini</span>
                                                    <span class="txt-dark block counter weight-600 font-24"></span>
                                                    <table width="100%">
                                                        <tr>
                                                            <td>
                                                                <span class="block">Seharusnya: <br>
                                                                    <bold class="txt-dark weight-600 font-16"></bold>
                                                                </span>
                                                            </td>
                                                            <td align="right">
                                                                <span class="block font-10 clr-white"></span>
                                                                <div class="label label-danger font-18"></div>
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
                                                    <span class="txt-dark block counter weight-600 font-24"></span>
                                                    <div class="mt-15 mb-10">
                                                        <span class="label label-primary">BCA</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="total-tagihan">
                                                    <span class="block font-10 weight-400 clr-white">T</span>
                                                    <span class="txt-dark block counter weight-600 font-24"></span>
                                                    <div class="mt-15 mb-10">
                                                        <span class="label label-primary">BCA-371</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="total-tagihan">
                                                    <span class="block font-10 weight-400 clr-white">T</span>
                                                    <span class="txt-dark block counter weight-600 font-24"></span>
                                                    <div class="mt-15 mb-10">
                                                        <span class="label label-warning">MANDIRI</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="total-tagihan">
                                                    <span class="block font-10 weight-400 clr-white">T</span>
                                                    <span class="txt-dark block counter weight-600 font-24"></span>
                                                    <div class="mt-15 mb-10">
                                                        <span class="label label-success">CASH</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-wrap mt-20">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label>Bulan</label>
                                            <input type="month" class="form-control">
                                        </div>
                                        <div class="col-md-3">
                                            <label>Filter Pembayaran</label>
                                            <multiselect v-model="nilai_pembayaran" :options="option_pembayaran" placeholder="Pilih"></multiselect>
                                        </div>
                                        <div class="col-md-3">
                                            <label>Cari nama</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col-md-3">
                                            <label>Pilih status</label>
                                            <multiselect v-model="nilai_status" :options="option_status" placeholder="Pilih"></multiselect>
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
                                                <tr>
                                                    <td class="td"><a href="javascript:void(0)"></a></td>
                                                    <td class="td"></td>
                                                    <td class="td"></td>
                                                    <td class="td"><span class="label label-warning"></span></td>
                                                    <td class="td"></td>
                                                    <td class="td"></td>
                                                    <td class="td"></td>
                                                    <td class="td"></td>
                                                    <td class="td"><button class="btn btn-danger" style="padding: 6px 12px !important"><i class="zmdi zmdi-delete"></i></button></td>
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
<script src="./Service/hasil_closing"></script>
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