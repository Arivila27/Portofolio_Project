<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12" v-show="role ==='Admin'">
                        <TambahAdmin/>
                    </div>
                    <div class="col-md-12" v-show="role ==='Marketing'">
                        <TambahMarketing/>
                    </div>
                    <div class="col-md-12" v-show="role ==='Magang'">
                        <TableMarketing/>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <!-- /Footer -->
        </div>
    </div>
    </div>
</template>
<script src="./Service/tambah_pembelian"></script>