<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row">
                <div class="tab-content mt-5">
                    <div id="internet" class="tab-pane fade in active">
                        <div class="panel panel-default card-view">
                            <div class="panel-heading">
                                <h6>Update Project</h6>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-wrapper collapse in">
                                <form @submit.prevent="update">
                                    <div class="panel-body">
                                        <div class="form-wrap">
                                            <div class="col-md-12">
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="">Nama Project</label>
                                                        <input type="text" class="form-control" v-model="project.item_nama">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="">Biaya Operasional</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="project.item_biaya_operasional" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Biaya Lain</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" v-model.number="project.item_biaya_lain" />
                                                    </div>
                                                </div>
                                                <div class="form-row" hidden></div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-12">
                                                        <label for="">Kode proyek</label>
                                                        <input type="text" class="form-control" v-model="project.item_kode">
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="">Pegawai</label>
                                                        <multiselect v-model="project.item_pegawai" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="id" :options="pegawai" :multiple="true" :taggable="true"></multiselect>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Tanggal penyelesaian</label>
                                                        <input type="date" class="form-control" v-model="project.item_tanggal_penyelesaian">
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="">Total Biaya</label>
                                                        <vue-numeric currency="Rp." separator="," class="form-control" v-model="totalBiaya" disabled="true" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="">Penyelesaian</label>
                                                        <select class="form-control" v-model="project.item_project_status">
                                                            <option v-for="selesai in status_penyelesaian" :key="selesai.id">
                                                                {{selesai.penyelesaian}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <button class="btn btn-primary" type="submit">Update</button>
                                                        &nbsp;
                                                        <router-link class="btn btn-danger" to="/project">
                                                            Kembali
                                                        </router-link>
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
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect';
import API from '../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            project: [],
            pegawai: [],
            status_penyelesaian: [
                { id: 1, penyelesaian: "Selesai" },
                { id: 2, penyelesaian: "Belum" }
            ]
        }
    },
    created() {
        this.getproject();
        this.getpegawai();
    },
    methods: {
        getproject() {
            axios.get(API +`/M_item/${this.$route.params.id}`)
                .then((response) => {
                    this.project = response.data;
                });
        },
        getpegawai() {
            axios.get(API +'/M_pengguna/pegawai')
                .then((response) => {
                    this.pegawai = response.data;
                });
        },
        update(){
        	let newProject = {
        		item_nama:this.project.item_nama,
        		item_kode:this.project.item_kode,
        		item_biaya_operasional:this.project.item_biaya_operasional,
        		item_biaya_lain:this.project.item_biaya_lain,
        		item_biaya_total:this.totalBiaya,
        		item_pegawai:this.project.item_pegawai,
        		item_project_status:this.project.item_project_status,
        		item_tanggal_penyelesaian:this.project.item_tanggal_penyelesaian
        	}
        	axios.put(API +`/M_item/${this.$route.params.id}`,newProject)
        	.then(() =>{
        		this.$router.push({name:'project'});
        		this.$swal("Berhasil","Berhasil Mengupdate Data","success");
        	})
        }
    },
    computed: {
        totalBiaya: function() {
            var a = this.project.item_biaya_operasional;
            var b = this.project.item_biaya_lain;
            var totalBiaya = 0;
            return totalBiaya = a + b;
        }
    }
}
</script>