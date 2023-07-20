<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Update Harga</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="handler">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="">Kode</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">ID.Pelanggan</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label for="">Potongan Biaya</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <h6 class="txt-dark capitalize-font">&nbsp;</h6>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Update</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/list_harga">
                                                            Kembali
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-footer">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/update_harga"></script>
