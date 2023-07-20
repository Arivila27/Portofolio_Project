import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../../api.config'
export default {
    components: { Multiselect },
    data() {
        return {
            pengguna: [],
            akun: [],
            departmen: [],
            project: [],
            pengeluaran: {},
            status_pengeluaran: [
                { id: 1, name: 'Purchase Order' },
                { id: 2, name: 'Project' },
                { id: 3, name: 'Consumption' }
            ],
            barang: [{
                uraian: '',
                harga: 0,
                jumlah: 0,
                total: 0
            }]
        }
    },
    beforeUpdate(){
        this.gettotal()
    },
    created() {
        this.getpengguna()
        this.getakun()
        this.getdepartmen()
        this.getproyek()
    },
    methods: {
        // gettotal perbarisnya 
        gettotal() {
            for (let i = 0; i < this.barang.length; i++) {
                const lom = this.barang[i];
                this.barang[i].total = lom.harga * lom.jumlah
            }
        },
        // tambahbarang 
        add(index) {
            this.barang.push({
                uraian: '',
                harga: 0,
                jumlah: 0,
                total: 0
            });
        },
        remove(index) {
            this.barang.splice(index, 1);
        },
        // Menjadi data pengeluaran 
        addPengeluaran() {
            let newPengeluaran = {
                pengeluaran_divisi: this.pengeluaran.divisi,
                pengeluaran_no: this.pengeluaran.no,
                pengeluaran_diajukan: this.pengeluaran.diajukan,
                pengeluaran_diketahui: this.pengeluaran.diketahui,
                pengeluaran_disetujui: this.pengeluaran.disetujui,
                pengeluaran_status_pengeluaran: this.pengeluaran.status_pengeluaran,
                pengeluaran_tanggal: this.pengeluaran.tanggal,
                pengeluaran_deskripsi: this.pengeluaran.deskripsi,
                pengeluaraan_barang: this.barang,
                pengeluaran_nominal: this.hasil,
                pengeluaran_status: "Y",
                pengeluaran_created: new Date().toISOString().slice(0, 10),
                pengeluaran_updated: new Date().toISOString().slice(0, 10),
                pengeluaran_user_updated: this.CreatedBy
            }
            axios.post(API + '/Tr_pengeluaran', newPengeluaran)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menambahkan data', 'success');
                    this.$router.push({ name: 'pengeluaran' })
                });
        },
        getpengguna() {
            axios.get(API + '/M_pengguna/pegawai')
                .then((response) => {
                    this.pengguna = response.data;
                });
        },
        getakun() {
            axios.get(API + '/M_kode_akun')
                .then((response) => {
                    this.akun = response.data;
                });
        },
        getdepartmen() {
            axios.get(API + '/pembantu_departmen')
                .then((response) => {
                    this.departmen = response.data
                });
        },
        getproyek() {
            axios.get(API + '/M_item/Project')
                .then((response) => {
                    this.project = response.data
                });
        }
    },
    computed: {
        CreatedBy: function() {
            return this.$store.getters.username
        },
        hasil() {
            var hasil = 0;
            for (var i = 0; i < this.barang.length; i++) {
                hasil += this.barang[i].total;
            }
            return hasil;
        },
    }
};