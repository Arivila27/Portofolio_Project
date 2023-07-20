<template>
    <div>
        <div class="form-group col-md-12">
            <label>ID</label>
            <input type="text" class="form-control">
        </div>
        <div class="form-group col-md-12">
            <label>Tipe pelanggan</label>
            <select class="form-control">
                <option v-for="tipe in tipes" v-bind:key="tipe._id">{{tipe.pembantu_tipe_nama}}</option>
            </select>
        </div>
        <div class="form-group col-md-6">
            <label>Nama</label>
            <input type="text" class="form-control">
        </div>
        <div class="form-group col-md-6">
            <label>Alamat</label>
            <input type="text" class="form-control">
        </div>
        <div class="form-group col-md-6">
            <label>Jenis Kelamin</label>
            <select class="form-control">
                <option>Laki-Laki</option>
                <option>Perempuan</option>
            </select>
        </div>
        <div class="form-group col-md-6">
            <label>No Telepon</label>
            <input type="text" class="form-control">
        </div>
    </div>
</template>