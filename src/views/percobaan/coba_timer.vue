<template>
    <div class="multi-select">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
                <!-- /Row -->
                <div class="clearfix">
                    <br>
                </div>
                <div class="row">
                    <vue-countdown-2 deadline="2019/07/29" format="%h hours %m minutes %s seconds"></vue-countdown-2>
                    <p>{{pelo}}</p>
                      <Countdown deadline="hitam"></Countdown>
                      <p>{{hitam}}</p>
                      <p v-for="ngan in pengguna.pengguna_departmen.pengguna_departmen_group" >
                          {{ngan.pembantu_nama}}
                      </p>
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
import VueCountdown2 from 'vue-countdown-2'
import Countdown from 'vuejs-countdown'
import axios from 'axios'
export default {
    components: { 
    	Multiselect,
    	VueCountdown2,
    	Countdown
     },
    data() {
        return {
            pelo: Date.parse(),
            hitam:'2019-08-14',
            pengguna:{}
        }
    },
    created(){
        this.getpelanggan()
    },
    methods: {
        startCallBack: function(x) {
            console.log(x)
        },
        endCallBack: function(x) {
            console.log(x)
        },
        getpelanggan(){
            axios.get('http://localhost:5000/M_pengguna/pelanggan')
            .then((response) =>{
                this.pengguna = response.data;
            });
        }
    }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>