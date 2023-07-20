<template>
    <div class="tab-content mt-5">
        <div id="internet" class="tab-pane fade in active">
            <div class="panel panel-default card-view">
                <div class="panel-heading">
                    <div class="pull-left">
                        <h6>Tambah Invoice</h6>
                    </div>
                    <div class="pull-right">
                        <router-link class="btn btn-danger" to="/invoice">
                            Kembali
                        </router-link>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
                <div class="panel-wrapper collapse in">
                    <div class="panel-body">
                        <div class="form-wrap">
                            <form-wizard @on-complete="addToApi">
                                <h4 slot="title">Tambah Invoice</h4>
                                <tab-content title="Subjek" icon="ti-comments">
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label>Invoice ID</label>
                                            <input type="text" class="form-control" v-model="invoice.invoice_id">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Tanggal</label>
                                            <input type="date" class="form-control" v-model="invoice.invoice_issue_date">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Tanggal(*Jatuh-Tempo)</label>
                                            <input type="date" class="form-control" v-model="invoice.invoice_due_date">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label>Subjek</label>
                                            <textarea class="form-control" v-model="invoice.invoice_subject"></textarea>
                                        </div>
                                    </div>
                                </tab-content>
                                <tab-content title="Data Penerima" icon="ti-user">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Nama Penerima</label>
                                            <input type="text" class="form-control" v-model="invoice.invoice_receiver.receiver_name" v-if="namacheck">
                                            <multiselect v-model="invoice.invoice_receiver.receiver_name" track-by="_id" label="pengguna_nama" :options="alluser" v-else></multiselect>
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" @click="namacheck = !namacheck">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Data user tidak ada di aplikasi
                                            </label>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Email Penerima</label>
                                            <input type="text" class="form-control" v-model="invoice.invoice_receiver.receiver_email">
                                        </div>
                                    </div>
                                </tab-content>
                                <tab-content title="Metode Pembayaran" icon="ti-id-badge">
                                    <div class="form-group col-md-12">
                                        <label for="nama">Pilih Kas / Bank</label>
                                        <!-- <input type="text" class="form-control" required v-model="wd.wd_nama"> -->
                                        <multiselect v-model="pilih_kode" track-by="_id" label="kode_akun_nama" :options="kode_akun"></multiselect>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="nama">Nama Bank</label>
                                        <input type="text" class="form-control" required v-model="pilih_kode.kode_akun_nama" disabled>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="nama">No Rekening</label>
                                        <input type="text" class="form-control" required v-model="pilih_kode.kode_akun_rekening" disabled>
                                    </div>
                                </tab-content>
                                <tab-content title="Service" icon="ti-receipt">
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <div class="panel panel-default card-view panel-refresh">
                                                <div class="refresh-container"></div>
                                                <div class="panel-heading">
                                                    <div class="pull-left">
                                                        <h6 class="panel-title txt-dark">Keranjang</h6>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                                <div class="panel-body">
                                                    <table class="table table-borderless">
                                                        <thead>
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Type</th>
                                                                <th>Description</th>
                                                                <th>Quanty</th>
                                                                <th>Unit *Price</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(item,k) in barang" :key="k">
                                                                <td>{{k + 1}}</td>
                                                                <td><input type="text" class="form-control" v-model="item.type_barang"></td>
                                                                <td><input type="text" class="form-control" v-model="item.description_barang"></td>
                                                                <td><input type="number" class="form-control" v-model="item.quanty_barang"></td>
                                                                <td>
                                                                    <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="item.harga_barang" />
                                                                </td>
                                                                <td>
                                                                    <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="item.total_barang" disabled />
                                                                </td>
                                                                <td><button class="btn btn-danger btn-sm" @click.prevent="remove(k)" v-show="k || ( !k &&  barang.length > 1)"><i class="fa fa-minus"></i></button></td>
                                                                <td><button class="btn btn-primary btn-sm" @click.prevent="add(k)" v-show="k == barang.length-1"><i class="fa fa-plus"></i></button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="">
                                                                Subtotal
                                                            </label>
                                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="hasil" />
                                                        </div>
                                                        <div class="fomr-group col-md-6">
                                                            <label for="">
                                                                Tax(*Pajak)
                                                            </label>
                                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="ppn" />
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-12">
                                                            <label for="">Total</label>
                                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="total" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </tab-content>
                            </form-wizard>
                        </div>
                    </div>
                    <div class="panel-footer">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>