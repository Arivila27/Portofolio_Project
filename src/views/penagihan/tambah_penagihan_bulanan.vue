<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row"></div>
            <div class="row">
                <h3>&nbsp;</h3>
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6>Tambah penagihan</h6>
                    </div>
                    <div class="panel-body">
                        <div class="form-wrap">
                            <div class="col-md-12">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="">Pelanggan</label>
                                            <multiselect v-model="penagihan.pengguna_nama" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pelanggan"  :taggable="true" @tag="addTag"></multiselect>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-4"><label for="">Status bayar</label>
                                            <multiselect v-model="penagihan.penagihan_tipe"  tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="text" track-by="code" :options="status_penagihan"  :taggable="true" @tag="addTag"></multiselect></div>
                                        <div class="form-group col-md-4"><label for="">Nominal</label><input type="number" v-model="penagihan.penagihan_nominal" class="form-control"></div>
                                        <div class="form-group col-md-4"><label for="">Jatuh temp</label><input type="date" v-model="penagihan.penagihan_tempo" class="form-control"></div>
                                    </div>
                                    <div class="form-row" hidden>
                                        <div class=" form-group col-md-4 "><label for="">Created</label><input type="text" class="form-control" v-model="penagihan.penagihan_created"></div>
                                        <div class=" form-group col-md-4 "><label for="">Updated</label><input type="text" class="form-control" v-model="penagihan.penagihan_updated"></div>
                                        <div class=" form-group col-md-4 "><label for="">Userupdated</label><input type="text" class="form-control" v-model="penagihan.penagihan_user_updated"></div>
                                    </div>
                                    <div class="clearfix">
                                        <br>
                                    </div>
                                    <div class="col-md-2">
                                        <router-link to="/penagihan_bulanan">
                                        <button type="submit" class="btn btn-primary" @click="addpenagihan">Tambah</button>
                                        </router-link>
                                    </div>
                                    <div class="col-md-2">
                                        <router-link to="/penagihan_bulanan">
                                            <button type="button" class="btn btn-danger">Kembali</button>
                                        </router-link>
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
import axios from 'axios'
import Multiselect from 'vue-multiselect'
import API from '../../api.config'
export default {
    components: { Multiselect },
    data() {
        return {
            pelanggan: [],
            penagihan: {
                pengguna_nama: "",
                penagihan_tipe:"",
                penagihan_nominal:"",
                penagihan_tempo:"",
                penagihan_created:new Date().toISOString().slice(0, 10),
                penagihan_updated:new Date().toISOString().slice(0, 10),
                penagihan_user_updated:""
            },
            status_penagihan:[
            {text:'Harian', code:'hari'},
            {text:'Bulanan', code:'bulan'},
            {text:'Tahunan', code:'tahun'}
            ]

        }
    },
    mounted() {
        this.getpelanggan()
    },
    methods: {
        getpelanggan() {
            axios.get(API +'/M_pengguna/pelanggan')
                .then((response) => {
                    console.log(response.data);
                    this.pelanggan = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addpenagihan(){
            let tagih ={
                penagihan_pelanggan: this.penagihan.pengguna_nama,
                penagihan_tipe: this.penagihan.penagihan_tipe,
                penagihan_nominal: this.penagihan.penagihan_nominal,
                penagihan_tempo: this.penagihan.penagihan_tempo,
                penagihan_created: this.penagihan.penagihan_created,
                penagihan_updated:this.penagihan.penagihan_updated,
                penagihan_user_updated: this.penagihan.penagihan_user_updated,
                penagihan_status:"Y"
            }
            console.log(tagih);
            axios.post(API +'/M_tagihan' ,tagih)
            .then((response) =>{
                console.log(response.data);
            })
            .catch((error) =>{
                console.log(error);
            });
        }
    }

};
</script>