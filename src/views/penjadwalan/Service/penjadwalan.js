export default {
    data() {
        return {
        	cari_tanggal:'',
        	cari_bulan:'',
            jadwal: []
        }
    },
    created() {
        this.getjadwal()
    },
    methods: {
        getjadwal() {
            this.$http.get(this.$API + "/M_jadwal_pegawai")
                .then((response) => {
                    this.jadwal = response.data
                })
        },
        clickdetail(jadwal){
        	console.log(jadwal);
        }
    },
    computed: {
        Filterjadwal: function() {
            return this.jadwal.filter(jadwal => {
                var cari_tanggal = jadwal.tanggal.toLowerCase().includes(this.cari_tanggal.toLowerCase());
                var cari_bulan = jadwal.tanggal.toLowerCase().includes(this.cari_bulan.toLowerCase());
                return cari_bulan;
            })
        }
    }
}