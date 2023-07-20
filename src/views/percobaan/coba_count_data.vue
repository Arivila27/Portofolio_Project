<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <ul class="list-group">
                    <li v-for="product in products" class="list-group-item">
                        {{ product.name }} {{ product.price }}
                        <div class="pull-right">
                            <button v-show="notInCart(product)" v-on:click=" addToCart(product)" class="btn btn-xs btn-primary">
                                +
                            </button>
                            <span v-show="!notInCart(product)" class="glyphicon glyphicon-ok-circle text-success"></span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-shopping-cart"></span>
                        Total (<span v-text="total"></span>)
                    </div>
                    <div class="panel-body">
                        <form @submit.prevent="tambah">
                            <span v-show="!count" class="text-muted">Cart empty</span>
                            <li v-for="item in cart_items" class="list-group-item">
                                {{ item.qty }} &times; {{ item.name }} {{ item.price }}
                                <input type="text" v-model="item.qty">
                                <input type="text" v-model="item.name">
                                <input type="text" v-model="item.price">
                                <div class="pull-right">
                                    <button v-on:click="decQty(item)" class="btn btn-xs btn-default">
                                        -
                                    </button>
                                    <button v-on:click="addQty(item)" class="btn btn-xs btn-default">
                                        +
                                    </button>
                                </div>
                            </li>
                            <button type="submit">Tambah</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            products: [
                { 'id': 1, 'name': 'Product 1', 'price': 12.95 },
                { 'id': 2, 'name': 'Other product', 'price': 4.35 }
            ],
            cart_items: [],
            sip: '',
            trans_dapet:''
        }
    },
    methods: {
        tambah() {
            let sip = {
                Transfer_dir: {
                    tran_dapet: this.trans_dapet
                }
            }
            console.log(sip);
            axios.post('http://localhost:5000/Tr_transfer', sip)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    },
    computed: {
        count: function() {
            return this.cart_items.length;
        },
        total: function() {
            return _.reduce(this.cart_items, function(n, cart_item) {
                return cart_item.price * cart_item.qty + n;
            }, 0).toFixed(2);
        }
    },
    methods: {
        notInCart: function(product) {
            var ids = _.pluck(this.cart_items, 'id');
            return !_.contains(ids, product.id);
        },
        addToCart: function(product) {
            var cart = Vue.util.extend({}, product);
            var ids = _.pluck(this.cart_items, 'id');

            if (!_.contains(ids, product.id)) {
                cart.qty = 1;
                this.cart_items.push(cart);
            }
        },
        addQty: function(product) {
            product.qty = product.qty + 1;
        },
        decQty: function(product) {
            product.qty -= 1;
            if (product.qty <= 0) {
                this.cart_items.$remove(product);
            }
        }
    }
};
</script>