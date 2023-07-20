<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view panel-refresh">
                            <div class="refresh-container">
                                <div class="la-anim-1"></div>
                            </div>
                            <div class="panel-heading">
                                <div class="pull-left">
                                    <h6 class="panel-title txt-dark">Proyek</h6>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="panel-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Title</th>
                                            <th>Body</th>
                                            <th class="text-center" width="100">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(pos,index) in posts.slice(0,5)">
                                            <td>{{index + 1}}</td>
                                            <td>{{pos.title}}</td>
                                            <td>{{pos.body}}</td>
                                            <td>
                                                <div class="pull-right">
                                                    <div class="dropdown  pull-left">
                                                        <a class="dropdown-toggle weight-500" id="examplePanelDropdown" data-toggle="dropdown" href="#" aria-expanded="false" role="button">
                                                            <i class="fa fa-ellipsis-v inline-block mr-5"></i>
                                                        </a>
                                                        <ul class="dropdown-menu bullet dropdown-menu-right" role="menu">
                                                            <li role="presentation"><a href="javascript:void(0)" role="menuitem" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="icon wb-share" aria-hidden="true"></i>Delete</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <pagination v-model="page" :per-page="5" :records="filterJumlah"></pagination>
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
import Pagination from 'vue-pagination-2';
export default {
	components:{
		Pagination
	},
	data(){
		return{
			posts:{},
			page:1,
			pagination:{}
		}
	},
	created(){
		this.getposts();
	},
	methods:{
		getposts(pagi){
			pagi = pagi || 'https://jsonplaceholder.typicode.com/posts'
			axios.get(pagi)
			.then((response) =>{
				this.posts = response.data;
				console.log(response.data);
			});
		}
	},
	computed:{
		filterJumlah:function(){
			return Object.keys(this.posts).length;
		}
	}
}
</script>