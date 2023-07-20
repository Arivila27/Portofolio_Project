<template>
    <div class="fixed-sidebar-left">
        <ul class="nav navbar-nav side-nav nicescroll-bar bg-butek">
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
                <router-link to="/ip" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-gps-dot mr-20"></i><span class="right-nav-text">Cek IP</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/host" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-storage mr-20"></i><span class="right-nav-text">Host</span></div>
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
            <!-- <li>
                <router-link to="/item" data-toggle="collapse" data-target="#form_dr">
                    <div class="pull-left"><i class="zmdi zmdi-storage mr-20"></i><span class="right-nav-text">Aset</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li> -->
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
            <!-- <li>
                <router-link to="/trinventori" data-toggle="collapse" data-target="#inventori">
                    <div class="pull-left"><i class="zmdi zmdi-group mr-20" /><span class="right-nav-text">Inventori</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li> -->
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