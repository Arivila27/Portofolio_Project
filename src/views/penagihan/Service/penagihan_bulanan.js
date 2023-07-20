import axios from 'axios';
import API from '../../../api.config'
import moment from 'moment';
export default {
    data() {
        return {
            datapelanggan : [],
            pelanggandua : [],
            cari_id: '',
            cari_nama: '',
            pengguna: {
                id: '',
                nama: '',
                pengguna_id: '',
                status_bayar: '',
                terakhir_bayar: '',
                jatuh_tempo: '',
                biaya_tambahan: '',
                terakhir_bayar_dua : new Date().toLocaleDateString('en-CA'),
                biaya_total: '',
                biaya_ppn: '',
                paket_nama: '',
                paket_harga: '',
                paket_metode_bayar: '',
                paket_keterangan: '',
                status_potongan: '',
                jumlah_potongan: ''
            },
        }
    },
    methods: {
        momentt(tanggal){
            return moment(tanggal).format("DD MMMM YYYY")
        },
        momentd(tanggal){
            return moment(tanggal).format("MMMM")
        },
        jatuhtempobarudua(pelanggan,index) {
            var terakhir_hasil = moment(pelanggan).add(index, 'M').format("DD MMMM YYYY")
            
            //var fixtangal = this.momentt(terakhir_hasil)
            return terakhir_hasil
        },
        getpelanggan() {
            axios.get(API + '/M_pengguna/domain/login-pelanggan-with-id/' + this.cari_id)
                .then((response) => {
                    console.log("DATA",response.data)
                    this.datapelanggan = [response.data];
                    var jatuhtempo = response.data.pengguna_penagihan.pengguna_penagihan_jatuh_tempo
                    console.log("DATADUA", jatuhtempo)
                    var bulansekarang = moment().format("MM")
                    var bulanjatuhtempo = moment(jatuhtempo).format("MM")
                    //this.setState({penagihanjatuhtempo:jatuhtempo})
                    var jumlahdata = bulansekarang - bulanjatuhtempo + 1
                    var datanya = [];
                    for (let index = 0; index < jumlahdata; index++) {
                        datanya.push(response.data)
                    }
                    this.pelanggandua = datanya;
                });
        },
        detailPenagihan(id, nama, pelid, status, terakhir, jatuh, tambahan, total, panam, pahar, stapo, jumpo) {
            this.pengguna.id = id,
                this.pengguna.nama = nama,
                this.pengguna.pengguna_id = pelid,
                this.pengguna.status_bayar = status,
                //this.pengguna.terakhir_bayar_dua = terakhir,
                this.pengguna.terakhir_bayar = terakhir,
                this.pengguna.jatuh_tempo = jatuh,
                this.pengguna.biaya_tambahan = tambahan,
                this.pengguna.biaya_total = total,
                this.pengguna.paket_nama = panam,
                this.pengguna.paket_harga = pahar,
                this.pengguna.status_potongan = stapo,
                this.pengguna.jumlah_potongan = jumpo
        },
        detailPenagihan1(id, nama, pelid, status, terakhir, jatuh, tambahan, total, panam, pahar) {
            this.pengguna.id = id,
                this.pengguna.nama = nama,
                this.pengguna.pengguna_id = pelid,
                this.pengguna.status_bayar = status,
                //this.pengguna.terakhir_bayar_dua = terakhir,
                this.pengguna.terakhir_bayar = terakhir,
                this.pengguna.jatuh_tempo = jatuh,
                this.pengguna.biaya_tambahan = tambahan,
                this.pengguna.biaya_total = total,
                this.pengguna.paket_nama = panam,
                this.pengguna.paket_harga = pahar
        },
        async tambahInvoice() {
                let SatunewInvoice = {
                    penagihan_domain: this.$store.getters.domain,
                    penagihan_nama: this.pengguna.nama,
                    penagihan_pengguna_id: this.pengguna.id,
                    penagihan_id_pengguna: this.pengguna.pengguna_id,
                    penagihan_status: "Y",
                    penagihan_status_bayar: "Lunas",
                    penagihan_tanggal_pembayaran: this.pengguna.terakhir_bayar_dua,
                    penagihan_paket: {
                        penagihan_paket_nama: this.pengguna.paket_nama,
                        penagihan_paket_harga: this.pengguna.paket_harga
                    },
                    penagihan_biaya: {
                        penagihan_biaya_tambahan: this.pengguna.biaya_tambahan,
                        penagihan_biaaya_ppn: this.pengguna.biaya_ppn,
                        penagihan_biaya_total: this.TotalBiaya
                    },
                    penagihan_metode_bayar: this.pengguna.paket_metode_bayar,
                    penagihan_keterangan: this.pengguna.paket_keterangan,
                    penagihan_type_keterangan : "Y",
                    penagihan_user_updated: this.$store.getters.username
                }
                let DuanewInvoice = {
                    penagihan_domain: this.$store.getters.domain,
                    penagihan_nama: this.pengguna.nama,
                    penagihan_pengguna_id: this.pengguna.id,
                    penagihan_id_pengguna: this.pengguna.pengguna_id,
                    penagihan_status: "Y",
                    penagihan_status_bayar: "Lunas",
                    penagihan_tanggal_pembayaran: this.pengguna.terakhir_bayar_dua,
                    penagihan_paket: {
                        penagihan_paket_nama: this.pengguna.paket_nama,
                        penagihan_paket_harga: this.pengguna.paket_harga
                    },
                    penagihan_biaya: {
                        penagihan_biaya_tambahan: this.pengguna.biaya_tambahan,
                        penagihan_biaaya_ppn: this.pengguna.biaya_ppn,
                        penagihan_biaya_total: this.TotalBiaya
                    },
                    penagihan_metode_bayar: this.pengguna.paket_metode_bayar,
                    penagihan_keterangan: "Pembayaran bulan" + this.momentd(this.pengguna.jatuh_tempo),
                    penagihan_type_keterangan : "O",
                    penagihan_user_updated: this.$store.getters.username
                }
            
            if (!this.pengguna.paket_metode_bayar) {
                this.$swal("Gagal", "Metode Pembayaran Tidak boleh Kosong", "error");
            }else if(this.jatuhtemposelanjutnya===this.jatuhtempobaru){
                await axios.post(API + '/Tr_penagihan', SatunewInvoice)
                    .then((response) => {
                        console.log("ARRAY" , response.data)
                        //this.$swal("Berhasil", "Berhasil Menambahkan Invoice Pelanggan", "success")
                        this.$router.push({ name: 'print_penagihan_thermal' ,params:{id: response.data._id}});
                    });
            }else {
                await axios.post(API + '/Tr_penagihan', DuanewInvoice)
                    .then((response) => {
                        console.log("ARRAY" , response.data)
                        this.$router.push({ name: 'print_penagihan_thermal' ,params:{id: response.data._id}});
                        // this.$swal("Berhasil", "Berhasil Menambahkan Invoice Pelanggan", "success")
                    });
            }

        },
        async updatePelanggan() {
            let newPelanggan = {
                pengguna_status : "Y",
                pengguna_penagihan: {
                    pengguna_penagihan_status: "Belum",
                    pengguna_penagihan_terakhir: this.pengguna.terakhir_bayar_dua,
                    pengguna_penagihan_jatuh_tempo: this.jatuhtemposelanjutnya,
                    pengguna_keterangan: this.pengguna.paket_keterangan
                }
            }
            await axios.put(API + `/M_pengguna/${this.pengguna.id}`, newPelanggan)
                .then(() => {
                    this.getpelanggan();
                    this.gettagihan();
                    $('#modal_update').modal('hide');
                })
        },
        handler: function(arg1, arg2) {
            this.tambahInvoice(arg1);
            this.updatePelanggan(arg2);
        },
    },
    computed: {
        jatuhtempobaru() {
            var romla = new Date(this.pengguna.terakhir_bayar_dua);
            var bulan_romla = ("0" + (romla.getMonth() + 2)).slice(-2);
            var tahun_romla = romla.getFullYear();
            var hari_romla = romla.getDate();
            var terakhir_hasil = tahun_romla + '-' + bulan_romla + '-' + '01';
            //var fixtangal = this.momentt(terakhir_hasil)
            return terakhir_hasil
        },
        jatuhtemposelanjutnya(){
            var romla = new Date(this.pengguna.jatuh_tempo);
            var bulan_romla = ("0" + (romla.getMonth() + 2)).slice(-2);
            var tahun_romla = romla.getFullYear();
            var hari_romla = romla.getDate();
            var terakhir_hasil = tahun_romla + '-' + bulan_romla + '-' + '01';
            //var fixtangal = this.momentt(terakhir_hasil)
            return terakhir_hasil
        },
        tanggalbayar(){
            var tgl = new Date().toLocaleDateString('en-CA');
            return tgl
        },
        TotalBiaya: function() {
            var a = this.pengguna.biaya_ppn;
            var b = this.pengguna.paket_harga;
            var c = this.pengguna.jumlah_potongan;
            var TotalBiaya = 0;
            return TotalBiaya = a + b - c;
        },
        // Tanpa potongan 
        TotalBiayanopot: function() {
            var a = this.pengguna.biaya_ppn;
            var b = this.pengguna.paket_harga;
            var TotalBiaya = 0;
            return TotalBiaya = a + b;
        },
    }
};