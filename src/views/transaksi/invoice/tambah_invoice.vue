<template>
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- Title -->
            <div class="row heading-bg">
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                    <h5 class="txt-light">Data Penagihan</h5>
                </div>
                <!-- Breadcrumb -->
                <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                    <ol class="breadcrumb">
                        <li><a href="index.html">Dashboard</a></li>
                        <li><a href="#"><span>Invoice</span></a></li>
                        <li class="active"><span>Tambah Invoice</span></li>
                    </ol>
                </div>
                <!-- /Breadcrumb -->
            </div>
            <!-- /Title -->
            <!-- Row -->
            <div class="row">
                <div class="col-md-12" v-show="role ==='Admin'">
                    <TambahAdmin />
                </div>
                <div class="col-md-12" v-show="role ==='Marketing'">
                    <TambahMarketing />
                </div>
            </div>
            <!-- /Row -->
        </div>
    </div>
</template>
<script src="./Service/tambah_invoice"></script>