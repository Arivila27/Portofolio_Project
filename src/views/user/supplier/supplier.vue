<template>
    <div class="pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
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
                                <h6 class="panel-title txt-dark">Data Supplier</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/trinventori" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left"></i>
                                </router-link>
                                <a href="#" class="pull-left inline-block refresh mr-15" @click="getsupplier()">
                                    <i class="zmdi zmdi-replay"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen"></i>
                                </a>
                                <router-link to="/tambah_supplier" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-file-plus"></i>
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
                                        <th scope="col">Nama Perusahaan</th>
                                        <th scope="col">Nama penyuplai</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(sup,index) in DisplayedSupplier" :key="sup._id">
                                        <th>{{index + 1}}</th>
                                        <td>{{sup.supplier_nama_perusahaan}}</td>
                                        <td>{{sup.supplier_nama}}</td>
                                        <td>{{sup.supplier_alamat_perusahaan}}</td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li v-on:click="getsup(sup._id,sup.supplier_nama,sup.supplier_telephone,sup.supplier_jenis_kelamin,sup.supplier_nama_perusahaan,sup.supplier_alamat_perusahaan,sup.supplier_provinsi_perusahaan,sup.supplier_kota_perusahaan,sup.supplier_kode_pos_perusahaan,sup.supplier_telephone_perusahaan,sup.supplier_fax_perusahaan,sup.supplier_nama_bank,sup.supplier_no_akun_bank,sup.supplier_atas_nama_bank,sup.supplier_status)" role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-share" aria-hidden="true"></i>Update</a></li>
                                                        <!--  <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="hapuspengguna(pelanggan._id,pelanggan.pengguna_status)"><i class="icon wb-share" aria-hidden="true" disabled></i>Delete</a></li> -->
                                                        <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-share" aria-hidden="true"></i>Detail</a></li>
                                                        <li v-on:click="getdelete(sup._id,sup.supplier_nama)" role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="icon wb-share" aria-hidden="true"></i>Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <div class="modal fade bs-example-modal-lg" tabindex="-1" id="update" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myLargeModalLabel">Aktifkan</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <form>
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data Diri</h6>
                                                                <hr class="light-grey-hr" />
                                                                <div class="form-group col-md-12">
                                                                    <label for="">ID</label>
                                                                    <input type="text" class="form-control" v-model="ups.supplier_id">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="to">Nama</label>
                                                                    <input type="text" class="form-control" id="to" v-model="ups.supplier_nama">
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="">Jenis Kelamin</label>
                                                                    <select name="" class="form-control" id="" v-model="ups.supplier_jenis_kelamin">
                                                                        <option value="Laki-Laki">Laki-Laki</option>
                                                                        <option value="Perempuan">Perempuan</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-4">
                                                                    <label for="">No.telp</label>
                                                                    <input type="number" class="form-control" v-model="ups.supplier_telephone">
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data perusahaan</h6>
                                                                <hr class="light-grey-hr" />
                                                                <div class="form-row col-md-12">
                                                                    <p>&nbsp;</p>
                                                                    <div class="form-group col-md-6">
                                                                        <label for="">Nama perusahaan</label>
                                                                        <input type="text" class="form-control" v-model="ups.supplier_nama_perusahaan">
                                                                    </div>
                                                                    <div class="form-group col-md-6">
                                                                        <label for="">Alamat perusahaan</label>
                                                                        <input type="text" class="form-control" v-model="ups.supplier_alamat_perusahaan">
                                                                    </div>
                                                                    <div class="form-group col-md-6">
                                                                        <label for="">Provinsi</label>
                                                                        <input type="text" class="form-control" v-model="ups.supplier_provinsi_perusahaan">
                                                                    </div>
                                                                    <div class="form-group col-md-6">
                                                                        <label for="">Kota</label>
                                                                        <input type="text" class="form-control" v-model="ups.supplier_kota_perusahaan">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="">Kode.pos</label>
                                                                        <input type="number" class="form-control" v-model="ups.supplier_kode_pos_perusahaan">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="">No.telp</label>
                                                                        <input type="number" class="form-control" v-model="ups.supplier_telephone_perusahaan">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="">Fax</label>
                                                                        <input type="number" class="form-control" v-model="ups.supplier_fax_perusahaan">
                                                                    </div>
                                                                </div>
                                                                <br>
                                                                <div class="clearfix"></div>
                                                            </div>
                                                            <div class="row">
                                                                <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Bank</h6>
                                                                <hr class="light-grey-hr" />
                                                                <div class="form-row col-md-12">
                                                                    <p>&nbsp;</p>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="">Nama bank</label>
                                                                        <input type="text" class="form-control" v-model="ups.supplier_nama_bank">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="">No.akun bank</label>
                                                                        <input type="number" class="form-control" v-model="ups.supplier_no_akun_bank">
                                                                    </div>
                                                                    <div class="form-group col-md-4">
                                                                        <label for="">Atas nama</label>
                                                                        <input type="text" class="form-control" v-model="ups.supplier_atas_nama_bank">
                                                                    </div>
                                                                </div>
                                                                <br>
                                                                <div class="clearfix"></div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger text-left" v-on:click="ubah()">Ubah</button>
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
                                                    <h5 class="mb-15">{{hapus.supplier_nama}}</h5>
                                                    <p>Apakah Anda Yakin Iningin Menghapus ? {{hapus.supplier_nama}}</p>
                                                    <input type="hidden" class="form-control" v-model="hapus.supplier_id">
                                                    <input type="hidden" class="form-control" v-model="hapus.supplier_status">
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
                            </table>
                            <div class="clearfix btn-group col-md-6 offset-md-5">
                                <button type="button" class="btn btn-sm btn-success" v-if="page != 1" @click="page--">
                                    Previous</button> <button type="button" class="btn btn-sm btn-success" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" v-bind:key="pageNumber"> {{pageNumber}}
                                </button>
                                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-success"> NEXT </button>
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
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
export default {
    components: { Multiselect },
    name: 'M_supplier',
    data() {
        return {
            page: 1,
            perpage: 10,
            pages: [],
            cari: '',
            M_supplier: [],
            // Digunakan untuk mendapatkan data delete`
            hapus: {
                supplier_id: '',
                supplier_nama: '',
                supplier_status: 'N'
            },
            ups: {
                supplier_id: '',
                supplier_nama: '',
                supplier_telephone: '',
                supplier_jenis_kelamin: '',
                supplier_nama_perusahaan: '',
                supplier_alamat_perusahaan: '',
                supplier_provinsi_perusahaan: '',
                supplier_kota_perusahaan: '',
                supplier_kode_pos_perusahaan: '',
                supplier_telephone_perusahaan: '',
                supplier_fax_perusahaan: '',
                supplier_nama_bank: '',
                supplier_no_akun_bank: '',
                supplier_atas_nama_bank: '',
                supplier_status: ''
            }
            // ----
        }
    },
    mounted() {
        this.getsupplier()
    },
    watch: {
        M_supplier() {
            this.setPage()
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.FilterSupplier.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(FilterSupplier) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return FilterSupplier.slice(from, to)
        },
        // Koneksi ke database axios 
        // Mendapatkan data supplier 
        getsupplier() {
            axios.get(API + '/M_supplier/domain/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response);
                    this.M_supplier = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        // ----
        deleteds() {
            let hapus = {
                supplier_status: this.hapus.supplier_status
            }
            console.log(hapus);
            axios.put(API + `/M_supplier/${this.hapus.supplier_id}`, hapus)
                .then((response) => {
                    console.log(response.data);
                    this.getsupplier();
                    this.$swal("Berhasil", "Data supplier berhasil dihapus", "success");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        ubah() {
            let pengubah = {
                supplier_id: this.ups.supplier_id,
                supplier_nama: this.ups.supplier_nama,
                supplier_telephone: this.ups.supplier_telephone,
                supplier_jenis_kelamin: this.ups.supplier_jenis_kelamin,
                supplier_nama_perusahaan: this.ups.supplier_nama_perusahaan,
                supplier_alamat_perusahaan: this.ups.supplier_alamat_perusahaan,
                supplier_provinsi_perusahaan: this.ups.supplier_provinsi_perusahaan,
                supplier_kota_perusahaan: this.ups.supplier_kota_perusahaan,
                supplier_kode_pos_perusahaan: this.ups.supplier_kode_pos_perusahaan,
                supplier_telephone_perusahaan: this.ups.supplier_telephone_perusahaan,
                supplier_fax_perusahaan: this.ups.supplier_fax_perusahaan,
                supplier_nama_bank: this.ups.supplier_nama_bank,
                supplier_no_akun_bank: this.ups.supplier_no_akun_bank,
                supplier_atas_nama_bank: this.ups.supplier_atas_nama_bank,
                supplier_status: this.ups.supplier_status
            }
            console.log(pengubah);
            axios.put(API + `/M_supplier/${this.ups.supplier_id}`, pengubah)
                .then((response) => {
                    this.getsupplier();
                    console.log(response);
                    $('#update').modal('hide');
                    this.$swal("Berhasil", "Data supplier telah diubah", "success");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // ----
        // Detail Semua Update And Delete 
        getdelete(id, nama) {
            this.hapus.supplier_id = id;
            this.hapus.supplier_nama = nama;
        },
        getsup(id, nama, no_telp, jenis, perusnama, perusalamat, perusprovinsi, peruskota, peruskode, perustelp, perusfax, banknama, bankno, bankatas, stat) {
            this.ups.supplier_id = id;
            this.ups.supplier_nama = nama;
            this.ups.supplier_telephone = no_telp;
            this.ups.supplier_jenis_kelamin = jenis;
            this.ups.supplier_nama_perusahaan = perusnama;
            this.ups.supplier_alamat_perusahaan = perusalamat;
            this.ups.supplier_provinsi_perusahaan = perusprovinsi;
            this.ups.supplier_kota_perusahaan = peruskota;
            this.ups.supplier_kode_pos_perusahaan = peruskode;
            this.ups.supplier_telephone_perusahaan = perustelp;
            this.ups.supplier_fax_perusahaan = perusfax;
            this.ups.supplier_nama_bank = banknama;
            this.ups.supplier_no_akun_bank = bankno;
            this.ups.supplier_atas_nama_bank = bankatas;
            this.ups.supplier_status = stat;
        }
        // ---

    },
    computed: {
        FilterSupplier: function() {
            return this.M_supplier.filter((supplier) => {
                var cari_nama = supplier.supplier_nama.toLowerCase().includes(this.cari.toLowerCase())
                var cari_perusahaan = supplier.supplier_nama_perusahaan.toLowerCase().includes(this.cari.toLowerCase())
                return cari_nama || cari_perusahaan
            })
        },
        DisplayedSupplier: function() {
            return this.paginate(this.FilterSupplier);
        }

    },
    // ----
};
</script>