<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Data diri</h6>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body">
                                <div class="col-md-6">
                                    <h6>Nama:{{pelanggan.pengguna_nama}}</h6>
                                </div>
                                <div class="col-md-6">
                                    <h6>Alamat:{{pelanggan.pengguna_alamat}}</h6>
                                </div>
                           
                            </div>
                        </div>
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Tambah Penjualan</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="ubah">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Nama</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="pelanggan.pengguna_nama" placeholder="Nama" disabled>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Alamat</label>
                                                        <input type="text" class="form-control" id="inputname" placeholder="Alamat" v-model="pelanggan.pengguna_alamat" disabled>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">No.Telepon</label>
                                                        <input type="number" class="form-control" v-model="pelanggan.pengguna_no_telepon" disabled>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">Jenis Kelamin</label>
                                                        <select id="inputState" class="form-control" v-model="pelanggan.pengguna_jenis_kelamin" disabled>
                                                            <option value="Laki-Laki">Laki-Laki</option>
                                                            <option value="Perempuan">Perempuan</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Type pelanggan</label>
                                                        <select class="form-control" v-model="pelanggan.pengguna_tipe_pelanggan" disabled>
                                                            <option v-for="tipe in tipes" v-bind:key="tipe._id">{{tipe.type_nama}}</option>
                                                        </select>
                                                        <!-- <multiselect v-model="pelanggan.tipe_pelanggan" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="type_nama" track-by="_id" :options="tipes" ></multiselect> -->
                                                    </div>
                                                </div>
                                                <div class="form-row" hidden>
                                                    <div class="form-group col-md-12">
                                                        <label class="typo__label">Pilih Divisi</label>
                                                        <multiselect v-model="pelanggan.pengguna_departmen.pengguna_departmen_group" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pembantu_nama" track-by="_id" :options="departmen" :multiple="true" :taggable="true" disabled></multiselect>
                                                    </div>
                                                </div>
                                                <div class="form-row" hidden>
                                                    <div class="form-group col-md-4">
                                                        <label for="inputAddress">Data pelanggan Ditambahkan</label>
                                                        <input type="date" class="form-control">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="Databarang">Data pelanggan Diupdate</label>
                                                        <input type="date" class="form-control" id="Databarang" hidden v-model="pelanggan.sekarang">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="inputState">Pengguna Yang Update Pelanggan</label>
                                                        <select id="inputState" class="form-control" hidden>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        <div class="panel panel-default card-view" v-for="(item,k) in penjualan" :key="k">
                            <div class="panel-heading">
                                <div class="pull-left">
                                <h6>Produk,Barang,Project</h6>
                                </div>
                                <div class="pull-right">
                                    <a class="btn btn-primary" @click.prevent="add(k)" v-show="k == penjualan.length-1">tambah</a> &nbsp;
                                    <a class="btn btn-danger" @click.prevent="remove(k)" v-show="k || ( !k &&  penjualan.length > 1)">hapus</a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body">
                                <div class="form-row text-center">
                                    <a class="btn btn-primary">Produk</a> &nbsp; 
                                    <a class="btn btn-success">Project</a> &nbsp;
                                    <a class="btn btn-danger">Barang</a>
                                    <div class="clearfix">
                                        <br/>
                                    </div>
                                </div>
                               <div class="form-row">
                                   <div class="form-group col-md-4">
                                       <label for="">Nama</label>
                                       <input type="text" class="form-control">
                                   </div>
                                   <div class="form-group col-md-4">
                                       <label for="">Kode</label>
                                       <input type="text" class="form-control">
                                   </div>
                                   <div class="form-group col-md-4">
                                       <label for="">Merk</label>
                                       <input type="text" class="form-control">
                                   </div>
                               </div>
                               <div class="form-row">
                                   <div class="form-group col-md-4">
                                       <label for="">Stok</label>
                                       <input type="number" class="form-control">
                                   </div>
                                  <div class="form-group col-md-4">
                                       <label for="">Diambil</label>
                                       <input type="number" class="form-control">
                                   </div>
                                    <div class="form-group col-md-4">
                                       <label for="">Stok Akhir</label>
                                       <input type="number" class="form-control">
                                   </div>
                               </div>
                               <div class="form-row">
                                   <div class="form-group col-md-6">
                                       <label for="">Harga</label>
                                       <input type="hidden">
                                       <h6>Harga</h6>
                                   </div>
                                   <div class="form-group col-md-6">
                                       <label for="">Total</label>
                                       <input type="hidden">
                                       <h6>Total</h6>
                                   </div>
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
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            pelanggan: {},
            tipes: [],
            departmen: [],
            // Data dari atas V-model
            // ----
            penjualan:[{
                barang:''
            }]
        }
    },
    created() {
        this.getpelanggan()
        this.gettipe()
        this.getdepartmen()
    },
    methods: {
        add(index){
            this.penjualan.push({
                barang:''
            })
        },
        remove(index){
            this.penjualan.splice(index,1);
        },
        // Mendapatkan Data Departmen 
        getdepartmen() {
            axios.get(API + '/pembantu_departmen')
                .then((response) => {
                    this.departmen = response.data;
                })
        },
        // ----
        // Mendapatkan tipe pelanggan 
        gettipe() {
            axios.get(API + '/pembantu_departmen/tipe_pelanggan')
                .then((response) => {
                    this.tipes = response.data;
                })
        },
        // ----
        // mendapatkan data pelanggan
        getpelanggan() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    this.pelanggan = response.data;
                });
        },
        // ---
        ubah() {
            let ubahPelanggan = {
                pengguna_nama: this.pelanggan.pengguna_nama,
                pengguna_jenis_kelamin: this.pelanggan.pengguna_jenis_kelamin,
                pengguna_updated: this.pelanggan.sekarang,
                pengguna_role: this.pelanggan.pengguna_role,
                pengguna_no_telepon: this.pelanggan.pengguna_no_telepon,
                pengguna_user_updated: this.pelanggan.pengguna_user_updated,
                pengguna_alamat: this.pelanggan.pengguna_alamat,
                pengguna_no_ktp: this.pelanggan.pengguna_no_ktp,
                pengguna_no_npwp: this.pelanggan.pengguna_no_npwp,
                pengguna_ppoe: this.pelanggan.pengguna_ppoe,
                pengguna_lokasi_pasang: this.pelanggan.pengguna_lokasi_pasang,
                pengguna_tanggal_pemasangan: this.pelanggan.pengguna_tanggal_pemasangan,
                pengguna_departmen: {
                    pengguna_departmen_group: this.pelanggan.pengguna_departmen_group,
                },
                pengguna_tipe_pelanggan: this.pelanggan.pengguna_tipe_pelanggan,
                pengguna_login: {
                    pengguna_username: this.pelanggan.pengguna_username,
                    pengguna_password: this.pelanggan.pengguna_password,
                }
            }
            axios.put(API + `/M_pengguna/${this.$route.params.id}`, ubahPelanggan)
                .then(() => {
                    this.$swal("Berhasil", "Berhasil Mengubah data", "success");
                    this.$router.push({ name: 'pelanggan' });
                });
        },
        pika(){
            alert('Hello World');
        }
    }
}
</script>