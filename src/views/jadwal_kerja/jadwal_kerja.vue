<template>
    <div class="pengguna">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view panel-refresh">
                            <div class="refresh-container">
                                <div class="la-anim-1"></div>
                            </div>
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-dark">Data Jadwal</h6>
                                </div>
                                <div class="pull-right">
                                    <a href="#" class="pull-left inline-block refresh mr-15" v-on:click="getdata()">
                                        <i class="zmdi zmdi-replay"></i>
                                    </a>
                                    <a href="#" class="pull-left inline-block full-screen mr-15">
                                        <i class="zmdi zmdi-fullscreen"></i>
                                    </a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th width="10">No</th>
                                            <th width="100">Nama</th>
                                            <th width="100">Jadwal Hari</th>
                                            <th width="100">Jadwal Status Hari</th>
                                            <th width="100">Jadwal Kegiatan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="jadwal in M_jadwal">
                                            <th>1</th>
                                            <td>{{jadwal.jadwal_nama_pegawai}}</td>
                                            <td>{{jadwal.jadwal_hari}}</td>
                                            <td>{{jadwal.jadwal_status_hari}}</td>
                                            <td>{{jadwal.jadwal_kegiatan}}</td>
                                        </tr>
                                        <div class="modal fade ulodowo" id="edit" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                        <h5 class="modal-title" id="myLargeModalLabel">Edit</h5>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="panel panel-default card-vie">
                                                            <div class="panel-heading">
                                                                <h5 class="mb-15">Edit Data</h5>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                            <div class="panel-wrapper collapse in">
                                                                <div class="panel-body">
                                                                    <div class="form-wrap">
                                                                        <div class="col-md-12">
                                                                            <div class="row">
                                                                                <div class="form-group col-md-6">
                                                                                    <label for="nama">Nama</label>
                                                                                    <select id="nama" class="form-control" v-model="jadwal_nama_pegawai">
                                                                                        <option v-for="gawe in pegawai">{{gawe.pengguna_nama}}</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div class="form-group col-md-6">
                                                                                    <label for="hari">Pilih Hari</label>
                                                                                    <select name="  " class="form-control" id="hari" v-model="jadwal_hari">
                                                                                        <option v-for="hari in opsihari">{{hari.text}}</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-md-6">
                                                                                    <label for="keterangan">Keterangan Kegiatan</label>
                                                                                    <textarea v-model="jadwal_kegiatan" id="keterangan" cols="5" rows="5" class="form-control" style="margin-bottom:30px"></textarea>
                                                                                </div>
                                                                                <div class="col-md-6">
                                                                                    <label for="">Status Hari</label>
                                                                                    <select name="" id="" class="form-control" v-model="jadwal_status_hari">
                                                                                        <option v-for="pilih in opsional">{{pilih.jadwal_status_hari}}</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-md-12">
                                                                                    <label for="">Tanggal update</label>
                                                                                    <input type="date" class="form-control" v-model="jadwal_updated" disabled>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer ">
                                                        <button type="button" class="btn btn-danger text-center" data-dismiss="modal" v-on:click="updatejadwal()">Ubah</button>
                                                        <button type="button" class="btn btn-danger text-center" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                                <!-- /.modal-content -->
                                            </div>
                                        </div>
                                        <div class="modal fade bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog ">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                        <h5 class="modal-title" id="myModalLabel">Modal Heading</h5>
                                                    </div>
                                                    <div class="modal-body">
                                                        <h5 class="mb-15">{{jadwal_nama_pegawai}}</h5>
                                                        <p>Apakah Anda Yakin Iningin Menghapus ?</p>
                                                        <input type="text" class="form-control" v-model="jadwal_nama_pegawai">
                                                        <input type="text" class="form-control" v-model="jadwal_status">
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="softdelete()">Iya</button>
                                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                                <!-- /.modal-content -->
                                            </div>
                                        </div>
                                    </tbody>
                                </table>
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
export default {
    name: 'M_pengguna',
    data() {
        return {
            pegawai: [],
            opsional: [],
            opsihari: [
                { text: 'Senin' },
                { text: 'Selasa' },
                { text: 'Rabu' },
                { text: 'Kamis' },
                { text: 'Jumat' },
                { text: 'Sabtu' },
                { text: 'Minggu' }

            ],
            M_jadwal: [],
            jadwal_nama_pegawai: '',
            jadwal_hari: '',
            jadwal_kegiatan: '',
            jadwal_status_hari: '',
            jadwal_updated: new Date().toISOString().slice(0, 10),
            jadwal_status: ''

        }
    },
    mounted() {
        this.getdata()
        this.getopsi()
        this.getnama()
    },
    methods: {
        getdata() {
            axios.get('http://localhost:5000/M_jadwal_pegawai')
                .then((response) => {
                    console.log(response.data);
                    this.M_jadwal = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getopsi() {
            axios.get('http://localhost:5000/M_jadwal_pegawai/opsi')
                .then((response) => {
                    console.log(response);
                    this.opsional = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        getnama() {
            axios.get('http://localhost:5000/M_pengguna/pegawai')
                .then((response) => {
                    console.log(response);
                    this.pegawai = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        editjadwal(_id, nama, hari, kegiatan, status) {
            this._id = _id;
            this.jadwal_nama_pegawai = nama;
            this.jadwal_hari = hari;
            this.jadwal_kegiatan = kegiatan;
            this.jadwal_status_hari = status;
        },
        hapusjadwal(_id, nama, status) {
            this._id = _id;
            this.jadwal_nama_pegawai = nama;
            this.jadwal_status = 'N';
        },
        updatejadwal() {
            let newjadwal = {
                jadwal_nama_pegawai: this.jadwal_nama_pegawai,
                jadwal_hari: this.jadwal_hari,
                jadwal_kegiatan: this.jadwal_kegiatan,
                jadwal_status_hari: this.jadwal_status_hari
            }
            console.log(newjadwal);
            axios.put(`http://localhost:5000/M_jadwal_pegawai/${this._id}`, newjadwal)
                .then((res) => {
                    this.getdata()
                    console.log(res)
                    $('#update').modal('hide');
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        softdelete() {
            axios.put(`http://localhost:5000/M_jadwal_pegawai/${this._id}`, {
                    jadwal_status: this.jadwal_status
                })
                .then((res) => {
                    this.jadwal_status = 'N',
                        this.getdata()
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                });
        }

    }

};
</script>