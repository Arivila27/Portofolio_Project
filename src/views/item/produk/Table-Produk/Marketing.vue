<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-dark">Produk</h6>
            </div>
            <div class="pull-right">
                <router-link to="/item" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-arrow-left"></i>
                </router-link>
                <a href="#" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-replay"></i>
                </a>
                <a href="#" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-fullscreen"></i>
                </a>
                <router-link to="/tambah_item" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-file-plus"></i>
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
            <table class="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Kode</th>
                        <th>Show/Hide</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" (barang,index) in displayedProduk" :key="barang._id">
                        <td>{{index + 1}}</td>
                        <td>{{barang.item_kode}}</td>
                        <td>{{barang.item_show}}</td>
                        <td>{{barang.item_nama}}</td>
                        <td>{{barang.item_harga | currency}}</td>
                        <td>
                            <div class="pull-right">
                                <div class="dropdown  pull-left">
                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                    </a>
                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                        <li role="presentation">
                                            <router-link :to="{name:'edit_produk',params:{id:barang._id}}" role="menuitem" data-toggle="modal"><i class="icon wb-reply" aria-hidden="true"></i> Update</router-link>
                                        </li>
                                        <li role="presentation"><a @click="detail(barang)" role="menuitem" data-toggle="modal" data-target="#hapusprodukadmin"><i class="icon wb-share" aria-hidden="true"></i> Delete</a></li>
                                        <li role="presentation"><a @click="detail(barang)" role="menuitem" data-toggle="modal" data-target="#hideprodukadmin"><i class="icon wb-share" aria-hidden="true"></i> Hide</a></li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <div class="modal fade bs-example-modal-sm" id="hapusprodukadmin" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog ">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h5 class="modal-title" id="myModalLabel">Hapus Produk</h5>
                                </div>
                                <div class="modal-body">
                                    <h5 class="mb-15">{{barang.item_nama}}</h5>
                                    <p>Apakah ingin menghapus {{barang.item_nama}} ?</p>
                                    <input type="hidden" class="form-control" v-model="barang._id">
                                    <input type="hidden" class="form-control">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteds">Iya</button>
                                    <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                            <!-- /.modal-content -->
                        </div>
                    </div>
                     <div class="modal fade bs-example-modal-sm" id="hideprodukadmin" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog ">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h5 class="modal-title" id="myModalLabel">Hide Produk</h5>
                                </div>
                                <div class="modal-body">
                                    <h5 class="mb-15">{{barang.item_nama}}</h5>
                                    <p>Apakah ingin menghide produk {{barang.item_nama}} ?</p>
                                    <input type="hidden" class="form-control" v-model="barang._id">
                                    <input type="hidden" class="form-control">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal" @click="hides">Iya</button>
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
</template>
<script src="./Service/Marketing"></script>