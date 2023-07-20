<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h1><b>Tambah Data user</b></h1>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <form>
                        <div class="form-row">
                             <div class="form-group col-md-4">
                                <label for="inputState">Divis</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-md-8">
                                <label for="inputname">Nama</label>
                                <input type="text" class="form-control" id="inputname" placeholder="Nama">
                            </div>
                        </div>
                        <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputAddress"> Keterangan User</label>
                            <textarea name="" id="" class="form-control" cols="30" rows="10"></textarea>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="Databarang">Data User Dibuat</label>
                            <input type="date" class="form-control" id="Databarang" >
                        </div>
                         <div class="form-group col-md-4">
                           <label for="inputState">Tipe Pengguna</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                        </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                 <label for="inputState">Jenis Kelamin</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="admin">Siapa Yang Mengupdate/Membuat</label>
                                <select id="admin" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputstatus">Status Aktif</label>
                                <input type="text" class="form-control" id="inputstatus" value="Y" disabled="true">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <button type="submit" class="btn btn-primary">Tambah</button>
                        </div>
                        <div class="col-md-2">
                            <router-link to="/user">
                                <button type="button" class="btn btn-danger">Kembali</button>
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        
    };
</script>