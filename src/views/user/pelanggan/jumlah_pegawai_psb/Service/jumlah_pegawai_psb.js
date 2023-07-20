import axios from 'axios';
import API from '../../../../../api.config'
export default {
    data() {
        return {
            cari_tanggal: '',
            tr_psb: []
        }
    },
    created() {
        this.getpelanggan();
    },
    methods: {
        print() {
            var newWin
            var divToPrint = this.$refs.PrintTable
            newWin = window.open("");
            newWin.document.write(divToPrint.outerHTML);
            newWin.print();
            newWin.close();
        },
        getpelanggan() {
            axios.get(API + '/Tr_psb/pegawai/domain/selesai/' + this.$store.getters.domain)
                .then((response) => {
                    this.tr_psb = response.data;

                });
        }
    },
    computed: {
        FilterPelanggan() {
            return this.tr_psb.filter((tr_psb) => {
                var mencari_tanggal = tr_psb.psb_penyelesaian_tanggal.match(this.cari_tanggal);
                return mencari_tanggal;
            })
        }
    }
};