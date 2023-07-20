<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h1><b>Tambah Data penagihan</b></h1>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputname">Nama</label>
                                <select name="" id="" v-model="M_tagihan.pngh_group">
                                    <option v-for="item in M_pelanggan">{{item.pengguna_nama}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="Databarang">Data Penagihan Dibuat</label>
                                <input type="date" class="form-control" id="Databarang" v-model="M_tagihan.pngh_created">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="item">Data Penagihan Diupdate</label>
                                <input type="date" class="form-control" id="item" placeholder="Apartment, studio, or floor" v-model="M_tagihan.pngh_updated">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="admin">Siapa Yang Mengupdate/Membuat</label>
                                <select id="admin" class="form-control" v-model="M_tagihan.pngh_user_updated">
                                    <option selected>Choose...</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputstatus">Status Barang</label>
                                <input type="text" class="form-control" id="inputstatus" value="Y" disabled="true">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <router-link to="/penagihan">
                                <button type="submit" class="btn btn-primary" @click="tambah_penagihan">Tambah</button>
                            </router-link>
                        </div>
                        <div class="col-md-2">
                            <router-link to="/penagihan">
                                <button type="button" class="btn btn-danger">Kembali</button>
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import API from '../../api.config'
export default {
    data() {
        return {
            M_pelanggan:[],
            M_tagihan: {
                pngh_group: '',
                pngh_created: '',
                pngh_updated: '',
                pngh_user_updated: '',
                pngh_status: 'Y'
            },
        }
    },
    mounted(){
        this.tampilkan()
    },
    methods: {
        tambah_penagihan() {
            let newM_tagihan = {
                pngh_group: this.M_tagihan.pngh_group,
                pngh_created: this.M_tagihan.pngh_created,
                pngh_updated: this.M_tagihan.pngh_updated,
                pngh_user_updated: this.M_tagihan.pngh_user_updated,
                pngh_status: this.M_tagihan.pngh_status
            }
            console.log(newM_tagihan);

            axios.post(API +'/M_tagihan', newM_tagihan)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        tampilkan(){
            axios.get(API +'/M_pengguna/pelanggan')
            .then((response) =>{
                console.log(response.data);
                this.M_pelanggan = response.data;
            })
            .catch((error) =>{
                console.log(error);
            })
        }
    }
};
</script>