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
                            <div class="col-md-3">
                                <input type="number" class="form-control" v-model="input.angka1">
                            </div>
                            <div class="col-md-3">
                                <input type="number" class="form-control" v-model="input.angka2">
                            </div>
                            <div class="col-md-3">
                                <input type="number" class="form-control" v-model="input.hasil">
                            </div>
                            <span class="col-md-3">
                                <button class="btn btn-danger" @click.prevent="remove(k)" v-show="k || ( !k &&  inputs.length > 1)"><i class="fa fa-minus"></i></button>
                                <button class="btn btn-primary" @click.prevent="add()" v-show="k == inputs.length-1"><i class="fa fa-plus"></i></button>
                            </span>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="text" class="form-control" v-model="total">
                            </div>
                        </div>
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
export default {
    components: { Multiselect },
    data() {
        return {
            value: [{}],
            options: [],
            inputs: [{
                angka1: '',
                angka2: '',
                hasil: 0,
            }]
        }
    },
    mounted() {
        console.log('mounted')
        this.getpegawai()

    },
    beforeUpdate() {
        console.log('before updated');
        this.getperhitungan();
        this.gethitungdosa()
    },
    updated() {
        console.log('updated')


    },
    computed: {
        total() {
            var total = 0;
            for (var i = 0; i < this.inputs.length; i++) {
                total += this.inputs[i].hasil;
            }
            return total
        }
    },
    methods: {
        // gethitungdosa(){
        // // for (var o = 0; o < this.inputs.length; o++)
        // // for(var i = 1; i = this.inputs.length; i++) {
        // //     const item = this.inputs[o]
        // //     const items = this.inputs[i]
        // //     this.hiear = this.inputs[o].hasil + this.inputs[i].hasil 
        //     for (var i = 0; i < this.inputs.length; i++) {
        //         // this.inputs[i]
        //         const item = this.inputs[i]
        //         this.hiear = item.angka1 * item.angka2
        //     }
        // },
        getperhitungan() {
            for (let i = 0; i < this.inputs.length; i++) {
                const item = this.inputs[i]
                this.inputs[i].hasil = item.angka1 * item.angka2
                // this.hiear = this.input[i].hasil + this.input[i].hasil 
                // this.inputs[i].hasil = this.hiear
            }
        },
        addTag(newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.options.push(tag)
            this.value.push(tag)
        },
        add() {
            this.inputs.push({
                angka1: '',
                angka2: '',
                hasil: 0
            });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        }

    }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>