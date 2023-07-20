<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Tambah Transfer Tunai</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="addtransfer">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-6">
                                                        <label for="">Divisi</label>
                                                        <select class="form-control" v-model="transfer.divisi">
                                                            <option v-for="dpr in departmen" :key="dpr._id">{{dpr.pembantu_departmen_nama}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">No Referensi</label>
                                                        <input type="text" class="form-control" v-model="transfer.no">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Dari akun</label>
                                                        <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="kode_akun_nama" track-by="_id" :options="akun" :taggable="true" v-model="transfer.pengirim"></multiselect>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Ke akun</label>
                                                        <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="kode_akun_nama" track-by="_id" :options="akun"  :taggable="true" v-model="transfer.penerima"></multiselect>
                                                    </div> 
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="">Tanggal</label>
                                                        <input type="date" class="form-control" v-model="transfer.tanggal">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">Status Aktiv</label>
                                                        <select id="inputState" class="form-control" v-model="transfer.status">
                                                            <option selected>Choose...</option>
                                                            <option value="Tuntas">Tuntas</option>
                                                            <option value="Belum">Belum</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="">Nominal</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" v-model="transfer.nominal"></vue-numeric>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="">Deskripsi</label>
                                                        <textarea  cols="5" rows="5" class="form-control" v-model="transfer.deskripsi"></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Tambah</button>
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
            transfer:{
                divisi:'',
                no:'',
                penerima:'',
                pengirim:'',
                tanggal:'',
                status:'',
                nominal:0,
                deskripsi:''
            }
        }
    },
    created(){
        this.getakun()
        this.getdepartmen()
    },
    methods:{
        addtransfer(){
            let newtransfer = {
                transfer_divisi:this.transfer.divisi,
                transfer_no:this.transfer.no,
                transfer_penerima:this.transfer.penerima,
                transfer_pengirim:this.transfer.pengirim,
                transfer_tanggal:this.transfer.tanggal,
                transfer_status_aktiv:this.transfer.status,
                transfer_nominal:this.transfer.nominal,
                transfer_deskripsi:this.transfer.deskripsi,
                transfer_status:"Y",
                transfer_created:new Date().toISOString().slice(0, 10),
                transfer_updated:new Date().toISOString().slice(0, 10),
                transfer_user_updated: this.CreatedBy
            }
            axios.post(API + '/Tr_transfer',newtransfer)
            .then(() =>{
                this.$swal('Berhasil','Berhasil menambahkan data','success');
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