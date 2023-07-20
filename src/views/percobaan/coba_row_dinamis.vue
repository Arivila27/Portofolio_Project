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
                                    <tr  v-for="value in value">
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
        }

    }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>	