<template>
    <div class="page-wrapper">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default card-view" v-show="tekan === false">
                    <div class="panel-heading">
                        <div class="pull-left">
                            <h6>Form untuk print nota</h6>
                        </div>
                    </div>
                    <div class="panel-wrapper collapse in">
                        <div class="panel-body">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label>Perusahaan</label>
                                    <input type="text" class="form-control" v-model="perusahaan">
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Moto</label>
                                    <input type="text" class="form-control" v-model="moto">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label>Phone</label>
                                    <input type="number" class="form-control" v-model="no">
                                </div>
                                <div class="form-group col-md-4">
                                    <label>Email</label>
                                    <input type="email" class="form-control" v-model="email">
                                </div>
                                <div class="form-group col-md-4">
                                    <label>Website</label>
                                    <input type="text" class="form-control" v-model="website">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label for="">Alamat</label>
                                    <textarea cols="5" rows="5" class="form-control" v-model="alamat"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label for="">Logo</label>
                                    <div id="preview">
                                        <input type="file" @change="onFileChange">
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary" @click="toogle">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <div class="pull-left"></div>
                        <div class="pull-right">
                            <h6 class="txt-dark"></h6>
                        </div>
                    </div>
                    <div class="panel-wrapper collapse in">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xs-3">
                                    <address>
                                        <span class="txt-dark head-font capitalize-font mb-5">
                                        </span><img v-if="urlGambar" :src="urlGambar"><br>
                                        <br><br>
                                    </address>
                                </div>
                                <div class="col-xs-6 text-center">
                                    <address>
                                        <span class="txt-dark head-font capitalize-font mb-5">{{perusahaan}}</span>
                                        <p><b>{{moto}}</b></p>
                                        <p class="small">Phone:{{no}} Email:{{email}}</p>
                                        <p class="small">{{alamat}}</p>
                                    </address>
                                </div>
                                <div class="col-xs-3 text-right">
                                    <address>
                                        <span class="txt-dark head-font capitalize-font mb-5">Tanggal,{{sekarang}}</span>
                                        <p> Kepada Yth.</p>
                                        <h5 class="txt-dark head-font capitalize-font mb-5">{{pelanggan.pengguna_nama}}</h5>
                                        <h6>No Telp.({{pelanggan.pengguna_no_telepon}})</h6>
                                    </address>
                                </div>
                            </div>
                            <div class="invoice-bill-table">
                                <b>Nota No: JDN-320</b>
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Banyaknya</th>
                                                <th>Uraian</th>
                                                <th>Harga</th>
                                                <th>Jumlah</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{{pelanggan.pengguna_paket.length}}</td>
                                                <td>{{pelanggan.pengguna_paket.pengguna_paket_nama}}</td>
                                                <td>{{pelanggan.pengguna_paket.pengguna_paket_harga}}</td>
                                                <td>{{pelanggan.pengguna_paket.length}}</td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td>RP.Subtotal</td>
                                                <td><b>{{pelanggan.pengguna_paket.pengguna_paket_harga}}</b></td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td>PPN</td>
                                                <td>{{pelanggan.pengguna_biaya_tambahan}}</td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td>Total Rp.</td>
                                                <td><b>{{pelanggan.pengguna_biaya_total}}</b></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row text-center">
                                    <div class="col-xs-4">
                                        <h6>Pelanggan</h6>
                                        <br>
                                        <br>
                                        <hr>
                                    </div>
                                    <div class="col-xs-4">
                                        <h6>Hormat &nbsp;kami, </h6>
                                        <br>
                                        <br>
                                        <hr>
                                    </div>
                                </div>
                                <div class="button-list pull-right">
                                    <!-- <button type="submit" class="btn btn-success mr-10" >
                                        Proceed to payment
                                    </button> -->
                                    <button type="button" class="btn btn-primary btn-outline btn-icon left-icon" onclick="javascript:window.print();">
                                        <i class="fa fa-print"></i><span> Print</span>
                                    </button>
                                </div>
                                <div class="clearfix"></div>
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
import API from '../../api.config'
export default {
    data() {
        return {
            urlGambar: null,
            pelanggan: {},
            sekarang: new Date().toISOString().slice(0, 10),
            tekan: false,
            perusahaan: 'PT.JAVA DIGITAL NUSANTARA',
            moto: 'IP BASE AND CREATIVE SOLUTION',
            no: '032103210321',
            email: 'bitniaga@gmail.com',
            website: 'www.nusantara.net.id',
            alamat: 'DSN.Ringgit RT/RW:03/06 DS.Kembang Ringgit Kec.Pungging Mojokerto, 61384 Jawa Timur'
        }
    },
    created() {
        this.getdata();
    },
    methods: {
        toogle() {
            this.tekan = !this.tekan
        },
        onFileChange(e) {
            const file = e.target.files[0];
            this.urlGambar = URL.createObjectURL(file);
        },
        getdata() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    this.pelanggan = response.data;
                });
        }
    }
};
</script>
<style scoped>
#preview {
    display: flex;
    justify-content: center;
    align-items: center;
}

#preview img {
    max-width: 50px;
    max-height: 300px;
}
</style>