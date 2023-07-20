import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    name: 'M_pengguna',
    components: {
        Multiselect,
        // Table
    },
    data() {
        return {
            M_pengguna: [],
            cari: '',
            detail: {
                pengguna_id: '',
                pengguna_ppoe: '',
                pengguna_paket: ''
            },
            winbox: {}
        }
    },
    mounted() {
        this.getdata()
    },
    watch: {
        M_pengguna() {
            this.setPage()
        }
    },
    methods: {
        // Paginate 
        setPage() {
            let numberOfPages = Math.ceil(this.filterpelanggan.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(filterpelanggan) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return filterpelanggan.slice(from, to)
        },
        // ----
        // Mendapatkan data Pelanggan baru
        getdata() {
            var domain = this.$store.getters.domain;
            axios.get(API + '/M_pengguna/domain/pelanggan/baru/' + domain)
                .then((response) => {
                    this.M_pengguna = response.data;
                });
        },
        // ----
        detailpengguna(id, ppoe, paket) {
            this.detail.pengguna_id = id;
            this.detail.pengguna_ppoe = ppoe;
            this.detail.pengguna_paket = paket;
        },
        aktifkan: function() {
            console.log(this.detail.pengguna_id)
            let torouteros = {
                pengguna_host: this.winbox.pengguna_host,
                pengguna_port: this.winbox.pengguna_port,
                user: this.winbox.pengguna_username,
                password: this.winbox.pengguna_password,
                pengguna_ppoe: this.detail.pengguna_ppoe,
                pengguna_password: this.winbox.pengguna_ppoe_password,
                pengguna_profile: this.detail.pengguna_paket,
                pengguna_service: "pppoe",
                pengguna_local_address: this.winbox.pengguna_local_address,
                pengguna_remote_address: this.winbox.pengguna_remote_address
            }
            axios.post(API + '/Mikrotik/routeros/add', torouteros)
                .then(() => {
                    console.log("sukses")
                });
            console.log(torouteros)

            let ubahpelanggan = {
                pengguna_status: "Y",
                pengguna_host: this.winbox.pengguna_host,
                pengguna_port: this.winbox.pengguna_port,
                pengguna_winbox_username: this.winbox.pengguna_username,
                pengguna_winbox_password: this.winbox.pengguna_password,
                pengguna_ppoe_password: this.winbox.pengguna_ppoe_password,
                pengguna_profile: this.detail.pengguna_paket,
                pengguna_service: "pppoe",
                pengguna_winbox_local_address: this.winbox.pengguna_local_address,
                pengguna_winbox_remote_address: this.winbox.pengguna_remote_address
            }
            axios.put(API + `/M_pengguna/${this.detail.pengguna_id}`, ubahPelanggan)
                .then(() => {
                    this.getdata();
                    this.$swal("Berhasil", "Berhasil mengaktifkan pelanggan", "success")
                });
        }
    },
    computed: {
        // Langsung Di filter Pagination 
        displayedPel() {
            return this.paginate(this.filterpelanggan)
        },
        // ----
        // Mencari Dengan Filter
        filterpelanggan: function() {
            return this.M_pengguna.filter(pelanggan => {
                var cari_nama = pelanggan.pengguna_nama.toLowerCase().includes(this.cari.toLowerCase());
                // var cari_id = pelanggan.pengguna_id.toLowerCase().includes(this.cari.toLowerCase());
                // var cari_ppoe = pelanggan.pengguna_ppoe.toLowerCase().includes(this.cari.toLowerCase());
                // var cari_alamat = pelanggan.pengguna_alamat.toLowerCase().includes(this.cari.toLowerCase());

                return cari_nama;
                // return cari_nama || cari_id || cari_ppoe || cari_alamat;
                // console.log(this.M_pengguna[0]);
            });
        },
        // ----
        // mendapatkan username 
        createdBy: function() {
            return this.$store.getters.username;
        },
        // Mendapatkan role
        roleBy: function() {
            return this.$store.getters.role;
        }
    },
    // ----
};