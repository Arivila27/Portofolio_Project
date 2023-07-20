<template>
    <div class="penagihan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1>Penagihan</h1>
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
                                	<router-link to="/tambah_penagihan">
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
                                           <tr v-for="penagihan in M_tagihan">
                                            <th>1</th>
                                            <td>{{penagihan.pngh_group}}</td>
                                            <td>{{penagihan.pngh_created}}</td>
                                            <td>{{penagihan.pngh_updated}}</td>
                                            <td>{{penagihan.pngh_user_updated}}</td>
                                                <td>
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <router-link to="/detail_penagihan">
                                                            <button type="button" class="btn btn-info" style="width: 80px; margin-right:-50px;">Detail</button>
                                                        </router-link>
                                                        </div>
                                                        <div class="col-md-4">
                                                          <router-link to="/edit_penagihan">
                                                             <button type="button" class="btn btn-primary" style="width: 80px; margin-right:-50px;"><i class="fa fa-edit"></i></button>
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
                               <!--  <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Kategori</th>
                                            <th scope="col">Tanggal Dibuat</th>
                                            <th scope="col">Tanggal Diupdate</th>
                                            <th scope="col">Pengguna Yang Update</th>
                                            <th scope="col">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="penagihan in M_tagihan">
                                            <th>1</th>
                                            <td>{{penagihan.pngh_group}}</td>
                                            <td>{{penagihan.pngh_created}}</td>
                                            <td>{{penagihan.pngh_updated}}</td>
                                            <td>{{penagihan.pngh_user_updated}}</td>
                                            <td>
                                                <router-link to="/edit_penagihan">
                                                <button class="btn btn-warning">Edit</button>
                                                </router-link>
                                                <br>
                                                <button class="btn btn-danger">Hapus</button>
                                            </td>
                                        </tr>
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
  name: 'M_tagihan',
  data() {
    return {
      M_tagihan: [],
    }
  },
  mounted() {
    this.getdata()
  },
  methods:{
    getdata(){
      axios.get('http://localhost:5000/M_tagihan')
      .then((response) => {
        console.log(response.data);
        this.M_tagihan = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
     softdelete(id){
      axios.delete('http://localhost:5000/M_tagihan/'+id)
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