<template>
    <div class="multi-select">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <h1>Hello My Friend</h1>
                    <pre v-for="opsi in options">
                        {{opsi.pengguna_nama}}
                    </pre>
                    <div>
                        <div class="col-md-12">
                            <label class="typo__label">Tagging</label>
                            <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Cari dan Pilih " label="pengguna_nama" track-by="_id" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                        </div>
                        <div class="col-md-12">
                            <form v-on:submit.prevent="budalkan">
                                <table class="table">
                                    <tr>
                                        <th>Nama</th>
                                        <th>Group</th>
                                    </tr>
                                    <tr v-for="value in value">
                                        <td>
                                            <input type="text" v-model="value.pengguna_nama" class="form-control">
                                        </td>
                                        <td>
                                            <input type="text" v-model="value.pengguna_group" class="form-control">
                                        </td>
                                    </tr>
                                </table>
                                <button type="submit" class="btn btn-primary">Klik</button>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- /Row -->
                <div class="clearfix">
                    <br>
                </div>
                <div class="row">
                    <form>
                        <div class="form-group" v-for="(input,k) in inputs" :key="k">
                            <div class="col-md-4">
                                <input type="text" class="form-control" v-model="input.angka1">
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" v-model="input.angka2">
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" v-model="angka3">
                            </div>
                            <span class="col-md-4">
                                <button class="btn btn-danger" @click.prevent="remove(k)" v-show="k || ( !k &&  inputs.length > 1)"><i class="fa fa-minus"></i></button>
                                <button class="btn btn-primary" @click.prevent="add(k)" v-show="k == inputs.length-1"><i class="fa fa-plus"></i></button>
                            </span>
                        </div>
                        <button class="btn btn-warning" @click="handler">Tambah </button>
                    </form>
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
import axios from 'axios'
export default {
    components: { Multiselect },
    data() {
        return {
            value: [{}],
            options: [],
            inputs: [{
                name: '',
                password: ''
            }]
        }
    },
    mounted() {
        this.getpegawai()
    },
    methods: {
        budalkan() {
            let newM_coba = {
                coba: this.value
            }
            console.log(newM_coba);
            axios.post('http://localhost:5000/Tr_transfer', newM_coba)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addTag(newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.options.push(tag)
            this.value.push(tag)
        },
        getpegawai() {
            axios.get('http://localhost:5000/M_pengguna/pegawai')
                .then((response) => {
                    console.log(response.data);
                    this.options = response.data;
                }).catch((error) => {
                    console.log(error);
                });
        },
        addpost:function(arg1) {
            let ppp = {
                petronas: this.inputs
            }
            console.log(ppp);
            axios.post('http://localhost:5000/Tr_transfer', ppp)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addpist:function(arg2){
            let pisg = {
                item_group: this.inputs[0].name,
                item_nama:this.inputs[0].password
            }
            axios.post('http://localhost:5000/M_item',pisg)
            .then((response) =>{
                console.log(response.data);
            });
            let posg = {
                item_group: this.inputs[1].name,
                item_nama:this.inputs[1].password
            }
             axios.post('http://localhost:5000/M_item',posg)
            .then((response) =>{
                console.log(response.data);
            });
        },
        handler:function(arg1,arg2){
            this.addpost(arg1);
            this.addpist(arg2);
        },
        add(index) {
            this.inputs.push({ name: '' });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        }

    }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>