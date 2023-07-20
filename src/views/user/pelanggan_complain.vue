<template>
    <div class="penagihan">
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
                                	<router-link to="/tambah_penagihan">
                                    <button type="button" class="btn btn-primary">Tambah Data</button>
                                	</router-link>
                                    <router-link to="/user">
                                        <button type="button" class="btn btn-danger">Kembali</button>
                                    </router-link>
                                </div>
                            </div>
                            <div class="panel-body">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Kategori</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Tanggal-Pembayaran</th>
                                            <th scope="col">Jumlah Tagihan</th>
                                            <th scope="col">Denda</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="penagihan in M_pengguna">
                                            <th></th>
                                            <td>{{penagihan.pengguna_group}}</td>
                                            <td>{{penagihan.pengguna_nama}}</td>
                                            <td>{{penagihan.pengguna_tagihan_tanggal_pembayaran}}</td>
                                            <td>{{penagihan.pengguna_tagihan_jumlah}}</td>
                                            <td>{{penagihan.pengguna_tagihan_denda}}</td>
                                            <td>
                                                <router-link to="/edit_penagihan">
                                                <button class="btn btn-warning">Edit</button>
                                                </router-link>
                                                <br>
                                                <button class="btn btn-danger">Hapus</button>
                                            </td>
                                        </tr>
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
  name: 'M_pengguna',
  data() {
    return {
      M_pengguna: [],
    }
  },
  mounted() {
    this.getdata()
  },
  methods:{
    getdata(){
      axios.get('http://localhost:5000/M_pengguna/pelanggan/tagihan')
      .then((response) => {
        console.log(response.data);
        this.M_pengguna = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
     softdelete(id){
      axios.delete('http://localhost:5000/M_pengguna/'+id)
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