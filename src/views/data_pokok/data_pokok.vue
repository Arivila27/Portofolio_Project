<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <div class="pull-left">
                            <h6 class="txt-light">Data Pokok Perusahaan</h6>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="panel-wrapper collapse in">
                        <form @submit.prevent="updatePokok">
                            <div class="panel-body">
                                <div class="form-wrap">
                                    <div class="col-md-12">
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="nama">Kode Perusahaan</label>
                                                <input type="text" class="form-control" v-model="data_pokok.domain_kode" disabled>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="nama">Moto Perusahaan</label>
                                                <input type="text" class="form-control" v-model="data_pokok.domain_moto">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="nama">Nama Perusahaan</label>
                                                <input type="text" class="form-control" v-model="data_pokok.domain_nama">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="nama">Kabupaten</label>
                                                <input type="text" class="form-control" v-model="data_pokok.domain_kabupaten" disabled>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="nama">Nama Owner</label>
                                                <input type="text" class="form-control" v-model="data_pokok.domain_owner">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="total">No.Hp</label>
                                                <input type="number" class="form-control" v-model="data_pokok.domain_phone">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="total">Alamat</label>
                                                <input type="text" class="form-control" v-model="data_pokok.domain_alamat">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="total">Email</label>
                                                <input type="text" class="form-control" v-model="data_pokok.domain_email">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="total">No.Kantor</label>
                                                <input type="number" class="form-control" v-model="data_pokok.domain_office_phone">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <button class="btn btn-success ml-5">Update</button>&nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/data_pokok"></script>