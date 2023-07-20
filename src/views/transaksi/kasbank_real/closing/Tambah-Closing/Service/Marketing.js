import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../../api.config'
export default {
    components: { Multiselect },
    data() {
        return {
            kasbank: {},
            FilterKas: [],
            closingan: [],
            kode_akun: []
        }
    },
    updated() {
        this.getkasbank()
        this.getclosingbank()
        this.getkodeakun()
    },
    methods: {
        //Get kode akun
        getkodeakun() {
            axios.get(API + `/M_kode_akun/${this.$store.getters.domain}`)
                .then((response) => {
                    this.kode_akun = response.data
                });
        },

        // Get Closingan untuk kas awal
        getclosingbank: function() {
            axios.get(API + "/Tr_kasbank_closing/domain/" + this.$store.getters.domain)
                .then((response) => {
                    this.closingan = response.data
                })
        },
        // Get kas bank untuk table item
        getkasbank: function() {
            axios.post(API + "/Tr_kasbank/search-closing", {
                    tanggal: this.kasbank.bulan
                })
                .then((response) => {
                    // console.log(response.data)
                    this.FilterKas = response.data
                })
        },
        // Menjadi data kasbank 
        addKasBank() {
            if (!this.kasbank.kode) {
                this.$swal('Gagal', 'Kode Kasbank Tidak boleh kosong', 'error');

            } else if (!this.kasbank.description) {
                this.$swal('Gagal', 'Deskripsi Kasbank Tidak boleh kosong', 'error');

            } else if (!this.kasbank.tipe_cash) {
                this.$swal('Gagal', 'Tipe Kasbank Tidak boleh kosong', 'error');

            } else if (!this.kasbank.bulan) {
                this.$swal('Gagal', 'Bulan Kasbank Tidak boleh kosong', 'error');

            } else if (!this.kasbank.awal) {
                this.$swal('Gagal', 'Awal Kasbank Tidak boleh kosong', 'error');

            } else if (!this.kasbank.total_all) {
                this.$swal('Gagal', 'Total Kasbank Tidak boleh kosong', 'error');

            } else if (!this.kasbank.jumlah_total) {
                this.$swal('Gagal', 'Total Kasbank Tidak boleh kosong', 'error');
            } else {
                let newkasbank = {
                    kasbank_domain: this.$store.getters.domain,
                    kasbank_description: this.kasbank.description,
                    kasbank_tipe_cash: this.kasbank.tipe_cash,
                    kasbank_kode: this.kasbank.kode,
                    kasbank_item: this.FilterKas,
                    kasbank_bulan: this.kasbank.bulan,
                    kasbank_awal: this.kasbank.awal,
                    kasbank_penambahan: this.total_all,
                    kasbank_akhir: this.jumlah_total,
                    kasbank_status: "Y",
                    kasbank_created: new Date().toISOString().slice(0, 10),
                    kasbank_updated: new Date().toISOString().slice(0, 10),
                    kasbank_user_updated: this.$store.getters.username
                }
                axios.post(API + '/Tr_kasbank_closing', newkasbank)
                    .then(() => {
                        this.$swal('Berhasil', 'Berhasil menambahkan data', 'success');
                        this.$router.push({ name: 'trkasbank_closing' })
                    });
                // console.log(this.kasbank)
            }

        },
    },
    computed: {
        total_all: function() {
            var hasil = 0;
            var debit = 0;
            var kredit = 0;
            for (var i = 0; i < this.FilterKas.length; i++) {
                debit += parseInt(this.FilterKas[i].kasbank_debit);
                kredit += parseInt(this.FilterKas[i].kasbank_kredit);
                hasil = debit - kredit;
            }
            return hasil;

        },
        jumlah_total: function() {
            var hasil = 0;
            hasil = parseInt(this.kasbank.awal) + parseInt(this.total_all)
            return hasil
        }
    }
};