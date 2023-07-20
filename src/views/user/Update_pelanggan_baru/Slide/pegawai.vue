<template>
    <div>
        <div class="form-row col-md-12">
            <div class="form-group col-md-6">
                <label>Pegawai</label>
                <multiselect tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="pengguna_nama" track-by="_id" :options="pegawai" :multiple="true" :taggable="true"></multiselect>
            </div>
            <div class="form-group col-md-6">
                <label>Fee PSB</label>
                <vue-numeric currency="Rp." separator="," class="form-control" />
            </div>
        </div>
    </div>
</template>
<script>
import multiselect from 'vue-multiselect';
export default {
    components:{
        multiselect
    },
    props: {
        pegawai: {
            type: Array,
            required: true
        }
    }
}
</script>