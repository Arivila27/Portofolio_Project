<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h1><b>Edit Data tunjangan</b></h1>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <form>
                        <div class="form-row">
                             <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputname">Nama Barang</label>
                                <input type="text" class="form-control" id="inputname" placeholder="Nama Barang">
                            </div>
                             <div class="form-group col-md-4">
                                <label for="inputstok">Stok</label>
                                <input type="number" class="form-control" id="inputstok" placeholder="Stok Barang">
                            </div>
                        </div>
                        <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputAddress">Keterangan Barang</label>
                            <textarea name="" id="" class="form-control" cols="30" rows="10"></textarea>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="Databarang">Data Barang Dibuat</label>
                            <input type="date" class="form-control" id="Databarang" >
                        </div>
                         <div class="form-group col-md-4">
                            <label for="item">Data Barang Diupdate</label>
                            <input type="text" class="form-control" id="item" placeholder="Apartment, studio, or floor">
                        </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="hargasatuan">Harga Satuan</label>
                                <input type="text" class="form-control" id="hargasatuan">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="admin">Siapa Yang Mengupdate/Membuat</label>
                                <select id="admin" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputstatus">Status Barang</label>
                                <input type="text" class="form-control" id="inputstatus" value="Y" disabled="true">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <button type="submit" class="btn btn-primary">Tambah</button>
                        </div>
                        <div class="col-md-2">
                            <router-link to="/tunjangan">
                                <button type="button" class="btn btn-danger">Kembali</button>
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>