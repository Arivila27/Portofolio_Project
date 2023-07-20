<template>
    <div class="tab-content mt-5">
        <div id="internet" class="tab-pane fade in active">
            <div class="panel panel-default card-view">
                <div class="panel-heading">
                    <h6>Tambah Pengeluaran</h6>
                </div>
                <div class="clearfix"></div>
                <div class="panel-wrapper collapse in">
                    <form @submit.prevent="addPengeluaran">
                        <div class="panel-body">
                            <div class="form-wrap">
                                <div class="col-md-12">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="">Divisi</label>
                                            <select class="form-control" v-model="pengeluaran.divisi">
                                                <option v-for="dpr in departmen" :key="dpr._id">{{dpr.pembantu_departmen_nama}}</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="">No Referensi</label>
                                            <input type="text" class="form-control" v-model="pengeluaran.no">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label>Diajukan Oleh</label>
                                            <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pengguna" v-model="pengeluaran.diajukan"></multiselect>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label>Diketahui Oleh</label>
                                            <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pengguna" v-model="pengeluaran.diketahui"></multiselect>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label>Disetujui Oleh</label>
                                            <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pengguna" v-model="pengeluaran.disetujui"></multiselect>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="">Tanggal</label>
                                            <input type="date" class="form-control" v-model="pengeluaran.tanggal">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="">Status Pengeluaran</label>
                                            <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="id" :options="status_pengeluaran" v-model="pengeluaran.status_pengeluaran"></multiselect>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="">Deskripsi</label>
                                            <textarea cols="5" rows="5" class="form-control" v-model="pengeluaran.deskripsi"></textarea>
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
</template>
<script src="./Service/Admin"></script>