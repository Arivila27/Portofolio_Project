<!-- Shopping Cart Computed Properties Masih Belom Jalan [] -->
<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row" v-show="role === 'Admin'">
                <TambahPelangganAdmin />
            </div>
            <div class="row" v-show="role === 'Marketing' && 'Noc' && 'Magang'">
                <TambahPelangganMarketing />
            </div>
        </div>
    </div>
</template>
<script src="./Service/tambah_pelanggan"></script>