<template>
    <div class="fixed-sidebar-left">
        <ul class="nav navbar-nav side-nav nicescroll-bar bg-butek">
            <li class="navigation-header">
                <span>Main</span>
                <i class="zmdi zmdi-more"></i>
            </li>
            <li>
                <router-link to="/dashboard" data-toggle="collapse">
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
                    <div class="pull-left"><i class="zmdi zmdi-accounts-list mr-20"></i><span class="right-nav-text">Pengguna</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/item" data-toggle="collapse" data-target="#form_dr">
                    <div class="pull-left"><i class="zmdi zmdi-storage mr-20"></i><span class="right-nav-text">Aset</span></div>
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
            <li>
                <router-link to="/trkasbank" data-toggle="collapse" data-target="#tagihan">
                    <div class="pull-left"><i class="zmdi zmdi-money mr-20"></i><span class="right-nav-text">Kas&Bank</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
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
                <router-link to="/trinventori" data-toggle="collapse" data-target="#inventori">
                    <div class="pull-left"><i class="zmdi zmdi-group mr-20"></i><span class="right-nav-text">Inventori</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <a data-toggle="collapse" data-target="#pages_dr">
                    <div class="pull-left"><i class="zmdi zmdi-google-pages mr-20"></i><span class="right-nav-text">Transaksi</span></div>
                    <div class="pull-right"><i class="zmdi zmdi-caret-down"></i></div>
                    <div class="clearfix"></div>
                </a>
                <ul id="pages_dr" class="collapse collapse-level-1 two-col-list">
                    <li>
                        <router-link to="/membeli">
                            <p>Pembelian</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li>
                <router-link to="/report" data-toggle="collapse" data-target="#inventori">
                    <div class="pull-left"><i class="zmdi zmdi-reader mr-20"></i><span class="right-nav-text">Report</span></div>
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