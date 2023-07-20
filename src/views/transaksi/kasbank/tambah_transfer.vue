<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h1><b>Tambah Data transfer</b></h1>
            </div>
            <div class="panel panel-default card-view">
                <div class="panel-heading">
                    <h6>Transfer uang</h6>
                </div>
                <div class="clearfix"></div>
                <div class="panel-wrapper collapse in">
                    <div class="panel-body">
                        <div class="form-row">
                            <div class="col-md-12">
                                <form>
                                    <div class="form-row">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputState">Dari</label>
                                                 <multiselect v-model="Tr_transfer.transfer_departmen_from" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="M_pengguna" :taggable="true" @tag="addTag"></multiselect>  
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputState">untuk:</label>
                                                 <multiselect v-model="Tr_transfer.transfer_departmen_for" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="M_pengguna" :multiple="true" :taggable="true" @tag="addTag"></multiselect>  
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="transfer">No Transfer</label>
                                                <input type="text" style="text-transform: uppercase" class="form-control" v-model="Tr_transfer.transfer_number">
                                            </div>
                                            <div class="form-group col-md-6" hidden>
                                                <label for="transfer">Transfer created</label>
                                                <input type="date" class="form-control" v-model="Tr_transfer.transfer_created">
                                            </div>
                                            <div class="form-group col-md-4" hidden>
                                                <label for="transfer">Transfer updated</label>
                                                <input type="date" class="form-control" v-model="Tr_transfer.transfer_updated">
                                            </div>
                                            <div class="form-group col-md-4" hidden>
                                                <label for="transfer">Transfer user updated</label>
                                                <input type="text" class="form-control" v-model="Tr_transfer.transfer_user_updated">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="transfer">Transfer Email</label>
                                                <input type="email" class="form-control" v-model="Tr_transfer.transfer_email">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="transfer">Kode Akun Transfer</label>
                                                <input type="text" class="form-control" v-model="Tr_transfer.transfer_kode_akun">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="transfer">Approval status</label>
                                                <input type="text" class="form-control" v-model="Tr_transfer.transfer_approval_status">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="transfer">Transfer notes</label>
                                                <input type="text" class="form-control" v-model="Tr_transfer.transfer_notes">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="transfer">Total transfer</label>
                                                <input type="number" class="form-control" v-model="Tr_transfer.transfer_total">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <router-link to="/transfer_uang">
                                                <button type="submit" class="btn btn-primary" @click="addToApi">Tambah</button>
                                            </router-link>
                                        </div>
                                        <div class="col-md-2">
                                            <router-link to="/transfer_uang">
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
import axios from 'axios'
import Multiselect from 'vue-multiselect'
export default {
    name: 'Tr_transfer',
    components: { Multiselect },
    data() {
        return {
            M_pengguna: [],
            departmen:[],
            Tr_transfer: {
                transfer_departmen_for: '',
                transfer_departmen_from: '',
                transfer_from: '',
                transfer_for: '',
                transfer_number: '',
                transfer_tanggal: '',
                transfer_created: new Date().toISOString().slice(0, 10),
                transfer_updated: new Date().toISOString().slice(0, 10),
                transfer_user_updated: '',
                transfer_email: '',
                transfer_kode_akun: '',
                transfer_approval_status: '',
                transfer_notes: '',
                transfer_total: '',
                transfer_status: 'Y'
            },
        }
    },
    mounted(){
        this.getpembantu()
        this.getpengguna()
    },
    methods: {
        addToApi() {
            let newTr_transfer = {
                transfer_for:{
                    transfer_untuk:this.Tr_transfer.transfer_departmen_for,
                }, 
                transfer_from:{
                    transfer_dari:this.Tr_transfer.transfer_departmen_from,
                }, 
                transfer_number: this.Tr_transfer.transfer_number,
                transfer_tanggal: this.Tr_transfer.transfer_tanggal,
                transfer_created: this.Tr_transfer.transfer_created,
                transfer_updated: this.Tr_transfer.transfer_updated,
                transfer_user_updated: this.Tr_transfer.transfer_user_updated,
                transfer_email: this.Tr_transfer.transfer_email,
                transfer_kode_akun: this.Tr_transfer.transfer_kode_akun,
                transfer_approval_status: this.Tr_transfer.transfer_approval_status,
                transfer_notes: this.Tr_transfer.transfer_notes,
                transfer_total: this.Tr_transfer.transfer_total,
                transfer_status: this.Tr_transfer.transfer_status
            }
            console.log(newTr_transfer);

            axios.post('http://localhost:5000/Tr_transfer', newTr_transfer)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // MEndapatkan DAta Departmen 
        getpembantu(){
            axios.get('http://localhost:5000/pembantu_departmen')
            .then((response) =>{
                console.log(response.data);
                this.departmen = response.data;
            })
            .catch((error) =>{
                console.log(error);
            });
        },
        // ----
        // Mendapatkan Data pengguna 
        getpengguna(){
            axios.get('http://localhost:5000/M_pengguna/pegawai')
            .then((response) =>{
                console.log(response.data);
                this.M_pengguna = response.data;
            })
            .catch((error) =>{
                console.log(error);
            });
        }
        // ----
    }
};
</script>