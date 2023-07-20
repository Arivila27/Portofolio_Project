<template>
    <div class="page-wrapper">
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
                                        </span><img src="../../../../assets/new_logo.png" width="128" height="128"><br>
                                        <br><br>
                                    </address>
                                </div>
                                <div class="col-xs-6 text-center">
                                    <address>
                                        <span class="txt-dark head-font capitalize-font mb-5">{{data_pokok.domain_nama}}</span>
                                        <p><b>{{data_pokok.domain_moto}}</b></p>
                                        <p class="small">Phone:{{data_pokok.domain_office_phone}} Email:{{data_pokok.domain_email}}</p>
                                        <p class="small">{{data_pokok.domain_alamat}}</p>
                                    </address>
                                </div>
                                <div class="col-xs-3 text-right">
                                    <address>
                                        <span class="txt-dark head-font capitalize-font mb-5">Tanggal,{{sekarang}}</span>
                                        <p> Kepada Yth.</p>
                                        <h6 class="txt-dark head-font capitalize-font mb-5">{{pelanggan.penagihan_nama}}</h6>
                                        <h6>ID.({{pelanggan.penagihan_id_pengguna}})</h6>
                                    </address>
                                </div>
                            </div>
                            <div class="invoice-bill-table">
                                <!-- <b>Nota No: JDN-320</b> -->
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Banyaknya</th>
                                                <th>Uraian</th>
                                                <th>Harga</th>
                                                <th>Keterangan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>{{pelanggan.penagihan_paket.penagihan_paket_nama}}</td>
                                                <td>{{pelanggan.penagihan_paket.penagihan_paket_harga | currency}}</td>
                                                <td>{{pelanggan.penagihan_keterangan}}</td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td>Subtotal</td>
                                                <td><b>{{pelanggan.penagihan_paket.penagihan_paket_harga | currency}}</b></td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td>PPN</td>
                                                <td>{{pelanggan.penagihan_biaya.penagihan_biaaya_ppn | currency}}</td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td>Admin</td>
                                                <td>{{pelanggan.penagihan_biaya.penagihan_biaya_tambahan |currency}}</td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td>Total Rp.</td>
                                                <td><b>{{pelanggan.penagihan_biaya.penagihan_biaya_total | currency}}</b></td>
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
import API from '../../../../api.config'
export default {
    data() {
        return {
            // urlGambar: ,
            pelanggan: {},
            sekarang: new Date().toISOString().slice(0, 10),
            tekan: false,
            perusahaan: 'PT.Bitniaga Cipta Gemilang',
            moto: 'IP BASE AND CREATIVE SOLUTION',
            no: '032103210321',
            email: 'bitniaga@gmail.com',
            website: 'www.bitniaga.com',
            alamat: 'DSN.Ringgit RT/RW:03/06 DS.Kembang Ringgit Kec.Pungging Mojokerto, 61384 Jawa Timur',
            data_pokok: {}
        }
    },
    created() {
        this.getdata();
        this.getdatapokok();
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
            axios.get(API + `/Tr_penagihan/detail/${this.$route.params.id}`)
                .then((response) => {
                    this.pelanggan = response.data;
                });
        },
        getdatapokok() {
            axios.get(API + "/M_domain/detail-2/" + this.$store.getters.domain)
                .then((response) => {
                    this.data_pokok = response.data;
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