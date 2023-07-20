<template>
    <div class="fixed-sidebar-left">
        <ul v-if="$store.getters.role === 'Marketing'" class="nav navbar-nav side-nav nicescroll-bar bg-butek">
            <li class="navigation-header">
                <span>Main</span>
                <i class="zmdi zmdi-more"></i>
            </li>
            <li>
                <router-link to="/dashboard" data-toggle="collapse" data-target="#dashboard_dr">
                    <div class="pull-left"><i class="zmdi zmdi-landscape mr-20"></i><span class="right-nav-text">Dashboard</span></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <hr class="light-grey-hr mb-10" />
            </li>
            <li class="navigation-header">
                <span>Master Data</span>
                <i class="zmdi zmdi-more"></i>
            </li>
            <!-- <li>
                <router-link to="/saldo" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-money mr-20"></i><span class="right-nav-text">Saldo</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li> -->
            <li>
                <router-link to="/dashboard_data" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-star-circle mr-20"></i><span class="right-nav-text">Data Input</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/list_wd" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-money mr-20"></i><span class="right-nav-text">Pengajuan Withdrawal</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/daerah" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-satellite mr-20"></i><span class="right-nav-text">Daerah</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
             <li>
                <router-link to="/host" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-satellite mr-20"></i><span class="right-nav-text">Host</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/divisi" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-city mr-20"></i><span class="right-nav-text">Divisi</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/list_harga" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-money-box mr-20"></i><span class="right-nav-text">Harga</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/kode_akun" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-accounts-list mr-20"></i><span class="right-nav-text">Tipe Cash</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/kode_akun_real" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-accounts-list mr-20"></i><span class="right-nav-text">Kode Akun</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/user" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-accounts-list mr-20"></i><span class="right-nav-text">Pengguna</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <a data-toggle="collapse" data-target="#pages_dr">
                    <div class="pull-left"><i class="zmdi zmdi-google-pages mr-20" /><span class="right-nav-text">Aset</span></div>
                    <div class="pull-right"><i class="zmdi zmdi-caret-down" /></div>
                    <div class="clearfix"></div>
                </a>
                <ul id="pages_dr" class="collapse collapse-level-1 two-col-list">
                    <li>
                        <router-link to="/produk" data-toggle="collapse" data-target="#tagihan">
                            <p>Produk</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/barang_biasa" data-toggle="collapse" data-target="#tagihan">
                            <p>Barang Kantor</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/project" data-toggle="collapse" data-target="#tagihan">
                            <p>Proyek</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/alat" data-toggle="collapse" data-target="#tagihan">
                            <p>Alat</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li>
                <hr class="light-grey-hr mb-10" />
            </li>
            <li class="navigation-header">
                <span>Transaksi</span>
                <i class="zmdi zmdi-more"></i>
            </li>
            <li></li>
            <li>
                <router-link to="/dashboard_complain" data-target="#complain">
                    <div class="pull-left"><i class="zmdi zmdi-check-circle mr-20" /><span class="right-nav-text">Complain</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li></li>
            <li>
                <a data-toggle="collapse" data-target="#pages_tr">
                    <div class="pull-left"><i class="zmdi zmdi-google-pages mr-20" /><span class="right-nav-text">Transaksi</span></div>
                    <div class="pull-right"><i class="zmdi zmdi-caret-down" /></div>
                    <div class="clearfix"></div>
                </a>
                <ul id="pages_tr" class="collapse collapse-level-1 two-col-list">
                    <li>
                        <router-link to="/konfirmasi_upgrade_paket">
                            <p>Konfirmasi Upgrade(Paket)</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/voucher">
                            <p>Voucher</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/membeli">
                            <p>Pembelian</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/perjalanan_dinas">
                            <p>Perjalanan Dinas</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/penagihan" data-toggle="collapse" data-target="#tagihan">
                            <p>Pembayaran</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/invoice" data-toggle="collapse" data-target="#tagihan">
                            <p>Invoice</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/trkasbank" data-toggle="collapse" data-target="#tagihan">
                            <p>Kas & Bank</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li>
                <a data-toggle="collapse" data-target="#pages_report">
                    <div class="pull-left"><i class="zmdi zmdi-google-pages mr-20" /><span class="right-nav-text">Laporan</span></div>
                    <div class="pull-right"><i class="zmdi zmdi-caret-down" /></div>
                    <div class="clearfix"></div>
                </a>
                <ul id="pages_report" class="collapse collapse-level-1 two-col-list">
                    <li>
                        <router-link to="/report_pelanggan">
                            <p>Pelanggan</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/report_pembayaran">
                            <p>Pembayaran</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/report_pemasangan_baru" data-toggle="collapse" data-target="#tagihan">
                            <p>Pemasangan baru(Coming soon)</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/trkasbank" data-toggle="collapse" data-target="#tagihan">
                            <p>Coming Soon</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/report_mybitniaga" data-toggle="collapse" data-target="#tagihan">
                            <p>Laporan Aplikasi</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <!-- <li v-show="getdomain === '1'">
                <a data-toggle="collapse" data-target="#pages_lr">
                    <div class="pull-left"><i class="zmdi zmdi-google-pages mr-20" /><span class="right-nav-text">Laporan Mybitniaga</span></div>
                    <div class="pull-right"><i class="zmdi zmdi-caret-down" /></div>
                    <div class="clearfix"></div>
                </a>
                <ul id="pages_lr" class="collapse collapse-level-1 two-col-list">
                    <li>
                        <router-link to="/report_laporan_va_bca">
                            <p>VA BCA</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/penagihan" data-toggle="collapse" data-target="#tagihan">
                            <p>MST(Indomaret)</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/invoice" data-toggle="collapse" data-target="#tagihan">
                            <p>Midtrans</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/trkasbank" data-toggle="collapse" data-target="#tagihan">
                            <p>Pelanggan Terdaftar </p>
                        </router-link>
                    </li>
                </ul>
            </li> -->
        </ul>
        <ul v-else class="nav navbar-nav side-nav nicescroll-bar bg-butek">
            <li class="navigation-header">
                <span>Main</span>
                <i class="zmdi zmdi-more"></i>
            </li>
            <li>
                <router-link to="/Home_noc" data-toggle="collapse" data-target="#dashboard_dr">
                    <div class="pull-left"><i class="zmdi zmdi-landscape mr-20"></i><span class="right-nav-text">Dashboard</span></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <hr class="light-grey-hr mb-10" />
            </li>
            <li class="navigation-header">
                <span>Master Data</span>
                <i class="zmdi zmdi-more"></i>
            </li>
            <li>
                <router-link to="/daerah" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-satellite mr-20"></i><span class="right-nav-text">Daerah</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/divisi" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-city mr-20"></i><span class="right-nav-text">Divisi</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/list_harga" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-money-box mr-20"></i><span class="right-nav-text">Harga</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/user" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-accounts-list mr-20"></i><span class="right-nav-text">Pengguna</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <a data-toggle="collapse" data-target="#pages_dr">
                    <div class="pull-left"><i class="zmdi zmdi-google-pages mr-20" /><span class="right-nav-text">Aset</span></div>
                    <div class="pull-right"><i class="zmdi zmdi-caret-down" /></div>
                    <div class="clearfix"></div>
                </a>
                <ul id="pages_dr" class="collapse collapse-level-1 two-col-list">
                    <li>
                        <router-link to="/produk" data-toggle="collapse" data-target="#tagihan">
                            <p>Produk</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/barang_biasa" data-toggle="collapse" data-target="#tagihan">
                            <p>Barang Kantor</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/project" data-toggle="collapse" data-target="#tagihan">
                            <p>Proyek</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/alat" data-toggle="collapse" data-target="#tagihan">
                            <p>Alat</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li>
                <hr class="light-grey-hr mb-10" />
            </li>
            <li class="navigation-header">
                <span>Transaksi</span>
                <i class="zmdi zmdi-more"></i>
            </li>
            <li></li>
            <li>
                <router-link to="/dashboard_complain" data-target="#complain">
                    <div class="pull-left"><i class="zmdi zmdi-check-circle mr-20" /><span class="right-nav-text">Complain</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li></li>
            <li>
                <a data-toggle="collapse" data-target="#pages_tr">
                    <div class="pull-left"><i class="zmdi zmdi-google-pages mr-20" /><span class="right-nav-text">Transaksi</span></div>
                    <div class="pull-right"><i class="zmdi zmdi-caret-down" /></div>
                    <div class="clearfix"></div>
                </a>
                <ul id="pages_tr" class="collapse collapse-level-1 two-col-list">
                    <li>
                        <router-link to="/konfirmasi_upgrade_paket">
                            <p>Konfirmasi Upgrade(Paket)</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/voucher">
                            <p>Voucher</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/membeli">
                            <p>Pembelian</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/perjalanan_dinas">
                            <p>Perjalanan Dinas</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/penagihan" data-toggle="collapse" data-target="#tagihan">
                            <p>Pembayaran</p>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            auth: false
        }
    },
    computed: {
        getdomain: function() {
            return this.$store.getters.domain;
        }
    }
};
</script>