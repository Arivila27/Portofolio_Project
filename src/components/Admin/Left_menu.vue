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
                <span>Master Data</span>
                <i class="zmdi zmdi-more"></i>
            </li>
            <li>
                <router-link to="/tambah_admin" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-flower-alt mr-20"></i><span class="right-nav-text">Tambah-Admin-Cabang</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/list_wd" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-money mr-20"></i><span class="right-nav-text">Pengajuan WD</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/domain" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-balance mr-20"></i><span class="right-nav-text">Domain</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <router-link to="/master_id" data-toggle="collapse" data-target="#ui_dr">
                    <div class="pull-left"><i class="zmdi zmdi-accounts-outline mr-20"></i><span class="right-nav-text">Master ID(Cabang)</span></div>
                    <div class="pull-right"></div>
                    <div class="clearfix"></div>
                </router-link>
            </li>
            <li>
                <hr class="light-grey-hr mb-10" />
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