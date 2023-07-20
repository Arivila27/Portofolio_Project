import axios from 'axios';
import Multiselect from 'vue-multiselect';

import API from '../../../../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            inquiry:[],
            pengguna: [],
            cari_number: '',

            metode: '',
            cari_nama: '',
            cari_status: '',
            option_pembayaran: ['Cash', 'BCA', 'BCA-371', 'Mandiri'],
            option_status: ['Lunas', 'Belum'],
        }
    },
    created() {
        this.getdata();
        this.getdata2();
    },
    methods: {
        // Mendapatkan data pelanggan 
        getdata() {
            axios.get(this.$API + '/M_pengguna/domain/pelanggan/' + this.$store.getters.domain)
                .then((response) => {
                    this.pengguna = response.data;
                    // console.log(response.data);
                });
        },

        getdata2(){
            axios.get("http://103.149.238.170:5090/payment-gateway/all-inquiry/internal")
            .then((response) =>{
                console.log(response.data)
                this.inquiry = response.data
            });
        },
    },
    computed: {
        // Komputasi untuk memfilter dengan status / bulan / nama 
        FilterPenagihan: function() {
            return this.inquiry.filter((inquiry) => {
                var a = inquiry.CustomerNumber.toLowerCase().includes(this.cari_number.toLowerCase());
                var b = inquiry.CustomerName.toLowerCase().includes(this.cari_nama.toLowerCase());
                // var c = inquiry.CustomerNumber.toLowerCase().includes(this.cari_number.toLowerCase());
                return a && b;
            })
        },

        // hitung total penagihan 
        // hitungtotalpenagihan: function() {
        //     var penagihantotal = 0;
        //     for (var i = 0; i < this.FilterPenagihan.length; i++) {
        //         penagihantotal += parseInt(this.FilterPenagihan[i].TotalAmount);
        //     }
        //     return penagihantotal;
        // },
        // // Komputasi dalam persen untuk menghitung selisi 
        // pendapatan: function() {
        //     var a = this.hitungtotalpenagihan / this.hitungtotalpelanggan * 100;
        //     var hasilnya = parseInt(a)
        //     return hasilnya;
        // }
    }
};