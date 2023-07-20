<template>
    <div class="pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
                <!-- /Row -->
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="refresh-container">
                            <div class="la-anim-1"></div>
                        </div>
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Pemasukan</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/trkasbank" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-arrow-left"></i>
                                </router-link>
                                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                                    <i class="zmdi zmdi-replay"></i>
                                </a>
                                <a href="#" class="pull-left inline-block full-screen mr-15">
                                    <i class="zmdi zmdi-fullscreen"></i>
                                </a>
                                <router-link to="/tambah_pemasukan">
                                    <a href="#" class="pull-left inline-block">
                                        <i class="zmdi zmdi-file-plus"></i>
                                    </a>
                                </router-link>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div class="form-group col-md-12">
                                <div class="pull-right">
                                    <input type="text" class="form-control" v-model="cari" placeholder="Search">
                                </div>
                            </div>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Tanggal</th>
                                        <th scope="col">No.Referensi</th>
                                        <th scope="col">Pengirim</th>
                                        <th scope="col">Penerima</th>
                                        <th scope="col">Deskripsi</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(pemasukan,index) in Displayedpemasukan" :key="pemasukan._id">
                                        <th>{{index + 1}}</th>
                                        <td>{{pemasukan.pemasukan_tanggal}}</td>
                                        <td>{{pemasukan.pemasukan_no}}</td>
                                        <td>{{pemasukan.pemasukan_pengirim.username}}</td>
                                        <td>{{pemasukan.pemasukan_penerima.kode_akun_nama}}</td>
                                        <td>{{pemasukan.pemasukan_deskripsi}}</td>
                                        <td>{{pemasukan.pemasukan_status_aktiv}}</td>
                                        <td>
                                            <div class="pull-right">
                                                <div class="dropdown  pull-left">
                                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                        <li role="presentation"><router-link :to="{name:'edit_pemasukan',params:{id:pemasukan._id}}" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-reply" aria-hidden="true"></i>Update</router-link></li>
                                                        <li role="presentation"><router-link :to="{name:'pemasukan_invoice',params:{id:pemasukan._id}}"  role="menuitem" data-toggle="modal" data-target=".bs-example-modal-lg"><i class="icon wb-reply" aria-hidden="true"></i>Invoice</router-link></li>
                                                        <li role="presentation"><a href="javascript:void(0)" @click="detail(pemasukan)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="icon wb-share" aria-hidden="true"></i>Hapus</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <div class="modal fade bs-example-modal-sm" id="hapus" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog ">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h5 class="modal-title" id="myModalLabel">Hapus Departmen</h5>
                                                </div>
                                                <div class="modal-body">
                                                    <h5 class="mb-15"></h5>
                                                    <p>Apakah Anda Yakin Ingin Menghapus <b>{{selectedPemasukan.pemasukan_no}}</b> ?</p>
                                                    <input type="hidden" class="form-control" v-model="selectedPemasukan._id">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteds">Iya</button>
                                                    <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                    </div>
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
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import API from '../../../../api.config'
export default {
    data(){
        return {
            cari:'',
            pemasukan:[],
            page: 1,
            perpage:10,
            pages:[],
            selectedPemasukan:''
        }
    },
    created(){
        this.getdata()
    },
    watch:{
        pemasukan(){
            this.setPage()
        }
    },
    methods:{
        detail(pemasukan){
            this.selectedPemasukan = pemasukan
        },
        deleteds(){
            axios.put(API + `/Tr_pemasukan/${this.selectedPemasukan._id}`,{
                pemasukan_status:"N",
                pemasukan_updated:new Date().toISOString().slice(0, 10)
            })
            .then(() =>{
                this.$swal('Berhasil','Berhasil menghapus data','success');
                this.getdata()
            });
        },
        getdata(){
            axios.get(API + '/Tr_pemasukan')
            .then((response) =>{
                this.pemasukan = response.data
            });
        },
        setPage() {
            let numberOfPages = Math.ceil(this.Filterpemasukan.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(Filterpemasukan) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return Filterpemasukan.slice(from, to)
        },
    },
    computed:{
        Filterpemasukan:function(){
            return this.pemasukan.filter((pemasukan) =>{
            return pemasukan.pemasukan_no.match(this.cari)
            });
        },
        Displayedpemasukan:function(){
            return this.paginate(this.Filterpemasukan)
        }
    }
};
</script>