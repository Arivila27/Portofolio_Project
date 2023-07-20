<template>
    <div class="panel panel-default card-view">
        <div class="panel-heading">
            <h6>Mengajukan Withdrawal</h6>
        </div>
        <div class="clearfix"></div>
        <div class="panel-wrapper collapse in">
            <form @submit.prevent="addProject">
                <div class="panel-body">
                    <div class="form-wrap">
                        <div class="col-md-12">
                            <div class="form-row">
                                <label>Bukti Transfer</label>
                                <input type="file" ref="file" id="file" class="form-control" v-on:change="handleupload()">
                            </div>
                            <div class="form-row">
                            </div>
                            <div class="form-row">
                                <button class="btn btn-success ml-5">Submit</button>&nbsp;
                                <router-link to="/list_wd" class="btn btn-danger">Kembali</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script src="./Service/upload_wd"></script>