<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h1><b>Tambah Data menu</b></h1>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputState">Pilih Pelanggan</label>
                                <select id="inputState" class="form-control">
                                    <option value="">Choosed</option>
                                    <option v-for="nama in M_pelanggan">{{  nama.pengguna_nama }}</option>
                                </select>
                            </div>
                             <div class="form-group col-md-6">
                                <label for="inputAddress">Deskripsi Complain</label>
                                <textarea name="" id="" class="form-control" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <button type="submit" class="btn btn-primary">Tambah</button>
                        </div>
                        <div class="col-md-2">
                            <router-link to="/dashboard-complain">
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
import API from '../../../api.config'
export default {
    data() {
        return {
            M_pelanggan: [],
        }
    },
    mounted() {
        this.getdata()
    },
    methods: {
        getdata() {
            axios.get(API + '/M_pengguna/pelanggan/complainn')
                .then((response) => {
                    console.log(response);
                    this.M_pelanggan = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
</script>