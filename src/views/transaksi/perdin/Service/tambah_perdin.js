import axios from 'axios';
import API from '../../../../api.config'
export default {
    data() {
        return {
            perjalanan: {
                nama: '',
                jumlah: '',
                divisi: '',
                tanggal: ''
            },
            M_divisi: [],
            keperluan: [{
                nama_keperluan: '',
                biaya_keperluan: 0
            }],
            jumlah_perdin: ''
        }
    },
    created() {
        this.getdivisi()
        this.getjumlah()
    },
    methods: {
        add(index) {
            this.keperluan.push({
                nama_keperluan: '',
                biaya_keperluan: 0
            });
        },
        remove(index) {
            this.keperluan.splice(index, 1);
        },
        getdivisi() {
            axios.get(API + '/M_divisi/get-list/' + this.$store.getters.domain)
                .then((response) => {
                    this.M_divisi = response.data
                    console.log(response.data)
                });
        },
        getjumlah() {
            axios.get(API + '/Tr_perdin/jumlah/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.jumlah_perdin = response.data;
                });
        },
        // Perlu Direvisi 
        addperjalanan() {
            let newperjalanan = {
                perdin_domain: this.$store.getters.domain,
                perdin_no: this.no_Perdin,
                perdin_nama: this.perjalanan.nama,
                perdin_jumlah: this.hasil,
                perdin_divisi: this.perjalanan.divisi,
                perdin_tanggal: this.perjalanan.tanggal,
                perdin_keperluan: this.keperluan,
                perdin_status: "Y",
                perdin_created: new Date().toISOString().slice(0, 10),
                perdin_updated: new Date().toISOString().slice(0, 10),
                perdin_user_created: this.CreatedBy
            }
            if (this.perjalanan.divisi < 1) {
                this.$swal('Gagal', 'Silahkan pilih divisi terlebih dahulu', 'error')

            } else if (this.perjalanan.nama === '') {
                this.$swal('Gagal', 'Nama perdin tidak boleh kosong', 'error')

            } else if (this.perjalanan.tanggal === '') {
                this.$swal('Gagal', 'Tanggal tidak boleh kosong', 'error')

            } else {
                axios.post(API + '/Tr_perdin/create-perdin', newperjalanan)
                    .then(() => {
                        this.$swal('Berhasil', 'Berhasil menambahkan data', 'success')
                        this.$router.push({ name: 'perjalanan_dinas' });
                    });
            }

        }
    },
    computed: {
        CreatedBy: function() {
            return this.$store.getters.username;
        },
        no_Perdin: function() {
            var a = "PERDIN-";
            var b = this.jumlah_perdin;
            var no_Perdin = "";
            return no_Perdin = a + b;
        },
        hasil() {
            var hasil = 0;
            for (var i = 0; i < this.keperluan.length; i++) {
                hasil += this.keperluan[i].biaya_keperluan;
            }
            return hasil;
        }
    }
};