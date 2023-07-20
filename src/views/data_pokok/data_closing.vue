<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <div class="pull-left">
                            <h6 class="txt-light">Data Closing</h6>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="panel-wrapper collapse in">
                        <form @submit.prevent="createClosing">
                            <div class="panel-body">
                                <div class="form-wrap">
                                    <div class="col-md-12">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="">ID Closing</label>
                                                <input type="text" class="form-control" v-model="idClosing" disabled="true">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Tanggal Closing</label>
                                                <input type="date" class="form-control" v-model="tanggal_closing">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="">Pelanggan Aktif Awal Bulan</label>
                                                <input type="text" class="form-control" v-model="data_closing.closing_pelanggan.closing_pelanggan_aktif_akhir" disabled="true">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Target/Jumlah Penagihan ({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="data_closing.closing_tagihan.closing_target_akhir" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="">Pelanggan Aktif Akhir Bulan</label>
                                                <input type="text" class="form-control" v-model="M_pengguna" disabled="true">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Target/Jumlah Penagihan ({{BulanDepan}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="targetbulanan" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label for="">Pelanggan Baru ({{BulanIni}})</label>
                                                <input type="text" class="form-control" v-model="filterpelanggan.length" disabled="true">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Pelanggan Non-aktif({{BulanIni}})</label>
                                                <input type="text" class="form-control" v-model="pelanggan_nonaktif" disabled="true">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Pelanggan Putus({{BulanIni}})</label>
                                                <input type="text" class="form-control" v-model="pelanggan_putus" disabled="true">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label for="">Total Pembayaran Bulanan({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="pembayaranbulanan" disabled="true"/>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Total Belum Membayar({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="belummembayar" disabled="true"/>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Total Pembayaran Outstanding({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="pembayaranoutstanding" disabled="true"/>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label for="">Total Pembelian Voucher({{BulanIni}})</label>
                                                <input type="text" class="form-control" v-model="tr_voucher" disabled="true">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Jumlah Stok Terjual({{BulanIni}})</label>
                                                <input type="text" class="form-control" v-model="tr_voucher_item" disabled="true">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Total Pemasukan Voucher({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model="tr_voucher_jumlah" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label for="">Total Pembayaran Registrasi({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="pembayaranregis" disabled="true" />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Pelanggan Migrasi({{BulanIni}})</label>
                                                <input type="number" class="form-control" v-model.number="tr_migrasidata" disabled="true">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Total Pemasukan Migrasi({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model="tr_migrasi" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="">Total Pembelian({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="pembelian" disabled="true" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Total Perjalan Dinas({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model="perdin" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="">Total Pemasukan({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="totalpemasukan" disabled="true" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Total Pengeluaran({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model="totalpengeluaran" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="">Total Pendapatan({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="totalpendapatan" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <button class="btn btn-success ml-5">Save</button>&nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/data_closing"></script>