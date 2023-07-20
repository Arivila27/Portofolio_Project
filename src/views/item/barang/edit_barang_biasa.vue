<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6>Edit Data Barang</h6>
                    </div>
                    <div class="clearfix"></div>
                    <div class="panel-wrapper collapse in">
                        <form @submit.prevent="editBarang">
                            <div class="panel-body">
                                <div class="form-wrap">
                                    <div class="col-md-12">
                                        <div class="form-row">
                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Barang</h6>
                                            <hr class="light-grey-hr" />
                                            <div class="form-group col-md-4">
                                                <label for="nama">Nama barang</label>
                                                <input type="text" class="form-control" v-model="barang.item_nama"  required>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="stok">Stok</label>
                                                <vue-numeric class="form-control" v-model="barang.item_stok" required />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="harga">Harga barang</label>
                                                <vue-numeric currency="Rp." separator="," v-model="barang.item_harga" class="form-control"  required/>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="merk">Merk</label>
                                                <input type="text" class="form-control" v-model="barang.item_merk"  required>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="kode">Kode barang</label>
                                                <input type="text" class="form-control" v-model="barang.item_kode"  required>
                                                <small>*example:ZJOPLS123</small>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="total">Total harga</label>
                                                <vue-numeric currency="Rp." separator="," class="form-control" v-model="HargaTotal"  disabled/>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <button class="btn btn-success ml-5">update</button>&nbsp;
                                            <router-link to="/barang_biasa" class="btn btn-danger">Kembali</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
export default {
    data(){
        return{
            barang:{}
        }
    },
    created(){
        this.getdetail()
    },
    methods:{
        getdetail(){
            axios.get(API + `/M_item/${this.$route.params.id}`)
            .then((response) =>{
                this.barang = response.data
            });
        },
        editBarang(){
            let newBarang = {
                item_nama:this.barang.item_nama,
                item_stok:this.barang.item_stok,
                item_harga:this.barang.item_harga,
                item_kode:this.barang.item_kode,
                item_merk:this.barang.item_merk,
                item_harga_total:this.HargaTotal,
                item_updated: new Date().toISOString().slice(0, 10)
            }
            axios.put(API + `/M_item/${this.$route.params.id}`, newBarang)
            .then(() =>{
                this.$swal('Berhasil','Berhasil mengupdate data','success')
                this.$router.push({name:'barang_biasa'});
            });
        }
    },
    computed:{
        HargaTotal:function(){
            return this.barang.item_stok * this.barang.item_harga; 
        }
    }
};
</script>