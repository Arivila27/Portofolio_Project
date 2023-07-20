<template>
    <div class="page-wrapper">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <div class="pull-left">
                            <h6 class="panel-title txt-dark">Pembelian</h6>
                        </div>
                        <div class="pull-right">
                            <h6 class="txt-dark">{{pembelian.pembelian_no_transaksi}}</h6>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="panel-wrapper collapse in">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xs-6">
                                    <span class="txt-dark head-font inline-block capitalize-font mb-5">Billed to:</span>
                                    <address class="mb-15">
                                        <span class="address-head mb-5">{{pembelian.pembelian_shipped_to.nama}}</span>
                                        {{pembelian.pembelian_shipped_to.alamat}}<br>
                                        <abbr title="Phone"></abbr>{{pembelian.pembelian_shipped_to.telephone}}
                                    </address>
                                </div>
                                <div class="col-xs-6 text-right">
                                    <span class="txt-dark head-font inline-block capitalize-font mb-5">Shipped to:</span>
                                    <address class="mb-15">
                                        <span class="address-head mb-5">{{pembelian.pembelian_shipped_to.nama}}</span>
                                        {{pembelian.pembelian_shipped_to.alamat}}<br>
                                        <abbr title="Phone"></abbr>{{pembelian.pembelian_shipped_to.telephone}}
                                    </address>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6">
                                    <address v-if="pembelian.pembelian_verifikasi === 'Belum'">
                                        <span class="txt-dark head-font capitalize-font mb-5">Status pembelian:</span>
                                        <br>
                                        <span class="label label-warning">{{pembelian.pembelian_verifikasi}}</span><br>
                                    </address>
                                    <address v-else-if="pembelian.pembelian_verifikasi === 'Lunas'">
                                        <span class="txt-dark head-font capitalize-font mb-5">Status pembelian:</span>
                                        <br>
                                        <span class="label label-success">{{pembelian.pembelian_verifikasi}}</span><br>
                                    </address>
                                </div>
                                <div class="col-xs-6 text-right">
                                    <address>
                                        <span class="txt-dark head-font capitalize-font mb-5">Tanggal pembelian:</span>
                                        <br>{{pembelian.pembelian_created}}<br>
                                    </address>
                                </div>
                            </div>
                            <div class="seprator-block"></div>
                            <div class="invoice-bill-table">
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Nama</th>
                                                <th>Merk</th>
                                                <th>Kode</th>
                                                <th>Harga</th>
                                                <th>Jumlah</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="membeli in pembelian.pembelian_barang" :key="membeli.nama_barang">
                                                <td>{{membeli.nama_barang}}</td>
                                                <td>{{membeli.merk_barang}}</td>
                                                <td>{{membeli.kode_barang}}</td>
                                                <td>{{membeli.harga_barang}}</td>
                                                <td>{{membeli.quanty_barang}}</td>
                                                <td>{{membeli.total_barang}}</td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>RP.Subtotal</td>
                                                <td>RP.{{pembelian.pembelian_subtotal}}</td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>PPN</td>
                                                <td>RP.{{pembelian.pembelian_ppn}}</td>
                                            </tr>
                                            <tr class="txt-dark">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>Total</td>
                                                <td>RP.{{pembelian.pembelian_total}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="button-list pull-right">
                                    <router-link to="/pembelian" class="btn btn-success mr-10">
                                        Kembali
                                    </router-link>
                                    <button type="button" class="btn btn-primary btn-outline btn-icon left-icon" onclick="javascript:window.print();">
                                        <i class="fa fa-print"></i><span> Print</span>
                                    </button>
                                    <button class="btn btn-danger" @click="handler()">Tambah</button>
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
import API from '../../../api.config'
export default {
    data() {
        return {
            pembelian: {},
        }
    },
    created() {
        this.getpembelian();
    },
    methods: {
        getpembelian() {
            axios.get(API + `/Tr_pembelian/${this.$route.params.id}`)
                .then((response) => {
                    this.pembelian = response.data;
                });
        },
        additem() {
            for (var i = 0; i < this.pembelian.pembelian_barang.length; i++) {
                let newItem = {
                    item_kode_barang:this.pembelian.pembelian_barang[i].kode_barang,
                    item_nama: this.pembelian.pembelian_barang[i].nama_barang,
                    item_merk:this.pembelian.pembelian_barang[i].merk_barang,
                    item_stok:this.pembelian.pembelian_barang[i].quanty_barang,
                    item_harga:this.pembelian.pembelian_barang[i].harga_barang,
                    item_total:this.pembelian.pembelian_barang[i].total_barang,
                    item_kategori:"Barang",
                    item_status:"Y",
                    item_supplier:{
                        supplier_nama:this.pembelian.pembelian_supplier.supplier_nama,
                        supplier_nama_perusahaan:this.pembelian.pembelian_supplier.supplier_nama_perusahaan,
                        supplier_telephone_perusahaan:this.pembelian.pembelian_supplier.supplier_telephone_perusahaan
                    },
                    item_created: new Date().toISOString().slice(0, 10),
                    item_update:new Date().toISOString().slice(0, 10)

                }
                axios.post(API + '/M_item', newItem)
                    .then(() => {
                        this.$router.push('/pembelian');
                    });
            }
        },
        ubahpembelian(){
            let newPembelian = {
                pembelian_updated: new Date().toISOString().slice(0, 10),
                pembelian_verifikasi: "Lunas"
            }
            axios.put(API + `/Tr_pembelian/${this.$route.params.id}`,newPembelian)
            .then(() =>{
                 this.$swal("Berhasil","Berhasil Memverifikasi Item","success");
            });
        },
        handler(){
            this.additem();
            this.ubahpembelian();
        }
    }
}
</script>