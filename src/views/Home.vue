<!-- Rating Pelanggan []
Data Tempat []
visi Traffic []
 -->
 <template>
  <div class="home">
      <div class="page-wrapper" style="min-height: 100vh !important;">
          <div class="container-fluid pt-25">
              <!-- Row -->
              <div class="row">
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <div class="card-info mtm-25" style="background: linear-gradient(90deg, rgba(26,116,222,1) 0%, rgba(73,212,109,1) 100%);">
                          <div class="sm-data-box">
                              <div class="container-fluid">
                                <router-link to="/total_penagihan_keseluruhan">
                                    <div class="row">
                                          <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                              <span class="clr-white weight-600 block counter font-18"><span>{{ tr_penagnonmst + tr_penagmst  | currency}}</span></span>
                                              <span class="weight-300 block font-14 clr-white">Pembayaran Bulanan</span>
                                          </div>
                                    </div>
                                </router-link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <div class="card-info mtm-25" style="background: linear-gradient(90deg, rgba(26,116,222,1) 0%, rgba(73,212,109,1) 100%);">
                          <div class="sm-data-box">
                              <div class="container-fluid">
                                 <router-link to="/total_penagihan_regis">
                                    <div class="row">
                                            <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                                <span class="clr-white weight-600 block counter font-18"><span>{{ tr_penagnonmst_regis + tr_penagmst_regis | currency}}</span></span>
                                                <span class="weight-300 block font-14 clr-white">Pembayaran Registrasi</span>
                                            </div>
                                    </div>
                                  </router-link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <div class="card-info mtm-25" style="background: linear-gradient(90deg, rgba(26,116,222,1) 0%, rgba(73,212,109,1) 100%);">
                          <div class="sm-data-box">
                              <div class="container-fluid">
                                <router-link to="/konfirmasi_upgrade_paket">
                                  <div class="row">
                                          <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                              <span class="clr-white weight-600 block counter font-18"><span>{{ tr_migrasi | currency}}</span></span>
                                              <span class="weight-300 block font-14 clr-white">Pembayaran Migrasi Internet</span>
                                          </div>
                                  </div>
                                </router-link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg3 col-md-3 col-sm-3 col-xs-3">
                      <div class="card-info mtm-25" style="background: linear-gradient(90deg, rgba(26,116,222,1) 0%, rgba(73,212,109,1) 100%);">
                          <div class="sm-data-box">
                              <div class="container-fluid">
                                <router-link to="/voucher">
                                  <div class="row">
                                          <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                              <span class="clr-white weight-600 block counter font-18"><span>{{ tr_voucher | currency}}</span></span>
                                              <span class="weight-300 block font-14 clr-white">Pembayaran Voucher</span>
                                          </div>
                                  </div>
                                </router-link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row mt-25">
                  <div class="col-lg3 col-md-3 col-sm-3 col-xs-3">
                      <div class="card-info mtm-25" style="background: linear-gradient(90deg, rgba(26,116,222,1) 0%, rgba(73,212,109,1) 100%);">
                          <div class="sm-data-box">
                              <div class="container-fluid">
                                <router-link to="/total_penagihan_outstanding">
                                  <div class="row">
                                          <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                              <span class="clr-white weight-600 block counter font-18"><span>{{ tr_outstanding + tr_outstandingnonmst | currency}}</span></span>
                                              <span class="weight-300 block font-14 clr-white">Pembayaran Outsanding</span>
                                          </div>
                                  </div>
                                </router-link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <div class="card-info mtm-25" style="background: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);">
                          <div class="sm-data-box">
                              <div class="container-fluid">
                                  <div class="row">
                                          <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                              <span class="clr-white weight-600 block counter font-18"><span>{{target_pembayaran | currency}}</span></span>
                                              <span class="weight-300 block font-14 clr-white">Target Pembayaran</span>
                                          </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <div class="card-info mtm-25" style="background: linear-gradient(to right top, #d16ba5, #e16f9c, #ed7491, #f67c87, #fc867d, #fa956e, #f2a665, #e6b763, #c9ce71, #a6e192, #80f0c0, #5ffbf1);">
                          <div class="sm-data-box">
                              <div class="container-fluid">
                                  <div class="row">
                                          <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                              <span class="clr-white weight-600 block counter font-18"><span>{{target_pembayaran - tr_penagmst - tr_penagnonmst | currency}}</span></span>
                                              <span class="weight-300 block font-14 clr-white">Belum Membayar</span>
                                          </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <div class="card-info mtm-25" style="background-image: linear-gradient(to left bottom, #fbeaff, #ffe1f1, #ffdadf, #ffd5cb, #f8d3b9, #ebd5af, #d8d8ac, #c2dbaf, #aadfbd, #92e2d2, #81e2ea, #80e0ff);">
                          <div class="sm-data-box">
                              <div class="container-fluid">
                                  <div class="row">
                                      <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                          <span class="clr-white weight-600 block counter font-20"><span>{{tr_penagmst + tr_penagnonmst + tr_migrasi + tr_voucher + tr_penagmst_regis + tr_penagnonmst_regis + tr_outstanding + tr_outstandingnonmst  | currency}}</span></span>
                                          <span class="weight-600 block font-14 clr-white">Total Pemasukan</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="clearfix"></div>
              <br>
              <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <div class="card-info mtm-25" style="background-image: linear-gradient(to left bottom, #fbeaff, #eadcfe, #d3cfff, #b3c5ff, #89bcff, #64c3ff, #39c9f7, #00ceea, #66ddd3, #a3e7c3, #d6efc1, #fff7d0);">
                          <div class="sm-data-box">
                              <div class="container-fluid">
                                <router-link to="/membeli">
                                  <div class="row">
                                          <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                              <span class="clr-white weight-600 block counter"><span>{{pembelian | currency}}</span></span>
                                              <span class="weight-400 block font-12 clr-white">Pengeluaran(Dari Pembelian)</span>
                                          </div>
                                  </div>
                                </router-link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <div class="card-info mtm-25" style="background-image: linear-gradient(to left bottom, #fbeaff, #eadcfe, #d3cfff, #b3c5ff, #89bcff, #64c3ff, #39c9f7, #00ceea, #66ddd3, #a3e7c3, #d6efc1, #fff7d0);">
                          <div class="sm-data-box">
                              <div class="container-fluid">
                                <router-link to="/perjalanan_dinas">
                                  <div class="row">
                                          <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                              <span class="clr-white weight-600 block counter"><span>{{perdin | currency}}</span></span>
                                              <span class="weight-400 block font-12 clr-white">Pengeluaran(Dari Perjalanan Dinas)</span>
                                          </div>
                                  </div>
                                </router-link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <div class="card-info mtm-25" style="background-image: linear-gradient(to left bottom, #fbeaff, #eadcfe, #d3cfff, #b3c5ff, #89bcff, #64c3ff, #39c9f7, #00ceea, #66ddd3, #a3e7c3, #d6efc1, #fff7d0);">
                          <div class="sm-data-box">
                              <div class="container-fluid">
                                  <div class="row">
                                          <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                              <span class="clr-white weight-600 block counter"><span>{{pembelian + perdin | currency}}</span></span>
                                              <span class="weight-400 block font-12 clr-white">Total Pengeluaran</span>
                                          </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="clearfix"></div>
              <br>
              <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="card-info mtm-25" style="background-image: linear-gradient(to left bottom, #fbeaff, #ffe1f1, #ffdadf, #ffd5cb, #f8d3b9, #ebd5af, #d8d8ac, #c2dbaf, #aadfbd, #92e2d2, #81e2ea, #80e0ff);">
                          <div class="sm-data-box">
                              <div class="container-fluid">
                                  <div class="row">
                                      <div class="col-xs-6 pl-0 pr-0 data-wrap-left">
                                          <span class="clr-white weight-600 block counter"><span>{{tr_penagmst + tr_penagnonmst + tr_migrasi + tr_outstanding + tr_outstandingnonmst + tr_voucher + tr_penagmst_regis + tr_penagnonmst_regis - pembelian - perdin | currency}}</span></span>
                                          <span class="weight-400 block font-14 clr-white">Pendapatan</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row mt-25">
                  <div class="col-lg-12 col-md-7 col-sm-12 col-xs-12">
                      <div class="panel panel-default card-view panel-refresh">
                          <div class="refresh-container">
                              <div class="la-anim-1"></div>
                          </div>
                          <div class="panel-heading">
                              <div class="pull-left">
                                  <h6 class="panel-title txt-light">Grafik Pembayaran</h6>
                              </div>
                              <div class="clearfix"></div>
                          </div>
                          <div class="panel-wrapper collapse in">
                              <div class="table-wrap">
                                  <GChart type="ColumnChart" :data="[     
                                      ['Bulan', 'Pembayaran', 'Tunggakan'],
                                      ['Januari',grajan,grajandua],
                                      ['Februari', grafeb,grafebdua],
                                      ['Maret', gramar,gramardua],
                                      ['April', graapr, graaprdua],
                                      ['Mei', gramei,grameidua],
                                      ['Juni', grajun,grajundua],
                                      ['Juli', grajul,grajuldua],
                                      ['Agustus', graagu,graagudua],
                                      ['September', grasep,grasepdua],
                                      ['Oktober', graokt,graoktdua],
                                      ['November', granov,granovdua],
                                      ['Desember', grades,gradesdua]
                                      ]" :options="chartOptions" />
                              </div>
                              <!-- <div class="panel-body row pa-0">
                          </div> -->
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row mt-25">
                  <div class="col-lg-6 col-md-7 col-sm-12 col-xs-12">
                      <div class="row">
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div class="card-info">
                                  <div class="sm-data-box">
                                      <div class="container-fluid">
                                        <router-link to="/pelanggan_2">
                                          <div class="row">
                                                  <div class="col-xs-8 pl-0 pr-0 data-wrap-left">
                                                      <span class="clr-butek weight-600 block counter"><span>{{jumlah_pelanggan}}</span></span>
                                                      <span class="weight-400 block font-14 clr-grey">Pelanggan Aktif</span>
                                                  </div>
                                                  <div class="col-xs-4 pl-0 pr-0 pt-25  data-wrap-right" align="right">
                                                      <img src="../../public/img/icon/aktif.svg" width="50" alt="">
                                                  </div>
                                          </div>
                                        </router-link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div class="card-info">
                                  <div class="sm-data-box">
                                      <div class="container-fluid">
                                        <router-link to="/total_penagihan_regis">
                                          <div class="row">
                                                  <div class="col-xs-8 pl-0 pr-0 data-wrap-left">
                                                      <span class="clr-butek weight-600 block counter"><span>{{filterpelanggan.length}}</span></span>
                                                      <span class="weight-400 block font-14 clr-grey">Pelanggan Baru</span>
                                                  </div>
                                                  <div class="col-xs-4 pl-0 pr-0 pt-25  data-wrap-right" align="right">
                                                      <img src="../../public/img/icon/aktif.svg" width="50" alt="">
                                                  </div>
                                          </div>
                                        </router-link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row mt-25">
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div class="card-info">
                                  <div class="sm-data-box">
                                      <div class="container-fluid">
                                        <router-link to="/pelanggan_nonaktif">
                                          <div class="row">
                                                  <div class="col-xs-8 pl-0 pr-0 data-wrap-left">
                                                      <span class="clr-butek weight-600 block counter"><span>{{pelanggan_nonaktif}}</span></span>
                                                      <span class="weight-400 block font-14 clr-grey">Pelanggan Non-Aktif</span>
                                                  </div>
                                                  <div class="col-xs-4 pl-0 pr-0 pt-25  data-wrap-right" align="right">
                                                      <img src="../../public/img/icon/aktif.svg" width="50" alt="">
                                                  </div>
                                          </div>
                                        </router-link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div class="card-info">
                                  <div class="sm-data-box">
                                      <div class="container-fluid">
                                        <router-link to="/pelanggan_putus">
                                          <div class="row">
                                                  <div class="col-xs-8 pl-0 pr-0 data-wrap-left">
                                                      <span class="clr-butek weight-600 block counter"><span>{{pelanggan_putus}}</span></span>
                                                      <span class="weight-400 block font-14 clr-grey">Pelanggan Putus</span>
                                                  </div>
                                                  <div class="col-xs-4 pl-0 pr-0 pt-25  data-wrap-right" align="right">
                                                      <img src="../../public/img/icon/aktif.svg" width="50" alt="">
                                                  </div>
                                          </div>
                                        </router-link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row mt-25">
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div class="card-info">
                                  <div class="sm-data-box">
                                      <div class="container-fluid">
                                        <router-link to="/alat">
                                          <div class="row">
                                                  <div class="col-xs-8 pl-0 pr-0 data-wrap-left">
                                                      <span class="clr-butek weight-600 block counter"><span>{{M_item_alat}}</span></span>
                                                      <span class="weight-400 block font-14 clr-grey">Alat</span>
                                                  </div>
                                                  <div class="col-xs-4 pl-0 pr-0 pt-25  data-wrap-right" align="right">
                                                      <img src="../../public/img/icon/aktif.svg" width="50" alt="">
                                                  </div>
                                          </div>
                                        </router-link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div class="card-info">
                                  <div class="sm-data-box">
                                      <div class="container-fluid">
                                        <router-link to="trcomplain_selesai">
                                          <div class="row">
                                                  <div class="col-xs-8 pl-0 pr-0 data-wrap-left">
                                                      <span class="clr-butek weight-600 block counter"><span>{{complainbelum}}</span></span>
                                                      <span class="weight-400 block font-14 clr-grey">Complain</span>
                                                  </div>
                                                  <div class="col-xs-4 pl-0 pr-0 pt-25  data-wrap-right" align="right">
                                                      <img src="../../public/img/icon/aktif.svg" width="50" alt="">
                                                  </div>
                                          </div>
                                        </router-link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6 col-md-7 col-sm-12 col-xs-12">
                      <div class="panel panel-default card-view panel-refresh">
                          <div class="refresh-container">
                              <div class="la-anim-1"></div>
                          </div>
                          <div class="panel-heading">
                              <div class="pull-left">
                                  <h6 class="panel-title txt-light">List Teknisi</h6>
                              </div>
                              <div class="clearfix"></div>
                          </div>
                          <div class="panel-wrapper collapse in">
                              <div class="table-wrap">
                                  <div class="table-responsive">
                                      <table class="table table-hover table-striped mb-0">
                                          <thead>
                                              <tr>
                                                  <th>No</th>
                                                  <th>Nama</th>
                                                  <th>No telepon</th>
                                                  <th>Aksi</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr v-for=" (com,index) in complainpenanganan" v-bind:key="com._id">
                                                  <td>{{index + 1}}</td>
                                                  <td>{{com.pengguna_nama}}</td>
                                                  <td>{{com.pengguna_no_telepon}}</td>
                                                  <td>
                                                  <div class="pull-right">
                                                          <div class="dropdown  pull-left">
                                                              <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                                  <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                              </a>
                                                              <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                                  <li role="presentation">
                                                                      <router-link :to="{name:'list_kegiatan_pegawai',params:{id:com._id , domain : com.pengguna_domain}}"><i class="icon wb-share" aria-hidden="true"></i>Detail / List-Kegiatan</router-link>
                                                                  </li>
                                                              </ul>
                                                          </div>
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
              <footer class="footer container-fluid pl-30 pr-30">
                  <div class="row">
                      <div class="col-sm-12">
                          <p></p>
                      </div>
                  </div>
              </footer>
              <!-- /Footer -->
          </div>
      </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { GChart } from 'vue-google-charts'
import axios from 'axios'
import moment from 'moment'
export default {
  components: {
      GChart
  },
  name: 'home',
  data() {
      return {
          chartOptions: {
              chart: {
                  title: 'Pembayaran Pelanggan',
                  subtitle: 'Pembayaran pelanggan dinamis tahunnya ',
              }
          },
          //grafik
          grajan : 0,
          grajandua : 0,
          grafeb : 0,
          grafebdua : 0,
          gramar : 0,
          gramardua : 0,
          graapr : 0,
          graaprdua : 0,
          gramei : 0,
          grameidua : 0,
          grajun : 0,
          grajundua : 0,
          grajul : 0,
          grajuldua : 0,
          graagu : 0,
          graagudua : 0,
          grasep : 0,
          grasepdua : 0,
          graokt : 0,
          graoktdua : 0,
          granov : 0,
          granovdua : 0,
          grades : 0,
          gradesdua : 0,
          jumlah_pelanggan: 0,
          M_item_alat : 0,
          pelanggan_putus: 0,
          pelanggan_nonaktif: 0,
          complainbelum : '0',
          // ----
          tr_penagmst : 0,
          tr_penagnonmst : 0,
          pelanggan_aktif : [],
          tr_penagmst_regis : 0,
          tr_penagnonmst_regis : 0,
          tr_migrasi : 0,
          tr_voucher : 0,
          tr_outstanding :0,
          tr_outstandingnonmst : 0,
          target_pembayaran : 0,
          data_grafik : 0,
          // Untuk mendapatkan data pembayaran bulan ini 
          pembelian: 0,
          perdin: 0,
          select_month : moment(new Date().toLocaleDateString('en-CA')).format('YYYY-MM'),
          complainpenanganan : []
          // ---- 

      }
  },
  mounted() {
      // Menghitung total DAri Collection
      this.getdatajumlahmigrasi()
      this.getdatajumlahvoucher()
      this.getdatajumlahoutstandingmst()
      this.getdatajumlahoutstandingnonmst()
      this.getdatajumlahtargetpembayaran()
      this.getdatabuatgrafik()
      // ----
      // Mendapatkan Data Object Dari collection 
      this.getpembelian();
      this.getdatajumlahnonmst();
      this.getdatajumlahmst();
      this.getdatajumlahnonmstregis();
      this.getdatajumlahmstregis();
      this.getperdin();
      //card
      this.getpelangganaktiv();
      this.getdataalat();
      this.getdatacomplainbelum();
      this.getdatajumlahpelnonaktif();
      this.getdatajumlahpelputus();
      this.getdatapenaganancomplain();
  },
  methods: {
      getdatajumlahnonmst() {
          axios.get(this.$API + '/Tr_penagihan/jumlahnonmst/type/domain/Y/' + this.$store.getters.domain)
              .then((response) => {
                  // console.log(response.data)
                  this.tr_penagnonmst = response.data[0].sum;
              });
      },
      // Untuk mendapatkan jumlah non Mst(bulanan)
      getdatajumlahmst() {
          axios.get(this.$API + '/Tr_penagihan/jumlahmst/type/domain/Y/' + this.$store.getters.domain)
              .then((response) => {
                  // console.log(response.data)
                  this.tr_penagmst = response.data[0].sum;
              });
      },
      //Unttuk mendapatkan jumlah mst(regis)
      getdatajumlahnonmstregis() {
          axios.get(this.$API + '/Tr_penagihan/jumlahnonmst/type/domain/R/' + this.$store.getters.domain)
              .then((response) => {
                  // console.log(response.data)
                  this.tr_penagnonmst_regis = response.data[0].sum;
              });
      },
      // Untuk mendapatkan jumlah non Mst(regis)
      getdatajumlahmstregis() {
          axios.get(this.$API + '/Tr_penagihan/jumlahmst/type/domain/R/' + this.$store.getters.domain)
              .then((response) => {
                  // console.log(response.data)
                  this.tr_penagmst_regis = response.data[0].sum;
              });
      },
      //Untuk mendapatkan jumlah migrasi
      getdatajumlahmigrasi() {
          axios.get(this.$API + '/konfirmasi_upgrade_pelanggan/jumlah/domain/' + this.$store.getters.domain)
              .then((response) => {
                  // console.log(response.data)
                  this.tr_migrasi = response.data[0].sum;
              });
      },
      //Untuk mendapatkan jumlah voucher
      getdatajumlahvoucher() {
          axios.get(this.$API + '/Tr_voucher/jumlah/domain/' + this.$store.getters.domain)
              .then((response) => {
                  // console.log(response.data)
                  this.tr_voucher = response.data[0].sum;
              });
      },
      //Untuk mendapatkan jumlah voucher
      getdatajumlahoutstandingmst() {
          axios.get(this.$API + '/Tr_penagihan/jumlahmst/type/domain/O/' + this.$store.getters.domain)
              .then((response) => {
                  // console.log(response.data)
                  this.tr_outstanding = response.data[0].sum;
              });
      },
      getdatajumlahoutstandingnonmst() {
          axios.get(this.$API + '/Tr_penagihan/jumlahnonmst/type/domain/O/' + this.$store.getters.domain)
              .then((response) => {
                  // console.log(response.data)
                  this.tr_outstandingnonmst = response.data[0].sum;
              });
      },
      getdatajumlahtargetpembayaran(){
          axios.get(this.$API + "/M_closing/domain/" + this.$store.getters.domain)
              .then((response) => {
                  
                  this.target_pembayaran = response.data.closing_tagihan.closing_target_akhir
                  //console.log("DATA" , response.data.closing_tagihan.closing_target_akhir)
          })
      },
      getdatabuatgrafik(){
          axios.get(this.$API + "/M_closing/all/domain/" + this.$store.getters.domain)
              .then((response) => {
                  
                  //this.data_grafik = response.data
                  const data =response.data
                  var year = new Date().getFullYear();
                  
                  for (let i = 0; i < data.length; i++) {
                      if (data[i].closing_tanggal.toLowerCase().includes(year + '-' + '01')===true) {
                          this.grajan = data[i].closing_tagihan.closing_pembayaran_bulanan
                          this.grajandua = data[i].closing_tagihan.closing_belum_membayar
                      }else if(data[i].closing_tanggal.toLowerCase().includes(year + '-' + '02')===true){
                          this.grafeb = data[i].closing_tagihan.closing_pembayaran_bulanan
                          this.grafebdua = data[i].closing_tagihan.closing_belum_membayar
                      }else if(data[i].closing_tanggal.toLowerCase().includes(year + '-' + '03')===true){
                          this.gramar = data[i].closing_tagihan.closing_pembayaran_bulanan
                          this.gramardua = data[i].closing_tagihan.closing_belum_membayar
                      }else if(data[i].closing_tanggal.toLowerCase().includes(year + '-' + '04')===true){
                          this.graapr = data[i].closing_tagihan.closing_pembayaran_bulanan
                          this.graaprdua = data[i].closing_tagihan.closing_belum_membayar
                      }else if(data[i].closing_tanggal.toLowerCase().includes(year + '-' + '05')===true){
                          this.gramei = data[i].closing_tagihan.closing_pembayaran_bulanan
                          this.grameidua = data[i].closing_tagihan.closing_belum_membayar
                      }else if(data[i].closing_tanggal.toLowerCase().includes(year + '-' + '06')===true){
                          this.grajun = data[i].closing_tagihan.closing_pembayaran_bulanan
                          this.grajundua = data[i].closing_tagihan.closing_belum_membayar
                      }else if(data[i].closing_tanggal.toLowerCase().includes(year + '-' + '07')===true){
                          this.grajul = data[i].closing_tagihan.closing_pembayaran_bulanan
                          this.grajuldua = data[i].closing_tagihan.closing_belum_membayar
                      }else if(data[i].closing_tanggal.toLowerCase().includes(year + '-' + '08')===true){
                          this.graagu = data[i].closing_tagihan.closing_pembayaran_bulanan
                          this.graagudua = data[i].closing_tagihan.closing_belum_membayar
                      }else if(data[i].closing_tanggal.toLowerCase().includes(year + '-' + '09')===true){
                          this.grasep = data[i].closing_tagihan.closing_pembayaran_bulanan
                          this.grasepdua = data[i].closing_tagihan.closing_belum_membayar
                      }else if(data[i].closing_tanggal.toLowerCase().includes(year + '-' + '10')===true){
                          this.graokt = data[i].closing_tagihan.closing_pembayaran_bulanan
                          this.graoktdua = data[i].closing_tagihan.closing_belum_membayar
                      }else if(data[i].closing_tanggal.toLowerCase().includes(year + '-' + '11')===true){
                          this.granov = data[i].closing_tagihan.closing_pembayaran_bulanan
                          this.granovdua = data[i].closing_tagihan.closing_belum_membayar
                      }else if(data[i].closing_tanggal.toLowerCase().includes(year + '-' + '12')===true){
                          this.grades = data[i].closing_tagihan.closing_pembayaran_bulanan
                          this.gradesdua = data[i].closing_tagihan.closing_belum_membayar
                      }else{
                          // "TIDAK ADA DATA"
                      }
                  }
                  //console.log("DATA" , response.data.closing_tagihan.closing_target_akhir)
          })
      },
      // Mendapatkan data Tr pembelian 
      getpembelian() {
          axios.get(this.$API + '/Tr_pembelian/total/domain/' + this.$store.getters.domain)
              .then((response) => {
                  //console.log(response.data);
                  this.pembelian = response.data[0].sum;
              })
      },
      // Mendapatkan data perjalanan dinas 
      getperdin() {
          axios.get(this.$API + '/Tr_perdin/get-list/total/domain/' + this.$store.getters.domain)
              .then((response) => {
                  //console.log(response.data);
                  this.perdin = response.data[0].sum;
              })
      },
      //card only
      getpelangganaktiv() {
          var domain = this.$store.getters.domain;
          axios.get(this.$API + '/M_pengguna/domain/pelanggan/' + domain)
              .then((response) => {
                  this.jumlah_pelanggan = response.data.length;
                  this.pelanggan_aktif= response.data;
              });
      },
      getdataalat() {
          axios.get(this.$API + '/M_item/domain/alat/' + this.$store.getters.domain)
              .then((response) => {
                  this.M_item_alat = response.data.length;
              });
      },
      getdatajumlahpelnonaktif(){
          var domain = this.$store.getters.domain;
          axios.get(this.$API + '/M_pengguna/domain/pelanggan/real-nonaktif/' +  domain)
              .then((response) => {
                  this.pelanggan_nonaktif = response.data.length;
              });
          
      },
      getdatajumlahpelputus(){
          var domain = this.$store.getters.domain;
          axios.get(this.$API + '/M_pengguna/domain/pelanggan/nonaktif/' +  domain)
              .then((response) => {
                  this.pelanggan_putus = response.data.length;
              });
      },
      getdatacomplainbelum(){
          var domain = this.$store.getters.domain;
          axios.get(this.$API + '/Tr_complain/domain/complain_jumlah/' +  domain)
              .then((response) => {
                  this.complainbelum = response.data;
              });
      },
      getdatapenaganancomplain(){
          
          var domain = this.$store.getters.domain;
          axios.get(this.$API + '/M_pengguna/domain/pegawai-group/' + domain+ '/Tukang')
              .then((response) => {
                  this.complainpenanganan = response.data;
              });
      }
  },
  computed : {
    filterpelanggan: function() {
        return this.pelanggan_aktif.filter(pelanggan => {
            var select_month = pelanggan.pengguna_tanggal_pemasangan.toLowerCase().includes(this.select_month.toLowerCase());

            return select_month;
            // console.log(this.M_pengguna[0]);
        });
    },
  }

};
</script>
