<template>
    <div class="user">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text center ml-10">
                            Daftar Kode Akun Pengguna
                        </h3>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class=" col-md-6 text-center">
                        <div class="panel panel-danger contact-card card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <div class="pull-left user-img-wrap mr-15">
                                        <img class="card-user-img img-circle pull-left" src="../../assets/user.png" />
                                    </div>
                                    <div class="pull-left user-detail-wrap">
                                        <span class="block card-user-name">
                                            Pelanggan
                                        </span>
                                        <span class="block card-user-desn">
                                            customer
                                        </span>
                                    </div>
                                </div>
                                <div class="pull-right">
                                    <a class="pull-left inline-block mr-15" href="#">
                                        <i class="zmdi zmdi-edit txt-light"></i>
                                    </a>
                                    <a class="pull-left inline-block mr-15" href="#">
                                        <i class="zmdi zmdi-delete txt-light"></i>
                                    </a>
                                    <div class="pull-left inline-block dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false" role="button"><i class="zmdi zmdi-more-vert txt-light"></i></a>
                                        <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-reply" aria-hidden="true"></i>Full Info</a></li>
                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-share" aria-hidden="true"></i>Send Message</a></li>
                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-trash" aria-hidden="true"></i>Follow</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body row">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                   consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                   proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <hr class="light-grey-hr mt-20 mb-20" />
                                    <div class="emp-detail pl-15 pr-15">
                                        <div class="mb-5">
                                             <router-link to="/kode_akun_pelanggan">
                                            <button type="button" class="btn btn-primary">Lihat Disini</button>
                                        </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-md-6 text-center">
                        <div class="panel panel-danger contact-card card-view">
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <div class="pull-left user-img-wrap mr-15">
                                        <img class="card-user-img img-circle pull-left" src="../../assets/user.png" />
                                    </div>
                                    <div class="pull-left user-detail-wrap">
                                        <span class="block card-user-name">
                                            Pegawai
                                        </span>
                                        <span class="block card-user-desn"> 
                                            employee
                                        </span>
                                    </div>
                                </div>
                                <div class="pull-right">
                                    <a class="pull-left inline-block mr-15" href="#">
                                        <i class="zmdi zmdi-edit txt-light"></i>
                                    </a>
                                    <a class="pull-left inline-block mr-15" href="#">
                                        <i class="zmdi zmdi-delete txt-light"></i>
                                    </a>
                                    <div class="pull-left inline-block dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false" role="button"><i class="zmdi zmdi-more-vert txt-light"></i></a>
                                        <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-reply" aria-hidden="true"></i>Full Info</a></li>
                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-share" aria-hidden="true"></i>Send Message</a></li>
                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem"><i class="icon wb-trash" aria-hidden="true"></i>Follow</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body row">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                   consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                   proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <hr class="light-grey-hr mt-20 mb-20" />
                                    <div class="emp-detail pl-15 pr-15">
                                        <div class="mb-5">
                                         <router-link to="/kode_akun_pegawai">
                                            <button type="button" class="btn btn-primary">Lihat Disini</button>
                                        </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- tutup container -->
            
                <div class="row">
                    <div class="col-md-12"></div>
                </div>
                <!-- Footer -->
                <!-- /Footer -->
            </div>
        </div>
    </div>
</template>