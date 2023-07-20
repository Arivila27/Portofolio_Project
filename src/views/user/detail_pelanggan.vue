<template>
  <div class="page-wrapper">
      <div class="container-fluid pt-25">
          <div class="row">
              <div class="tab-content mt-5">
                  <div id="internet" class="tab-pane fade in active">
                      <div class="panel panel-default card-view">
                          <div class="panel-heading">
                              <h6>Detail Pelanggan</h6>
                          </div>
                          <div class="clearfix"></div>
                          <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="panel panel-default card-view">
                                                <div class="panel-wrapper collapse in">
                                                    <div class="panel-body">
                                                        <div class="tab-struct custom-tab-1 product-desc-tab">
                                                            <ul role="tablist" class="nav nav-tabs nav-tabs-responsive" id="myTabs_7">
                                                                <li class="active" role="presentation"><a aria-expanded="true" data-toggle="tab" role="tab" id="descri_tab" href="#descri_tab_detail"><span>Informasi</span></a></li>
                                                                <li @click.prevent="getpelanggan()" role="presentation" class=""><a data-toggle="tab" id="tung" role="tab" href="#tunggakan" aria-expanded="false"><span>Tunggakan<span class="inline-block"></span></span></a></li>
                                                                <li @click.prevent="getpenagihan()" role="presentation" class=""><a data-toggle="tab" id="pemb" role="tab" href="#pembayaran" aria-expanded="false"><span>Pembayaran<span class="inline-block"></span></span></a></li>
                                                            </ul>
                                                            <div class="tab-content" id="myTabContent_7">
                                                                <div id="descri_tab_detail" class="tab-pane fade in pt-0 active" role="tabpanel">
                                                                    <div class="table-wrap">
                                                                        <div class="table-responsive">
                                                                            <table class="table  mb-0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="border-none">Nama</td>
                                                                                        <td class="border-none">{{pelanggan.pengguna_nama}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Alamat</td>
                                                                                        <td>{{pelanggan.pengguna_alamat}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>No.telp</td>
                                                                                        <td>{{pelanggan.pengguna_no_telepon}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Lokasi Pemasangan</td>
                                                                                        <td>{{pelanggan.pengguna_lokasi_pasang}}</td>
                                                                                    </tr>
                                                                                    <tr v-if="pelanggan.pengguna_status === 'N'">
                                                                                        <td>Tanggal Nonaktif</td>
                                                                                        <td>{{pelanggan.pengguna_updated}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Tanggal Pemasangan</td>
                                                                                        <td>{{pelanggan.pengguna_tanggal_pemasangan}}</td>
                                                                                    </tr> 
                                                                                    <tr>
                                                                                        <td>Biaya registrasi</td>
                                                                                        <td>{{pelanggan.pengguna_biaya_registrasi | currency }}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Biaya tambahan</td>
                                                                                        <td>{{pelanggan.pengguna_biaya_tambahan | currency}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Biaya Prored</td>
                                                                                        <td>{{pelanggan.pengguna_biaya_prored | currency}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Biaya total</td>
                                                                                        <td>{{pelanggan.pengguna_biaya_tambahan + pelanggan.pengguna_biaya_prored + pelanggan.pengguna_biaya_registrasi | currency}}</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="tunggakan" class="tab-pane pt-0 fade" role="tabpanel">
                                                                    <div class="row mt-40">
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
                                                                                    <td>{{jatuhtempobaru(pelanggan.pengguna_penagihan.pengguna_penagihan_jatuh_tempo,index)}}</td>
                                                                                    <td>Belum dibayar</td>
                                                                                    <td >{{pelanggan.pengguna_paket.pengguna_paket_harga | currency}}</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div id="pembayaran" class="tab-pane pt-0 fade" role="tabpanel">
                                                                <div class="row mt-40">
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
                                                                            <tr v-for="(penagihan,index) in penagihan" :key="index">
                                                                                <td>{{index + 1}}</td>
                                                                                <td>{{bulanmembayar(penagihan.penagihan_tanggal_pembayaran)}}</td>
                                                                                <td>Lunas</td>
                                                                                <td v-if="penagihan.penagihan_metode_bayar === 'mybitniaga-mst'">{{penagihan.penagihan_paket.penagihan_paket_harga | currency}}</td>
                                                                                <td v-else>{{penagihan.penagihan_biaya.penagihan_biaya_total | currency}}</td>
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
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../api.config'
import moment from 'moment'
export default {
  components: {
      Multiselect
  },
  data() {
      return {
          pelanggan : {},
          complain: [],
          produk: [],
          jumlahdata : '',
          jatuhtemponya : '',
          harganya : '',
          penagihan: [],
          pelanggandua : []
      }
      // ----
  },
  created() {
      this.getpelanggan()
  },
  mounted() {
      this.getcomplain()
      this.getproduk()
      this.getpenagihan()
  },
  methods: {
      // mendapatkan data pelanggan
      getpelanggan() {
          axios.get(API + `/M_pengguna/${this.$route.params.id}`)
              .then((response) => {
                  this.pelanggan = response.data;
                  var jatuhtempo = response.data.pengguna_penagihan.pengguna_penagihan_jatuh_tempo
                  var bulansekarang = moment().format("MM")
                  var bulanjatuhtempo = moment(jatuhtempo).format("MM")
                  //this.setState({penagihanjatuhtempo:jatuhtempo})
                  var jumlahdata = bulansekarang - bulanjatuhtempo + 1
                  var datanya = [];
                  for (let index = 0; index < jumlahdata; index++) {
                      datanya.push(response.data)
                  }
                  this.pelanggandua = datanya;
                  //console.log("DATANYA" , datanya)
              });
      },
      jatuhtempobaru(pelanggan,index) {
          var terakhir_hasil = moment(pelanggan).add(index, 'M').format("DD MMMM YYYY")
          
          //var fixtangal = this.momentt(terakhir_hasil)
          return terakhir_hasil
      },
      bulanmembayar(pelanggan) {
          var terakhir_hasil = moment(pelanggan).format("MMMM YYYY")
          
          //var fixtangal = this.momentt(terakhir_hasil)
          return terakhir_hasil
      },
      // ---
      getcomplain() {
          axios.get(API + `/Tr_complain/list-pelanggan/${this.pelanggan._id}`)
              .then((response) => {
                  console.log(response.data)
                  this.complain = response.data;
              });
      },
      getproduk() {
          axios.get(API + `/M_upgrade/list-pelanggan/${this.pelanggan._id}`)
              .then((response) => {
                  this.produk = response.data
              });
      },
      getpenagihan() {
          axios.get(API + `/Tr_penagihan-list-pelanggan-3/${this.pelanggan.pengguna_id}`)
              .then((response) => {
                  this.penagihan = response.data
              });
      },

  },
}
</script>
