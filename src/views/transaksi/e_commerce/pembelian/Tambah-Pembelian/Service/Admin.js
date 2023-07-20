import axios from 'axios'
import API from '../../../../../../api.config'
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    data() {
        return {
            M_supplier: [],
            ship: {
                nama: '',
                company: '',
                telephone: '',
                alamat: ''
            },
            supplier: {
                _id: '',
                nama: '',
                perusahaan_nama: '',
                no_perusahaan: ''
            },
            barang: [{
                kode_barang: '',
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
            pilih_supplier: []

        }

    },
    beforeUpdate() {
        this.gettotal();
    },
    mounted() {
        this.getsupplier();
        this.getjumlah();
    },
    computed: {
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
        noTrans: function() {
            var a = "PMBL-";
            var b = this.jumlah_pembelian;
            var noTrans = "";
            return noTrans = a + b;
        },
        createdBy: function() {
            return this.$store.getters.username;
        }
    },
    methods: {
        gettotal() {
            for (let i = 0; i < this.barang.length; i++) {
                const lom = this.barang[i];
                this.barang[i].total_barang = lom.harga_barang * lom.quanty_barang
            }
        },
        add(index) {
            this.barang.push({
                kode_barang: '',
                nama_barang: '',
                merk_barang: '',
                quanty_barang: 0,
                harga_barang: 0,
                total_barang: 0,
            });
        },
        remove(index) {
            this.barang.splice(index, 1);
        },
        getsupplier() {
            axios.get(API + '/M_supplier/domain/' + this.$store.getters.domain)
                .then((response) => {
                    console.log(response.data);
                    this.M_supplier = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getjumlah() {
            axios.get(API + '/Tr_pembelian/jumlah')
                .then((response) => {
                    this.jumlah_pembelian = response.data;
                });
        },
        detailsup(id, nama, perusnam, perusno) {
            this.supplier._id = id;
            this.supplier.nama = nama;
            this.supplier.perusahaan_nama = perusnam;
            this.supplier.no_perusahaan = perusno;
            $('#bukasup').modal('hide');
        },
        addpembelian() {
            let pembelian = {
                pembelian_supplier: this.pilih_supplier,
                pembelian_no_transaksi: this.noTrans,
                pembelian_verifikasi: "Belum",
                pembelian_shipped_to: this.ship,
                pembelian_barang: this.barang,
                pembelian_status: "Y",
                pembelian_subtotal: this.hasil,
                pembelian_ppn: this.ppn,
                pembelian_total: this.total,
                pembelian_created: new Date().toISOString().slice(0, 10),
                pembelian_updated: new Date().toISOString().slice(0, 10),
                pembelian_user_update: this.createdBy
            }
            console.log(pembelian);
            axios.post(API + '/Tr_pembelian', pembelian)
                .then((response) => {
                    console.log(response.data);
                    this.$swal("Berhasil", "Berhasil menambahkan data", "success");
                    this.$router.push("/membeli");

                })
                .catch((error) => {
                    console.log(error);
                    this.$swal("Gagal", "Gagal menambah data", "error");
                });
        }
    }

};