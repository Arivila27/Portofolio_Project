<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h3>&nbsp;</h3>
            </div>
            <div class="panel panel-default card-view">
                <div class="clearfix"></div>
                <div class="panel-wrapper collapse in">
                    <div class="panel-body">
                        <div class="form-wrap">
                            <div class="col-md-12">
                                <form-wizard @on-complete="handlePegawai" color="#8BC34A">
                                    <h4 slot="title">Tambah Data Pegawai</h4>
                                    <tab-content title="Data Diri" icon="ti-user">
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="inputState">Nama</label>
                                                <input type="email" class="form-control" v-model="M_pengguna.pengguna_nama">
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputState">Departemen</label>
                                                <multiselect v-model="M_pengguna.pengguna_group" :options="role" placeholder="Pilih salah satu"></multiselect>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="inputState">Jenis Kelamin</label>
                                                <multiselect v-model="M_pengguna.pengguna_jenis_kelamin" :options="jenis_kelamin" placeholder="Pilih salah satu" label="text"></multiselect>
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label>Agama</label>
                                                <multiselect v-model="M_pengguna.pengguna_agama" :options="religion" placeholder="Pilih salah satu" label="religion"></multiselect>
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputname">Tempat/Tgl-lahir</label>
                                                <input type="text" class="form-control" id="inputname" v-model="M_pengguna.pengguna_templahir">
                                                <small>*contoh:Mojokerto/19-08-2000</small>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="admin">No KTP</label>
                                                    <input type="number" class="form-control" v-model="M_pengguna.pengguna_no_ktp">
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
                                                    <input type="number" class="form-control" v-model="M_pengguna.pengguna_kartu_jamsostek">
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="admin">Status</label>
                                                    <multiselect v-model="M_pengguna.pengguna_status_keluarga" :options="status" placeholder="Pilih salah satu" label="status"></multiselect>
                                                </div>
                                            </div>
                                        </div>
                                    </tab-content>
                                    <tab-content title="Kontak" icon="fa fa-phone">
                                        <div class="form-group col-md-12">
                                            <label for="admin">Alamat tetap</label>
                                            <input type="text" class="form-control" v-model="M_pengguna.pengguna_alamat_tetap">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="admin">Alamat Sekarang</label>
                                            <input type="text" class="form-control" v-model="M_pengguna.pengguna_alamat_sekarang">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="admin">Handphone/Pager</label>
                                            <input type="number" class="form-control" v-model="M_pengguna.pengguna_no_telepon">
                                        </div>
                                    </tab-content>
                                    <tab-content title="Data Bank" icon="fa fa-bank">
                                        <div class="form-group col-md-12">
                                            <label for="admin">Nama Bank</label>
                                            <input type="text" class="form-control" v-model="M_pengguna.pengguna_nama_bank">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="admin">Cabang</label>
                                            <input type="text" class="form-control" v-model="M_pengguna.pengguna_nama_cabang" placeholder="KCP.KOTA">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="admin">No.Bank A/C</label>
                                            <input type="text" class="form-control" v-model="M_pengguna.pengguna_no_bank">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="admin">Nama Sesuai Buku Bank</label>
                                            <input type="text" class="form-control" v-model="M_pengguna.pengguna_bank_nama">
                                        </div>
                                    </tab-content>
                                    <tab-content title="Data keluarga" icon="fa fa-users">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Nama</th>
                                                    <th>Tmp/Tgl-lahir</th>
                                                    <th>Alamat</th>
                                                    <th>Telp</th>
                                                    <th>Pekerjaan</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Ayah</td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ayah.nama"></td>
                                                    <td><input type="date" class="form-control" v-model="M_pengguna.pengguna_keluarga.ayah.tempat_tgllahir"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ayah.alamat"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ayah.telp"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ayah.pekerjaan"></td>
                                                </tr>
                                                <tr>
                                                    <td>Ibu</td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ibu.nama"></td>
                                                    <td><input type="date" class="form-control" v-model="M_pengguna.pengguna_keluarga.ibu.tempat_tgllahir"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ibu.alamat"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ibu.telp"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ibu.pekerjaan"></td>
                                                </tr>
                                                <tr>
                                                    <td>Ayah mertua</td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ayah_mertua.nama"></td>
                                                    <td><input type="date" class="form-control" v-model="M_pengguna.pengguna_keluarga.ayah_mertua.tempat_tgllahir"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ayah_mertua.alamat"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ayah_mertua.telp"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ayah_mertua.pekerjaan"></td>
                                                </tr>
                                                <tr>
                                                    <td>Ibu mertua</td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ibu_mertua.nama"></td>
                                                    <td><input type="date" class="form-control" v-model="M_pengguna.pengguna_keluarga.ibu_mertua.tempat_tgllahir"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ibu_mertua.alamat"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ibu_mertua.telp"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.ibu_mertua.pekerjaan"></td>
                                                </tr>
                                                <tr>
                                                    <td>Suami/Istri</td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.pasangan.nama"></td>
                                                    <td><input type="date" class="form-control" v-model="M_pengguna.pengguna_keluarga.pasangan.tempat_tgllahir"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.pasangan.alamat"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.pasangan.telp"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.pasangan.pekerjaan"></td>
                                                </tr>
                                                <tr>
                                                    <td>Anak</td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.anak.nama"></td>
                                                    <td><input type="date" class="form-control" v-model="M_pengguna.pengguna_keluarga.anak.tempat_tgllahir"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.anak.alamat"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.anak.telp"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.anak.pekerjaan"></td>
                                                </tr>
                                                <tr>
                                                    <td>Saudaraa Kandung</td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.saudara.nama"></td>
                                                    <td><input type="date" class="form-control" v-model="M_pengguna.pengguna_keluarga.saudara.tempat_tgllahir"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.saudara.alamat"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.saudara.telp"></td>
                                                    <td><input type="text" class="form-control" v-model="M_pengguna.pengguna_keluarga.saudara.pekerjaan"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </tab-content>
                                    <tab-content title="Riwayat Pendidikan" icon="fa fa-mortar-board">
                                        <h3>Rangkuman Pendidikan</h3>
                                        <button class="btn btn-primary" @click.prevent="addPendidikan">Tambahkan</button>
                                        <button class="btn btn-danger" @click.prevent="removePendidikan">Kurangi</button>
                                        <div class="clearfix">
                                            <br>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="admin">Pendidikan terakhir</label>
                                            <input type="text" class="form-control" v-model="M_pengguna.pengguna_pendidikan.pendidikan_terakhir">
                                        </div>
                                        <br>
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th colspan="2">Periode</th>
                                                    <th rowspan="2">Sekolah/Institusi/Universitas(&tempat)</th>
                                                    <th rowspan="2">Jurusan</th>
                                                    <th rowspan="2">Kualifikasi(1-4)</th>
                                                </tr>
                                                <tr>
                                                    <th>Dari bln/thn</th>
                                                    <th>Sampai bln/thn</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(pnd,p) in M_pengguna.pengguna_pendidikan.rangkumanpendidikan" :key="p">
                                                    <td><input type="date" class="form-control" v-model="pnd.periode.dari"></td>
                                                    <td><input type="date" class="form-control" v-model="pnd.periode.sampai"></td>
                                                    <td><input type="text" class="form-control" v-model="pnd.sekolah"></td>
                                                    <td><input type="text" class="form-control" v-model="pnd.jurusan"></td>
                                                    <td><input type="text" class="form-control" v-model="pnd.kualifikasi"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </tab-content>
                                    <tab-content title="Riwayat pekerjaan" icon="fa fa-briefcase">
                                        <button class="btn btn-primary" @click.prevent="addpekerjaan()">Tambahkan</button>
                                        <button class="btn btn-danger" @click.prevent="removePekerjaan()">Kurangi</button>
                                        <div class="clearfix"></div>
                                        <br>
                                        <h5>Form Perusahaan Sebelumnya</h5>
                                        <table class="table table-bordered" v-for="(pkj,p) in M_pengguna.pengguna_pekerjaan.rangkuman_pekerjaan" :key="p">
                                            <thead>
                                                <tr>
                                                    <th colspan="2"><input type="text" class="form-control" v-model="pkj.pekerjaan"></th>
                                                    <th><input type="date" class="form-control" v-model="pkj.periode.dari"></th>
                                                    <th><input type="date" class="form-control" v-model="pkj.periode.sampai"></th>
                                                </tr>
                                                <tr>
                                                    <th colspan="3"><input type="text" class="form-control" placeholder="Alamat" v-model="pkj.alamat_perusahaan"></th>
                                                    <th><input type="text" class="form-control" placeholder="Telp" v-model="pkj.telepon_perusahaan"></th>
                                                </tr>
                                                <tr>
                                                    <th><input type="text" class="form-control" placeholder="Jenis Usaha" v-model="pkj.jenis_perusahaan"></th>
                                                    <th><input type="text" class="form-control" placeholder="Jabatan" v-model="pkj.jabatan_perusahaan"></th>
                                                    <th colspan="2" rowspan="2"><textarea cols="30" rows="10" class="form-control" placeholder="Alasan keluar" style="resize: none;" v-model="pkj.alasan_keluar"></textarea></th>
                                                </tr>
                                                <tr>
                                                    <th><input type="text" class="form-control" placeholder="Atasan" v-model="pkj.atasan_perusahaan"></th>
                                                    <th><input type="text" class="form-control" placeholder="Gaji" v-model="pkj.gaji_perusahaan"></th>
                                                </tr>
                                                <tr>
                                                    <th colspan="4"><input type="text" class="form-control" placeholder="Deskripsi Pekerjaan" v-model="pkj.deskripsi_pekerjaan"></th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </tab-content>
                                    <tab-content title="Akses" icon="fa fa-phone">
                                        <div class="form-group col-md-12">
                                            <label for="admin">Username</label>
                                            <input type="text" class="form-control" v-model="auth.username">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="admin">Email</label>
                                            <input type="text" class="form-control" v-model="auth.email">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="admin">Password</label>
                                            <input type="password" class="form-control" v-model="auth.password">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="admin">Fee(*Fee yang didapatkan ketika berhasil affiliate pelanggan baru)</label>
                                            <!-- <input type="text" class="form-control" v-model="M_pengguna.pengguna_fee_yang_didapatkan"> -->
                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="M_pengguna.pengguna_fee_yang_didapatkan" />
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="admin">Pilih Role</label>
                                            <select class="form-control" v-model="auth.role" id="role">
                                                <option value="Noc">Noc</option>
                                                <option value="Finance">Finance</option>
                                                <option value="Marketing">Admin</option>
                                                <option value="Tukang">Teknisi</option>
                                                <option value="Magang">Magang</option>
                                            </select>
                                        </div>
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
<script src="./Service/tambah_pegawai"></script>