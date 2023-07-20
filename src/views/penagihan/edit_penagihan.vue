<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h1><b></b></h1>
                <h3>&nbsp;</h3>
            </div>
            <div class="panel panel-default card-view">
                <div class="panel-heading">
                    <h6>Edit Penagihan</h6>
                </div>
                <div class="clearfix"></div>
                <div class="panel-wrapper collapse in">
                    <div class="panel-body">
                        <div class="form-wrap">
                            <div class="col-md-12">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label>Name</label>
                                            <input type="text" class="form-control" disabled v-model="detail.penagihan_nama">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="inputState">Tanggal Terakhir Bayar</label>
                                            <input type="date" class="form-control" v-model="detail.penagihan_tanggal_pembayaran">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputname">Metode Pembayaran</label>
                                            <select class="form-control" v-model="detail.penagihan_metode_bayar">
                                                <option></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="inputState">Keterangan</label>
                                            <input type="text" class="form-control" v-model="detail.penagihan_keterangan">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputAddress">Biaya Tambahan</label>
                                             <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" v-model="detail.penagihan_biaya_tambahan"></vue-numeric>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="Databarang">PPn</label>
                                             <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" disabled></vue-numeric >
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputState">Total</label>
                                             <vue-numeric currency="Rp." separator="," class="form-control" id="hargasatuan" disabled></vue-numeric >
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-2">
                                            <router-link :to="{name:'penagihan_bulanan'}">
                                                <button type="submit" class="btn btn-primary">Tambah</button>
                                            </router-link>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <router-link :to="{name:'penagihan_bulanan'}">
                                                <button type="button" class="btn btn-danger">Kembali</button>
                                            </router-link>
                                        </div>
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
import API from '../../api.config'
export default {
    name: 'M_pengguna',
    data() {
        return {
            detail:{}
        }
    },
    created(){
        this.getdata();
    },
    methods:{
        getdata(){
            this.$http.get(this.$API + `/Tr_penagihan/detail/${this.$route.params.id}`)
            .then((response) =>{
                this.detail = response.data
                console.log(response.data);
            });
        }
    }
};
</script>