<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <h3>&nbsp;</h3>
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Tambah Supplier</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="form-wrap">
                                        <div class="col-md-12">
                                            <form @submit.prevent="addsupplier">
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Data penyuplai</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-4">
                                                        <label for="inputname">Nama supplier</label>
                                                        <input type="text" class="form-control" id="inputname" placeholder="Nama" v-model="M_supplier.supplier_nama">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="">No.Telp</label>
                                                        <input type="number" class="form-control" v-model="M_supplier.supplier_telephone">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="inputState">Jenis Kelamin</label>
                                                        <select id="inputState" class="form-control" v-model="M_supplier.supplier_jenis_kelamin">
                                                            <option value="Laki-Laki" selected>Laki-Laki</option>
                                                            <option value="Perempuan">Perempuan</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-row" hidden>
                                                    <div class="form-group col-md-4">
                                                        <label for="inputAddress">Data pelanggan Ditambahkan</label>
                                                        <input type="date" class="form-control" v-model="created">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="Databarang">Data pelanggan Diupdate</label>
                                                        <input type="date" class="form-control" id="Databarang" v-model="updated" hidden>
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="inputState">Pengguna Yang Update Pelanggan</label>
                                                        <select id="inputState" class="form-control" v-model="user_updated" hidden>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Perusahaan</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-6">
                                                        <label for="">Nama Perusahaan</label>
                                                        <input type="text" class="form-control" v-model="M_supplier.supplier_nama_perusahaan">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Alamat</label>
                                                        <input type="text" class="form-control" v-model="M_supplier.supplier_alamat_perusahaan">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="">Provinsi</label>
                                                        <input type="text" class="form-control" v-model="M_supplier.supplier_provinsi_perusahaan">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="">Kota</label>
                                                        <input type="text" class="form-control" v-model="M_supplier.supplier_kota_perusahaan">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="">Kode pos</label>
                                                        <input type="text" class="form-control" v-model="M_supplier.supplier_kode_pos_perusahaan">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">No.Telp</label>
                                                        <input type="number" class="form-control" v-model="M_supplier.supplier_telephone_perusahaan">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Fax</label>
                                                        <input type="text" class="form-control" v-model="M_supplier.supplier_fax_perusahaan">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-money-box mr-10"></i>Akun bank</h6>
                                                    <hr class="light-grey-hr" />
                                                    <div class="form-group col-md-6">
                                                        <label for="">Nama Bank</label>
                                                        <input type="text" class="form-control" v-model="M_supplier.supplier_nama_bank">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">No.Akun</label>
                                                        <input type="number" class="form-control" v-model="M_supplier.supplier_no_akun_bank">
                                                        <small>*example:443-233-244-1</small>
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Atas nama</label>
                                                        <input type="text" class="form-control" v-model="M_supplier.supplier_atas_nama_bank">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <button type="submit" class="btn btn-primary">Tambah</button>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <router-link to="/supplier">
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
    name: 'M_pengguna',
    data() {
        return {
            created: new Date().toISOString().slice(0, 10),
            updated: new Date().toISOString().slice(0, 10),
            user_updated: '',
            M_supplier: {
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

            }
        }
    },

    mounted() {

    },

    methods: {
        addsupplier() {
            let supplier = {
                supplier_domain: this.$store.getters.domain,
                supplier_nama: this.M_supplier.supplier_nama,
                supplier_telephone: this.M_supplier.supplier_telephone,
                supplier_jenis_kelamin: this.M_supplier.supplier_jenis_kelamin,
                supplier_nama_perusahaan: this.M_supplier.supplier_nama_perusahaan,
                supplier_alamat_perusahaan: this.M_supplier.supplier_alamat_perusahaan,
                supplier_provinsi_perusahaan: this.M_supplier.supplier_provinsi_perusahaan,
                supplier_kota_perusahaan: this.M_supplier.supplier_kota_perusahaan,
                supplier_kode_pos_perusahaan: this.M_supplier.supplier_kode_pos_perusahaan,
                supplier_telephone_perusahaan: this.M_supplier.supplier_telephone_perusahaan,
                supplier_fax_perusahaan: this.M_supplier.supplier_fax_perusahaan,
                supplier_nama_bank: this.M_supplier.supplier_nama_bank,
                supplier_no_akun_bank: this.M_supplier.supplier_no_akun_bank,
                supplier_atas_nama_bank: this.M_supplier.supplier_atas_nama_bank,
                supplier_created: this.created,
                supplier_updated: this.updated,
                supplier_user_updated: this.user_updated,
                supplier_status: 'Y'
            }
            axios.post(API + '/M_supplier', supplier)
                .then(() => {
                    this.$router.push({ name: 'supplier' });
                    this.$swal("Berhasil", "Data supplier ditambahkan", "success");
                });
        }

    },
    computed: {
        // item_hasil: function() {
        //     return this.item_stok - this.item_ambil;
        // },
        // hasil2: function() {
        //     return this.item2_stok - this.M_pengguna.pengguna_penggunaan;
        // },
        // total_biaya: function() {
        //     return this.item_biaya * this.item_ambil;
        // },
        // total_produk: function() {
        //     return this.M_pengguna.pengguna_biaya * this.M_pengguna.pengguna_penggunaan;
        // },
        // Total: function() {
        //     return this.total_biaya + this.total_produk;
        // }
    }

};
</script>