<template>
    <div class="page-wrapper pa-0 ma-0 auth-page">
        <div class="container-fluid">
            <!-- Row -->
            <div class="table-struct full-width full-height">
                <div class="table-cell vertical-align-middle auth-form-wrap">
                    <div class="auth-form  ml-auto mr-auto no-float">
                        <div class="row">
                            <div class="col-sm-12 col-xs-12">
                                <div class="mb-30">
                                    <h3 class="text-center txt-dark mb-10">Daftar Di Bitniaga</h3>
                                    <h6 class="text-center nonecase-font txt-grey">Masukkan Data Anda</h6>
                                </div>
                                <div class="form-wrap">
                                    <form @submit.prevent="register">
                                        <div class="form-group">
                                            <label class="control-label mb-10" for="Nama">Nama</label>
                                            <input type="text" class="form-control" required="true" id="Nama" placeholder="Masukan Nama" v-model="username">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label mb-10" for="email">Email</label>
                                            <input type="text" class="form-control" required="true" id="email" placeholder="Masukan Email" v-model="email">
                                        </div>
                                        <div class="form-group">
                                            <label class="pull-left control-label mb-10" for="password">Password</label>
                                            <div class="clearfix"></div>
                                            <input type="password" class="form-control" required="true" id="password" placeholder="Masukan Password" v-model="password">
                                        </div>
                                         <div class="form-group">
                                            <label class="pull-left control-label mb-10" for="role">Pilih Role</label>
                                            <div class="clearfix"></div>
                                            <select class="form-control" v-model="role" id="role">
                                                <option value="Noc">Teknisi</option>
                                                <option value="Finance">Finance</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Tukang">Tukang</option>
                                            </select>
                                        </div>
                                        <small>Sudah Punya akun?</small>
                                        <div class="form-group text-center">
                                            <router-link to="/">
                                                <button type="button" class="btn btn-danger btn-rounded">Kembali</button>
                                            </router-link>
                                            <button type="submit" class="btn btn-primary btn-rounded">Daftar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Row -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username:'',
            email: '',
            password: '',
            role:''
        }
    },
    methods: {
        register: function() {
            let data = {
                username: this.username,
                email: this.email,
                password: this.password,
                role: this.role,
            };
            this.$store
                .dispatch("register", data)
                .then(() => {
                    this.$router.push("/");
                    this.$swal("Berhasil","User terdaftar","success");
                })
                .catch((error) =>{
                    this.$swal("gagal","Mohon cek email dan password apakah sudah terdaftar",'error');
                });
        }
    }
};
</script>