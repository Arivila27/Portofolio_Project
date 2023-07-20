<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6>Tambah Data Produk</h6>
                    </div>
                    <div class="clearfix"></div>
                    <div class="panel-wrapper collapse in">
                        <form @submit.prevent="editProduk">
                            <div class="panel-body">
                                <div class="form-wrap">
                                    <div class="col-md-12">
                                        <div class="form-row">
                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Kategori Dan Departemen</h6>
                                            <hr class="light-grey-hr" />
                                            <div class="form-group col-md-12">
                                                <label for="">Item Departemen {{produk.item}}</label>
                                                <select  class="form-control" v-model="produk.item_departmen">
                                                    <option v-for="departmen in M_departmen" :key="departmen._id">{{departmen.pembantu_departmen_nama}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Detail Barang</h6>
                                            <hr class="light-grey-hr" />
                                            <div class="form-group col-md-6">
                                                <label for="inputname">Nama produk</label>
                                                <input type="text" class="form-control" id="inputname" placeholder="Nama produk" v-model="produk.item_nama">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="hargasatuan">Harga Barang</label>
                                                <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" v-model="produk.item_harga"></vue-numeric>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="">Kode Produksi</label>
                                                <input type="text" class="form-control" v-model="produk.item_kode">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                    <button type="submit" class="btn btn-primary">Update</button>
                                            </div>
                                            <div class=" form-group col-md-6">
                                                <router-link to="/produk" class="btn btn-danger">Kembali
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
</template>
<script>
import axios from 'axios';
import API from '../../../api.config'
export default {
    data(){
        return{
            M_departmen:[],
            produk:{}
        }
    },
    created(){
        this.getdata()
        this.getdetail()
    },
    methods:{
        getdata(){
            axios.get( API + '/pembantu_departmen')
            .then((response) =>{
                this.M_departmen = response.data
            });
        },
        getdetail(){
            axios.get( API + `/M_item/${this.$route.params.id}`)
            .then((response) =>{
                this.produk = response.data
            });
        },
        editProduk(){
            let newProduk = {
                item_departmen: this.produk.item_departmen,
                item_nama: this.produk.item_nama,
                item_harga:this.produk.item_harga,
                item_kode: this.produk.item_kode,
                item_updated: new Date().toISOString().slice(0, 10)
            } 
            axios.put(API + `/M_item/${this.$route.params.id}`, newProduk)
            .then(() =>{
                this.$swal('Berhasil','Berhasil mengupdate data','success')
                this.$router.push({name:'produk'});
            });
        }
    }
};
</script>