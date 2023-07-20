import axios from 'axios';
import API from '../../../api.config'
export default{
	data:function(){
		return{
			M_ip:[]
		}
	},
	created(){
		this.getip()
	},
	methods:{
		getip:function(){
			axios.get(API + '/M_ip')
			.then((response) =>{
				this.M_ip = response.data
				console.log(response.data)
			})
		}
	}
}