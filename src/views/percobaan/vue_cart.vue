<template>
    <div class="page-wrapper">
        <div class="col-md-12 text-center"></div>
        <div class="clearfix">
            <br>
        </div>
        <div class="col-md-12">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8">
                        <div class="panel panel-default card-view panel-refresh">
                            <div class="refresh-container">
                                <div class="la-anim-1"></div>
                            </div>
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-dark">Pembelian</h6>
                                </div>
                                <div class="pull-right">
                                    <a href="#" class="pull-left inline-block full-screen mr-15">
                                        <i class="zmdi zmdi-fullscreen"></i>
                                    </a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body" style="overflow-y: scroll; min-height: 100; max-height: 400px;">
                                <div class="col-md-4" v-for="kranjang in items">
                                    <div class="panel panel-default  card-view panel-refresh">
                                        <div class="panel-heading">
                                            <div class="pull-left">
                                                <h6 class="panel-title txt-dark">&nbsp;</h6>
                                                <div class="clearfix"></div>
                                            </div>
                                        </div>
                                        <div class="panel-body" v-if="cart.item_stok === 0">
                                            <div class="panel-wrapper collapse in">
                                                <div class="panel-body row text-center">
                                                    <h6>{{cart.item_nama}}</h6>
                                                    <h6>{{cart.item_kode_barang}}</h6>
                                                    <h6>{{cart.item_harga}}</h6>
                                                    <h6 style="color: red;">Stok Habis!!!!</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel-body" v-else>
                                            <div class="panel-wrapper collapse in">
                                                <div class="panel-body row text-center">
                                                    <h6>{{cart.item_nama}}</h6>
                                                    <h6>{{cart.item_kode_barang}}</h6>
                                                    <h6>{{cart.item_harga}}</h6>
                                                    <h6>{{cart.item_stok}}</h6>
                                                    <button @click="tambahcart(cart)" class="btn btn-primary text-center"><i class="fa fa-cart-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="panel panel-default card-view panel-refresh">
                            <div class="refresh-container">
                                <div class="la-anim-1"></div>
                            </div>
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-dark">Keranjang</h6>
                                </div>
                                <div class="pull-right">
                                    <a href="#" class="pull-left inline-block full-screen mr-15">
                                        <i class="zmdi zmdi-fullscreen"></i>
                                    </a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body">
                                <div v-if="carts.length === 0">
                                    <h6>Tidak Ada cart</h6>
                                </div>
                                <form @submit.prevent="addpenjualan">
                                    <div v-show="carts.length > 0" class="row" style="min-height: 100px;max-height: 200px; overflow-y: scroll;">
                                        <table class="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th>jumlah</th>
                                                    <th>Nama</th>
                                                    <th>Harga</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(cart,k) in carts" :key="k">
                                                    <td><input type="number" class="form-control" v-model="jumlah" disabled></td>
                                                    <td>{{cart.item_nama}}</td>
                                                    <td>{{cart.item_harga}}</td>
                                                    <input type="text" class="form-control" v-model="cart.item_nama">
                                                    <input type="text" class="form-control" v-model="cart.item_harga">
                                                    <td><button class="btn btn-danger" @click="decrease(cart)"><i class="fa fa-trash"></i></button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col-md-12">
                                        <h6>total:{{total }}</h6>
                                        <input type="number" class="form-cotrol" v-model="total">
                                    </div>
                                    <button v-if="carts.length > 0" class="btn btn-success">Tambah</button>
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
export default {
    name: 'vue_cart',
    data() {
        return {
            msg: "Hello My S",
            // carts: [{
            //     jumlah_barang:0,
            //     nama_barang:'',
            //     harga_barang:0

            // }],
            carts: [],
            // cart:{

            //     item_nama:'',
            //     item_harga:''
            // },
            items: [],
            jumlah: 1,
            stock: 1
        }
    },
    created() {
        this.getbarang()
        console.log("Hello World");
        // console.log('Cartes',cart);
    },
    methods: {
        addpenjualan() {
            // for (var i = 0; i < this.cart.length; i++) {
            //     const sena = this.cart[i]
                let jual = {
                    penjualan:{
                        penjualan_hari_ini : this.cart
                    }
                }
            // }
            console.log(jual);
            axios.post('http://localhost:5000/M_item', jual)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                    this.$swal("Gagal", "gtw Kenapa", "error");
                });
        },
        getbarang() {
            axios.get('http://localhost:5000/M_item/barang')
                .then((response) => {
                    this.items = response.data;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        tambahcart(cart,index) {
            cart.item_stok -= 1;
            this.carts.push(cart);
            // jumlah:'',
            // item_nama:'',
            // item_harga:''
        },
        decrease(cart) {
            cart.item_stok += 1;
            this.carts.splice(this.carts.indexOf(cart), 1);
        }
    },
    computed: {
        total: function() {
            var total = 0;
            for (var i = 0; i < this.carts.length; i++) {
                total += parseInt(this.carts[i].item_harga, 10);
            }
            return total;
        }

    }
}
</script>