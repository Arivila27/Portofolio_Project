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
                                <h6 class="panel-title txt-dark">BCA INQUIRY</h6>
                            </div>
                            <!-- <div class="pull-right">
                                <a data-toggle="collapse" href="#collapse_closing">
                                    <button class="btn btn-success bg-success">Lihat Grafik</button>
                                </a>
                            </div> -->
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-wrapper collapse in">
                            <div class="panel-body">
                                <!-- <div class="row collapse" id="collapse_closing">
                                    <div class="col-md-3">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="total-tagihan">
                                                    <span class="block font-12 weight-400">Total Inquiry</span>
                                                    <span class="txt-dark block counter weight-600 font-24">{{hitungtotalpenagihan | currency}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <div class="table-wrap mt-20">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label>Cari Number</label>
                                            <input type="text" class="form-control" v-model="cari_number">
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
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Customer NO</th>
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Customer Name</th>
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Total Amount</th>
                                                    <th class="td" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="5">Transaction Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(inq,index) in FilterPenagihan" :key="inq._id">
                                                    <td class="td"><a href="javascript:void(0)">{{index + 1}}</a></td>
                                                    <td class="td">{{inq.CustomerNumber}}</td>
                                                    <td class="td">{{inq.CustomerName}}</td>
                                                    <td class="td">{{inq.TotalAmount | currency}}</td>
                                                    <td class="td">{{inq.TransactionDate}}</td>
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
<script src="./Service/va_bca_inquiry"></script>
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