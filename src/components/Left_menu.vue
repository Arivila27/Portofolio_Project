<template>
    <div class="fixed-sidebar-left">
        <ul class="nav navbar-nav side-nav nicescroll-bar bg-butek">
            <li class="navigation-header">
                <span>Main</span>
                <i class="zmdi zmdi-more"></i>
            </li>
            <li v-if="$store.getters.role === 'Tukang'">
                <router-link to="/dashboard"  data-toggle="collapse" data-target="#dashboard_dr">
                    
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
                <router-link to="/user" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-accounts-list mr-20"></i><span class="right-nav-text">Pelanggan</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/item" data-toggle="collapse" data-target="#form_dr">
                    <div class="pull-left"><i class="zmdi zmdi-storage mr-20"></i><span class="right-nav-text">Item</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/jadwal_kerja" data-toggle="collapse" data-target="#table_dr">
                    <div class="pull-left"><i class="zmdi zmdi-calendar-note mr-20"></i><span class="right-nav-text">Jadwal Kerja</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/tunjangan" data-toggle="collapse" data-target="#icon_dr">
                    <div class="pull-left"><i class="zmdi zmdi-trending-up mr-20"></i><span class="right-nav-text">Tunjangan</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
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
                <router-link to="/trabsensi" data-toggle="collapse" data-target="#absensi">
                    <div class="pull-left"><i class="zmdi zmdi-group mr-20" /><span class="right-nav-text">Absensi</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/dashboard_complain" data-target="#complain">
                    <div class="pull-left"><i class="zmdi zmdi-check-circle mr-20" /><span class="right-nav-text">Complain</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/trinventori" data-toggle="collapse" data-target="#inventori">
                    <div class="pull-left"><i class="zmdi zmdi-group mr-20" /><span class="right-nav-text">Inventori</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li></li>
            <li>
                <a data-toggle="collapse" data-target="#pages_dr">
                    <div class="pull-left"><i class="zmdi zmdi-google-pages mr-20" /><span class="right-nav-text">Transaksi</span></div>
                    <div class="pull-right"><i class="zmdi zmdi-caret-down" /></div>
                    <div class="clearfix"></div>
                </a>
                <ul id="pages_dr" class="collapse collapse-level-1 two-col-list">
                    <li>
                        <router-link to="/invoice">
                            <p>Invoice</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/pembelian">
                            <p>Pembelian</p>
                        </router-link>
                    </li>
                    <li>    
                        <router-link to="/penjualan">
                            <p>Penjualan</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/penagihan" data-toggle="collapse" data-target="#tagihan">
                            <div class="pull-left"><i class="zmdi zmdi-money-off mr-20"></i><span class="right-nav-text">Penagihan</span></div>
                            <div class="pull-right"></div>
                            <div class="clearfix"></div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/penagihan_bulanan" data-toggle="collapse" data-target="#tagihan">
                            <div class="pull-left"><i class="zmdi zmdi-money-off mr-20"></i><span class="right-nav-text">Penagihan Bulanan</span></div>
                            <div class="pull-right"></div>
                            <div class="clearfix"></div>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li>
                <router-link to="/report">
                    <div class="pull-left"><i class="zmdi zmdi-reader mr-20" /><span class="right-nav-text">Laporan</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
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
    }
};
</script>