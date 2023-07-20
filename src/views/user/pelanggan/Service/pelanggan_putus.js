import axios from 'axios';
import API from '../../../../api.config'
export default {
    name: 'M_pengguna',
    data() {
        return {
            sortir: 5,
            M_gambar: [],
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            cari: '',
            M_pengguna: [],
            id: '',
            pengguna_group: '',
            pengguna_nama: '',
            pengguna_role: '',
            pengguna_jenis_kelamin: '',
            pengguna_created: '',
            pengguna_updated: '',
            pengguna_user_updated: '',
            pengguna_no_telepon: '',
            pengguna_status: '',
            pengguna_alamat: '',
            pengguna_no_ktp: '',
            pengguna_no_npwp: '',
            pengguna_paket: '',
            pengguna_ppoe: '',
            pengguna_lokasi_pasang: '',
            pengguna_tanggal_pemasangan: '',
            pengguna_produk_id: '',
            pengguna_produk_merk: '',
            pengguna_produk_nama: '',
            pengguna_aktiv_kembali: new Date().toISOString().slice(0, 10),
            page: 1,
            perpage: 10,
            pages: []
        }
    },
    created() {
        this.getdata()
        this.getgambar()
    },
    watch: {
        M_pengguna() {
            this.setPage()
        }
    },
    methods: {
        // Paginate 
        setPage() {
            let numberOfPages = Math.ceil(this.filterpelanggan.length / this.perpage);
            for (var index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(filterpelanggan) {
            let page = this.page;
            let perpage = this.perpage;
            let from = (page * perpage) - perpage;
            let to = (page * perpage)
            return filterpelanggan.slice(from, to)
        },
        // ----
        // Coba ambil gambar
        getgambar() {
            axios.get(API + '/Gmbr_item')
                .then((response) => {
                    this.M_gambar = response.data;
                });
        },
        // ----
        getdata() {
            axios.get(API + '/M_pengguna/domain/pelanggan/nonaktif/' + this.$store.getters.domain)
                .then((response) => {
                    this.M_pengguna = response.data;
                });
        },
        // Detail PElanggan Dari tabel ke modal 
        // detail_pelanggan(
        // detail_pelanggan(pelanggan._id,pelanggan.pengguna_nama,pelanggan.pengguna_alamat,pelanggan.pengguna_jenis_kelamin,pelanggan.pengguna_no_telepon,pelanggan.pengguna_no_ktp,pelanggan.pengguna_no_npwp,pelanggan.pengguna_lokasi_pasang,pelanggan.pengguna_paket,pelanggan.pengguna_produk.pengguna_produk_id,pelanggan.pengguna_produk.pengguna_produk_merk,pelanggan.pengguna_produk.pengguna_produk_nama
        detail_pelanggan(id, nama, alamat, jenis, telepon, ktp, npwp, ppoe, tanggal, lokasi, paket, proid, merk, pronam) {
            this.id = id;
            this.pengguna_nama = nama;
            this.pengguna_alamat = alamat;
            this.pengguna_jenis_kelamin = jenis;
            this.pengguna_no_telepon = telepon;
            this.pengguna_no_ktp = ktp;
            this.pengguna_no_npwp = npwp;
            this.pengguna_ppoe = ppoe;
            this.pengguna_tanggal_pemasangan = tanggal;
            this.pengguna_lokasi_pasang = lokasi;
            this.pengguna_paket = paket;
            this.pengguna_produki_id = proid;
            this.pengguna_produk_merk = merk;
            this.pengguna_produk_nama = pronam;
        },
        // ----
        hapuspengguna(id, nama) {
            this.id = id;
            this.pengguna_nama = nama;
            this.pengguna_status = 'Y';
        },
        updatepelanggan() {
            let newpelanggan = {
                pengguna_nama: this.pengguna_nama,
                pengguna_alamat: this.pengguna_alamat,
                pengguna_jenis_kelamin: this.pengguna_jenis_kelamin,
                pengguna_no_telepon: this.pengguna_no_telepon,
                pengguna_no_ktp: this.pengguna_no_ktp,
                pengguna_no_npwp: this.pengguna_no_npwp,
                pengguna_paket: this.pengguna_paket,
                pengguna_ppoe: this.pengguna_ppoe,
                pengguna_tanggal_pemasangan: this.pengguna_tanggal_pemasangan,
                pengguna_lokasi_pasang: this.pengguna_lokasi_pasang,
            }
            axios.put(API + `/M_pengguna/${this.id}`, newpelanggan)
                .then(() => {
                    this.getdata();
                    this.$swal("Berhasil", "Pelanggan Berhasil diupdate", 'success');
                });
        },
        deleteds() {
            axios.put(API + `/M_pengguna/${this.id}`, {
                    pengguna_status: this.pengguna_status,
                    pengguna_aktiv_kembali: this.pengguna_aktiv_kembali,
                    pengguna_tanggal_nonaktif: ''
                })
                .then(() => {
                    this.pengguna_status = 'Y',
                        this.getdata()
                    this.$swal('Berhasil', 'Pelanggan berhasil diaktifkan', 'success');
                });
        },
        softdelete(id) {
            axios.delete(API + '/M_pengguna/' + id)
                .then(() => {
                    this.getdata()
                });
        }

    },
    computed: {
        // Mendapatkan Data Dengan Filter dan PAginate 
        displayedPel: function() {
            return this.paginate(this.filterpelanggan);
        },
        // ----
        // Mencari Dengan Filter
        filterpelanggan: function() {
            return this.M_pengguna.filter(pelanggan => {
                var cari_nama = pelanggan.pengguna_nama.toLowerCase().includes(this.cari.toLowerCase());
                var cari_id = pelanggan.pengguna_id.toLowerCase().includes(this.cari.toLowerCase());

                return cari_nama || cari_id;
            });
        },
        // ----
        // Menghitung Dengan Pagination
        collection() {
            return this.paginate(this.M_pengguna);
        }
    },
    // ----
};