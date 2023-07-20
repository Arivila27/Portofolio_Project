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
                <div class="form-group col-md-6">
                    <div class="pull-left">
                        <label for="">Cari nama:</label>
                        <input type="text" class="form-control" placeholder="Search" v-model="cari_nama">
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <div class="pull-right">
                        <label for="">terakhir membayar:</label>
                        <input type="month" class="form-control" placeholder="Search" v-model="cari_tanggal">
                    </div>
                </div>
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">ID</th>
                            <th scope="col">Paket bayar</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Terakhir<br>Membayar</th>
                            <th>Jatuh<br>Tempo</th>
                            <th>Tipe</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pelanggan,index) in FilterPelanggan" :key="pelanggan._id">
                            <th>{{index + 1}}</th>
                            <td>{{pelanggan.pengguna_id}}</td>
                            <td>{{pelanggan.pengguna_paket.pengguna_paket_harga | currency}}</td>
                            <td>{{pelanggan.pengguna_nama}}</td>
                            <td>{{pelanggan.pengguna_alamat}}</td>
                            <td>{{pelanggan.pengguna_penagihan.pengguna_penagihan_terakhir}}</td>
                            <td>{{pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo}}</td>
                            <td>{{pelanggan.pengguna_status_bayar}}</td>
                            <td><button class="btn btn-outline btn-success" data-toggle="modal" data-target="#modal_update" v-on:click="detailPenagihan(
                                            pelanggan._id,
                                            pelanggan.pengguna_nama,
                                            pelanggan.pengguna_id,
                                            pelanggan.pengguna_penagihan.pengguna_penagihan_status,
                                            pelanggan.pengguna_penagihan.pengguna_penagihan_terakhir,
                                            pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo,
                                            pelanggan.pengguna_biaya_tambahan,
                                            pelanggan.pengguna_biaya_total,
                                            pelanggan.pengguna_paket.pengguna_paket_nama,
                                            pelanggan.pengguna_paket.pengguna_paket_harga,
                                            )">Update</button> &nbsp;
                            </td>
                            <!-- <td class="btn btn-outline btn-success" data-toggle="modal" data-target="#modal_update" v-on:click="getdetailpelanggan(pelanggan._id)">Update</td> -->
                            <div class="modal fade" id="modal_update" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                <div class="form-group col-md-12">
                                                    <label for="">Nama</label>
                                                    <input type="text" class="form-control" v-model="pengguna.nama" disabled="true">
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="">Tanggal terakhir bayar</label>
                                                    <input type="date" class="form-control" v-model="pengguna.terakhir_bayar">
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="">Tanggal Jatuh tempo</label>
                                                    <input type="date" class="form-control" v-model="pengguna.jatuh_tempo">
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="">Nama Paket</label>
                                                    <input type="text" class="form-control" v-model="pengguna.paket_nama" disabled="true">
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="">Harga Paket</label>
                                                    <input type="number" class="form-control" v-model.number="pengguna.paket_harga" disabled="true">
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="">Metode Bayar</label>
                                                    <select class="form-control" v-model="pengguna.paket_metode_bayar">
                                                        <option value="Cash">Cash</option>
                                                        <option value="BCA">BCA</option>}
                                                        <option value="BCA-371">BCA-371</option>}
                                                        <option value="Mandiri">Mandiri</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="">Keterangan</label>
                                                    <input type="text" class="form-control" v-model.number="pengguna.paket_keterangan">
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="">Biaya Tambahan</label>
                                                    <input type="number" class="form-control" v-model.number="pengguna.biaya_tambahan" disabled="true">
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="">PPN</label>
                                                    <input type="number" class="form-control" v-model.number="pengguna.biaya_ppn">
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <label for="">Total:</label>
                                                    <input type="number" class="form-control" v-model.number="TotalBiaya" disabled="true">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary" @click="handler">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
</template>
<script src="./Service/Marketing"></script>