import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../../../api.config'
export default {
    components: { Multiselect },
    data() {
        return {
            kasbank: {},
            FilterKas: [],
            closingan: [],
            detail_kasbank: {},
            data_closingan: [],
            kasbank_bulan: "",
            hitungtotalkas3: 0
        }
    },
    // updated() {
    //     this.getkasbank()
    //     this.getclosingbank()
    //     this.getdetailclosingankredit()

    //     // this.getdetailkasbank()
    // },
    mounted() {
        this.getdetailkasbank()
        this.getdetailclosingankredit()

    },
    methods: {
        getdetailclosingankredit() {
            if (this.$route.params.menu === "Tr_perdin") {
                axios.get(API + "/Tr_perdin/get-list/domain/" + this.$store.getters.domain)
                    .then((response) => {
                        this.data_closingan = response.data;
                    });
            } else if (this.$route.params.menu === "Tr_pembelian") {
                axios.get(API + "/Tr_pembelian/domain/" + this.$store.getters.domain)
                    .then((response) => {
                        // this.kode_akun = response.data
                        // console.log(response.data)
                        this.data_closingan = response.data;
                    });
            } else {
                console.log("nothing loop")
            }

        },
        getdetailkasbank() {
            axios.get(API + `/Tr_kasbank/${this.$route.params.id}`)
                .then((response) => {
                    // this.kode_akun = response.data
                    // console.log(response.data)
                    this.detail_kasbank = response.data;
                });
        },
        // Get Closingan untuk kas awal
        getclosingbank: function () {
            axios.get(API + "/Tr_kasbank_closing/domain/" + this.$store.getters.domain)
                .then((response) => {
                    this.closingan = response.data
                })
        },
        // Get kas bank untuk table item
        getkasbank: function () {
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
            if (!this.kasbank.description) {
                this.$swal('Gagal', 'Deskripsi Kasbank Tidak boleh kosong', 'error');
            } else {
                let newkasbank = {
                    kasbank_domain: this.$store.getters.domain,
                    kasbank_description: this.kasbank.description,
                    kasbank_tipe_cash: this.kasbank.tipe_cash,
                    kasbank_item: this.Filterkas2,
                    kasbank_tipe_cash: this.detail_kasbank.kasbank_type,
                    kasbank_tipe: this.detail_kasbank.kasbank_tipe_cash,
                    kasbank_bulan: this.kasbank_bulan,
                    kasbank_awal: this.detail_kasbank.kasbank_kasawal,
                    kasbank_penambahan: this.hitungtotalkas2,
                    kasbank_akhir: this.jumlah_total,
                    kasbank_status: "Y",
                    kasbank_tahun: new Date().getFullYear(),
                    kasbank_created: new Date().toISOString().slice(0, 10),
                    kasbank_updated: new Date().toISOString().slice(0, 10),
                    kasbank_user_updated: this.$store.getters.username
                }
                let newkasbank2 = {
                    kasbank_domain: this.$store.getters.domain,
                    kasbank_description: this.kasbank.description,
                    kasbank_tipe_cash: this.kasbank.tipe_cash,
                    kasbank_item: this.Filterkas2,
                    kasbank_tipe_cash: this.detail_kasbank.kasbank_type,
                    kasbank_tipe: this.detail_kasbank.kasbank_tipe_cash,
                    kasbank_bulan: this.kasbank_bulan,
                    kasbank_awal: this.detail_kasbank.kasbank_kasawal,
                    kasbank_penambahan: this.hitungtotalkas3,
                    kasbank_akhir: this.jumlah_total2,
                    kasbank_status: "Y",
                    kasbank_tahun: new Date().getFullYear(),
                    kasbank_created: new Date().toISOString().slice(0, 10),
                    kasbank_updated: new Date().toISOString().slice(0, 10),
                    kasbank_user_updated: this.$store.getters.username
                }
                if (this.$route.params.menu === 'Kosong') {
                    axios.post(API + '/Tr_kasbank_closing', newkasbank2)
                        .then(() => {
                            this.$swal('Berhasil', 'Berhasil menambahkan data', 'success');
                            this.$router.push({ name: 'trkasbank_closing' })
                        });
                } else {
                    axios.post(API + '/Tr_kasbank_closing', newkasbank)
                        .then(() => {
                            this.$swal('Berhasil', 'Berhasil menambahkan data', 'success');
                            this.$router.push({ name: 'trkasbank_closing' })
                        });
                }

                axios.put(API + `/Tr_kasbank/${this.$route.params.id}`, {
                    kasbank_kasawal: this.jumlah_total,
                    kasbank_kredit: this.jumlah_total,
                    kasbank_saldoakhir: this.jumlah_total
                });
                // console.log(this.kasbank)
            }

        },
    },
    computed: {
        total_all: function () {
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
        jumlah_total: function () {
            var hasil = 0;
            hasil = parseInt(this.detail_kasbank.kasbank_kasawal) + parseInt(this.hitungtotalkas2)
            return hasil
        },
        jumlah_total2: function () {
            var hasil = 0;
            hasil = parseInt(this.detail_kasbank.kasbank_kasawal) + parseInt(this.hitungtotalkas3)
            return hasil
        },
        hitungtotalkas2: function () {
            if (this.$route.params.menu === "Tr_perdin") {
                var perdintotal = 0;
                for (var i = 0; i < this.Filterkas2.length; i++) {
                    perdintotal += this.Filterkas2[i].perdin_jumlah;
                }
                return perdintotal;
            } else if (this.$route.params.menu === "Tr_pembelian") {
                var perdintotal = 0;
                for (var i = 0; i < this.Filterkas2.length; i++) {
                    perdintotal += parseInt(this.Filterkas2[i].pembelian_total);
                }
                return perdintotal;
            } else {
                var perdintotal = 0;
                perdintotal = this.detail_kasbank.kasbank_kasawal + this.hitungtotalkas3;
                return perdintotal;
            }

        },
        Filterkas2: function () {
            if (this.$route.params.menu === "Tr_perdin") {
                return this.data_closingan.filter((closingan) => {
                    var a = closingan.perdin_tanggal.toLowerCase().includes(this.kasbank_bulan)
                    return a
                })
            } else if (this.$route.params.menu === "Tr_pembelian") {
                return this.data_closingan.filter(closingan => {
                    return closingan.pembelian_created.toLowerCase().includes(this.kasbank_bulan)
                })
            }
        }
    }
};