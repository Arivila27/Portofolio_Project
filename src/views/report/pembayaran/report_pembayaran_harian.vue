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
                                <h6 class="panel-title txt-dark">Laporan Pembayaran(Bulanan)</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/laporan_harian">
                                    <button class="btn btn-success bg-success">Lihat Data</button>
                                </router-link>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-wrapper collapse in">
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Tanggal membayar</label>
                                        <input type="month" class="form-control" v-model="select_month">
                                    </div>
                                    <div class="col-md-6">
                                        <label>Type pembayaran</label>
                                        <multiselect v-model="cari_type" :options="option_type" placeholder="Pilih"></multiselect>
                                    </div>
                                </div>
                                <div class="row mt-25">
                                    <div class="col-md-4">
                                         <div class="total-tagihan">
                                            <span class="block font-10 weight-400 clr-white">T</span>
                                            <span class="txt-dark block counter weight-600 font-24">{{hitungtotalcash | currency}}</span>
                                            <div class="mt-15 mb-10">
                                                <span class="label label-success">Cash</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                         <div class="total-tagihan">
                                            <span class="block font-10 weight-400 clr-white">T</span>
                                            <span class="txt-dark block counter weight-600 font-24">{{hitungtotalbanktransfer | currency}}</span>
                                            <div class="mt-15 mb-10">
                                                <span class="label label-primary">Bank Transfer</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-4">
                                         <div class="total-tagihan">
                                            <span class="block font-10 weight-400 clr-white">T</span>
                                            <span class="txt-dark block counter weight-600 font-24">{{hitungtotalsaldo | currency}}</span>
                                            <div class="mt-15 mb-10">
                                                <span class="label label-success">Saldo</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                 <div class="row">
                                    <div class="col-md-4">
                                         <div class="total-tagihan">
                                            <span class="block font-10 weight-400 clr-white">T</span>
                                            <span class="txt-dark block counter weight-600 font-24">{{hitungtotalvabni | currency}}</span>
                                            <div class="mt-15 mb-10">
                                                <span class="label label-warning">VA-BNI</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                         <div class="total-tagihan">
                                            <span class="block font-10 weight-400 clr-white">T</span>
                                            <span class="txt-dark block counter weight-600 font-24">{{hitungtotalvabca | currency}}</span>
                                            <div class="mt-15 mb-10">
                                                <span class="label label-primary">VA-BCA</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-4">
                                         <div class="total-tagihan">
                                            <span class="block font-10 weight-400 clr-white">T</span>
                                            <span class="txt-dark block counter weight-600 font-24">{{ hitungtotalmst | currency}}</span>
                                            <div class="mt-15 mb-10">
                                                <span class="label label-info">Indomaret</span>
                                            </div>
                                        </div>
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
<script src="./Service/report_pembayaran_harian"></script>
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