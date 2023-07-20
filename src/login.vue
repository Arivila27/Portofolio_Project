<template>
    <div id="login" class="bglogin">
        <div class="wrapper box-layout pa-0 bg-bening">
            <header class="sp-header"></header>
            <div class="clearfix"></div>
            <div class="clearfix"><br></div>
            <div class="clearfix">
                <h1>&nbsp;</h1>
            </div>
            <div class="clearfix">
                <br>
            </div>
            <div class="clearfix">
                <br>
            </div>
            <!-- Main Content -->
            <div class="page-wrapper pa-0 ma-0 auth-page bg-bening">
                <div class="container-fluid">
                    <div class="table-struct full-width full-height">
                        <div class="table-cell vertical-align-middle auth-form-wrap bg-bening">
                            <div class="auth-form  ml-auto mr-auto no-float">
                                <div class="row">
                                    <div class="col-sm-12 col-xs-12">
                                        <div class="card-login">
                                            <div align="center">
                                                <img class="brand-img" src="../public/logo-bitniaga.png" alt="lg" width="140" /> <br><br>
                                            </div>
                                            <p v-if="errors.length">
                                                <ul v-for="error in errors">
                                                    <li class="label label-danger">{{ error }}</li>
                                                </ul>
                                            </p>
                                            <div class="form-wrap" id="validate-form">
                                                <form @submit.prevent="handler">
                                                    <div class="form-group">
                                                        <label class="control-label mb-10" for="exampleInputEmail_2">Email</label>
                                                        <input type="email" class="form-control" v-model="email">
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="pull-left control-label mb-10" for="exampleInputpwd_2">Password</label>
                                                        <input type="password" class="form-control" v-model="password">
                                                    </div>
                                                    <div class="form-group">
                                                        <vue-recaptcha sitekey="6Lfnq9wcAAAAAF7nCujUfFf-u04U_kxvGvlYDKzk" :loadRecaptchaScript="true"></vue-recaptcha>
                                                    </div>
                                                    <div class="form-group text-center">
                                                        <button type="submit" class="btn btn-login">Masuk</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Row -->
                </div>
            </div>
            <!-- /Main Content -->
            <div class="clearfix">
                <br>
            </div>
            <div class="clearfix">
                <br>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>
<script>
import VueRecaptcha from 'vue-recaptcha';
import axios from 'axios';
export default {
    components: { VueRecaptcha },
    data() {
        return {
            errors: [],
            email: null,
            password: null
        };
    },
    methods: {
        checkForm: function(e) {
            if (this.email && this.password) return true;
            this.errors = [];
            if (!this.email) this.errors.push('Email Tidak boleh kosong!');
            if (!this.password) this.errors.push('Password tidak boleh kosong!');
            e.preventDefault();
        },
        login: function() {
            let email = this.email;
            let password = this.password;
            this.$store
                .dispatch("login", { email, password })
                .then(() => {
                    this.$swal('Selamat Datang', 'Dashboard', 'success');
                    if (this.$store.getters.role === 'Marketing') {
                        this.$router.push('/dashboard');
                    } else if (this.$store.getters.role === 'Tukang') {
                        this.$router.push('/dashboard');
                    } else if (this.$store.getters.role === 'Finance') {
                        this.$router.push('/dashboard')
                    } else if (this.$store.getters.role === 'Admin') {
                        this.$router.push('/dashboard')
                    } else if (this.$store.getters.role === 'Magang') {
                        this.$router.push('/Home_noc')
                    } else if (this.$store.getters.role === 'Noc') {
                        this.$router.push('/Home_noc')
                    } else if (this.$store.getters.role === 'Developer') {
                        this.$router.push('/dashboard')
                    }
                })
                .catch((error) => {
                    this.$swal('Gagal', 'Mohon cek Email dan username anda', 'error');
                    this.email = '';
                    this.password = '';
                })
           // axios.post("https://api-internal.bitniaga.net.id/pengguna/login", {email, password})
// .then((response) =>{
// console.log(response.data)
// });

        },
        handler: function(arg1, arg2) {
            this.checkForm(arg1);
            this.login(arg2);
        }
    }
};
</script>