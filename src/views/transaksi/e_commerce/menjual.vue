<template>
    <div class="pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
                <!-- /Row -->
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="refresh-container">
                            <div class="la-anim-1"></div>
                        </div>
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Data pelanggan baru/psb</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/dashboard_pelanggan" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left"></i>
                                </router-link>
                                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-replay"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen"></i>
                                </a>
                                <router-link to="/tambah_pelanggan">
                                    <a href="#" class="pull-left inline-block">
                                        <i class="zmdi zmdi-file-plus"></i>
                                    </a>
                                </router-link>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div class="form-group col-md-12">
                                <div class="pull-right">
                                    <input type="text" class="form-control" v-model="cari" placeholder="Search">
                                </div>
                            </div>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Aksi</th>
                                        <th scope="col">Tanggal <br>tambah produk</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(pelanggan , index) in filterpelanggan.slice(0,5)" v-bind:key="pelanggan._id">
                                        <th>{{index + 1}}</th>
                                        <th><span class="label label-primary">Aktif</span></th>
                                        <td>{{pelanggan.pengguna_nama}}</td>
                                        <td>{{pelanggan.pengguna_alamat}}</td>
                                        <td><button class="btn btn-success btn-outline"><router-link :to="{name:'tambah_menjual',params:{id:pelanggan._id}}">Tambah</router-link></button></td>
                                        <td>2018-09-13</td>
                                    </tr>
                                    <div class="modal fade bs-example-modal-lg" tabindex="-1" id="update" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myLargeModalLabel">Ubah</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <form>
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                                                <hr class="light-grey-hr" />
                                                                <div class="form-group col-md-12">
                                                                    <label for="">ID</label>
                                                                    <input type="text" class="form-control" v-model="id">
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label for="">Divisi</label>
                                                                    <multiselect v-model="pengguna_departmen_group" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pembantu_nama" track-by="id" :options="options" :multiple="true"></multiselect>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label for="">Tipe.pelanggan</label>
                                                                    <multiselect v-model="pengguna_tipe_pelanggan" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="type_nama" track-by="id" :options="tipes"></multiselect>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="to">Nama</label>
                                                                    <input type="text" class="form-control" id="to" v-model="pengguna_nama">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="yng_update">Alamat</label>
                                                                    <input type="text" class="form-control" v-model="pengguna_alamat">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="">Jenis Kelamin</label>
                                                                    <select name="" class="form-control" id="" v-model="pengguna_jenis_kelamin">
                                                                        <option value="Laki-Laki">Laki-Laki</option>
                                                                        <option value="Perempuan">Perempuan</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="">No.Telepon</label>
                                                                    <input type="number" class="form-control" v-model="pengguna_no_telepon">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="">No.KTP</label>
                                                                    <input type="number" class="form-control" v-model="pengguna_no_ktp">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="">PPOE</label>
                                                                    <input type="text" class="form-control" v-model="pengguna_ppoe">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="">Tanggal Aktivasi</label>
                                                                    <input type="date" class="form-control" v-model="pengguna_tanggal_pemasangan">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="">Lokasi Pemasangan</label>
                                                                    <input type="text" class="form-control" v-model="pengguna_lokasi_pasang">
                                                                </div>
                                                                <div class="form-group col-md-12" hidden>
                                                                    <label for="">Updated</label>
                                                                    <input type="text" class="form-control" v-model="pengguna_updated">
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label for="">User update</label>
                                                                    <input type="text" class="form-control" v-model="pengguna_user_updated" disabled>
                                                                </div>
                                                            </div>
                                                            <div class="row" hidden>
                                                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Login</h6>
                                                                <hr class="light-grey-hr" />
                                                                <div class="form-row col-md-12">
                                                                    <div class="form-group col-md-6">
                                                                        <label class="typo__label">Username</label>
                                                                        <input type="text" class="form-control" v-model="pengguna_username">
                                                                    </div>
                                                                    <div class="form-group col-md-6">
                                                                        <label for="">Password</label>
                                                                        <input type="password" class="form-control" v-model="pengguna_password">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Pegawai Yang PSB</h6>
                                                                <hr class="light-grey-hr" />
                                                                <div class="form-row col-md-12">
                                                                    <label class="typo__label">Pilih Pegawai</label>
                                                                    <multiselect v-model="pengguna_nama_psb" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="id" :options="opsi" :multiple="true"></multiselect>
                                                                </div>
                                                                <div class="form-row col-md-12">
                                                                    <p>&nbsp;</p>
                                                                </div>
                                                                <br>
                                                                <div class="clearfix"></div>
                                                            </div>
                                                            <div class="row">
                                                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Produk</h6>
                                                                <hr class="light-grey-hr" />
                                                                <div class="form-row col-md-12">
                                                                    <label class="typo__label">Pilih produk</label>
                                                                    <multiselect v-model="pengguna_produk" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="item_nama" track-by="id" :options="aset" :multiple="true"></multiselect>
                                                                </div>
                                                                <div class="clearfix">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger text-left" v-on:click="updatepelanggan()">Aktifkan</button>
                                                    <button type="button" class="btn btn-danger text-left" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                        <!-- /.modal-dialog -->
                                    </div>
                                    <div class="modal fade bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog ">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myModalLabel">Modal Heading</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15">{{pengguna_nama}}</h5>
                                                    <p>Apakah Anda Yakin Iningin Menghapus ?</p>
                                                    <input type="hidden" class="form-control" v-model="id">
                                                    <input type="hidden" class="form-control" v-model="pengguna_status">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteds()">Iya</button>
                                                    <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                    </div>
                                </tbody>
                                <!-- <div class="btn-toolbar">
                                    <div class="btn-group">
                                        <button class="btn btn-primary" v-for="p in pagination.pages" @click.prevent="setPage(p)">{{p}}</button>
                                    </div>
                                </div>
                                Displaying from indexes {{ pagination.startIndex }} to {{ pagination.endIndex }}. -->
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
export default {
    name: 'M_pengguna',
    components: { Multiselect },
    data() {
        return {
            id:'',
            pengguna_nama_psb: '',
            options: [],
            opsi: [],
            aset: [],
            M_gambar: [],
            tipes: [],
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            cari: '',
            M_pengguna: [],
            pengguna_nama: '',
            pengguna_role: '',
            pengguna_jenis_kelamin: '',
            pengguna_created: '',
            pengguna_username: '',
            pengguna_password: '',
            pengguna_user_updated: '',
            pengguna_no_telepon: '',
            pengguna_status: '',
            pengguna_alamat: '',
            pengguna_departmen_group: '',
            pengguna_no_ktp: '',
            pengguna_no_npwp: '',
            pengguna_paket: '',
            pengguna_ppoe: '',
            pengguna_lokasi_pasang: '',
            pengguna_tanggal_pemasangan: '',
            pengguna_produk: '',
            pengguna_biaya: '',
            pengguna_status_bayar: '',
            pengguna_aset: '',
            pengguna_tipe_pelanggan: '',
            pengguna_updated: new Date().toISOString().slice(0, 10),
        }
    },
    mounted() {
        this.getdata()
        this.getgambar()
        this.getpegawai()
        this.getdepartmen()
        this.gettipes()
        this.getaset()
    },
    methods: {
        // Mencoba Multi Select
        //  addTag(newTag) {
        //     const tag = {
        //         name: newTag,
        //         code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        //     }
        //     this.options.push(tag)
        //     this.value.push(tag)
        // },
        // ----
        // Dari Sini Pagination
        // setPage(p) {
        //     this.pagination = this.paginator(this.data.length, p);
        // },
        // paginate(data) {
        //     return _.slice(data, this.pagination.startIndex, this.pagination.endIndex + 1)
        // },
        // paginator(totalItems, currentPage) {
        //     var startIndex = (currentPage - 1) * this.perPage,
        //         endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
        //     return {
        //         currentPage: currentPage,
        //         startIndex: startIndex,
        //         endIndex: endIndex,
        //         pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
        //     };
        // },
        // ----
        // Mendapatkan Data Barang/Aset
        getaset() {
            axios.get(API +'/M_item')
                .then((response) => {
                    this.aset = response.data;
                });
        },
        // ----
        // Mencoba Mendapatkan tipe pelanggan 
        gettipes() {
            axios.get(API +'/pembantu_departmen/tipe_pelanggan')
                .then((response) => {
                    this.tipes = response.data;
                });
        },
        // ----
        // Coba ambil gambar
        getgambar() {
            axios.get(API +'/Gmbr_item')
                .then((response) => {
                    this.M_gambar = response.data;
                });
        },
        // ----
        // MEndapatkan Opsi untuk Departmen 
        getdepartmen() {
            axios.get(API +'/pembantu_departmen')
                .then((response) => {
                    this.options = response.data;
                });
        },
        // ----
        // Mendapatkan data Pelanggan baru
        getdata() {
            axios.get(API +'/M_pengguna/pelanggan')
                .then((response) => {
                    this.M_pengguna = response.data;
                });
        },
        // ----
        // MEndapatkan Data Pegawai 
        getpegawai() {
            axios.get(API +'/M_pengguna/pegawai')
                .then((response) => {
                    this.opsi = response.data;
                });
        },
        // ----
        hapuspengguna(id, status, nama) {
            this.id = id;
            this.pengguna_status = 'N';
            this.pengguna_nama = nama;
        },
        deleteds() {
            axios.put(API +`/M_pengguna/${this.id}`, {
                    pengguna_status: this.pengguna_status
                })
                .then(() => {
                    this.pengguna_status = 'N',
                        this.getdata();
                    this.$swal("Berhasil", "Pelanggan berhasil dihapus ", 'success');
                });
        },
        softdelete(id) {
            axios.delete(API +'/M_pengguna/' + id)
                .then(() => {
                    this.getdata();
                });
        }

    },
    computed: {
        // Mencari Dengan Filter
        filterpelanggan: function() {
            return this.M_pengguna.filter((pelanggan) => {
                return pelanggan.pengguna_nama.match(this.cari);
            });
        },
        // ----
        // Menghitung Dengan Pagination
        collection() {
            return this.paginate(this.M_pengguna);
        }
    },
    // ----
};
</script>