<template>
    <div class="Top_menu">
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="mobile-only-brand pull-left">
                <div id="complogo" class="nav-header pull-left">
                    <div class="logo-wrap">
                        <a href="#">
                            <img class="brand-img" src="../../public/logo.png" alt="lg" />
                            <span class="brand-text">BITNIAGA</span>
                        </a>
                    </div>
                </div>
                <a id="toggle_nav_btn" class="toggle-left-nav-btn inline-block ml-20 pull-left" href="javascript:void(0);"><i class="zmdi zmdi-menu"></i></a>
                <!-- <span class="inline-block ml-20 pull-left" style="position: relative">Bitniaga Pusat</span> -->
                <div class="inline-block ml-20 pull-left" style="padding: 22px 0">Bitniaga Pusat</div>
                <!-- <a id="toggle_mobile_search" data-toggle="collapse" data-target="#search_form" class="mobile-only-view" href="javascript:void(0);"><i class="zmdi zmdi-search"></i></a>
                <a id="toggle_mobile_nav" class="mobile-only-view" href="javascript:void(0);"><i class="zmdi zmdi-more"></i></a> -->
            </div>
            <div id="mobile_only_nav" class="mobile-only-nav pull-right">
                <ul class="nav navbar-right top-nav pull-right">        
                    <li class="dropdown alert-drp">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="zmdi zmdi-notifications top-nav-icon"></i><span class="top-nav-icon-badge">4</span></a>
                        <ul class="dropdown-menu alert-dropdown" data-dropdown-in="bounceIn" data-dropdown-out="bounceOut">
                            <li>
                                <div class="notification-box-head-wrap">
                                    <span class="notification-box-head pull-left inline-block">notifications</span>
                                    <a class="txt-danger pull-right clear-notifications inline-block" href="javascript:void(0)"> clear all </a>
                                    <div class="clearfix"></div>
                                    <hr class="light-grey-hr ma-0" />
                                </div>
                            </li>
                            <li>
                                <div class="streamline message-nicescroll-bar">
                                    <div v-for="(pngh,index) in datapelanggan" :key="pngh._id">
                                        <div class="sl-item">
                                                <div class="icon bg-blue">
                                                    <i class="zmdi zmdi-email"></i>
                                                </div>
                                                <div class="sl-content">
                                                    <span class="inline-block capitalize-font  pull-left truncate head-notifications">{{pngh.penagihan_nama}} / {{pngh.penagihan_id_pengguna}}</span>
                                                    <span class="inline-block font-11  pull-right notifications-time">{{index}}</span>
                                                    <div class="clearfix"></div>
                                                    <p class="truncate">{{pngh.penagihan_paket.penagihan_paket_nama}} / {{pngh.penagihan_paket.penagihan_paket_harga}}</p>
                                                </div>
                                        </div>
                                    </div>
                                    <hr class="light-grey-hr ma-0" />
                                </div>
                            </li>
                            <li>
                                <router-link :to="{name:'laporan_harian',params:{jumlah: jumlah_pelanggan}}">
                                    <div class="notification-box-bottom-wrap">
                                        <hr class="light-grey-hr ma-0" />
                                        <span class="block text-center read-all"> read all </span>
                                        <div class="clearfix"></div>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown auth-drp">
                        <a href="#" class="dropdown-toggle pr-0" data-toggle="dropdown"><img src="../assets/user.png" alt="user_auth" class="user-auth-img img-circle" /><span class="user-online-status"></span></a>
                        <ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
                            <li >
                                <a href="#"><i class="zmdi zmdi-account"></i><span>{{username}}</span></a>
                            </li>
                            <li class="divider"></li>
                            <li @click="logout">
                                <a><i class="zmdi zmdi-power"></i><span>Log Out</span></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../api.config'
import moment from 'moment'
export default {
    data() {
        return {
            datapelanggan : [],
            jumlah_pelanggan : 0,
        }
    },
    created() {
        this.getdatapenagihan();
        this.getpelangganaktiv();
    },
    
    methods: {
        logout: function() {
            this.$store.dispatch("logout").then(() => {
                this.$swal("Berhasil","Berhasil Log-out","success");
                this.$router.push("/");
            });
        },
        getdatapenagihan: function() {
            axios.get(API + '/Tr_penagihan/domain/list-pelanggan/sudah-bayar/4/' + this.$store.getters.domain)
                .then((response) => {
                    this.datapelanggan = response.data;
                });
        },
        getpelangganaktiv() {
          var domain = this.$store.getters.domain;
          axios.get(this.$API + '/M_pengguna/domain/pelanggan/' + domain)
              .then((response) => {
                  this.jumlah_pelanggan = response.data.length;
              });
      },
    },
    computed:{
        username:function(){
            return this.$store.getters.username;
        }
    }
};
</script>
<style scoped>
.brand-img {
    width: 25px;
    height: 25px;
}
</style>
