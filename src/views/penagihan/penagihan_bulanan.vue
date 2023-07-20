<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-dark">Update Pembayaran</h6>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body row">
                                    <div class="table-wrap mt-20 ml-20" id="printlang">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>Cari.Nama</label>
                                                <input type="text" class="form-control" v-model="cari" placeholder="Nama">
                                            </div>
                                            <div class="col-md-4">
                                                <label>Cari.ID / PPOE</label>
                                                <input type="text" class="form-control" v-model="cari_id" placeholder="ID / PPOE">
                                            </div>
                                            <div class="col-md-4 mt-25">
                                                <button v-on:click="getpelanggan()" class="btn btn-primary">Cari</button>
                                            </div>
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
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(pelanggan,index) in datapelanggan" :key="pelanggan._id">
                                                <th>{{index + 1}}</th>
                                                <td>{{pelanggan.pengguna_id}}</td>
                                                <td>{{pelanggan.pengguna_paket.pengguna_paket_harga | currency}}</td>
                                                <td>{{pelanggan.pengguna_nama}}</td>
                                                <td>{{pelanggan.pengguna_alamat}}</td>
                                                <td>{{momentt(pelanggan.pengguna_penagihan.pengguna_penagihan_terakhir)}}</td>
                                                <td>{{momentt(pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo)}}</td>
                                                <td>
                                                    <div class="pull-right">
                                                        <div class="dropdown  pull-left">
                                                            <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                                <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                            </a>
                                                            <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                                <li role="presentation" v-if="pelanggan.pengguna_status_potongan ==='Y'"><a href="#" data-toggle="modal" data-target="#modal_update" v-on:click="detailPenagihan(
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
                                            pelanggan.pengguna_status_potongan,
                                            pelanggan.pengguna_potongan.jumlah_potongan
                                            )"><i class="icon wb-share" aria-hidden="true"></i>Update</a>
                                                                </li>
                                                                <li role="presentation" v-else><a href="#" data-toggle="modal" data-target="#modal_update_nopot" v-on:click="detailPenagihan1(
                                            pelanggan._id,
                                            pelanggan.pengguna_nama,
                                            pelanggan.pengguna_id,
                                            pelanggan.pengguna_penagihan.pengguna_penagihan_status,
                                            pelanggan.pengguna_penagihan.pengguna_penagihan_terakhir,
                                            pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo,
                                            pelanggan.pengguna_biaya_tambahan,
                                            pelanggan.pengguna_biaya_total,
                                            pelanggan.pengguna_paket.pengguna_paket_nama,
                                            pelanggan.pengguna_paket.pengguna_paket_harga
                                            )"><i class="icon wb-share" aria-hidden="true"></i>Update</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <!-- Modal untuk ada potongan  -->
                                                <div class="modal fade" id="modal_update" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Tambah invoice penagihan-1</h5>
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
                                                                        <label for="">Metode Bayar</label>
                                                                        <select class="form-control" v-model="pengguna.paket_metode_bayar">
                                                                            <option value="Cash">Cash</option>
                                                                            <option value="BANK-TRANSFER">BANK TRANSFER</option>}
                                                                        </select>
                                                                    </div>
                                                                    <div class="form-group col-md-6">
                                                                        <label for="">Keterangan</label>
                                                                        <input type="text" class="form-control" v-model.number="pengguna.paket_keterangan">
                                                                    </div>
                                                                </div>
                                                                <div class="form-row">
                                                                    <div class="form-group col-md-6">
                                                                        <label for="">Tanggal bayar</label>
                                                                        <input type="date" class="form-control" v-model="pengguna.terakhir_bayar_dua">
                                                                    </div>
                                                                    <div class="form-group col-md-6">
                                                                        <label for="">Tanggal Jatuh tempo(Lama)</label>
                                                                        <input type="date" class="form-control" v-model="pengguna.jatuh_tempo" disabled>
                                                                    </div>
                                                                </div>
                                                                <div class="form-row">
                                                                    <div class="form-group col-md-12">
                                                                        <label for="">Tanggal Jatuh tempo(Baru)</label>
                                                                        <input type="date" class="form-control" v-model="jatuhtempobaru" disabled="true">
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
                                                                        <label for="">Potongan</label>
                                                                        <input type="number" class="form-control" v-model.number="pengguna.jumlah_potongan" disabled="true">
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
                                                                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="handler">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Modal untuk tanpa potongan  -->
                                                <div class="modal fade" id="modal_update_nopot" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                                        <label for="">Metode Bayar</label>
                                                                        <select class="form-control" v-model="pengguna.paket_metode_bayar">
                                                                            <option value="Cash">Cash</option>
                                                                            <option value="BANK-TRANSFER">BANK TRANSFER</option>}
                                                                        </select>
                                                                    </div>
                                                                    <div class="form-group col-md-6">
                                                                        <label for="">Keterangan</label>
                                                                        <input type="text" class="form-control" v-model.number="pengguna.paket_keterangan">
                                                                    </div>
                                                                </div>
                                                                <div class="form-row">
                                                                    <div class="form-group col-md-6">
                                                                        <label for="">Tanggal bayar</label>
                                                                        <input type="date" class="form-control" v-model="pengguna.terakhir_bayar_dua">
                                                                    </div>
                                                                    <div class="form-group col-md-6">
                                                                        <label for="">Tanggal Jatuh tempo(Lama)</label>
                                                                        <input type="date" class="form-control" v-model="pengguna.jatuh_tempo" disabled>
                                                                    </div>
                                                                </div>
                                                                <div class="form-row">
                                                                    <div class="form-group col-md-12">
                                                                        <label for="">Tanggal Jatuh tempo(Baru)</label>
                                                                        <input type="date" class="form-control" v-model="jatuhtempobaru" disabled="true">
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
                                                                        <input type="number" class="form-control" v-model.number="TotalBiayanopot" disabled="true">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="handler">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="table-wrap mt-20 ml-20" id="printlang">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>INFORMASI TUNGGAKAN</p>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe">
                                        <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Bulan</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Harga</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(pelanggan,index) in pelanggandua" :key="index">
                                                <td>{{index + 1}}</td>
                                                <td>{{jatuhtempobarudua(pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo,index)}}</td>
                                                <td>Belum dibayar</td>
                                                <td >{{pelanggan.pengguna_paket.pengguna_paket_harga | currency}}</td>
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
    </div>
</template>
<script src="./Service/penagihan_bulanan"></script>