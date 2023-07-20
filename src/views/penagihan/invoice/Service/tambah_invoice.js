import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    data() {
        return {
            ppn: 0,
            barang: [{
                nama_barang: '',
                deskripsi_barang: '',
                quanty_barang: '',
                harga: '',
                total_harga: 0
            }],
            pelanggan: [],
            invoice: {
                pengguna_nama: '',
                pengguna_alamat: '',
                pengguna_no_telepon: '',
                lokasi_kirim: '',
                nama_bank: '',
                no_rekening: '',
                tempo: '',
                created: new Date().toISOString().slice(0, 10),
                updated: new Date().toISOString().slice(0, 10),
                user_updated: ''
            },
        }
    },
    beforeUpdate() {
        this.gettotal();
    },
    mounted() {
        this.getpelanggan()
    },
    computed: {
        subtotal: function() {
            var subtotal = 0
            for (var i = 0; i < this.barang.length; i++) {
                subtotal += this.barang[i].total_harga;
            }
            return subtotal;
        },
        total: function() {
            return this.subtotal - this.ppn;
        }

    },
    methods: {
        gettotal() {
            for (let i = 0; i < this.barang.length; i++) {
                const lom = this.barang[i];
                this.barang[i].total_harga = lom.quanty_barang * lom.harga;
            }
        },
        add(index) {
            this.barang.push({
                nama_barang: '',
                deskripsi_barang: '',
                quanty_barang: '',
                harga: '',
                total_harga: 0
            });
        },
        remove(index) {
            this.barang.splice(index, 1);
        },
        getpelanggan() {
            this.$http.get(this.$API + '/M_pengguna/pelanggan/' + this.$store.getters.domain)
                .then((response) => {
                    this.pelanggan = response.data
                });
        },
        addInvoice() {
            let invoker = {
                invoice_pelanggan: this.invoice.pengguna_nama,
                invoice_lokasi_kirim: this.invoice.lokasi_kirim,
                invoice_nama_bank: this.invoice.nama_bank,
                invoice_no_rekening: this.invoice.no_rekening,
                invoice_dibuat: this.invoice.created,
                invoice_tempo: this.invoice.tempo,
                invoice_created: this.invoice.created,
                invoice_updated: this.invoice.updated,
                invoice_user_updated: this.invoice.user_updated,
                invoice_status_bayar: "Belum",
                invoice_status: "Y",
                invoice_transaksi: this.barang,
                invoice_transaksi_ppn: this.ppn,
                invoice_subtotal_transaksi: this.subtotal,
                invoice_total_transaksi: this.total

            }
            this.$http.post(this.$API + '/Tr_invoice', invoker)
                .then(() => {
                    this.$router.push("/invoice");
                });
        }
    }

};