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
            po: {
                pengguna_nama: '',
                tempo: '',
                created: new Date().toISOString().slice(0, 10),
                updated: new Date().toISOString().slice(0, 10),
                user_updated: '',
                keterangan: '',
                kodenya: ''
            },
            hasImage: false,
            image: null
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
        },
        getname: function() {
            return this.$store.getters.username
        }

    },
    methods: {
        handleupload() {
            this.file = this.$refs.file.files[0];
            // console.log(this.file.name)
        },
        // // setImage for Resize 
        // setImage: function(output) {
        //     this.hasImage = true;
        //     this.image = output;
        //     // console.log('Info', output.info)
        //     // console.log('Exif', output.exif)
        // },
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
            this.$http.get(this.$API + '/M_pengguna/pelanggan')
                .then((response) => {
                    this.pelanggan = response.data
                });
        },
        addpo() {
            let invoker = {
                po_pelanggan: this.po.pengguna_nama,
                po_dibuat: this.getname,
                po_kodenya: this.po.kodenya,
                po_tempo: this.po.tempo,
                po_created: this.po.created,
                po_updated: this.po.updated,
                po_user_updated: this.po.user_updated,
                po_status_bayar: "Belum",
                po_status: "Y",
                po_transaksi: this.barang,
                po_transaksi_ppn: this.ppn,
                po_subtotal_transaksi: this.subtotal,
                po_total_transaksi: this.total,
                po_keterangan: this.po.keterangan,
                po_status_routing: "N",
                po_status_tiba: "N"
                // po_image: this.file
            }
            this.$http.post(this.$API + '/Tr_po', invoker)
                .then(() => {
                    this.$router.push("/trpo");
                });
            // console.log(invoker)
        }
    }

};