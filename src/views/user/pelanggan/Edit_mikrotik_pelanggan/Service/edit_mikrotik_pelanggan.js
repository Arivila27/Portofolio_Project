import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    data() {
        return {
            pengguna: {}
        }
    },
    created() {
        this.getdetailmikrotik()
    },
    methods: {
        getdetailmikrotik() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    // console.log(response.data)
                    this.pengguna = response.data
                })
        },
        ubah() {
            if (!this.pengguna.pengguna_ppoe) {
                this.$swal("Gagal", "PPOE Tidak boleh Kosong", "error");
            } else if (!this.pengguna.pengguna_host) {
                this.$swal("Gagal", "HOST Tidak boleh Kosong", "error");
            } else if (!this.pengguna.pengguna_port) {
                this.$swal("Gagal", "PORT Tidak boleh Kosong", "error");
            } else if (!this.pengguna.pengguna_winbox_username) {
                this.$swal("Gagal", "Username Winbox Tidak boleh Kosong", "error");
            } else if (!this.pengguna.pengguna_winbox_password) {
                this.$swal("Gagal", "Password Winbox Tidak boleh Kosong", "error");
            } else if (!this.pengguna.pengguna_ppoe_password) {
                this.$swal("Gagal", "Password PPOE Tidak boleh Kosong", "error");
            } else if (!this.pengguna.pengguna_winbox_local_address) {
                this.$swal("Gagal", "Local Address Tidak boleh Kosong", "error");
            } else if (!this.pengguna.pengguna_winbox_remote_address) {
                this.$swal("Gagal", "Remote Address Tidak boleh Kosong", "error");
            } else {
                let ubahpelanggan = {
                    pengguna_status: "Y",
                    pengguna_ppoe: this.pengguna.pengguna_ppoe,
                    pengguna_host: this.pengguna.pengguna_host,
                    pengguna_port: this.pengguna.pengguna_port,
                    pengguna_winbox_username: this.pengguna.pengguna_winbox_username,
                    pengguna_winbox_password: this.pengguna.pengguna_winbox_password,
                    pengguna_ppoe_password: this.pengguna.pengguna_ppoe_password,
                    pengguna_service: "pppoe",
                    pengguna_winbox_local_address: this.pengguna.pengguna_winbox_local_address,
                    pengguna_winbox_remote_address: this.pengguna.pengguna_winbox_remote_address
                }
                axios.put(API + `/M_pengguna/${this.detail.pengguna_id}`, ubahPelanggan)
                    .then(() => {
                        this.getdata();
                        this.$swal("Berhasil", "Berhasil mengaktifkan pelanggan", "success")
                    });

            }

        }
    },
    computed: {
        CreatedBy: function() {
            return this.$store.getters.username;
        }
    }
};