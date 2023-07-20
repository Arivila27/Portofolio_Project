import Multiselect from 'vue-multiselect';
import axios from 'axios';
import API from '../../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            data: [],
            option_pembayaran: ['Cash', 'BCA', 'BCA-371', 'Mandiri'],
            option_status: ['Lunas', 'Belum']
        }
    },
    created() {
        this.getdata()
    },
    methods: {
        getdata: function() {
            axios.get(API + '/Tr_closing')
                .then((response) => {
                    this.data = response.data
                });
        }
    }
}