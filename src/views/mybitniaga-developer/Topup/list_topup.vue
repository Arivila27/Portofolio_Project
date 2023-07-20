<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view panel-refresh">
                            <div class="refresh-container">
                                <div class="la-anim-1"></div>
                            </div>
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-dark">TOPUP</h6>
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
                                            <th>Pengguna_id</th>
                                            <th>ID_pengguna</th>
                                            <th>ID_topup</th>
                                            <th>Virtual_Account</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(topup,index) in DisplayedMybitniagaTopup" v-bind:key="topup._id">
                                            <td>{{index + 1}}</td>
                                            <td>{{topup.pengguna_id}}</td>
                                            <td>{{topup._id_pengguna}}</td>
                                            <td>{{topup.idtopup}}</td>
                                            <td>{{topup.virtual_account}}</td>
                                            <td>{{topup.status}}</td>
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
                    </div>
                </div>
                <!-- Footer -->
                <!-- /Footer -->
            </div>
        </div>
    </div>
</template>
<script src="./Service/list_topup"></script>