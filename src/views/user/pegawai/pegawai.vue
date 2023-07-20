<template>
    <div class="pegawai">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view panel-refresh">
                            <div class="refresh-container">
                                <div class="la-anim-1"></div>
                            </div>
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-dark">Data Pegawai</h6>
                                </div>
                                <div class="pull-right">
                                    <router-link to="/user" class="pull-left inline-block refresh mr-15">
                                        <i class="zmdi zmdi-arrow-left"></i>
                                    </router-link>
                                    <a href="#" class="pull-left inline-block refresh mr-15" v-on:click="getdata()">
                                        <i class="zmdi zmdi-replay"></i>
                                    </a>
                                    <a href="#" class="pull-left inline-block full-screen mr-15">
                                        <i class="zmdi zmdi-fullscreen"></i>
                                    </a>
                                    <router-link to="/tambah_pegawai">
                                        <a href="#" class="pull-left inline-block">
                                            <i class="zmdi zmdi-file-plus"></i>
                                        </a>
                                    </router-link>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body">
                                <div>
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="total-tagihan">
                                                    <div class="mt-15 mb-10">
                                                        <span class="block font-12 weight-400">Total Data</span>
                                                        <span class="txt-dark block counter weight-600 font-24">{{M_pengguna.length}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="table-wrap mt-20" id="printlang">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Sortir Halaman</label>
                                            <select class="form-control" v-model.number="pageSize">
                                                <option value="1">1</option>
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                                <option value="200">200</option>
                                                <option value="500">500</option>
                                                <option value="1000">1000</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4">
                                            <label>Cari.Nama</label>
                                            <input type="text" class="form-control" v-model="cari" placeholder="Nama">
                                        </div>
                                        <div class="col-md-4">
                                            <label>Cari.Role</label>
                                            <select class="form-control" v-model="select_role">
                                                <option value="Tukang">Teknisi</option>
                                                <option value="Marketing">Marketing / Admin</option>
                                                <option value="Noc">Noc</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-20" style="overflow-x: scroll">
                                    <table class="tablesaw table-bordered table-hover table" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch ref="PrintTable" cellpadding="5" border="1" style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Group</th>
                                                <th scope="col">PPOE/ Email</th>
                                                <th scope="col">Nama</th>
                                                <th scope="col">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(pegawai,index) in PageofItems" :key="pegawai._id">
                                                <th>{{index + 1}}</th>
                                                <th v-if="pegawai.pengguna_group === 'Admin'"><span class="label label-success">{{pegawai.pengguna_group}}</span></th>
                                                <th v-else-if="pegawai.pengguna_group ==='Programmer'"><span class="label label-primary">{{pegawai.pengguna_group}}</span></th>
                                                <th v-else-if="pegawai.pengguna_group === 'Marketing'"><span class="label label-default">{{pegawai.pengguna_group}}</span></th>
                                                <th v-else-if="pegawai.pengguna_group ==='Noc'"><span class="label label-danger">{{pegawai.pengguna_group}}</span></th>
                                                <th v-else-if="pegawai.pengguna_group ==='Tukang'"><span class="label label-warning">{{pegawai.pengguna_group}}</span></th>
                                                <th v-else-if="pegawai.pengguna_group ==='Finance'"><span class="label label-info">{{pegawai.pengguna_group}}</span></th>
                                                <td>{{pegawai.pengguna_email}}</td>
                                                <td>{{pegawai.pengguna_nama}}</td>
                                                <td>
                                                    <div class="pull-right">
                                                        <div class="dropdown  pull-left">
                                                            <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                                <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                            </a>
                                                            <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                                <li role="presentation">
                                                                    <router-link :to="{name:'list_kegiatan_pegawai',params:{id:pegawai._id , domain : pegawai.pengguna_domain}}"><i class="icon wb-share" aria-hidden="true"></i>Detail / List-Kegiatan</router-link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="clearfix btn-group col-md-12 offset-md-6 mt-10">
                                        <JwPagination :pageSize="pageSize" :items="FilterPegawai" @changePage="onChangePage"></JwPagination>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer -->
                <!-- /Footer -->
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import API from '../../../api.config'
import JwPagination from 'jw-vue-pagination';
export default {
    name: 'M_pengguna',
    components: {
        JwPagination
        // Table
    },
    data() {
        return {
            pageSize: 10,
            select_role: '',
            PageofItems: [],
            cari: '',
            opsional: [],
            M_pengguna: [],
            _id: '',
            pengguna_group: '',
            pengguna_nama: '',
            pengguna_role: '',
            pengguna_alamat: '',
            pengguna_jenis_kelamin: '',
            pengguna_created: '',
            pengguna_updated: '',
            pengguna_user_updated: '',
            pengguna_status: '',
            pengguna_no_ktp: '',
            pengguna_no_npwp: '',
            pengguna_email: ''
        }
    },
    mounted() {
        this.getdata()
        this.getopsi()
    },
    methods: {
        onChangePage: function(PageofItems) {
            this.PageofItems = PageofItems
            // console.log(pageSize)
        },
        getopsi() {
            axios.get(API + '/M_pengguna/opsional')
                .then((response) => {
                    console.log(response.data);
                    this.opsional = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getdata() {
            axios.get(API + '/M_pengguna/domain/pegawai/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response.data);
                    this.M_pengguna = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
            // v-on:click="editpegawai(pegawai._id,pegawai.pegawai_pengguna_group,pegawai.pengguna_nama,pegawai.pengguna_role,pegawai.pengguna_alamat,pegawai.pengguna_jenis_kelamin,pegawai.pengguna_created,pegawai.pengguna_updated,pegawai.pengguna_user_updated,pegawai.pengguna_status,pegawai.pengguna_no_ktp,pegawai.pengguna_no_npwp,pegawai.pengguna_email)"
        },
        editpegawai(_id, group, nama, role, alamat, kel, created, updated, user, status, ktp, npwp, email) {
            this._id = _id;
            this.pengguna_group = group;
            this.pengguna_nama = nama;
            this.pengguna_role = role;
            this.pengguna_alamat = alamat;
            this.pengguna_jenis_kelamin = kel;
            this.pengguna_created = created;
            this.pengguna_updated = updated;
            this.pengguna_user_updated = user;
            this.pengguna_status = status;
            this.pengguna_no_ktp = ktp;
            this.pengguna_no_npwp = npwp;
            this.pengguna_email = email;

        },
        hapuspegawai(_id, nama, status) {
            this._id = _id;
            this.pengguna_nama = nama;
            this.pengguna_status = 'N';
        },
        softdelete() {
            axios.put(API + `/M_pengguna/${this._id}`, {
                    pengguna_status: this.pengguna_status
                })
                .then((res) => {
                    this.pengguna_status = 'N',
                        this.getdata()
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        updatepegawai() {
            let newpegawai = {
                pengguna_group: this.pengguna_group,
                pengguna_nama: this.pengguna_nama,
                pengguna_role: this.pengguna_role,
                pengguna_alamat: this.pengguna_alamat,
                pengguna_jenis_kelamin: this.pengguna_jenis_kelamin,
                pengguna_created: this.pengguna_created,
                pengguna_updated: this.pengguna_updated,
                pengguna_user_updated: this.pengguna_user_updated,
                pengguna_status: this.pengguna_status,
                pengguna_no_ktp: this.pengguna_no_ktp,
                pengguna_no_npwp: this.pengguna_no_npwp,
                pengguna_email: this.pengguna_email
            }
            console.log(newpegawai);
            axios.put(API + `/M_pengguna/${this._id}`, newpegawai)
                .then((res) => {
                    this.getdata()
                    console.log(res);
                    $('#update').modal('hide');
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    },
    computed: {
        FilterPegawai: function() {
            return this.M_pengguna.filter((pengguna) => {
                var a = pengguna.pengguna_nama.toLowerCase().includes(this.cari.toLowerCase());
                var b = pengguna < this.pageSize && pengguna > 0
                var c = pengguna.pengguna_group.toLowerCase().includes(this.select_role.toLowerCase());


                return a && c || b;
            })
        }
    }

};
</script>