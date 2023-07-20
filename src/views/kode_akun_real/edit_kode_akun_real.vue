<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6 class="txt-light">Edit kode akun</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="editData">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Kode</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="akun.kode_akun">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Nama</label>
                                                        <input type="text" class="form-control" v-model="akun.kode_akun_nama">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Subklasifikasi</label>
                                                        <input type="text" class="form-control" v-model="akun.kode_akun_subklasifikasi">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="inputState">Status Aktiv</label>
                                                        <select id="inputState" class="form-control" v-model="akun.kode_akun_status">
                                                            <option selected>Choose...</option>
                                                            <option value="Aktiv">Aktiv</option>
                                                            <option value="Nonaktif">Nonaktif</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="clearfix"></div>
                                                <h6 class="txt-dark capitalize-font">&nbsp;</h6>
                                                <hr class="light-grey-hr" />
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Edit</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/kode_akun">
                                                            Kembali
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-footer">
                                    </div>
                                </form>
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
            akun:{}
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
                this.akun = response.data;
            })
        },
        editData(){
            let newKode = {
                kode_akun:this.akun.kode_akun,
                kode_akun_nama:this.akun.kode_akun_nama,
                kode_akun_subklasifikasi:this.akun.kode_akun_subklasifikasi,
                kode_akun_status:this.akun.kode_akun_status,
                kode_akun_updated:new Date().toISOString().slice(0, 10)
            }
            axios.put(API + `/M_kode_akun/${this.$route.params.id}`, newKode)
            .then(() =>{
                this.$swal('Berhasil','Berhasil mengupdate data','success');
                this.$router.push({name:'kode_akun'});
            });
        }
    }
};
</script>