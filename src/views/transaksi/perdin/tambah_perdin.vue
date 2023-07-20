<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6 class="txt-light">Tambah Perjalanan Dinas</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form-wizard @on-complete="addperjalanan">
                                    <h4 slot="title">Perjalanan Dinas</h4>
                                    <tab-content title="Detail Perjalanan Dinas" icon="ti-id-badge">
                                        <div class="form-group col-md-12">
                                            <label for="">No Perdin</label>
                                            <!-- tunggu API menghitung perdin yang sudah dilakukan  -->
                                            <input type="text" class="form-control" v-model="no_Perdin" disabled="true">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="">Nama Perjalanan Dinas</label>
                                            <!-- tunggu API menghitung perdin yang sudah dilakukan  -->
                                            <input type="text" class="form-control" v-model="perjalanan.nama">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="">Tanggal</label>
                                            <!-- tunggu API menghitung perdin yang sudah dilakukan  -->
                                            <input type="date" class="form-control" v-model="perjalanan.tanggal">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="">Divisi</label>
                                            <select class="form-control" v-model="perjalanan.divisi">
                                                <option v-for="(M_divisi,k) in M_divisi">{{M_divisi.divisi_nama}}</option>
                                            </select>
                                            <!--  <multiselect v-model="pilih_divisi" :options="M_divisi" :searchable="true" :close-on-select="true" :show-labels="false" label="divisi_nama" placeholder="Pilih Divisi"></multiselect> -->
                                        </div>
                                    </tab-content>
                                    <tab-content title="Keperluan" icon="ti-receipt">
                                        <div class="row">
                                            <div class="form-group col-md-12">
                                                <div class="panel panel-default card-view panel-refresh">
                                                    <div class="refresh-container"></div>
                                                    <div class="panel-heading">
                                                        <div class="pull-left">
                                                            <h6 class="panel-title txt-dark">Tabel Keperluan</h6>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                    </div>
                                                    <div class="panel-body">
                                                        <table class="table table-borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Keperluan</th>
                                                                    <th>Biaya</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="(perlu,k) in keperluan" :key="k">
                                                                    <td>{{k + 1}}</td>
                                                                    <td><input type="text" class="form-control" v-model="perlu.nama_keperluan"></td>
                                                                    <td><vue-numeric currency="Rp." separator="," class="form-control" v-model.number="perlu.biaya_keperluan" /></td>
                                                                    <td><button class="btn btn-danger btn-sm" @click.prevent="remove(k)" v-show="k || ( !k &&  keperluan.length > 1)"><i class="fa fa-minus"></i></button></td>
                                                                    <td><button class="btn btn-primary btn-sm" @click.prevent="add(k)" v-show="k == keperluan.length-1"><i class="fa fa-plus"></i></button></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div class="form-row">
                                                            <div class="form-group col-md-12">
                                                                <label for="">Total biaya</label>
                                                                <!-- <input type="number" class="form-control" v-model.number="hasil" disabled> -->
                                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="hasil" disabled />
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/tambah_perdin"></script>