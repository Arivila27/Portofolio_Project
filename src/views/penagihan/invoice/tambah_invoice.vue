<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row"></div>
            <div class="row">
                <h3>&nbsp;</h3>
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <h6>Tambah data invoice</h6>
                    </div>
                    <div class="panel-body">
                        <div class="form-wrap">
                            <div class="col-md-12">
                                <form @submit.prevent="addinvoice">
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <h6 class="txt-dark cthis.$APItalize-font"><i class="zmdi zmdi-account mr-10"></i>Pelanggan</h6>
                                            <hr class="light-grey-hr" />
                                            <div class="clearfix"></div>
                                            <label for="">Pelanggan</label>
                                            <multiselect v-model="invoice.pengguna_nama" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pelanggan" :taggable="true"></multiselect>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="">Lokasi kirim</label>
                                            <input v-model="invoice.lokasi_kirim" type="text" class="form-control">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="">Nama bank</label>
                                            <input type="text" class="form-control" v-model="invoice.nama_bank">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="">No.Rekening</label>
                                            <input type="number" class="form-control" v-model="invoice.no_rekening">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="">Jatuh tempo</label>
                                            <input type="date" class="form-control" v-model="invoice.tempo">
                                        </div>
                                    </div>
                                    <div class="form-row" hidden>
                                        <div class="form-group col-md-4"><label for="">Created</label><input type="date" class="form-control" v-model="invoice.created"></div>
                                        <div class="form-group col-md-4"><label for="">Updated</label><input type="date" class="form-control" v-model="invoice.updated"></div>
                                        <div class="form-group col-md-4"><label for="">User updated</label><input type="text" class="form-control" v-model="invoice.user_updated"></div>
                                    </div>
                                    <div class="form-row col-md-12">
                                        <h6 class="txt-dark cthis.$APItalize-font"><i class="zmdi zmdi-account mr-10"></i>Barang</h6>
                                        <hr class="light-grey-hr" />
                                        <div class="form-group col-md-12">
                                            <div class="panel panel-default card-view panel-refresh">
                                                <div class="refresh-container"></div>
                                                <div class="panel-heading">
                                                    <div class="pull-left">
                                                        <h6 class="panel-title txt-dark">Keranjang</h6>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                                <div class="panel-body">
                                                    <table class="table table-borderless">
                                                        <thead>
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Nama</th>
                                                                <th>Stok</th>
                                                                <th>Harga</th>
                                                                <th>Total harga</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(item,k) in barang" :key="k">
                                                                <td>{{k + 1}}</td>
                                                                <td><input type="text" class="form-control" v-model="item.nama_barang"></td>
                                                                <td><input type="number" class="form-control" v-model="item.quanty_barang"></td>
                                                                <td><vue-numeric currency="Rp." separator="," class="form-control" v-model="item.harga"/></td>
                                                                <td><vue-numeric currency="Rp." separator="," class="form-control" v-model="item.total_harga"/></td>
                                                                <td><button class="btn btn-danger btn-sm" @click.prevent="remove(k)" v-show="k || ( !k &&  barang.length > 1)"><i class="fa fa-minus"></i></button></td>
                                                                <td><button class="btn btn-primary btn-sm" @click.prevent="add(k)" v-show="k == barang.length-1"><i class="fa fa-plus"></i></button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row col-md-12">
                                        <div class="form-group col-md-6">
                                            <label for="">PPn</label>
                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model="ppn"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="">Total</label>
                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model="subtotal"/>
                                        </div>
                                    </div>
                                    <div class="form-row col-md-12">
                                        <div class="form-group col-md-12">
                                            <label for="">Total</label>
                                            <vue-numeric currency="Rp." separator="," class="form-control" v-model="total"/>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="col-md-2">
                                        <button type="submit" class="btn btn-primary">Tambah</button>
                                    </div>
                                    <div class="col-md-2">
                                        <router-link to="/invoice" class="btn btn-danger">
                                            Kembali
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
<script>
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    data() {
        return {
            ppn: 0 ,
            barang: [{
                nama_barang: '',
                deskripsi_barang: '',
                quanty_barang: '',
                harga: '',
                total_harga: 0
            }],
            pelanggan: [],
            invoice: {
                pengguna_nama: '',
                lokasi_kirim: '',
                nama_bank: '',
                no_rekening: '',
                tempo: '',
                created: new Date().toISOString().slice(0, 10),
                updated: new Date().toISOString().slice(0, 10),
                user_updated: ''
            },
        }
    },
    beforeUpdate(){
        this.gettotal();
    },
    mounted() {
        this.getpelanggan()
    },
    computed: {
        subtotal: function() {
            var subtotal = 0
            for (var i = 0; i < this.barang.length; i++) {
               subtotal +=this.barang[i].total_harga;
            }
            return subtotal;
        },
        total: function(){
           return this.subtotal - this.ppn;
        }

    },
    methods: {
        gettotal(){
            for (let i = 0; i < this.barang.length; i++) {
               const lom = this.barang[i];
               this.barang[i].total_harga = lom.quanty_barang * lom.harga;
            }
        },
        add(index) {
            this.barang.push({ 
                nama_barang: '',
                deskripsi_barang:'',
                quanty_barang:'',
                harga:'',
                total_harga: 0
            });
        },
        remove(index) {
            this.barang.splice(index, 1);
        },
        getpelanggan() {
            this.$http.get(this.$API +'/M_pengguna/pelanggan')
                .then((response) => {
                    this.pelanggan = response.data
                });
        },
        addinvoice() {
            let invoker = {
                invoice_pelanggan: this.invoice.pengguna_nama,
                invoice_lokasi_kirim: this.invoice.lokasi_kirim,
                invoice_nama_bank: this.invoice.nama_bank,
                invoice_no_rekening: this.invoice.no_rekening,
                invoice_dibuat: this.invoice.created,
                invoice_tempo: this.invoice.tempo,
                invoice_created: this.invoice.created,
                invoice_updated: this.invoice.updated,
                invoice_user_updated: this.invoice.user_updated,
                invoice_status_bayar: "Belum",
                invoice_status: "Y",
                invoice_transaksi: this.barang,
                invoice_transaksi_ppn: this.ppn,
                invoice_subtotal_transaksi: this.subtotal,
                invoice_total_transaksi: this.total

            }
            this.$http.post(this.$API +'/Tr_invoice', invoker)
                .then(() => {
                    this.$router.push("/invoice");
                });
        }
    }

};
</script>