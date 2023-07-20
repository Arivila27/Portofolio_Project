import axios from 'axios';
import API from '../../../../api.config'
export default {
    data: function() {
        return {
            M_host: []
        }
    },
    created() {
        this.gethost()
    },
    methods: {
        gethost: function() {
            axios.get(API + '/M_host/domain/' + this.$store.getters.domain)
                .then((response) => {
                    this.M_host = response.data
                    console.log(response.data)
                })
        }
    }
}