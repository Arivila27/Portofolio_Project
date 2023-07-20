<template>
    <div class="panel panel-default card-view panel-refresh">
        <div class="refresh-container">
            <div class="la-anim-1"></div>
        </div>
        <div class="panel-heading">
            <div class="pull-left">
                <h6 class="panel-title txt-dark">Data kasbank</h6>
            </div>
            <div class="pull-right">
                <router-link to="/trkasbank" v-on:click="getdata()" class="pull-left inline-block back mr-15">
                    <i class="zmdi zmdi-arrow-left"></i>
                </router-link>
                <a href="#" v-on:click="getdata()" class="pull-left inline-block refresh mr-15">
                    <i class="zmdi zmdi-replay"></i>
                </a>
                <a href="#" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-fullscreen"></i>
                </a>
                <router-link to="/tambah_kasbank_real" class="pull-left inline-block full-screen mr-15">
                    <i class="zmdi zmdi-file-plus"></i>
                </router-link>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div class="form-group col-md-6">
                <div class="pull-left">
                    <button class="btn btn-default" @click="getkasbank">All</button> &nbsp;
                    <button class="btn btn-warning" @click="getkasbankdebit">Debit</button> &nbsp;
                    <button class="btn btn-success" @click="getkasbankkredit">Kredit</button>
                </div>
            </div>
            <div class="form-group col-md-6">
                <div class="pull-right">
                    <input type="text" class="form-control" v-model="cari">
                </div>
            </div>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Nomor</th>
                        <th scope="col">Tipe Cash</th>
                        <th scope="col">Description</th>
                        <th scope="col">Kas Awal</th>
                        <th scope="col">Type</th>
                        <th scope="col">Debit</th>
                        <th scope="col">Kredit</th>
                        <th scope="col">Saldo</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(beli, index) in Displayedkasbank" :key="beli._id">
                        <th>{{ index + 1}}</th>
                        <th>{{ beli.kasbank_tipe_cash }}</th>
                        <th>{{ beli.kasbank_description }}</th>
                        <th>{{ beli.kasbank_kasawal | currency }}</th>
                        <td v-if="beli.kasbank_type === 'Debit'"><span
                                class="label label-warning">{{ beli.kasbank_type }}</span></td>
                        <td v-else-if="beli.kasbank_type === 'Kredit'"><span
                                class="label label-success">{{ beli.kasbank_type }}</span></td>
                        <td>{{ beli.kasbank_debit | currency }}</td>
                        <td>{{ beli.kasbank_kredit | currency }}</td>
                        <td>{{ beli.kasbank_saldoakhir | currency }}</td>
                        <td>
                            <div class="pull-right">
                                <div class="dropdown  pull-left">
                                    <a class="dropdown-toggle weight-500" id="examplePanelDropdown"
                                        data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                        <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                    </a>

                                    <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                        <li role="presentation">
                                            <router-link :to="{ name: 'detail_pelanggan', params: { id: beli._id } }"><i
                                                    class="icon wb-share" aria-hidden="true"></i>Detail</router-link>
                                        </li>
                                        <li role="presentation" v-if="beli.kasbank_type === 'Debit'">
                                            <router-link :to="{ name: 'closing_debit', params: { id: beli._id, menu:beli.kasbank_menu } }"><i
                                                    class="icon wb-share" aria-hidden="true"></i>Closing Debit</router-link>
                                        </li>
                                        <li role="presentation" v-else>
                                            <router-link :to="{ name: 'closing_kredit', params: { id: beli._id, menu:beli.kasbank_menu } }"><i
                                                    class="icon wb-share" aria-hidden="true"></i>Closing Kredit</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="clearfix btn-group col-md-6 offset-md-5">
                <button type="button" class="btn btn-sm btn-success" v-if="page != 1" @click="page--">
                    Previous</button> <button type="button" class="btn btn-sm btn-success"
                    v-for="pageNumber in pages.slice(page - 1, page + 5)" @click="page = pageNumber"
                    v-bind:key="pageNumber"> {{ pageNumber }}
                </button>
                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-success"> NEXT
                </button>
            </div>
        </div>
    </div>
</template>
<script src="./Service/Marketing"></script>