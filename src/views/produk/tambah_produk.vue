<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <h1><b>Tambah Data Barang</b></h1>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputState">Kategori</label>
                                <select id="inputState" class="form-control" v-model="M_item.item_group">
                                    <option selected>Choose...</option>
                                    <option>Internet</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputname">Nama Barang</label>
                                <input type="text" class="form-control" id="inputname" placeholder="Nama Barang" v-model="M_item.item_nama">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputstok">Stok</label>
                                <input type="number" class="form-control" id="inputstok" placeholder="Stok Barang" v-model="M_item.item_stok">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputAddress">Keterangan Barang</label>
                                <textarea name="" id="" class="form-control" cols="30" rows="10" v-model="M_item.item_deskripsi"></textarea>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Databarang">Data Barang Dibuat</label>
                                <input type="date" class="form-control" id="Databarang" v-model="M_item.item_created">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="item">Data Barang Diupdate</label>
                                <input type="text" class="form-control" id="item" placeholder="Apartment, studio, or floor" v-model="M_item.item_updated">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="hargasatuan">Harga Satuan</label>
                                <input type="text" class="form-control" id="hargasatuan" v-model="M_item.item_harga">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="admin">Siapa Yang Mengupdate/Membuat</label>
                                <select id="admin" class="form-control" v-model="M_item.item_user_updated">
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
                            <router-link to="/produk">
                                <button type="submit" class="btn btn-primary" @click="addToApi">Tambah</button>
                            </router-link>
                        </div>
                        <div class="col-md-2">
                            <router-link to="/produk">
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
import axios from 'axios';
export default {
    name: 'M_item',
    data() {
        return {
            M_item: { item_group: '', item_nama: '', item_stok: '', item_deskripsi: '', item_created: new Date().toISOString().slice(0, 10), item_updated: new Date().toISOString().slice(0, 10), item_user_updated: '', item_status: 'Y', item_harga: '' },
        }
    },
    methods: {
        addToApi() {
            let newM_item = {
                item_group: this.M_item.item_group,
                item_nama: this.M_item.item_nama,
                item_stok: this.M_item.item_stok,
                item_deskripsi: this.M_item.item_deskripsi,
                item_created: this.M_item.item_created,
                item_updated: this.M_item.item_updated,
                item_user_updated: this.M_item.item_user_updated,
                item_status: this.M_item.item_status,
                item_harga: this.M_item.item_harga
            }
            console.log(newM_item);

            axios.post('http://localhost:5000/M_item', newM_item)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
};
</script>