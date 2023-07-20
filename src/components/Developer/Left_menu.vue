<template>
    <div class="fixed-sidebar-left">
        <ul class="nav navbar-nav side-nav nicescroll-bar bg-butek">
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
                <span>Log Data</span>
                <i class="zmdi zmdi-more"></i>
            </li>
            <li>
                <a data-toggle="collapse" data-target="#pages_dr">
                    <div class="pull-left"><i class="zmdi zmdi-google-pages mr-20" /><span class="right-nav-text">Log</span></div>
                    <div class="pull-right"><i class="zmdi zmdi-caret-down" /></div>
                    <div class="clearfix"></div>
                </a>
                <ul id="pages_dr" class="collapse collapse-level-1 two-col-list">
                    <li>
                        <router-link to="/log_pembayaran">
                            <p>Pembayaran</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/log_pendaftaran" data-toggle="collapse" data-target="#tagihan">
                            <p>Pendaftaran</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/log_topup" data-toggle="collapse" data-target="#tagihan">
                            <p>Top-Up</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/log_complain" data-toggle="collapse" data-target="#tagihan">
                            <p>Komplain</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li>
                <hr class="light-grey-hr mb-10" />
            </li>
            <li class="navigation-header">
                <span>Master Data(Masih Proses)</span>
                <i class="zmdi zmdi-more"></i>
            </li>
            <li></li>
            <li>
                <router-link to="/mybitniaga_transaksi" data-target="#complain">
                    <div class="pull-left"><i class="zmdi zmdi-check-circle mr-20" /><span class="right-nav-text">Transaksi</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/mybitniaga_mpembayaran" data-toggle="collapse" data-target="#inventori">
                    <div class="pull-left"><i class="zmdi zmdi-group mr-20" /><span class="right-nav-text">mpembayaran</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/mybitniaga_topup" data-toggle="collapse" data-target="#inventori">
                    <div class="pull-left"><i class="zmdi zmdi-group mr-20" /><span class="right-nav-text">Topup</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/mybitniaga_mgroup" data-toggle="collapse" data-target="#inventori">
                    <div class="pull-left"><i class="zmdi zmdi-group mr-20" /><span class="right-nav-text">mgroup</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/mybitniaga_saldo" data-toggle="collapse" data-target="#inventori">
                    <div class="pull-left"><i class="zmdi zmdi-group mr-20" /><span class="right-nav-text">Saldo(Rahasia)</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li></li>
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