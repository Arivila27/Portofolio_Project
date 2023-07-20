<template>
    <div class="tunjangan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1>tunjangan</h1>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div class="panel panel-info card-view">
                                <div class="panel-heading">
                                    <div class="pull-left">
                                        <h6 class="panel-title txt-light">panel info</h6>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div class="panel panel-info card-view">
                                <div class="panel-heading">
                                    <div class="pull-left">
                                        <h6 class="panel-title txt-light">panel info</h6>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div class="panel panel-info card-view">
                                <div class="panel-heading">
                                    <div class="pull-left">
                                        <h6 class="panel-title txt-light">panel info</h6>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Row -->
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel">
                            <div class="panel-header">
                                <br>
                                <div class="col-md-6">
                                	<router-link to="/tambah_tunjangan">
                                    <button type="button" class="btn btn-primary">Tambah Data</button>
                                	</router-link>
                                </div>
                            </div>
                            <div class="panel-body">
                                  <div class="panel-heading" >Table Penagihan</div>

                                      <!-- Table -->
                                      <table class="table">
                                        <thead>
                                            <tr>
                                                <th width="10" >No</th>
                                                <th width="100">kategori</th>
                                                <th width="100">created</th>
                                                <th width="100">updated</th>
                                                <th width="100">user updated</th>
                                                <th  class="text-center" width="100">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           <tr v-for="tunjangan in M_tunjangan">
                                            <th>1</th>
                                            <td>{{tunjangan.Tjn_group}}</td>
                                            <td>{{tunjangan.Tjn_created}}</td>
                                            <td>{{tunjangan.Tjn_updated}}</td>
                                            <td>{{tunjangan.Tjn_user_updated}}</td>
                                                <td>
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <button type="button" class="btn btn-info" style="width: 80px; margin-right:-50px;">Detail</button>
                                                        </div>
                                                        <div class="col-md-4">
                                                          <router-link to="/edit_penagihan">
                                                             <button type="button" class="btn btn-primary" style="width: 80px; margin-right:-50px;">Edit</button>
                                                         </router-link>
                                                        </div>
                                                        <div class="col-md-4">
                                                             <button type="button" class="btn btn-danger" style="width: 80px; margin-right:-50px;">Hapus</button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                           </tbody>

                                      </table>
                                    </div>
                              <!--   <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Kategori</th>
                                            <th>Dibuat Tanggal</th>
                                            <th>Diupdate Tanggal</th>
                                            <th>Pengguna Yang Mengupdate</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="tunjangan in M_tunjangan">
                                            <th>1</th>
                                            <td>{{tunjangan.Tjn_group}}</td>
                                            <td>{{tunjangan.Tjn_created}}</td>
                                            <td>{{tunjangan.Tjn_updated}}</td>
                                            <td>{{tunjangan.Tjn_user_updated}}</td>
                                           
                                            <td>
                                                <router-link to="/edit_tunjangan">
                                                <button class="btn btn-warning">Edit</button>
                                                </router-link>
                                                <br>
                                                <button class="btn btn-danger">Hapus</button>

                                            </td>
                                        </tr>
                                        <tr></tr>
                                        <tr></tr>
                                    </tbody>
                                </table> -->
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
  name: 'M_tunjangan',
  data() {
    return {
      M_tunjangan: [],
    }
  },
  mounted() {
    this.getdata()
  },
  methods:{
    getdata(){
      axios.get('http://localhost:5000/M_tunjangan')
      .then((response) => {
        console.log(response.data);
        this.M_tunjangan = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
     softdelete(id){
      axios.delete('http://localhost:5000/M_tunjangan/'+id)
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