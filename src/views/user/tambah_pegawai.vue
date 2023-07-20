<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h3>&nbsp;</h3>
            </div>
            <div class="panel panel-default card-view">
                <div class="panel-heading">
                    <h6>Tambah Data Pegawai</h6>
                </div>
                <div class="clearfix"></div>
                <div class="panel-wrapper collapse in">
                    <div class="panel-body">
                        <div class="form-wrap">
                            <div class="col-md-12">
                                <form-wizard @on-complete="addToApi" color="#8BC34A">
                                    <h4 slot="title">Tambah Data Pegawai</h4>
                                    <tab-content title="Data Diri" icon="ti-user">
                                        <div class="form-row">
                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                            <hr class="light-grey-hr" />
                                            <div class="form-group col-md-12">
                                                <label for="inputState">Email</label>
                                                <input type="email" class="form-control" placeholder="user@bitniaga.com" v-model="M_pengguna.pengguna_email">
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputState">Divis</label>
                                                <select id="inputState" class="form-control" v-model="M_pengguna.pengguna_group">
                                                    <option v-for="pilih in opsi">{{pilih.pembantu_departmen_nama}}</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputname">Nama</label>
                                                <input type="text" class="form-control" id="inputname" v-model="M_pengguna.pengguna_nama" placeholder="Nama">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Agama</label>
                                                <select class="form-control" v-model="M_pengguna.pengguna_agama">
                                                    <option v-for=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputState">Jenis Kelamin</label>
                                                <select id="inputState" v-model="M_pengguna.pengguna_jenis_kelamin" class="form-control">
                                                    <option v-for="kl in jenis_kelamin" v-bind:value="kl.value">{{kl.text}}</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputname">Alamat</label>
                                                <input type="text" class="form-control" id="inputname" v-model="M_pengguna.pengguna_alamat" placeholder="Alamat">
                                            </div>
                                        </div>
                                    </tab-content>
                                    <tab-content title="KTP & NPWP" icon="ti-settings">
                                        <div class="form-row">
                                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>KTP Dan NPWP</h6>
                                            <hr class="light-grey-hr" />
                                            <div class="form-group col-md-6">
                                                <label for="admin">No KTP</label>
                                                <input type="number" placeholder="No KTP" class="form-control" v-model="M_pengguna.pengguna_no_ktp">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <div class="form-row" hidden="true">
                                                    <div class="form-group col-md-4">
                                                        <label for="inputAddress">Data pegawai Ditambahkan</label>
                                                        <input type="date" class="form-control" v-model="M_pengguna.pengguna_created">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="Databarang">Data pegawai Diupdate</label>
                                                        <input type="date" class="form-control" id="Databarang" v-model="M_pengguna.pengguna_updated">
                                                    </div>
                                                    <div class="form-group col-md-4" hidden="true">
                                                        <label for="inputState">Pengguna Yang Update Pelanggan</label>
                                                        <select id="inputState" class="form-control" v-model="M_pengguna.pengguna_user_updated">
                                                            <option selected>Choose...</option>
                                                            <option>Admin</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="">Upload Foto</label>
                                                        <input type="file" class="form-control">
                                                    </div>
                                                </div>
                                                <label for="admin">No NPWP</label>
                                                <input type="number" placeholder="No KTP" class="form-control" v-model="M_pengguna.pengguna_no_npwp">
                                            </div>
                                        </div>
                                    </tab-content>
                                    <tab-content title="Langkah Terakhir" icon="ti-check">
                                        Semuanya Sudah Selesai
                                    </tab-content>
                                </form-wizard>
                                <form>
                                    <div class="col-md-2">
                                        <router-link to="/pegawai">
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
import axios from 'axios';
import API from '../../../api.config'
export default {
    name: 'M_pengguna',
    data() {
        return {
            posisi: [
                { text: 'Pegawai', value: 'Pegawai' },
                { text: 'Atasan', value: 'Atasan' }
            ],
            opsi: [],
            jenis_kelamin: [
                { text: 'Laki-Laki', value: 'Laki-Laki' },
                { text: 'Perempuan', value: 'Perempuan' }
            ],
            M_tunjangan: [],
            M_pengguna: {
                pengguna_group: '',
                pengguna_nama: '',
                pengguna_role: 'pegawai',
                pengguna_created: '',
                pengguna_updated: '',
                pengguna_alamat: '',
                pengguna_user_updated: '',
                pengguna_jenis_kelamin: '',
                pengguna_status: 'Y',
                pengguna_no_ktp: '',
                pengguna_no_npwp: '',
                pengguna_email: '',
                pengguna_posisi: ''
            },
        }
    },
    mounted() {
        this.getdata()
        this.getdepartmen()
    },
    methods: {
        addToApi() {
            let newM_pengguna = {
                pengguna_group: this.M_pengguna.pengguna_group,
                pengguna_nama: this.M_pengguna.pengguna_nama,
                pengguna_role: this.M_pengguna.pengguna_role,
                pengguna_alamat: this.M_pengguna.pengguna_alamat,
                pengguna_jenis_kelamin: this.M_pengguna.pengguna_jenis_kelamin,
                pengguna_created: this.M_pengguna.pengguna_created,
                pengguna_updated: this.M_pengguna.pengguna_updated,
                pengguna_user_updated: this.M_pengguna.pengguna_user_updated,
                pengguna_status: this.M_pengguna.pengguna_status,
                pengguna_no_ktp: this.M_pengguna.pengguna_no_ktp,
                pengguna_no_npwp: this.M_pengguna.pengguna_no_npwp,
                pengguna_email: this.M_pengguna.pengguna_email,
                pengguna_posisi: this.M_pengguna.pengguna_posisi
            }
            console.log(newM_pengguna);

            axios.post(API + '/M_pengguna', newM_pengguna)
                .then((response) => {
                    console.log(response);
                    this.$router.push({ name: 'pegawai' });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getdata() {
            axios.get(API + '/M_tunjangan')
                .then((response) => {
                    console.log(response.data);
                    this.M_tunjangan = response.data
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        getdepartmen() {
            axios.get(API + '/pembantu_departmen')
                .then((response) => {
                    this.opsi = response.data
                });
        }
    }
};
</script>