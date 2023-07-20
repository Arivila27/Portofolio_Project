import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../../api.config'
export default {
    components: { Multiselect },
    data() {
        return {
            kasbank: {},
            status_kasbank: ["Debit", "Kredit"],
            kode_akun: []
        }
    },
    mounted() {
        this.getkodeakun()
    },
    methods: {
        // getkodeakun
        getkodeakun() {
            axios.get(API + `/M_kode_akun/` + this.$store.getters.domain)
                .then((response) => {
                    this.kode_akun = response.data
                })
        },
        // Menjadi data kasbank 
        addKasBank() {
            let newkasbank = {
                kasbank_domain: this.$store.getters.domain,
                kasbank_description: this.kasbank.description,
                kasbank_tipe_cash: this.kasbank.tipe_cash,
                kasbank_type: this.kasbank.type,
                kasbank_ref_code: this.kasbank.ref_code,
                kasbank_status: "Y",
                kasbank_debit: this.kasbank.debit,
                kasbank_kredit: this.kasbank.kredit,
                kasbank_kasawal: this.kasbank.kasawal,
                kasbank_created: new Date().toISOString().slice(0, 10),
                kasbank_updated: new Date().toISOString().slice(0, 10),
                kasbank_user_updated: this.CreatedBy,
                kasbank_menu: "Kosong",
                kasbank_saldoakhir:this.kasbank.kasawal
            }
            axios.post(API + '/Tr_kasbank', newkasbank)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menambahkan data', 'success');
                    this.$router.push({ name: 'kasbank_real' })
                });
        },
    }
};