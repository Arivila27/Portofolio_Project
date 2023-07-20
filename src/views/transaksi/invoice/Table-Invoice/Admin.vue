<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-dark">Data Invoice</h6>
            </div>
            <div class="pull-right">
                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-replay"></i>
                </a>
                <a href="#" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-fullscreen"></i>
                </a>
                <router-link to="/tambah_invoice" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-file-plus"></i>
                </router-link>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div class="form-group col-md-12">
                <div class="pull-right">
                    <input type="text" class="form-control" v-model="cari">
                </div>
            </div>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Nomor</th>
                        <th scope="col">Kode</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Item</th>
                        <th scope="col">Type</th>
                        <th scope="col">Debit</th>
                        <th scope="col">Kredit</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(beli,index) in Displayedinvoice" :key="beli._id">
                        <th>{{index + 1}}</th>
                        <th>{{beli.invoice_kode}}</th>
                        <th>{{beli.invoice_tanggal}}</th>
                        <th>{{beli.invoice_item}}</th>
                        <td v-if="beli.invoice_type === 'Debit'"><span class="label label-warning">{{beli.invoice_type}}</span></td>
                        <td v-else-if="beli.invoice_type === 'Kredit'"><span class="label label-success">{{beli.invoice_type}}</span></td>
                        <td>{{beli.invoice_debit}}</td>
                        <td>{{beli.invoice_kredit}}</td>
                        <td>
                            <router-link :to="{name:'detail_invoice',params:{id:beli._id}}">Lihat</router-link>
                            <!--  :to="{name: 'Edit', params: { id: item._id }}" -->
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="clearfix btn-group col-md-6 offset-md-5">
                <button type="button" class="btn btn-sm btn-success" v-if="page != 1" @click="page--">
                    Previous</button> <button type="button" class="btn btn-sm btn-success" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" v-bind:key="pageNumber"> {{pageNumber}}
                </button>
                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-success"> NEXT </button>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>