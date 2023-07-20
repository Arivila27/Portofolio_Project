<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel">
                            <div class="panel-header">
                                <br>
                                <div class="col-md-6">
                                	<router-link to="/tambah_produk">
                                    <button type="button" class="btn btn-primary">Tambah Data</button>
                                	</router-link>
                                </div>
                            </div>
                            <div class="panel-body">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for=" barang in M_item">
                                            <th>{{barang.item_group}}</th>
                                            <td>{{barang.item_nama}}</td>
                                            <td>{{barang.item_stok}}</td>
                                            <td>
                                                <router-link to="/edit_produk">
                                                <button class="btn btn-warning">Edit</button>
                                                </router-link>
                                                <br>
                                                <button class="btn btn-danger">Hapus</button>

                                            </td>
                                        </tr>
                                        <tr></tr>
                                        <tr></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer -->
                <!-- /Footer -->
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
      M_item: [],
      item_status:''
    }
  },
  mounted() {
    this.getdata()
  },
  methods:{
    getdata(){
      axios.get('http://localhost:5000/M_item')
      .then((response) => {
        console.log(response.data);
        this.M_item = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
     softdelete(id){
      axios.delete('http://localhost:5000/M_item/'+id)
      .then((res) =>{
        this.getdata()
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    }

  }

};

</script>