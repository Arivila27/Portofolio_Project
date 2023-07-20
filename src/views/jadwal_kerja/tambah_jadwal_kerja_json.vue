<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h1><b>Jadwal Kerja</b></h1>
            </div>
            <div class="row">
                <h3>&nbsp;</h3>
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6>Tambah Jadwal Kerja</h6>
                    </div>
                    <div class="panel-body">
                        <div class="form-wrap">
                            <div class="col-md-12">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputState">Nama Pegawai</label>
                                            <multiselect v-model="M_jadwal.jadwal_nama_pegawai" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="M_pengguna" :multiple="true" :taggable="true" @tag="addTag"></multiselect>   
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputhari">Pilih Hari</label>
                                         
                                            <multiselect v-model="M_jadwal.jadwal_hari" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="text" track-by="value" :options="hari" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="">Pilih Divisi</label>
                                            <multiselect v-model="M_jadwal.jadwal_divisi" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pembantu_nama" track-by="_id"
                                            :options="departmen" multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="">Status Hari</label>
                                            <select name="" id="" class="form-control" v-model="M_jadwal.jadwal_status_hari">
                                                <option value="">Masuk</option>
                                                <option value="">Libur</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputAddress">Keterangan Pekerjaan</label>
                                            <textarea name="" id="" class="form-control" cols="5" rows="5" v-model="M_jadwal.jadwal_kegiatan"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                            <router-link to="/jadwal_kerja">
                                        <button type="submit" v-on:click="addjadwal()" class="btn btn-primary">Tambah</button>
                                            </router-link>
                                    </div>
                                    <div class="col-md-2">
                                        <router-link to="/jadwal_kerja">
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
export default {
components: {Multiselect},
    data() {
        return {
            M_pengguna: [],
            departmen:[],
            hari:[
            {text:'Senin',value:'Senin'},
            {text:'Selasa',value:'Selasa'},
            {text:'Rabu',value:'Rabu'},
            {text:'Kamis',value:'Kamis'},
            {text:'Jumat',value:'Jumat'},
            {text:'Sabtu',value:'Sabtu'},
            {text:'Minggu',value:'Minggu'}
            ],
            M_jadwal: {
                jadwal_nama_pegawai: '',
                jadwal_hari: '',
                jadwal_kegiatan: '',
                jadwal_status_hari:'',
                jadwal_status:'Y'
            }
        }

    },
    mounted() {
        this.getdepartmen()
        this.opsinama()
    },
    methods: {
        addjadwal() {
            let newM_jadwal = {
                jadwal_nama_pegawai: this.M_jadwal.jadwal_nama_pegawai,
                jadwal_hari: this.M_jadwal.jadwal_hari,
                jadwal_kegiatan: this.M_jadwal.jadwal_kegiatan,
                jadwal_status_hari:this.M_jadwal.jadwal_status_hari,
                jadwal_status:this.M_jadwal.jadwal_status
            }
            console.log(newM_jadwal);

            axios.post('http://localhost:5000/M_jadwal_pegawai', newM_jadwal)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        opsinama() {
        axios.get('http://localhost:5000/M_pengguna/pegawai')
            .then((response) => {
                console.log(response);
                this.M_pengguna = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },
        getdepartmen(){
            axios.get('http://localhost:5000/pembantu_departmen')
            .then((response) =>{
                console.log(response.data);
                this.departmen = response.data;
            })
            .catch((error) =>{
                console.log(error);
            });
        }
    }
    
};
</script>