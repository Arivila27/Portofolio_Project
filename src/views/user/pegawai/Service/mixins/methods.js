import axios from 'axios';
import API from '../../../../../api.config'
export default {
    mounted() {
        this.getdata()
        this.getdepartmen()
    },
    methods: {
        // Fungsi untuk menambahkan data ke dalam tabel pengguna 
        addToApi() {
            let newAuth = {
                username: this.auth.username,
                email: this.auth.email,
                password: this.auth.password,
                role: this.auth.role,
                pengguna_role: 'pegawai',
                pengguna_status: 'Y',
                domain: this.$store.getters.domain
            }
            let newpengguna = {
                pengguna_id: this.M_pengguna.pengguna_no_telepon,
                pengguna_domain: this.$store.getters.domain,
                pengguna_nama_bank: this.M_pengguna.pengguna_nama_bank,
                pengguna_nama_cabang: this.M_pengguna.pengguna_nama_cabang,
                pengguna_no_bank: this.M_pengguna.pengguna_no_bank,
                pengguna_bank_nama: this.M_pengguna.pengguna_bank_nama,
                pengguna_group: this.M_pengguna.pengguna_group,
                pengguna_nama: this.M_pengguna.pengguna_nama,
                pengguna_status_keluarga: this.M_pengguna.pengguna_status_keluarga,
                pengguna_email: this.auth.email,
                pengguna_password: this.auth.password,
                pengguna_role: 'pegawai',
                pengguna_created: this.M_pengguna.pengguna_created,
                pengguna_updated: this.M_pengguna.pengguna_updated,
                pengguna_alamat_sekarang: this.M_pengguna.pengguna_alamat_sekarang,
                pengguna_alamat_tetap: this.M_pengguna.pengguna_alamat_tetap,
                pengguna_agama: this.M_pengguna.pengguna_agama,
                pengguna_templahir: this.M_pengguna.pengguna_templahir,
                pengguna_user_updated: this.M_pengguna.pengguna_user_updated,
                pengguna_jenis_kelamin: this.M_pengguna.pengguna_jenis_kelamin,
                pengguna_status: 'Y',
                pengguna_no_ktp: this.M_pengguna.pengguna_no_ktp,
                pengguna_no_telepon: this.M_pengguna.pengguna_no_telepon,
                pengguna_kartu_jamsostek: this.M_pengguna.pengguna_kartu_jamsostek,
                pengguna_posisi: this.M_pengguna.pengguna_posisi,
                pengguna_bank: {
                    nama_bank: this.M_pengguna.pengguna_bank.nama_bank,
                    cabang_bank: this.M_pengguna.pengguna_bank.cabang_bank,
                    no_bank: this.M_pengguna.pengguna_bank.no_bank,
                    bank_nama: this.M_pengguna.pengguna_bank.nama_bank
                },
                pengguna_keluarga: {
                    ayah: {
                        nama: this.M_pengguna.pengguna_keluarga.ayah.nama,
                        tempat_tgllahir: this.M_pengguna.pengguna_keluarga.ayah.tempat_tgllahir,
                        alamat: this.M_pengguna.pengguna_keluarga.ayah.alamat,
                        telp: this.M_pengguna.pengguna_keluarga.ayah.telp,
                        pekerjaan: this.M_pengguna.pengguna_keluarga.ayah.pekerjaan
                    },
                    ibu: {
                        nama: this.M_pengguna.pengguna_keluarga.ibu.nama,
                        tempat_tgllahir: this.M_pengguna.pengguna_keluarga.ibu.tempat_tgllahir,
                        alamat: this.M_pengguna.pengguna_keluarga.ibu.alamat,
                        telp: this.M_pengguna.pengguna_keluarga.ibu.telp,
                        pekerjaan: this.M_pengguna.pengguna_keluarga.ibu.pekerjaan
                    },
                    ayah_mertua: {
                        nama: this.M_pengguna.pengguna_keluarga.ayah_mertua.nama,
                        tempat_tgllahir: this.M_pengguna.pengguna_keluarga.ayah_mertua.tempat_tgllahir,
                        alamat: this.M_pengguna.pengguna_keluarga.ayah_mertua.alamat,
                        telp: this.M_pengguna.pengguna_keluarga.ayah_mertua.telp,
                        pekerjaan: this.M_pengguna.pengguna_keluarga.ayah_mertua.pekerjaan
                    },
                    ibu_mertua: {
                        nama: this.M_pengguna.pengguna_keluarga.ibu_mertua.nama,
                        tempat_tgllahir: this.M_pengguna.pengguna_keluarga.ibu_mertua.tempat_tgllahir,
                        alamat: this.M_pengguna.pengguna_keluarga.ibu_mertua.alamat,
                        telp: this.M_pengguna.pengguna_keluarga.ibu_mertua.telp,
                        pekerjaan: this.M_pengguna.pengguna_keluarga.ibu_mertua.pekerjaan
                    },
                    pasangan: {
                        nama: this.M_pengguna.pengguna_keluarga.pasangan.nama,
                        tempat_tgllahir: this.M_pengguna.pengguna_keluarga.pasangan.tempat_tgllahir,
                        alamat: this.M_pengguna.pengguna_keluarga.pasangan.alamat,
                        telp: this.M_pengguna.pengguna_keluarga.pasangan.telp,
                        pekerjaan: this.M_pengguna.pengguna_keluarga.pasangan.pekerjaan
                    },
                    anak: {
                        nama: this.M_pengguna.pengguna_keluarga.anak.nama,
                        tempat_tgllahir: this.M_pengguna.pengguna_keluarga.anak.tempat_tgllahir,
                        alamat: this.M_pengguna.pengguna_keluarga.anak.alamat,
                        telp: this.M_pengguna.pengguna_keluarga.anak.telp,
                        pekerjaan: this.M_pengguna.pengguna_keluarga.anak.pekerjaan
                    },
                    saudara: {
                        nama: this.M_pengguna.pengguna_keluarga.saudara.nama,
                        tempat_tgllahir: this.M_pengguna.pengguna_keluarga.saudara.tempat_tgllahir,
                        alamat: this.M_pengguna.pengguna_keluarga.saudara.alamat,
                        telp: this.M_pengguna.pengguna_keluarga.saudara.telp,
                        pekerjaan: this.M_pengguna.pengguna_keluarga.saudara.pekerjaan
                    },
                    pengguna_pendidikan: this.M_pengguna.pengguna_pendidikan,
                    pengguna_pekerjaan: this.M_pengguna.pengguna_pekerjaan
                },
                pengguna_fee_yang_didapatkan: this.M_pengguna.pengguna_fee_yang_didapatkan
            }
            if (!this.M_pengguna.pengguna_nama) {
                this.$swal("Gagal", "Nama Tidak boleh Kosong", "error");
            } else if (!this.M_pengguna.pengguna_no_telepon) {
                this.$swal("Gagal", "No.Telepon Tidak boleh Kosong", "error");
            } else if (!this.auth.username) {
                this.$swal("Gagal", "Username Tidak boleh Kosong", "error");
            } else if (!this.auth.password) {
                this.$swal("Gagal", "Password Tidak boleh Kosong", "error");
            } else if (!this.auth.role) {
                this.$swal("Gagal", "Role harus dipilih", "error");
            } else {
                axios.post(API + '/pengguna/register', newAuth)
                axios.post(API + '/M_pengguna', newpengguna)
                    .then((response) => {
                        console.log(response);
                        this.$router.push({ name: 'pegawai' });
                    });
            }
        },
        // Fungsi untuk menghandle 2 fungsi(Tambah ke table pengguna & mendaftarkan pegawai )
        handlePegawai: function(arg1, arg2) {
            this.addToApi(arg1);
            this.addToAuth(arg2);
        },
        // Fungsi untuk mendapatkan data tunjangan 
        getdata() {
            axios.get(API + '/M_tunjangan')
                .then((response) => {
                    console.log(response.data);
                    this.M_tunjangan = response.data
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        // Fungsi untuk mendapatkan data departmen 
        getdepartmen() {
            axios.get(API + '/pembantu_departmen')
                .then((response) => {
                    this.opsi = response.data
                });
        },
        // Fungsi untuk menambahkan kolom pendidikan 
        addPendidikan(index) {
            this.M_pengguna.pengguna_pendidikan.rangkumanpendidikan.push({
                pendidikan: index,
                periode: {
                    dari: '',
                    sampai: ''
                },
                sekolah: '',
                jurusan: '',
                kualifikasi: ''
            });
        },
        // Fungsi untuk mengurangi kolom pendidikan 
        removePendidikan(index) {
            this.M_pengguna.pengguna_pendidikan.rangkumanpendidikan.splice(this.M_pengguna.pengguna_pendidikan.rangkumanpendidikan.indexOf(index), 1);
        },
        // Fungsi untuk menambahkan kolom pekerjaan 
        addpekerjaan() {
            this.M_pengguna.pengguna_pekerjaan.rangkuman_pekerjaan.push({
                nama_perusahaan: '',
                periode: {
                    dari: '',
                    sampai: ''
                },
                alamat_perusahaan: '',
                telepon_perusahaan: '',
                jenis_perusahaan: '',
                jabatan_perusahaan: '',
                atasan_perusahaan: '',
                gaji_perusahaan: '',
                alasan_keluar: '',
                deskripsi_pekerjaan: ''
            })
        },
        removePekerjaan(index) {
            this.M_pengguna.pengguna_pekerjaan.rangkuman_pekerjaan.splice(this.M_pengguna.pengguna_pekerjaan.rangkuman_pekerjaan.indexOf(index), 1);
        }
    }
}