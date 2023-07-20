<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row">
                    <div class="col-md-12" v-show="role ==='Admin'">
                        <TableAdmin/>
                    </div>
                    <div class="col-md-12" v-show="role ==='Marketing'">
                        <TableMarketing/>
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
<script src="./Service/list_pembelian"></script>