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
                                <h6 class="panel-title txt-dark">Pelanggan {{FilterPelanggan.length}}</h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-wrapper collapse in">
                            <div class="panel-body row">
                                <div class="form-group col-md-6">
                                    <div class="pull-left">
                                        <label for="">Cari nama:</label>
                                        <input type="text" class="form-control" placeholder="Cari">
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <div class="pull-right">
                                        <button class="btn btn-danger" data-toggle="modal" data-target="#modal_closing">Closing</button>
                                        <br>
                                        <!--  <button class="btn btn-warning" @click.prevent="EditallPelanggan()">Coba</button>
                                        <button class="btn btn-warning" @click.prevent="Cobafungsi()">Coba2</button>
                                        <button class="btn btn-warning" @click.prevent="TambahInvoice()">Coba3</button> -->
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
                                                                <label for="">Bulan Jatuh tempo</label>
                                                                <input type="month" class="form-control" v-model="cari_tanggal">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="">Tanggal jatuh tempo(Selanjutnya)</label>
                                                                <input type="date" class="form-control" v-model="cari_tempo">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label>Total Pelanggan(Yang Belum)</label>
                                                                <input type="text" class="form-control" disabled v-model="FilterPelanggan.length">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label>Total Pembayaran(Yang Belum)</label>
                                                                 <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="HitungtotalBelumBayar" disabled/>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label>Total Pelanggan(Yang Membayar)</label>
                                                                <input type="text" class="form-control" disabled v-model="FilterPelanggansudahbayar.length">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label>Total Pembayaran(Yang Membayar)</label>
                                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="HitungtotalSudahBayar" disabled/>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label>Total Pelanggan</label>
                                                                <input type="text" class="form-control" disabled v-model="pelanggan.length">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label>Total Pembayaran(Seharusnya)</label>
                                                                 <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="HitungAllBayar" disabled/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary" @click.prevent="handlerAll()">Save changes</button>
                                                        <button type="button" class="btn btn-primary" @click.prevent="saveClosing()">Cave</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Alamat</th>
                                            <th scope="col">Terakhir<br>Membayar</th>
                                            <th>Jatuh<br>Tempo</th>
                                            <th>Tipe</th>
                                            <th>Bayara</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(pelanggan,index) in DisplayedPelanggan" :key="pelanggan._id">
                                            <th>{{index + 1}}</th>
                                            <td>{{pelanggan.pengguna_id}}</td>
                                            <td>{{pelanggan.pengguna_nama}}</td>
                                            <td>{{pelanggan.pengguna_alamat}}</td>
                                            <td>{{pelanggan.pengguna_penagihan.pengguna_penagihan_terakhir}}</td>
                                            <td>{{pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo}}</td>
                                            <td>{{pelanggan.pengguna_status_bayar}}</td>
                                            <td>{{pelanggan.pengguna_paket.pengguna_paket_harga | currency}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="clearfix btn-group col-md-6 offset-md-5">
                                    <button type="button" class="btn btn-sm btn-success" v-if="page != 1" @click="page--">
                                        Previous</button> <button type="button" class="btn btn-sm btn-success" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" v-bind:key="pageNumber"> {{pageNumber}}
                                    </button>
                                    <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-success"> NEXT </button>
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
<script src="./Service/closing"></script>