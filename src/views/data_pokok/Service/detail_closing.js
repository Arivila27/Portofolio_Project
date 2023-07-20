import axios from 'axios'
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
import moment from 'moment';
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            data_closing: {},
        }
    },
    created() {
        this.getdatapokok()
    },
    methods: {
        // Get DAta POKOK setiap cabang cabang 
        getdatapokok: function() {
            axios.get(API + `/M_closing/detailwithid/${this.$route.params.id}`)
                .then((response) => {
                    this.data_closing = response.data
                })
        },
    },
    computed: {
        createdBy: function() {
            return this.$store.getters.username
        },
        BulanIni : function(){
            var romla = new Date(this.data_closing.closing_tanggal);
            const format = moment(romla).format('MMMM')
            //var fixtangal = this.momentt(terakhir_hasil)
            return format
        },
        BulanDepan : function(){
            var romla = new Date(this.data_closing.closing_tanggal);
            var bulan_romla = ("0" + (romla.getMonth() + 2)).slice(-2);
            var tahun_romla = romla.getFullYear();
            var hari_romla = romla.getDate();
            var terakhir_hasil = tahun_romla + '-' + bulan_romla + '-' + '01';
            const format = moment(terakhir_hasil).format('MMMM')
            //var fixtangal = this.momentt(terakhir_hasil)
            return format
        },
    }
};