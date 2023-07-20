import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../api.config'
export default {
    name: 'M_pengguna',
    components: {
        Multiselect
    },
    data() {
        return {
            cari: '',
            datavoucher: [],
            voucher : {
                voucher_id : "",
                voucher_nama : "",
                voucher_tanggal : new Date().toLocaleDateString("en-Ca"),
                voucher_alamat : "",
                voucher_jumlah_item : 0,
                voucher_harga_satuan : 0,
                voucher_diskon : 0,
                voucher_keterangan : "",
                voucher_total_harga : this.TotalBiaya,
                voucher_status : "Y",
                voucher_created : new Date().toLocaleDateString("en-Ca"),
                voucher_updated : new Date().toLocaleDateString("en-Ca"),
                voucher_user_update : this.$store.getters.username,
                voucher_domain : this.$store.getters.domain
            },
            id: ''
        }
    },
    created() {
        this.getvoucher()
    },
    methods: {
        getvoucher: function() {
            var domain = this.$store.getters.domain
            axios.get(API + `/Tr_voucher/domain/dashboard/` + domain)
                .then((response) => {
                    //console.log(response.data)
                    this.datavoucher = response.data
                });
        },
        // Fungsi untuk ketika menekan tombol hapus akan menampilkan detail pelanggan 
        editvoucher(id) {
            this.id = id;
        },
        deleteds1() {
            axios.put(API + `/Tr_voucher/update/${this.id}`, {
                    voucher_status: "N",
                })
                .then(() => {
                    this.getvoucher();
                    this.$swal("Berhasil", "berhasil diajukan ", 'success');
                    this.$router.reload();
                });
        },
        handler(){
            axios.post(API + `/Tr_voucher/create`, this.voucher)
            .then(() => {
                this.$swal("Berhasil", "Berhasil menambah pelanggan", "success");
                this.getvoucher();
                 //router.reload();
                //this.$router.go('/akses_pelanggan')
            });
        }
    },
    computed: {
        role: function() {
            return this.$store.getters.role
        },
        domain: function(){
            return this.$store.getters.domain
        },
        Filterdata: function() {
            return this.datavoucher.filter((voucher) => {
               var idnya = voucher.voucher_id.toLowerCase().includes(this.cari.toLowerCase());
               var namanya = voucher.voucher_nama.toLowerCase().includes(this.cari.toLowerCase());

               return idnya || namanya;
            })
        },
        TotalBiaya: function() {
            var a = this.voucher.voucher_jumlah_item;
            var b = this.voucher.voucher_harga_satuan;
            var c = this.voucher.voucher_diskon;
            var TotalBiaya = 0;
            this.voucher.voucher_total_harga = a * b - c
            return TotalBiaya = a * b - c;
        },
    }
};