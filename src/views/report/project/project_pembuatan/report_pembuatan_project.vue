<template>
    <div class="report-pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <div class="row">
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="refresh-container">
                            <div class="la-nim-1"></div>
                        </div>
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Laporan Pembuatan Project</h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <router-link to="/report_complain">Back</router-link>
                                </h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Tahun</label>
                                    <input type="number" class="form-control">
                                    <p></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Bulan</label>
                                    <input type="month" class="form-control">
                                    <p></p>
                                </div>
                            </div>
                            <!--  <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Mingguan</label>
                                    <input type="week" class="form-control" v-model="minggu">
                                    <p>{{minggu}}</p>
                                </div>
                            </div> Pending Sebentar Mingguan -->
                            <div class="row">
                                <div class="form-group col-md-12 text-center">
                                    <label for="">Tanggal</label>
                                    <input type="date" class="form-control" v-model="tanggal_cari">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default card-view panel-refresh">
                        <div class="panel-heading">
                            <h6 class="panel-title txt-dark"></h6>
                        </div>
                        <div class="panel-body">
                            <table class="table table-borderless" v-if="Filterproject.length === 0">
                                <h1>Tidak ada Data</h1>
                            </table>
                            <table class="table table-borderless" v-else>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Status</th>
                                        <th>Nama</th>
                                        <th>Tanggal<br>Pembuatan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(project,index) in Filterproject" :key="project._id">
                                        <td>{{index + 1}}</td>
                                        <td v-if="project.item_project_status === 'Selesai'"><span class="label label-success">{{project.item_project_status}}</span></td>
                                        <td v-else-if="project.item_project_status === 'Belum'"><span class="label label-warning">{{project.item_project_status}}</span></td>
                                        <td>{{project.item_nama}}</td>
                                        <td>{{project.item_created}}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="clearfix btn-group col-md-6 offset-md-5">
                                <button type="button" class="btn btn-sm btn-success" v-if="page != 1" @click="page--">
                                    Previous</button> <button type="button" class="btn btn-sm btn-success" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" v-bind:key="pageNumber"> {{pageNumber}}
                                </button>
                                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-success"> NEXT </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import API from '../../../../api.config'
export default {
    data() {
        return {
            tanggal_cari: '',
            project: [],
            page: 1,
            perpage: 10,
            pages: [],
        }
    },
    created() {
        this.getproject()
    },
    watch:{
        project(){
            this.setPage()
        }
    },
    methods: {
        setPage() {
            let numberOfPages = Math.ceil(this.Filterproject.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(Filterproject) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return Filterproject.slice(from, to)
        },
        getproject() {
            axios.get(API +'/M_item/project')
                .then((response) => {
                    this.project = response.data;
                });
        }
    },
    computed: {
        Filterproject: function() {
            return this.project.filter((project) => {
              return  project.item_created.match(this.tanggal_cari);
            })
        },
        DisplayedProject:function(){
            return this.paginate(this.Filterproject)
        }
    }
}
</script>