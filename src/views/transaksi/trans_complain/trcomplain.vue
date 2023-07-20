<template>
    <div class="complain">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <div class="row">
                    <!-- <div class="col-md-12" v-show="role === 'Admin'">
                        <TableAdmin />
                    </div> -->
                    <div class="col-md-12" v-show="role === 'Marketing' || 'Noc'">
                        <TableMarketing />
                    </div>
                    <!-- <div class="col-md-12" v-show="role === 'Noc'">
                        <TableMarketing />
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/trcomplain"></script>