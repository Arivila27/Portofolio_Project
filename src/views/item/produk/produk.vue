<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
                <div class="col-md-12" v-show="role === 'Admin'">
                    <TableAdmin />
                </div>
                <div class="col-md-12" v-show="role === 'Marketing'">
                    <TableMarketing />
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
</template>
<script src="./Service/produk"></script>