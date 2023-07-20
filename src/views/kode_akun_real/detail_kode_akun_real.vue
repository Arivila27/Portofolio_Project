<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6 class="txt-light">Detail kode akun</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-wrap">
                                                <form class="form-horizontal" role="form">
                                                    <div class="form-body">
                                                        <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data</h6>
                                                        <hr class="light-grey-hr" />
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-3">Kode akun:</label>
                                                                    <div class="col-md-9">
                                                                        <p class="form-control-static">{{detail.kode_akun}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-3">Nama:</label>
                                                                    <div class="col-md-9">
                                                                        <p class="form-control-static">{{detail.kode_akun_nama}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-3">Subklasifikasi:</label>
                                                                    <div class="col-md-9">
                                                                        <p class="form-control-static">{{detail.kode_akun_subklasifikasi}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-3">Status:</label>
                                                                    <div class="col-md-9">
                                                                        <p class="form-control-static">{{detail.kode_status}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-3">Dibuat:</label>
                                                                    <div class="col-md-9">
                                                                        <p class="form-control-static">{{detail.kode_akun_created}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-3">Diupdate:</label>
                                                                    <div class="col-md-9">
                                                                        <p class="form-control-static">{{detail.kode_akun_updated}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-3">Dibuat oleh:</label>
                                                                    <div class="col-md-9">
                                                                        <p class="form-control-static">{{detail.kode_akun_user_created}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    <div class="seprator-block"></div>
                                                    </div>
                                                </form>
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
export default {
    data(){
        return {
            detail:{}
        }
    },
    created(){
        this.getdata()
    },
    methods:{
        getdata(){
            axios.get(API + `/M_kode_akun/${this.$route.params.id}`)
            .then((response) =>{
                console.log(response.data);
                this.detail = response.data
            });
        }
    }
};
</script>