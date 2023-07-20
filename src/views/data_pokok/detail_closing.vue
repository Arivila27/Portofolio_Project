<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <div class="pull-left">
                            <h6 class="txt-light">Data Closing</h6>
                        </div>
                        <div class="pull-right">
                            <button class="btn btn-primary btn-icon left-icon" onclick="javascript:window.print();" >Print</button>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="panel-wrapper collapse in">
                        <form @submit.prevent="updatePokok">
                            <div class="panel-body">
                                <div class="form-wrap">
                                    <div class="col-md-12">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="">ID Closing</label>
                                                <input type="text" class="form-control" v-model="data_closing.closing_id" disabled="true">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Tanggal Closing</label>
                                                <input type="date" class="form-control" v-model="data_closing.closing_tanggal" disbaled="true">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="">Pelanggan Aktif Awal Bulan</label>
                                                <input type="text" class="form-control" v-model="data_closing.closing_pelanggan.closing_pelanggan_aktif_awal" disabled="true">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Target/Jumlah Penagihan ({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="data_closing.closing_tagihan.closing_target_awal" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="">Pelanggan Aktif Akhir Bulan</label>
                                                <input type="text" class="form-control" v-model="data_closing.closing_pelanggan.closing_pelanggan_aktif_akhir" disabled="true">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Target/Jumlah Penagihan ({{BulanDepan}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="data_closing.closing_tagihan.closing_target_awal" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label for="">Pelanggan Baru ({{BulanIni}})</label>
                                                <input type="text" class="form-control" v-model="data_closing.closing_pelanggan.closing_pelanggan_baru" disabled="true">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Pelanggan Non-aktif({{BulanIni}})</label>
                                                <input type="text" class="form-control" v-model="data_closing.closing_pelanggan.closing_pelanggan_nonaktif" disabled="true">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Pelanggan Putus({{BulanIni}})</label>
                                                <input type="text" class="form-control" v-model="data_closing.closing_pelanggan.closing_pelanggan_putus" disabled="true">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label for="">Total Pembayaran Bulanan({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="data_closing.closing_tagihan.closing_pembayaran_bulanan" disabled="true"/>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Total Belum Membayar({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="data_closing.closing_tagihan.closing_belum_membayar" disabled="true"/>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Total Pembayaran Outstanding({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="data_closing.closing_tagihan.closing_pembayaran_outstanding" disabled="true"/>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label for="">Total Pembelian Voucher({{BulanIni}})</label>
                                                <input type="text" class="form-control" v-model="data_closing.closing_voucher.closing_pembelian_voucher" disabled="true">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Jumlah Stok Terjual({{BulanIni}})</label>
                                                <input type="text" class="form-control" v-model="data_closing.closing_voucher.closing_stok_terjual" disabled="true">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Total Pemasukan Voucher({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model="data_closing.closing_voucher.closing_pemasukan_voucher" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label for="">Total Pembayaran Registrasi({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="data_closing.closing_tagihan.closing_pembayaran_registrasi" disabled="true" />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Pelanggan Migrasi({{BulanIni}})</label>
                                                <input type="number" class="form-control" v-model.number="data_closing.closing_migrasi.closing_pelanggan_migrasi" disabled="true">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="">Total Pemasukan Migrasi({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model="data_closing.closing_migrasi.closing_pemasukan_migrasi" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="">Total Pembelian({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="data_closing.closing_pengeluaran.closing_pembelian" disabled="true" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Total Perjalan Dinas({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model="data_closing.closing_pengeluaran.closing_perjalanan_dinas" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="">Total Pemasukan({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="data_closing.closing_total_pemasukan" disabled="true" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Total Pengeluaran({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model="data_closing.closing_total_pengeluaran" disabled="true" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="">Total Pendapatan({{BulanIni}})</label>
                                                <vue-numeric  currency="Rp." separator="," class="form-control" v-model.number="data_closing.closing_total_pendapatan" disabled="true" />
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
<script src="./Service/detail_closing"></script>