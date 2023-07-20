<template>
    <div class="panel panel-default card-view">
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-dark">Pelanggan {{FilterPelanggan.length}}</h6>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-wrapper collapse in">
            <div class="panel-body row">
                <div class="form-group col-md-4">
                    <div class="pull-left">
                        <label for="">Belum Membayar Bulan</label>
                        <input type="month" class="form-control" placeholder="Search" v-model="cari_tanggal">
                    </div>
                    <div class="pull-right">
                        <label for="">cari nama:</label>
                        <input type="text" class="form-control" placeholder="Search" v-model="cari_nama">
                    </div>
                </div>
                <div class="form-group col-md-4 mt-15">
                    <div class="pull-left">
                        <button v-on:click="deletedsall('N')" class="btn btn-danger"><span class="btn-text">Non-aktifkan All</span></button> &nbsp;
                    </div>
                    <div class="pull-right">
                        <button v-on:click="deleteds1all('N')" class="btn btn-danger"><span class="btn-text">Putuskan All</span></button> &nbsp;
                    </div>
                </div>
                <div class="form-group col-md-4 mt-15">
                    <div class="pull-right">
                        <button @click="print" class="btn btn-primary btn-anim"><i class="fa fa-print"></i><span class="btn-text">Print</span></button> &nbsp;
                        <div class="modal fade" id="modal_closing" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Tambah invoice penagihan</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="">Tanggal Jatuh tempo</label>
                                                <input type="date" class="form-control" v-model="closing.jatuh_tempo1">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="">Tanggal Jatuh tempo Selanjutnya</label>
                                                <input type="date" class="form-control" v-model="closing.jatuh_tempo2">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="">Pembayaran seharusnya(Total):</label>
                                                <input type="number" class="form-control" disabled="true" v-model.number="closing.total">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="">Pembayaran Belum(Total):</label>
                                                <input type="number" class="form-control" disabled="true">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="">Pembayaran Selesai(Total):</label>
                                                <input type="number" class="form-control" disabled="true">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" @click="handler1">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th scope="col">ID</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Bayar</th>
                            <th scope="col">Status<br>Pembayaran</th>
                            <th scope="col">Terakhir<br>Membayar</th>
                            <th>Jatuh<br>Tempo</th>
                            <th>Keterangan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pelanggan,index) in FilterPelanggan" :key="pelanggan._id">
                            <td>{{index + 1}}</td>
                            <td>{{pelanggan.pengguna_id}}</td>
                            <td>{{pelanggan.pengguna_nama}}</td>
                            <td>{{pelanggan.pengguna_paket.pengguna_paket_harga | currency}}</td>
                            <!-- <td>{{pelanggan.penagihan_biaya.penagihan_biaya_total | currency}}</td> -->
                            <td v-if="pelanggan.pengguna_penagihan.pengguna_penagihan_status ==='Belum'"><span class="label label-warning">{{pelanggan.pengguna_penagihan.pengguna_penagihan_status}}</span></td>
                            <td v-else-if="pelanggan.pengguna_penagihan.pengguna_penagihan_status ==='Lunas'"><span class="label label-success">{{pelanggan.pengguna_penagihan.pengguna_penagihan_status}}</span></td>
                            <td v-if="pelanggan.pengguna_penagihan.pengguna_penagihan_status ==='Selesai'"><span class="label label-success">{{pelanggan.pengguna_penagihan.pengguna_penagihan_status}}</span></td>
                            <td>{{pelanggan.pengguna_penagihan.pengguna_penagihan_terakhir}}</td>
                            <td>{{pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo}}</td>
                            <td>{{pelanggan.pengguna_penagihan.pengguna_keterangan}}</td>
                            <td>
                                <div class="pull-right">
                                    <div class="dropdown  pull-left">
                                        <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                            <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                        </a>
                                        <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                            <li role="presentation">
                                                <router-link :to="{name:'detail_pelanggan',params:{id:pelanggan._id}}"><i class="icon wb-share" aria-hidden="true"></i>Detail</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button type="button"  v-on:click="deleteds1(pelanggan._id)">putus</button>
                                <button type="button"   v-on:click="deleteds(pelanggan._id)">Non-Aktif</button>
                            </td>
                        </tr>
                    </tbody>
                    <br>
                    <br>
                    <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                        <thead>
                            <tr>
                                <th>Grand Total</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <td>{{totalfilter | currency}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                        <thead>
                            <tr class="text-primary">
                                <td>Dibuat</td>
                                <td>Disetujiu</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="height: 40px">
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Name 1</td>
                                <td>Name 2</td>
                            </tr>
                        </tbody>
                    </table>
                </table>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>