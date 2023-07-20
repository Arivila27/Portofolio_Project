import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
export default {
    components: { Multiselect },
    name: 'M_pengguna',
    data() {
        return {
            invoice: {
                invoice_id: "",
                invoice_subject: "",
                invoice_issue_date: "",
                invoice_due_date: "",
                invoice_sender: {
                    sender_name: "",
                    sender_email: ""
                },
                invoice_receiver: {
                    receiver_name: "",
                    receiver_email: ""
                },
                invoice_payment_method: {
                    payment_account: '',
                    payment_number: ''
                }
            },
            barang: [{
                type_barang: '',
                nama_barang: '',
                merk_barang: '',
                quanty_barang: 0,
                harga_barang: 0,
                total_barang: 0
            }],
            angka1: '',
            angka2: '',
            ppn: 0,
            jumlah_pembelian: '',
            pilih_supplier: [],
            no_transaksi: '',
            kode_akun: [],
            pilih_kode: '',
            alluser: [],
            namacheck: false
        }
    },
    computed: {
        createdBy() {
            return this.$store.getters.username;
        },
        role: function() {
            return this.$store.getters.role;
        },
        hasil() {
            var hasil = 0;
            for (var i = 0; i < this.barang.length; i++) {
                hasil += this.barang[i].total_barang;
            }
            return hasil;
        },
        total() {
            return this.hasil + this.ppn;
        },
    },
    beforeUpdate() {
        this.gettotal();
    },
    created() {
        this.getalltipecash()
        this.getalluser()
    },
    methods: {
        // get all tipe cash 
        getalltipecash: function() {
            axios.get(API + "/M_kode_akun/" + this.$store.getters.domain)
                .then((response) => {
                    this.kode_akun = response.data
                    console.log(response.data)
                })
        },
        // ----
        // Get all pengguna aktiv 
        getalluser: function() {
            axios.get(API + "/M_pengguna/semua-user")
                .then((response) => {
                    this.alluser = response.data
                })
        },
        // ----
        // Mendapatkan total dari keranjang belanja
        gettotal() {
            for (let i = 0; i < this.barang.length; i++) {
                const lom = this.barang[i];
                this.barang[i].total_barang = lom.harga_barang * lom.quanty_barang
            }
        },
        // Menambah keranjang belanja
        add(index) {
            this.barang.push({
                type_barang: '',
                nama_barang: '',
                merk_barang: '',
                quanty_barang: 0,
                harga_barang: 0,
                total_barang: 0,
            });
        },
        // Remove keranjang belanja satu item 
        remove(index) {
            this.barang.splice(index, 1);
        },
        // ----
        // MEnambah Ke Collection invoice/invoice 
        addToApi() {
            let new_Invoice = {
                invoice_domain: this.$store.getters.domain,
                invoice_id: this.invoice.invoice_id,
                invoice_subject: this.invoice.invoice_subject,
                invoice_issue_date: this.invoice.invoice_issue_date,
                invoice_due_date: this.invoice.invoice_due_date,
                invoice_sender: {
                    sender_name: this.$store.getters.username,
                    sender_email: this.$store.getters.username + "@bitniaga.net.id"
                },
                invoice_receiver: {
                    receiver_name: this.invoice.invoice_receiver.receiver_name,
                    receiver_email: this.invoice.invoice_receiver.receiver_email
                },
                invoice_payment_method: {
                    payment_account: this.pilih_kode.kode_akun_nama,
                    payment_number: this.pilih_kode.kode_akun_rekening
                },
                invoice_service: this.barang,
                invoice_subtotal: this.hasil,
                invoice_tax: this.ppn,
                invoice_total: this.total,
                invoice_status_ailment: "Belum",
                invoice_status: "Y",
                invoice_created: new Date().toISOString().slice(0, 10),
                invoice_updated: new Date().toISOString().slice(0, 10),
                invoice_user_updated: this.createdBy
            }

            axios.post(API + '/Tr_invoice', new_Invoice)
                .then(() => {
                    this.$swal("Berhasil", "Ditambahkan", "success");
                    this.$router.push({ name: 'invoice' });
                });
        }
    }
}