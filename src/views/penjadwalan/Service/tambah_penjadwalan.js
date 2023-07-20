
import axios from 'axios'
import Multiselect from 'vue-multiselect';
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            day: [
                { id: 1, name: 'Senin' },
                { id: 2, name: 'Selasa' },
                { id: 3, name: 'Rabu' },
                { id: 4, name: 'Kamis' },
                { id: 5, name: 'Jum`at' },
                { id: 6, name: 'Sabtu' },
                { id: 7, name: 'Minggu' }
            ],
            pegawai: [],
            jadwal: {
                hari: '',
                tanggal: '',
                pegawai_masuk: '',
                pegawai_libur: '',
                status: 'Y',
                created: new Date().toISOString().slice(0, 10),
                updated: new Date().toISOString().slice(0, 10),
                created_by: this.$store.getters.username
            }

        }
    },
    created() {
        this.getpegawai()
    },
    methods: {
        getpegawai() {
            axios.get(this.$API + '/M_pengguna/pegawai')
                .then((response) => {
                    this.pegawai = response.data;
                });
        },
        addjadwal() {
            axios.post(this.$API + '/M_jadwal_pegawai', this.jadwal)
                .then((response) => {
                    console.log(response);
                    this.$swal(response.data, "Berhasil menambah data", 'success')
                    this.$router.push({name:'penjadwalan'});
                });
        }
    }

}
