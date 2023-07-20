import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
import Moment from 'moment'

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
            date : new Date().toLocaleDateString("en-Ca"),
            detail: {
                pengguna_id: '',
                pengguna_ppoe: '',
                pengguna_paket: ''
            },
            winbox: {},
            M_host: [],
            M_tipe : [],
            pilih_host: []
        }
    },
    mounted() {
        this.getdata()
        this.gethost()
        this.gettipe()
    },
    watch: {
        M_pengguna() {
            this.setPage()
        }
    },
    methods: {
        // Paginate
        // Get host for acces to mikrotik  
        gethost() {
            axios.get(API + '/M_host/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.M_host = response.data
                })
        },
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
        gettipe() {
            var domain = this.$store.getters.domain;
            axios.get(API + '/pembantu_type/domain/' + domain)
                .then((response) => {
                    this.M_tipe = response.data;
                });
        },
        // ----
        detailpengguna(id, ppoe, paket) {
            this.detail.pengguna_id = id;
            this.detail.pengguna_ppoe = ppoe;
            this.detail.pengguna_paket = paket;
        },
        // Aktifkan Mikrotik 
        aktifkan: function() {
            // console.log(this.detail.pengguna_id)
            let torouteros = {
                pengguna_host: this.pilih_host.host,
                pengguna_port: this.pilih_host.port,
                user: this.pilih_host.user_winbox,
                password: this.pilih_host.password_password,
                pengguna_ppoe: this.detail.pengguna_ppoe,
                pengguna_password: this.winbox.pengguna_ppoe_password,
                pengguna_profile: this.detail.pengguna_paket,
                pengguna_service: "pppoe",
                pengguna_local_address: this.winbox.pengguna_local_address,
                pengguna_remote_address: this.winbox.pengguna_remote_address
            }
            // console.log(torouteros)
            axios.post(API + '/Mikrotik/routeros/add', torouteros)
                .then(() => {
                    console.log("sukses")
                });
            console.log(torouteros)
            //const databulanan = Moment(databulanan).format('YYYY-MM-DD');
            let ubahpelanggan = {
                pengguna_penagihan: {
                    pengguna_penagihan_status: "Belum",
                    pengguna_penagihan_terakhir: new Date().toISOString().slice(0, 10),
                    pengguna_penagihan_jatuh_tempo: this.jatuhtemposelanjutnya
                },
                pengguna_status: "Y",
                pengguna_host: this.winbox.pengguna_host,
                pengguna_port: this.winbox.pengguna_port,
                pengguna_winbox_username: this.winbox.pengguna_username,
                pengguna_winbox_password: this.winbox.pengguna_password,
                pengguna_ppoe_password: this.winbox.pengguna_ppoe_password,
                pengguna_profile: this.detail.pengguna_paket,
                pengguna_service: "pppoe",
                pengguna_pra_aktiv: "L",
                pengguna_status_pemasangan: "L",
                pengguna_tipe_pelanggan : this.M_tipe[0].pembantu_tipe_nama,
                pengguna_winbox_local_address: this.winbox.pengguna_local_address,
                pengguna_winbox_remote_address: this.winbox.pengguna_remote_address
            }
            axios.put(API + `/M_pengguna/${this.detail.pengguna_id}`, ubahpelanggan)
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
        jatuhtemposelanjutnya(){
            var romla = new Date(this.date);
            var bulan_romla = ("0" + (romla.getMonth() + 2)).slice(-2);
            var tahun_romla = romla.getFullYear();
            var hari_romla = romla.getDate();
            var terakhir_hasil = tahun_romla + '-' + bulan_romla + '-' + '01';
            //var fixtangal = this.momentt(terakhir_hasil)
            return terakhir_hasil
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