import axios from 'axios';
import API from '../../../api.config'
import Multiselect from 'vue-multiselect';
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            pilih_kabupaten: '',

            daerah: {
                provinsi: '',
                kabupaten: '',
                kecamatan: '',
                desa: '',
                daerah_created: new Date().toISOString().slice(0, 10),
                daerah_updated: new Date().toISOString().slice(0, 10),
                daerah_user_updated: this.createdBy,
            },
            daerah_desa: [{
                desa: ''
            }],

            provinsi_modal: {

                nama_provinsi: ''
            },

            kabupaten_modal: {
                pilih_provinsi: '',
                nama_kabupaten: '',
            },
            kecamatan_modal: {
                pilih_provinsi: '',
                pilih_kabupaten: '',
                nama_kecamatan: '',
            },
            list_provinsi: [],
            list_kabupaten: [],
            list_kecamatan: [],
            terpilihnya_provinsi: ''

            // Percobaan 
            // provinsi: ['Jawa-timur', 'Jawa-barat', 'Jawa-tengah'],
        }
    },
    watch: {
        // terpilihnya_provinsi: function(value) {
        //     axios.get(API + `/M_daerah/kabupaten/${value}`)
        //         .then((response) => {
        //             this.list_kabupaten = response.data
        //             console.log(response.data)
        //         })
        // }
        pilih_kabupaten: function(value) {
            axios.get(API + `/M_daerah/kecamatan/${value}`)
                .then((response) => {
                    this.list_kecamatan = response.data
                    console.log(response.data)
                });
        }
    },
    created() {
        // this.getprovinsi()
        this.getkabupaten()
    },
    methods: {
        // Get provinsi 
        getprovinsi: function() {
            axios.get(API + '/M_daerah/list-provinsi')
                .then((response) => {
                    this.list_provinsi = response.data
                    console.log(response.data)
                });
        },
        // Get kabupaten with provinsi sometime buat modal kecamatan
        getkabupaten: function() {
            axios.get(API + '/M_daerah/list-kabupaten')
                .then((response) => {
                    this.list_kabupaten = response.data
                });
        },
        // Untuk menambahkan nama desa 
        adddesa(index) {
            this.daerah_desa.push({
                desa: ''
            });
        },
        removedesa(index) {
            this.daerah_desa.splice(index, 1);
        },

        addCabang: function() {
            axios.post(API + '/M_cabang/', this.daerah)
                .then(() => {
                    this.$swal('Berhasil', 'Berhasil menambahkan data', 'success');
                    this.$router.push({ name: 'daerah' });
                })
        },
        // Untuk add data banyak desa dalam 1 provinsi / 1 kabupaten / 1 kecamatan 
        addDaerah: function() {
            for (var i = 0; i < this.daerah_desa.length; i++) {
                axios.post(API + '/M_daerah', {
                    kabupaten: this.pilih_kabupaten,
                    kecamatan: this.pilih_kecamatan,
                    desa:this.daerah_desa[i].desa,
                    status: 'desa',
                    daerah_created: new Date().toISOString().slice(0, 10),
                    daerah_updated: new Date().toISOString().slice(0, 10),
                    daerah_user_updated: this.createdBy,
                    domain:this.$store.getters.domain
                })
            }
            this.$swal('Berhasil', 'Berhasil menambahkan data', 'success');
            this.$router.push({ name: 'daerah' });
        },
        // Untuk menambah provinsi dalam modal 
        addProvinsi: function() {
            console.log(this.nama_provinsi);
            axios.post(API + '/M_daerah', {
                provinsi: this.provinsi_modal.nama_provinsi,
                status: 'provinsi',
                daerah_created: new Date().toISOString().slice(0, 10),
                daerah_updated: new Date().toISOString().slice(0, 10),
                daerah_user_updated: this.createdBy,
                domain: this.$store.getters.domain
            }).then(() => {
                this.$swal('Berhasil', 'Berhasil menambahkan provinsi', 'success');
                this.$router.go()
            });
        },
        // Untuk menambahkan kabupaten dalam modal 
        addKabupaten: function() {
            console.log(this.nama_kabupaten + this.pilih_provinsi);
            axios.post(API + '/M_daerah', {
                provinsi: this.kabupaten_modal.pilih_provinsi,
                kabupaten: this.kabupaten_modal.nama_kabupaten,
                status: 'kabupaten',
                daerah_created: new Date().toISOString().slice(0, 10),
                daerah_updated: new Date().toISOString().slice(0, 10),
                daerah_user_updated: this.createdBy,
                domain:this.$store.getters.domain
            }).then(() => {
                this.$swal('Berhasil', 'Berhasil menambahkan kabupaten', 'success');
                this.$router.go()
            });

        },
        // Untuk menambahkan kecamatan dalam modal
        addKecamatan: function() {
            console.log(this.nama_kecamatan);
            axios.post(API + '/M_daerah', {
                provinsi: this.kecamatan_modal.pilih_provinsi,
                kabupaten: this.kecamatan_modal.pilih_kabupaten,
                kecamatan: this.kecamatan_modal.nama_kecamatan,
                status: 'kecamatan',
                daerah_created: new Date().toISOString().slice(0, 10),
                daerah_updated: new Date().toISOString().slice(0, 10),
                daerah_user_updated: this.createdBy,
                domain:this.$store.getters.domain
            }).then(() => {
                this.$swal('Berhasil', 'Berhasil menambahkan kecamatan', 'success');
                this.$router.go()
            });

        }
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username
        }
    }
}