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
                                  {{pembelian.pembelian_shipped_to.alamat}} <br>
                                    <abbr title="Phone"></abbr>{{pembelian.pembelian_shipped_to.telephone}}
                                </address>
                            </div>
                            <div class="col-xs-6 text-right">
                                <span class="txt-dark head-font inline-block capitalize-font mb-5">shiped to:</span>
                                <address class="mb-15">
                                    <span class="address-head mb-5">{{pembelian.pembelian_shipped_to.nama}}</span>
                                       {{pembelian.pembelian_shipped_to.alamat}}<br>
                                    <abbr title="Phone"></abbr>{{pembelian.pembelian_shipped_to.telephone}}
                                </address>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <address>
                                    <span class="txt-dark head-font capitalize-font mb-5">Payment Method:</span>
                                    <br>
                                    Bank:321321321<br>
                                    No.rekening:321321321
                                </address>
                            </div>
                            <div class="col-xs-6 text-right">
                                <address>
                                    <span class="txt-dark head-font capitalize-font mb-5">order date:</span><br>
                                 {{pembelian.pembelian_created}}<br><br>
                                </address>
                            </div>
                        </div>
                        <div class="seprator-block"></div>
                        <div class="invoice-bill-table">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Totals</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="phi in pembelian.pembelian_barang">
                                            <td>{{phi.nama_barang}}</td>
                                            <td>{{phi.harga_barang | currency}}</td>
                                            <td>{{phi.quanty_barang}}</td>
                                            <td>{{phi.total_barang | currency}}</td>
                                        </tr>
                                        <tr class="txt-dark">
                                            <td></td>
                                            <td></td>
                                            <td>Subtotal</td>
                                            <td>{{pembelian.pembelian_subtotal | currency}}</td>
                                        </tr>
                                        <tr class="txt-dark">
                                            <td></td>
                                            <td></td>
                                            <td>PPN</td>
                                            <td>{{pembelian.pembelian_ppn | currency}}</td>
                                        </tr>
                                        <tr class="txt-dark">
                                            <td></td>
                                            <td></td>
                                            <td>Total</td>
                                            <td>{{pembelian.pembelian_total | currency}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="button-list pull-right">
                                <button type="submit" class="btn btn-success mr-10">
                                    Proceed to payment
                                </button>
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
import API from '../../../api.config'
export default {
	data(){
		return{
			pembelian:{},
            lila: {
            	kunci1 : 'sans',
            	kunci2:'gak sans',
            	kunci3:'gopo'
            }
		}
	},
	created:function(){
		this.getpembelian();
	},
    computed:{
    	pembelianlength:function(){
    		if (this.pembelian) {
    			return pembelian.length
    		}
    		return '' + console.log(pembelian.length)

    	}
    },
	methods:{
		getpembelian(){
			axios.get(API +`/Tr_pembelian/${this.$route.params.id}`)
			.then((response) =>{
				console.log(response.data.length);
				this.pembelian = response.data;
				console.log('########### AXIOS: ', response.data.length);
			})
			.catch((error) =>{
				console.log(error);
			});
		}
        // perolehan:function(){
        //     for (var i = 0; i < this.pembelian.pembelian_barang.length; i++) {
        //         const phila = this.pembelian.pembelian_barang[i];
        //         this.pembelian.pembelian_barang[i].nama_barang = phila.nama_barang
                
        //     }
        // }
	}
};
</script>