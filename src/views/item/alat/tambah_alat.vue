<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row" v-show="role === 'Admin'">
                <TambahAdmin />
            </div>
            <div class="row" v-show="role === 'Marketing'">
                <TambahMarketing />
            </div>
        </div>
    </div>
</template>
<script src="./Service/tambah_alat"></script>