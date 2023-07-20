<template>
    <div class="pelanggan">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <!-- Row -->
                <div class="row"></div>
                <!-- /Row -->
            </div>
            <div class="row">
                <!-- <div class="col-md-12" v-show="role === 'Admin'">
                    <TableAdmin />
                </div> -->
                <div class="col-md-12" v-show="role === 'Marketing'">
                    <TableMarketing />
                </div>
                <div class="col-md-12" v-show="role === 'Magang'">
                    <TableMarketing />
                </div>
                <div class="col-md-12" v-show="role === 'Noc'">
                    <TableNoc />
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/pelanggan_2.js"></script>