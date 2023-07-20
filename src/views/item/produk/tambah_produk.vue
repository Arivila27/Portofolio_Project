<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row" v-show="role === 'Admin'">
                <TableAdmin />
            </div>
            <div class="row" v-show="role === 'Marketing'">
                <TableMarketing />
            </div>
        </div>
    </div>
</template>
<script src="./Service/tambah_produk"></script>