import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
export default {
    name: 'M_pengguna',
    components: {
        Multiselect
    },
    data() {
        return {
            cari: '',
            data_closing: [],
            id: ''
        }
    },
    created() {
        this.getclosing()
    },
    methods: {
        getclosing: function() {
            var domain = this.$store.getters.domain
            axios.get(API + `/M_closing/all/domain/` + domain)
                .then((response) => {
                    //console.log(response.data)
                    this.data_closing = response.data
                });
        },
        // Fungsi untuk ketika menekan tombol hapus akan menampilkan detail pelanggan 
        // editvoucher(id) {
        //     this.id = id;
        // },
        // deleteds1() {
        //     axios.put(API + `/Tr_voucher/update/${this.id}`, {
        //             voucher_status: "N",
        //         })
        //         .then(() => {
        //             this.getvoucher();
        //             this.$swal("Berhasil", "berhasil diajukan ", 'success');
        //             this.$router.reload();
        //         });
        // },
        // handler(){
        //     axios.post(API + `/Tr_voucher/create`, this.voucher)
        //     .then(() => {
        //         this.$swal("Berhasil", "Berhasil menambah pelanggan", "success");
        //         this.getvoucher();
        //          //router.reload();
        //         //this.$router.go('/akses_pelanggan')
        //     });
        // }
    },
    computed: {
        role: function() {
            return this.$store.getters.role
        },
        domain: function(){
            return this.$store.getters.domain
        },
        Filterdata: function() {
            return this.data_closing.filter((closing) => {
               var idnya = closing.closing_id.toLowerCase().includes(this.cari.toLowerCase());
               var tanggal = closing.closing_tanggal.toLowerCase().includes(this.cari.toLowerCase());

               return idnya || tanggal;
            })
        },
    }
};