<template>
    <div class="page-wrapper">
        <div class="row">
            <div class="col-md-12">
                <button type="button" class="btn btn-primary btn-outline btn-icon left-icon" id="tidak_tampil" onclick="javascript:window.print();">
                    <i class="fa fa-print"></i><span> Print</span>
                </button>
                <div id="invoice-POS">
                    <center id="top">
                        <div class="logo">
                            <img src="../../../../assets/logo-invoice.png" style="width:85px; height:85px; display: block;
  margin-left: auto;
  margin-right: auto;">
                        </div>
                        <div class="info">
                            <h2>PT.BITNIAGA CIPTA GEMILANG</h2>
                        </div>
                        <!--End Info-->
                    </center>
                    <!--End InvoiceTop-->
                    <div id="mid">
                        <div class="info">
                            <h2>----------------------------------------</h2>
                            <p>
                                Nama :{{pelanggan.penagihan_nama}}<br>
                                ID.Pelanggan : {{pelanggan.penagihan_id_pengguna}}<br>
                                Tanggal : {{pelanggan.penagihan_tanggal_pembayaran}}
                            </p>
                        </div>
                    </div>
                    <!--End Invoice Mid-->
                    <div id="bot">
                        <h2>----------------------------------------</h2>
                        <div id="table">
                            <table>
                                <tr class="tabletitle">
                                    <td class="item" colspan="2">
                                        <h2>Barang</h2>
                                    </td>
                                    <td class="Rate">
                                        <h2>Harga</h2>
                                    </td>
                                </tr>
                                <tr class="service">
                                    <td class="tableitem" colspan="2">
                                        <p class="itemtext">Pembayaran Internet ({{pelanggan.penagihan_paket.penagihan_paket_nama}})</p>
                                    </td>
                                    <td class="tableitem">
                                        <p class="itemtext">({{pelanggan.penagihan_biaya.penagihan_biaya_total | currency}})</p>
                                    </td>
                                </tr>
                                <tr class="tabletitle">
                                    <td class="Rate" colspan="3">
                                        <h2>Total: ({{pelanggan.penagihan_biaya.penagihan_biaya_total | currency}})</h2>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <h2>----------------------------------------</h2>
                        <!--End Table-->
                    </div>
                    <!--End InvoiceBot-->
                </div>
                <!--End Invoice-->
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
            alamat: 'DSN.Ringgit RT/RW:03/06 DS.Kembang Ringgit Kec.Pungging Mojokerto, 61384 Jawa Timur'
        }
    },
    created() {
        this.getdata();
    },
    methods: {
        async cobaprint() {
            await this.$htmlToPaper('invoice-POS');
        },
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

@media print {
    .page-break {
        margin-bottom: 50px;
        display: block;
        page-break-before: avoid;
        /*margin: min;*/
        /*margin-left: 10px;*/
    }

    #invoice-POS #top .logo {
        height: 60px;
        width: 60px;
        background-size: 60px 60px;
    }

    #tidak_tampil {
        display: none;
    }

    #preview {
        display: flex;
        justify-content: center;
        align-items: center;
    }

}

#invoice-POS {
    box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5);
    padding: 2mm;
    margin: 0 auto;
    margin-right: 50px;

    width: 44mm;
    background: #FFF;
}

#invoice-POS ::selection {
    background: #f31544;
    color: #FFF;
}

#invoice-POS ::moz-selection {
    background: #f31544;
    color: #FFF;
}

#invoice-POS h1 {
    font-size: 1.5em;
    color: #222;
}

#invoice-POS h2 {
    font-size: .9em;
}

#invoice-POS h3 {
    font-size: 1.2em;
    font-weight: 300;
    line-height: 2em;
}

#invoice-POS p {
    font-size: .7em;
    color: #666;
    line-height: 1.2em;
}

#invoice-POS #top,
#invoice-POS #mid,
#invoice-POS #bot {
    /* Targets all id with 'col-' */
    border-bottom: 1px solid #EEE;
}

#invoice-POS #top {
    min-height: 100px;
}

#invoice-POS #mid {
    min-height: 50px;
}

#invoice-POS #bot {
    min-height: 50px;
}

#invoice-POS #top .logo {
    height: 60px;
    width: 60px;
    /*background: url(http://michaeltruong.ca/images/logo1.png) no-repeat;*/
    background-size: 60px 60px;
}

#invoice-POS .clientlogo {
    float: left;
    height: 60px;
    width: 60px;
    /*background: url(http://michaeltruong.ca/images/client.jpg) no-repeat;*/
    background-size: 60px 60px;
    border-radius: 50px;
}

#invoice-POS .info {
    display: block;
    margin-left: 0;
}

#invoice-POS .info h2 {
    line-height: 20px;
}

#invoice-POS .title {
    float: right;
}

#invoice-POS .title p {
    text-align: right;
}

#invoice-POS table {
    width: 100%;
    border-collapse: collapse;
}

#invoice-POS .tabletitle {
    font-size: .8em;
    background: #EEE;
}

#invoice-POS .tabletitle .payment {
    font-size: .8em;
    background: #EEE;
}

#invoice-POS .service {
    border-bottom: 1px solid #EEE;
}

#invoice-POS .item {
    width: 24mm;
}

#invoice-POS .itemtext {
    font-size: .6em;
}

#invoice-POS #legalcopy {
    margin-top: 5mm;
}
</style>