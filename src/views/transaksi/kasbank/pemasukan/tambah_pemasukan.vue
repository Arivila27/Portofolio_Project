<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Tambah Pemasukan</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="addpemasukan">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-6">
                                                        <label for="">Divisi</label>
                                                        <select class="form-control" v-model="pemasukan.divisi">
                                                            <option v-for="dpr in departmen" :key="dpr._id">{{dpr.pembantu_departmen_nama}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">No Referensi</label>
                                                        <input type="text" class="form-control" v-model="pemasukan.no">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Diterima dari</label>
                                                        <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="username" track-by="_id" :options="pengguna" :taggable="true" v-model="pemasukan.pengirim"></multiselect>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Ke akun</label>
                                                        <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="kode_akun_nama" track-by="_id" :options="akun"  :taggable="true" v-model="pemasukan.penerima"></multiselect>
                                                    </div> 
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-4">
                                                        <label for="">Tanggal</label>
                                                        <input type="date" class="form-control" v-model="pemasukan.tanggal">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="inputState">Status Aktiv</label>
                                                        <select id="inputState" class="form-control" v-model="pemasukan.status">
                                                            <option selected>Choose...</option>
                                                            <option value="Aktiv">Aktiv</option>
                                                            <option value="Nonaktif">Nonaktif</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="">Proyek</label>
                                                        <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="item_nama" track-by="_id" :options="project" :taggable="true" v-model="pemasukan.proyek"></multiselect>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="">Nominal</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" v-model="pemasukan.nominal"></vue-numeric>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="">Deskripsi</label>
                                                        <textarea  cols="5" rows="5" class="form-control" v-model="pemasukan.deskripsi"></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Tambah</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/pemasukan">
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
            pemasukan:{
                divisi:'',
                no:'',
                penerima:'',
                pengirim:'',
                tanggal:'',
                status:'',
                proyek:'',
                nominal:0,
                deskripsi:''
            }
        }
    },
    created(){
        this.getpengguna()
        this.getakun()
        this.getdepartmen()
        this.getproyek()
    },
    methods:{
        addpemasukan(){
            let newpemasukan = {
                pemasukan_divisi:this.pemasukan.divisi,
                pemasukan_no:this.pemasukan.no,
                pemasukan_penerima:this.pemasukan.penerima,
                pemasukan_pengirim:this.pemasukan.pengirim,
                pemasukan_tanggal:this.pemasukan.tanggal,
                pemasukan_status_aktiv:this.pemasukan.status,
                pemasukan_proyek:this.pemasukan.proyek,
                pemasukan_nominal:this.pemasukan.nominal,
                pemasukan_deskripsi:this.pemasukan.deskripsi,
                pemasukan_status:"Y",
                pemasukan_created:new Date().toISOString().slice(0, 10),
                pemasukan_updated:new Date().toISOString().slice(0, 10),
                pemasukan_user_updated: this.CreatedBy
            }
            axios.post(API + '/Tr_pemasukan',newpemasukan)
            .then(() =>{
                this.$swal('Berhasil','Berhasil menambahkan data','success');
                this.$router.push({name:'pemasukan'})
            });
        },
        getpengguna(){
            axios.get(API + '/M_pengguna/pegawai')
            .then((response) =>{
                this.pengguna = response.data;
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
        },
        getproyek(){
            axios.get(API + '/M_item/Project')
            .then((response) =>{
                this.project = response.data
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