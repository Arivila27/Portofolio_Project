<template>
    <div class="page-wrapper">
        <!-- Row -->
        <div class="row">
            <div class="col-sm-12">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <div class="pull-left">
                            <h6 class="panel-title txt-dark">data Table</h6>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="panel-wrapper collapse in">
                        <div class="panel-body">
                            <div class="table-wrap">
                                <div class="table-responsive">
                                    <table id="datable_1" class="table table-hover display  pb-30">
                                        <thead>
                                            <tr>
                                                <th>Kategori</th>
                                                <th>Nama</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="gudang in warehouse">
                                                <td>{{gudang.item_group}}</td>
                                                <td>{{gudang.item_nama}}</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td class="text-nowrap">
                                                    <a href="#" class="mr-5" data-toggle="tooltip" data-original-title="view"> <i class="fa fa-eye text-inverse"></i> </a>
                                                    <a href="#" class="mr-5" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse"></i> </a>
                                                    <a href="#" data-toggle="tooltip" data-original-title="delete"> <i class="fa fa-trash text-danger"></i> </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Row -->
    </div>
</template>
<script>
import axios from 'axios';
import API from '../../../api.config'
    export default{
        data(){
            return{
                warehouse:[],
            }
        },
        mounted(){
            this.getdata()
        },
        methods:{
            getdata(){
                axios.get(API + '/M_item')
                .then((response) => {
                    console.log(response);
                    this.warehouse = response.data;
                })
                .catch((error) => {
                   console.log(error); 
                });
            }
        }
    }
</script>