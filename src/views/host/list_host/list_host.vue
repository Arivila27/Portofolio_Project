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
                                <h6 class="panel-title txt-dark">List Host</h6>
                            </div>
                            <div class="pull-right">
                                <router-link to="/create_host">
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
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                            </div>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Host</th>
                                        <th scope="col">Port</th>
                                        <th scope="col">User-Winbox</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Tanggal Aktif</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(host,index) in M_host" :key="index">
                                        <th>{{index + 1}}</th>
                                        <td>{{host.name}}</td>
                                        <td>{{host.host}}</td>
                                        <td>{{host.port}}</td>
                                        <td>{{host.user_winbox}}</td>
                                        <td>{{host.password_winbox}}</td>
                                        <td>{{host.host_created}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>
<script src="./Service/list_host"></script>