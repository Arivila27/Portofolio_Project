<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h1><b>Tambah Data tunjangan</b></h1>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputname">Nama Tunjangan</label>
                                <input type="text" class="form-control" id="inputname" placeholder="Nama Tunjangan" v-model="M_tunjangan.Tjn_group">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="Databarang">Data Tunjangan Dibuat</label>
                                <input type="date" class="form-control" id="Databarang" v-model="M_tunjangan.Tjn_created">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="item">Data Tunjangan Diupdate</label>
                                <input type="date" class="form-control" id="item" v-model="M_tunjangan.Tjn_updated">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="admin">Siapa Yang Mengupdate/Membuat</label>
                                <select id="admin" class="form-control" v-model="M_tunjangan.Tjn_user_updated">
                                    <option selected>Choose...</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputstatus">Status Tunjangan</label>
                                <input type="text" class="form-control" id="inputstatus" value="Y" disabled="true" v-model="M_tunjangan.Tjn_status">
                            </div>
                        </div>
                        <div class="col-md-2">
                                <router-link to="/tunjangan">
                            <button type="submit" class="btn btn-primary" @click="tambah_tunjangan">Tambah</button>
                                </router-link>
                        </div>
                        <div class="col-md-2">
                            <router-link to="/tunjangan">
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
export default {
    data() {
        return {
            M_tunjangan: {
                Tjn_group: '',
                Tjn_created: '',
                Tjn_updated: '',
                Tjn_user_updated: '',
                Tjn_status: 'Y'
            },
        }
    },
    methods:{
        tambah_tunjangan(){
            let newM_tunjangan = {
                Tjn_group: this.M_tunjangan.Tjn_group,
                Tjn_created: this.M_tunjangan.Tjn_created,
                Tjn_updated: this.M_tunjangan.Tjn_updated,
                Tjn_user_updated: this.M_tunjangan.Tjn_user_updated,
                Tjn_status: this.M_tunjangan.Tjn_status
            }
            console.log(newM_tunjangan);

            axios.post('http://localhost:5000/M_tunjangan',newM_tunjangan)
            .then((resnponse)=> {
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }
}
</script>