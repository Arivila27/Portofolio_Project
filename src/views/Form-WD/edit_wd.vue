<template>
    <div class="page-wrapper">
        <div class="container-fluid pt-25">
            <div class="row" v-show="role === 'Admin'">
                <EditAdmin />
            </div>
            <div class="row" v-show="role === 'Marketing'">
                <EditMarketing />
            </div>
        </div>
    </div>
</template>
<script src="./Service/edit_wd"></script>