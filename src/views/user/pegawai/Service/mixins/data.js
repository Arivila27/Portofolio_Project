import Multiselect from 'vue-multiselect';
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            auth: {
                username: '',
                email: '',
                password: '',
                role: ''
            },
            posisi: [
                { text: 'Pegawai', value: 'Pegawai' },
                { text: 'Atasan', value: 'Atasan' }
            ],
            opsi: [],
            jenis_kelamin: [
                { text: 'Laki-Laki1', value: 'Laki-Laki' },
                { text: 'Perempuan1', value: 'Perempuan' }
            ],
            role: ['Marketing', 'Finance', 'Admin', 'Noc', 'Programmer', 'Tukang' , 'Magang'],
            M_tunjangan: [],
            M_pengguna: {
                pengguna_id: '',
                pengguna_domain: this.$store.getters.domain,
                pengguna_nama_bank: '',
                pengguna_nama_cabang: '',
                pengguna_no_bank: '',
                pengguna_bank_nama: '',
                pengguna_group: '',
                pengguna_nama: '',
                pengguna_status_keluarga: '',
                pengguna_email: '',
                pengguna_password: '',
                pengguna_role: 'pegawai',
                pengguna_created: '',
                pengguna_updated: '',
                pengguna_alamat_sekarang: '',
                pengguna_alamat_tetap: '',
                pengguna_agama: '',
                pengguna_templahir: '',
                pengguna_user_updated: '',
                pengguna_jenis_kelamin: '',
                pengguna_status: 'Y',
                pengguna_no_ktp: '',
                pengguna_no_telepon: '',
                pengguna_kartu_jamsostek: '',
                pengguna_posisi: '',
                pengguna_bank: {
                    nama_bank: '',
                    cabang_bank: '',
                    no_bank: '',
                    bank_nama: ''
                },
                pengguna_keluarga: {
                    ayah: {
                        nama: '',
                        tempat_tgllahir: '',
                        alamat: '',
                        telp: '',
                        pekerjaan: ''
                    },
                    ibu: {
                        nama: '',
                        tempat_tgllahir: '',
                        alamat: '',
                        telp: '',
                        pekerjaan: ''
                    },
                    ayah_mertua: {
                        nama: '',
                        tempat_tgllahir: '',
                        alamat: '',
                        telp: '',
                        pekerjaan: ''
                    },
                    ibu_mertua: {
                        nama: '',
                        tempat_tgllahir: '',
                        alamat: '',
                        telp: '',
                        pekerjaan: ''
                    },
                    pasangan: {
                        nama: '',
                        tempat_tgllahir: '',
                        alamat: '',
                        telp: '',
                        pekerjaan: ''
                    },
                    anak: {
                        nama: '',
                        tempat_tgllahir: '',
                        alamat: '',
                        telp: '',
                        pekerjaan: ''
                    },
                    saudara: {
                        nama: '',
                        tempat_tgllahir: '',
                        alamat: '',
                        telp: '',
                        pekerjaan: ''
                    }
                },
                pengguna_pendidikan: {
                    pendidikan_terakhir: '',
                    rangkumanpendidikan: [
                        { pendidikan: 0, periode: { dari: '', sampai: '' }, sekolah: '', jurusan: '', kualifikasi: '', }
                    ]
                },
                pengguna_pekerjaan: {
                    rangkuman_pekerjaan: [
                        { pekerjaan: 0, nama_perusahaan: '', periode: { dari: '', sampai: '' }, alamat_perusahaan: '', telepon_perusahaan: '', jenis_perusahaan: '', jabatan_perusahaan: '', atasan_perusahaan: '', gaji_perusahaan: '', alasa_keluar: '', deskripsi_pekerjaan: '' }
                    ]
                },
                pengguna_fee_yang_didapatkan:0
            },

        }
    },
}