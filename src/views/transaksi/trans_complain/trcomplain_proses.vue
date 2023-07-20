<template>
    <div class="home">
        <div class="page-wrapper">
            <div class="container-fluid pt-25">
                <div class="row">
                    <div class="col-md-12" v-show="role === 'Admin'">
                        <TableAdmin />
                    </div>
                    <div class="col-md-12" v-show="role === 'Marketing' || 'Noc'">
                        <TableMarketing />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Service/tr_complain_proses"></script>