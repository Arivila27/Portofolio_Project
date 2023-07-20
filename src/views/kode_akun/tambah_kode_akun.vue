<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6 class="txt-light">Tambah Tipe Cash</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="addAkun">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputname">Kode</label>
                                                        <input type="text" class="form-control" id="inputname" v-model="kode.kode">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Nama</label>
                                                        <input type="text" class="form-control" v-model="kode.nama">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Subklasifikasi</label>
                                                        <select class="form-control" v-model="kode.subklasifikasi">
                                                            <option value="BANK">BANK</option>
                                                            <option value="KAS">KAS</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-12" v-show="kode.subklasifikasi === 'BANK'">
                                                        <label>No.Rekening</label>
                                                        <input type="number" class="form-control" v-model="kode.no_rekening">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="inputState">Status Aktiv</label>
                                                        <select id="inputState" class="form-control" v-model="kode.status">
                                                            <option selected>Choose...</option>
                                                            <option value="Aktiv">Aktiv</option>
                                                            <option value="Nonaktif">Nonaktif</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="clearfix"></div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Tambah</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/kode_akun">
                                                            Kembali
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-footer">
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
import API from '../../api.config'
export default {
    data() {
        return {
            kode: {
                kode: '',
                nama: '',
                subklasifikasi: '',
                no_rekening:'',
                status: ''
            }
        }
    },
    methods: {
        addAkun() {
            let newKode = {
                kode_akun: this.kode.kode,
                kode_domain: this.$store.getters.domain,
                kode_akun_nama: this.kode.nama,
                kode_akun_subklasifikasi: this.kode.subklasifikasi,
                kode_akun_rekening: this.kode.no_rekening,
                kode_akun_status: this.kode.status,
                kode_status: "Y",
                kode_akun_created: new Date().toISOString().slice(0, 10),
                kode_akun_updated: new Date().toISOString().slice(0, 10),
                kode_akun_user_created: this.CreatedBy
            }
            axios.post(API + '/M_kode_akun', newKode)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menambahkan data', 'success')
                    this.$router.push({ name: 'kode_akun' });
                });
        }
    },
    computed: {
        CreatedBy: function() {
            return this.$store.getters.username;
        }
    }
};
</script>