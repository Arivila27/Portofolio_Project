import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../../api.config'
import moment from 'moment'
import JwPagination from 'jw-vue-pagination';
export default {
    components: { Multiselect, JwPagination },
    data() {
        return {
            pageSize: 10,
            PageofItems: [],
            select_status: '',
            cari: '',
            id: '',
            complain: [],
            comproses: [],
            proses: [],
            options: [],
            complain_pengguna_id: '',
            complain_penangan: '',
            complain_pengguna_nama: '',
            complain_pengguna_alamat: '',
            complain_pengguna_keluhan: '',
            complain_penyelesaian: '',
            complain_notice: '',
            opsipenyelesaian: [{ kode: 'Proses' }, { kode: 'Selesai' }, { kode: "Belum" }],
            Keluhan_data: '',
            update_data: '',
        }
    },
    mounted() {
        this.getcomplain()
        // this.getcomplainproses()
        this.getpegawai()
    },
    methods: {
        // Ketika mengganti Halaman maka akan keluar List table di halaman berikutnya 
        onChangePage: function(PageofItems) {
            this.PageofItems = PageofItems
            // console.log(pageSize)
        },
        // Mendapatkan Data Complain yang belum diselesaikan
        getcomplain() {
            axios.get(API + '/Tr_complain/domain/dashboard/' + this.$store.getters.domain)
                .then((response) => {
                    this.complain = response.data;
                });
        },
        // ----
        getpegawai() {
            axios.get(API + '/M_pengguna/domain/pegawai-group/' +this.$store.getters.domain+ '/Tukang')
                .then((response) => {
                    this.options = response.data;
                });
        },
        // ----
        // Mendapatkan Data Dikirim Ke tabel
        detail_pelanggan(kluhan) {
            this.update_data = kluhan
        },
        // ----
        // Mendapatkan Data dikirim ke tabel detail 
        detail_pelanggan_detail(kluhan) {
            this.Keluhan_data = kluhan
        },
        // Mengupdate Data Agar Dapat Dilihat Di Status 
        tangani() {
            for (var i = 0; i < this.complain_penangan.length; i++) {
                let article = {
                    complain_pengguna_nama : this.update_data.complain_pengguna_nama,
                    complain_penyelesaian_tanggal : moment().format('YYYY-MM-DD HH:mm:ss'),
                    complain_domain : this.$store.getters.domain,
                    pegawai_complain_status : "Y",
                    complain_keterangan_status : this.update_data.complain_keterangan_status,
                    complain_penyelesaian : "Selesai",
                    complain_pengguna_pelanggan_id : this.complain_penangan[index]._id,
                    complain_route : this.update_data.complain_penyelesaian
                  }
                  //console.log("data" , article)
                  axios.post(API + `/Tr_complain`,article).then(response =>{
                    //console.log('Ini Datanya Complain',response.data)
                    //this.showAlert()
                  }).catch(error =>{
                    //ToastAndroid.show('Maaf seperti terjadi error / kesalahan jaringan', ToastAndroid.SHORT);
                    console.log('Ini Erorku',error)
                  })
            }
            var date2 = moment().format('YYYY-MM-DD HH:mm:ss')
            let newcomplain = {
                complain_pengguna_nama: this.update_data.complain_pengguna_nama,
                complain_pengguna_alamat: this.update_data.complain_pengguna_alamat,
                complain_pengguna_keluhan: this.update_data.complain_pengguna_keluhan,
                complain_penyelesaian: this.update_data.complain_penyelesaian,
                complain_yang_menangani: {
                    complain_penangan_nama: this.update_data.complain_penangan
                },
                complain_pengguna_notice: this.update_data.complain_notice,
                complain_pengguna_masalah: this.update_data.complain_masalah,
                complain_updated: date2
            }
            axios.put(API + `/Tr_complain/domain/${this.update_data._id}`, newcomplain)
                .then(() => {
                    this.getcomplain()
                    this.$swal("Berhasil", "Berhasil", "success");
                    // this.$router.go('/dashboard_pelanggan')
            });

        },
        // ----
        // Mendapat data yang akan dihapus 
        hapus_pelanggan(id, nama) {
            this.id = id;
            this.complain_pengguna_nama = nama;
        },
        // ----
        // Menghapus Data pelanggan complain 
        deleteds() {
            axios.put(API + `/Tr_complain/${this.id}`, {
                    complain_status: "N"
                })
                .then(() => {
                    this.getcomplain();
                    this.$swal('Berhasil', 'Data berhasil dihapus', "success");
                    this.$router.go('/dashboard_pelanggan')

                });
        }
        // ----
    },
    computed: {
        // Memfilter Untuk bisa dijadikan search & pagination 
        FilterComplain: function() {
            return this.complain.filter((complain) => {
                var cari_nama = complain.complain_pengguna_nama.toLowerCase().includes(this.cari.toLowerCase())
                var cari_status = complain.complain_penyelesaian.toLowerCase().includes(this.select_status.toLowerCase())
                var filter_jumlah = complain < this.pageSize && complain > 0
                return cari_status && cari_nama || filter_jumlah;
            })
        },
        // ----
        // Komputasi untuk melihat jumlah complain 
        total_complain_belum: function() {
            return this.complain.filter((complain) => {
                return complain.complain_penyelesaian === "Belum"
            });
        },
        total_complain_proses: function() {
            return this.complain.filter((complain) => {
                return complain.complain_penyelesaian === "Proses"
            });
        },
        total_complain_selesai: function() {
            return this.complain.filter((complain) => {
                return complain.complain_penyelesaian === "Selesai"
            });
        }
        // ----

    }
}