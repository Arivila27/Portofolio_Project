export default {
    data() {
        return {
            po: [],
            hapus_id: '',
            hapus_status: '',
            lunas_id: '',
            lunas_status: '',
            cari: ''
        }
    },
    mounted() {
        this.getpo()
    },
    methods: {
        getpo() {
            this.$http.get(this.$API + '/Tr_po')
                .then((response) => {
                    this.po = response.data;
                });
        },
        hapus(id, state) {
            this.hapus_id = id;
            this.hapus_status = state;
        },
        lunas(id, bayar) {
            this.lunas_id = id;
            this.lunas_status = bayar;
        },
        belum(id, bayar) {
            this.lunas_id = id;
            this.lunas_status = bayar;
        },
        gethapus() {
            let baru = {
                po_status: "N"
            }
            this.$http.put(this.$API + `/Tr_po/${this.hapus_id}`, baru)
                .then(() => {
                    this.getpo();
                    $('#hapus').modal('hide');
                });
        },
        getlunas() {
            let some = {
                po_status_bayar: "Sudah"
            }
            this.$http.put(this.$API + `/Tr_po/${this.lunas_id}`, some)
                .then(() => {
                    this.getpo();
                    $('#lunas').modal('hide');
                });
        },
        getbelum() {
            let semo = {
                po_status_bayar: "Belum"
            }
            this.$http.put(this.$API + `/Tr_po/${this.lunas_id}`, semo)
                .then(() => {
                    this.getpo();
                    $('#belum').modal('hide');
                });
        }
    },
    computed: {
        Filterpo: function() {
            return this.po.filter(po => {
                return po.po_pelanggan.toLowerCase().includes(this.cari.toLowerCase());
            })
        }
    }


};