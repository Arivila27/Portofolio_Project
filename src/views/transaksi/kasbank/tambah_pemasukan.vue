<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h1><b>Tambah Data pemasukan</b></h1>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="inputState">Departemen</label>
                                <select id="inputState" class="form-control" v-model="Tr_pemasukan.pemasukan_departmen">
                                    <option selected>Choose...</option>
                                    <option></option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">Dikirim Oleh:</label>
                                <select id="inputState" class="form-control" v-model="Tr_pemasukan.pemasukan_from">
                                    <option selected></option>
                                    <option v-for="pengguna in M_pengguna">{{pengguna.pengguna_nama}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputState">Dikirim Untuk:</label>
                                <select id="inputState" class="form-control" v-model="Tr_pemasukan.pemasukan_for">
                                    <option selected>Choose...</option>
                                    <option v-for="pengguna in M_pengguna">{{pengguna.pengguna_nama}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="">Number</label>
                                <input type="text" class="form-control" v-model="Tr_pemasukan.pemasukan_number">
                                <small>Contoh:C101</small>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="Datapemasukan">Data pemasukan Dibuat</label>
                                <input type="date" class="form-control" id="Datapemasukan" v-model="Tr_pemasukan.pemasukan_tanggal">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Datapemasukan">Created</label>
                                <input type="date" class="form-control" id="Datapemasukan" v-model="Tr_pemasukan.pemasukan_created">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="pemasukan">Data pemasukan Diupdate</label>
                                <input type="date" class="form-control" v-model="Tr_pemasukan.pemasukan_updated">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="hargasatuan">Harga Satuan</label>
                                <input type="number" class="form-control" id="hargasatuan" v-model="Tr_pemasukan.pemasukan_harga">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="admin">Siapa Yang Mengupdate/Membuat</label>
                                <select id="admin" class="form-control" v-model="Tr_pemasukan.pemasukan_user_updated">
                                    <option selected>Choose...</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputstatus">Status pemasukan</label>
                                <input type="text" class="form-control" id="inputstatus" value="Y" disabled="true">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="hargasatuan">E-mail</label>
                                <input type="email" class="form-control" id="hargasatuan" v-model="Tr_pemasukan.pemasukan_email">
                            </div>
                            <div class="form-group col-md-4">
                                 <label for="inputState">Kode-Akun</label>
                                <select id="inputState" class="form-control" v-model="Tr_pemasukan.pemasukan_kode_akun">
                                    <option selected>Choose...</option>
                                    <option></option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                 <label for="inputState">Approval-Status</label>
                                <select id="inputState" class="form-control" v-model="Tr_pemasukan.pemasukan_approval_status">
                                    <option selected>Choose...</option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="jumlah">Jumlah</label>
                                <input type="number" class="form-control" v-model="Tr_pemasukan.pemasukan_jumlah">
                            </div>
                            <div class="form-group col-md-6">
                                 <label for="inputAddress">Catatan</label>
                                <textarea name="" id="" class="form-control" cols="30" rows="10" v-model="Tr_pemasukan.pemasukan_notes"></textarea>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="Project">Nama Project</label>
                                <input type="text" class="form-control" v-model="Tr_pemasukan.pemasukan_project">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <router-link to="/pemasukan ">
                                <button type="submit" class="btn btn-primary" @click="addToApi">Tambah</button>
                            </router-link>
                        </div>
                        <div class="col-md-2">
                            <router-link to="/pemasukan">
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
    name: 'Tr_pemasukan',
    data() {
        return {
            Tr_pemasukan: { pemasukan_departmen: '',pemasukan_from: '',pemasukan_for: '', pemasukan_number: '', pemasukan_tanggal: '', pemasukan_created: '', pemasukan_updated: '', pemasukan_status: 'Y', pemasukan_user_updated:'',pemasukan_email:'',pemasukan_approval_status:'',pemasukan_project:'',pemasukan_kode_akun:'',pemasukan_notes:'',pemasukan_jumlah:'', pemasukan_harga:''},
            M_pengguna:[],
        }
    },
    mounted(){
        this.getpengguna()
    },
    methods: {
        addToApi() {
            let newTr_pemasukan = {
                pemasukan_departmen: this.Tr_pemasukan.pemasukan_departmen,
                pemasukan_from: this.Tr_pemasukan.pemasukan_from,
                pemasukan_for: this.Tr_pemasukan.pemasukan_for,
                pemasukan_number: this.Tr_pemasukan.pemasukan_number,
                pemasukan_tanggal: this.Tr_pemasukan.pemasukan_tanggal,
                pemasukan_email: this.Tr_pemasukan.pemasukan_email,
                pemasukan_kode_akun: this.Tr_pemasukan.pemasukan_kode_akun,
                pemasukan_notes: this.Tr_pemasukan.pemasukan_notes,
                pemasukan_jumlah: this.Tr_pemasukan.pemasukan_jumlah,
                pemasukan_approval_status: this.Tr_pemasukan.pemasukan_approval_status,
                pemasukan_project: this.Tr_pemasukan.pemasukan_project,
                pemasukan_created: this.Tr_pemasukan.pemasukan_created,
                pemasukan_updated: this.Tr_pemasukan.pemasukan_updated,
                pemasukan_user_updated: this.Tr_pemasukan.pemasukan_user_updated,
                pemasukan_status: this.Tr_pemasukan.pemasukan_status,
                pemasukan_harga: this.Tr_pemasukan.pemasukan_harga  
            }
            console.log(newTr_pemasukan);

            axios.post('http://localhost:5000/Tr_pemasukan', newTr_pemasukan)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getpengguna(){
            axios.get('http://localhost:5000/M_pengguna')
            .then((response)=>{
                console.log(response.data);
                this.M_pengguna = response.data;
            })
            .catch((error)=>{
                console.log(error);
            });
        }
    }
};
</script>