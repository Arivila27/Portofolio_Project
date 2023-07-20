<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Edit Transfer Tunai</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="editTransfer">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-6">
                                                        <label for="">Divisi</label>
                                                        <select class="form-control" v-model="transfer.transfer_divisi">
                                                            <option v-for="dpr in departmen" :key="dpr._id">{{dpr.pembantu_departmen_nama}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">No Referensi</label>
                                                        <input type="text" class="form-control" v-model="transfer.transfer_no">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Dari akun</label>
                                                        <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="kode_akun_nama" track-by="_id" :options="akun" :taggable="true" v-model="transfer.transfer_pengirim"></multiselect>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Ke akun</label>
                                                        <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="kode_akun_nama" track-by="_id" :options="akun"  :taggable="true" v-model="transfer.transfer_penerima"></multiselect>
                                                    </div> 
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="">Tanggal</label>
                                                        <input type="date" class="form-control" v-model="transfer.transfer_tanggal">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">Status Aktiv</label>
                                                        <select id="inputState" class="form-control" v-model="transfer.transfer_status_aktiv">
                                                            <option selected>Choose...</option>
                                                            <option value="Tuntas">Tuntas</option>
                                                            <option value="Belum">Belum</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="">Nominal</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" v-model="transfer.transfer_nominal"></vue-numeric>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="">Deskripsi</label>
                                                        <textarea  cols="5" rows="5" class="form-control" v-model="transfer.transfer_deskripsi"></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Update</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/transfer">
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
import API from '../../../../api.config'
export default {
    components:{Multiselect},
    data(){
        return{
            pengguna:[],
            akun:[],
            departmen:[],
            project:[],
            transfer:{}
        }
    },
    created(){
        this.getakun()
        this.getdepartmen()
        this.getdetail()
    },
    methods:{
        getdetail(){
            axios.get(API + `/Tr_transfer/${this.$route.params.id}`)
            .then((response) =>{
                this.transfer = response.data
            });
        },
        editTransfer(){
            let newtransfer = {
                transfer_divisi:this.transfer.transfer_divisi,
                transfer_no:this.transfer.transfer_no,
                transfer_penerima:this.transfer.transfer_penerima,
                transfer_pengirim:this.transfer.transfer_pengirim,
                transfer_tanggal:this.transfer.transfer_tanggal,
                transfer_status_aktiv:this.transfer.transfer_status_aktiv,
                transfer_nominal:this.transfer.transfer_nominal,
                transfer_deskripsi:this.transfer.transfer_deskripsi,
                transfer_updated:new Date().toISOString().slice(0, 10)
            }
            axios.put(API + `/Tr_transfer/${this.$route.params.id}`,newtransfer)
            .then(() =>{
                this.$swal('Berhasil','Berhasil mengupdate data','success');
                this.$router.push({name:'transfer'})
            });
        },
        getakun(){
            axios.get(API + '/M_kode_akun')
            .then((response) =>{
                this.akun = response.data;
            });
        },
        getdepartmen(){
            axios.get(API + '/pembantu_departmen')
            .then((response) =>{
                this.departmen = response.data
            });
        }
    },
    computed:{
        CreatedBy:function(){
            return this.$store.getters.username
        }
    }
};
</script>