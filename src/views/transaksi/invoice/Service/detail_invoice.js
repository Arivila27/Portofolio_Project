import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../api.config'
export default {
    data() {
        return {
            detail_invoice: {}
        }
    },
    mounted() {
        this.getdetail()
    },
    methods: {
        getdetail: function() {
            axios.get(API + '/Tr_invoice/' + this.$route.params.id)
                .then((response) => {
                    // console.log(response.data)
                    this.detail_invoice = response.data;
                }).catch((error) => {
                    console.log(error.message)
                });
        },
        Konfirmasi() {
            const newkasbank = {
                kasbank_domain: this.$store.getters.domain,
                kasbank_description: "",
                kasbank_kode: this.detail_invoice.invoice_id,
                kasbank_item: this.detail_invoice.invoice_subject,
                kasbank_type: "Kredit",
                kasbank_tanggal: new Date().toISOString().slice(0, 10),
                kasbank_ref_code: "",
                kasbank_status: "Y",
                kasbank_debit: "0",
                kasbank_kredit: this.detail_invoice.invoice_total,
                kasbank_created: new Date().toISOString().slice(0, 10),
                kasbank_updated: new Date().toISOString().slice(0, 10),
                kasbank_user_updated: this.$store.getters.username
            }
            // console.log(newkasbank)
            axios.post(API + `/Tr_kasbank`, newkasbank)
            axios.put(API + `/Tr_pembelian/ubah/${this.$route.params.id}`, {
                    pembelian_verifikasi: 'Lunas'
                })
                .then((response) => {
                    console.log(response.data);
                    this.$swal("Berhasil", "Berhasil Konfirmasi", "success");
                    this.$router.push("/membeli");
                })
        }
    }
}