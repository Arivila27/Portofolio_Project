<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-dark">Penyelesaian PSB</h6>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body row">
                                    <div class="form-group col-md-6">
                                        <div class="pull-left">
                                            <label for="">Bulan</label>
                                            <input type="month" class="form-control" placeholder="Search" v-model="cari_tanggal">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <div class="pull-right">
                                            <br>
                                            <button @click="print" class="btn btn-primary btn-anim"><i class="fa fa-print"></i><span class="btn-text">Print</span></button> &nbsp;
                                        </div>
                                    </div>
                                    <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Nama</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Jumlah</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(pelanggan,index) in FilterPelanggan" :key="pelanggan._id">
                                                <th>{{index + 1}}</th>
                                                <td>{{pelanggan.psb_pengguna_nama}}</td>
                                                <td>Selesai</td>
                                                <td>{{pelanggan.psb_count}}</td>
                                            </tr>
                                        </tbody>
                                        <br>
                                        <br>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/jumlah_pegawai_psb"></script>