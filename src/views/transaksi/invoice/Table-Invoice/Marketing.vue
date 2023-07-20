<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-light">Data invoice</h6>
            </div>
            <div class="pull-right">
                <router-link to="/invoice" v-on:click="getdata()" class="pull-left inline-block back mr-15">
                    <i class="zmdi zmdi-arrow-left"></i>
                </router-link>
                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-replay txt-light"></i>
                </a>
                <a href="#" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-fullscreen txt-light"></i>
                </a>
                <router-link to="/tambah_invoice" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-file-plus txt-light"></i>
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
                        <th scope="col">ID</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Tempo</th>
                        <th scope="col">Status</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(invoice,index) in Displayedinvoice" :key="invoice._id">
                        <th>{{index + 1}}</th>
                        <th>{{invoice.invoice_id}}</th>
                        <th>{{invoice.invoice_issue_date}}</th>
                        <th>{{invoice.invoice_due_date}}</th>
                        <th v-if="invoice.invoice_status_ailment === 'Belum'"><span class="label label-danger">{{invoice.invoice_status_ailment}}</span></th>
                        <th v-else><span class="label label-success">{{invoice.invoice_status_ailment}}</span></th>
                        <td>{{invoice.invoice_subject}}</td>
                        <td>
                            <router-link :to="{name:'detail_invoice',params:{id:invoice._id}}">Lihat</router-link>
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