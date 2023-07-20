<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-dark">Laporan Kas & Bank{{ bulan_ini }}</h6>
            </div>
            <div class="pull-right">
                <router-link to="/kasbank" v-on:click="getdata()" class="pull-left inline-block back mr-15">
                    <i class="zmdi zmdi-arrow-left"></i>
                </router-link>
                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-replay"></i>
                </a>
                <a href="#" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-fullscreen"></i>
                </a>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div class="form-group col-md-12">
                <div class="row">
                    <div class="col-md-4">
                        <div class="total-tagihan">
                            <div class="mt-15 mb-10">
                                <span class="block font-12 weight-400">Kredit</span>
                                <span class="txt-dark block counter weight-600 font-24">{{ hitungtotalKredit | currency }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="total-tagihan">
                            <div class="mt-15 mb-10">
                                <span class="block font-12 weight-400">Debit</span>
                                <span class="txt-dark block counter weight-600 font-24">{{ hitungtotalDebit | currency }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="total-tagihan">
                            <div class="mt-15 mb-10">
                                <span class="block font-12 weight-400">Saldo</span>
                                <span class="txt-dark block counter weight-600 font-24">{{ hitungtotalSaldo | currency }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="clearfix"></div>
                <div class="table-wrap mt-20" id="printlang">
                    <div class="row">
                        <div class="col-md-4">
                            <label>Group(Kode Akun)</label>
                            <select class="form-control" v-model="cari_kode_akun">
                                <option v-for="(kdakun, index) in table_kasbank">{{ kdakun.kasbank_tipe_cash }}</option>
                            </select>
                        </div>
                        
                        <div class="col-md-4">
                            <label>Cari.Bulan</label>
                            <input type="month" class="form-control" v-model="cari_bulan" placeholder="Nama">
                        </div>
                        
                        <div class="col-md-4">
                            <label>Sortir Halaman</label>
                            <select class="form-control" v-model.number="pageSize">
                                <option value="1">1</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="500">500</option>
                                <option value="1000">1000</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
            <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable
                data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch ref="PrintTable"
                cellpadding="5" border="1"
                style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                <thead>
                    <tr>
                        <th scope="col">Nomor</th>
                        <th scope="col">Tipe</th>
                        <th scope="col">Tahun</th>
                        <th scope="col">Bulan</th>
                        <th scope="col">Tanggal Pembuatan</th>
                        <th scope="col">Group(Kode Akun)</th>
                        <th scope="col">Kas-Awal</th>
                        <th scope="col">Penambahan / Pengurangan Kas</th>
                        <th scope="col">Saldo Akhir</th>
                        <th scope="col">Keterangan</th>
                        <!-- <th scope="col">Aksi</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(beli, index) in PageofItems" :key="beli._id">
                        <th>{{ index + 1}}</th>
                        <td v-if="beli.kasbank_tipe_cash === 'Debit'"><span class="label label-primary">{{
                            beli.kasbank_tipe_cash
                        }}</span></td>
                        <td v-if="beli.kasbank_tipe_cash === 'Kredit'"><span class="label label-warning">{{
                            beli.kasbank_tipe_cash
                        }}</span></td>
                        <th>{{ beli.kasbank_tahun }}</th>
                        <th>{{ momentum(beli.kasbank_bulan)}}</th>
                        <th>{{ beli.kasbank_created }}</th>

                        <th>{{ beli.kasbank_tipe }}</th>
                        <th>{{ beli.kasbank_awal | currency }}</th>
                        <td>{{ beli.kasbank_penambahan | currency }}</td>
                        <td>{{ beli.kasbank_akhir | currency }}</td>
                        <td>{{ beli.kasbank_description }}</td>
                        <!-- <td>
                            <router-link
                                :to="{ name: 'detail_trkasbank_closing', params: { id: beli._id } }">Lihat(OnComing)</router-link>
                            <!--  :to="{name: 'Edit', params: { id: item._id }}" -->
                        </td> 
                    </tr>
                </tbody>
            </table>
            <div class="clearfix btn-group col-md-12 offset-md-6 mt-10">
                <JwPagination :pageSize="pageSize" :items="FilterKasbank" @changePage="onChangePage"></JwPagination>
            </div>

        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>