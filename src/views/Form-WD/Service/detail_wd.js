import axios from 'axios'
import Multiselect from 'vue-multiselect'
import API from '../../../api.config'
export default {
    components: {
        Multiselect
    },
    data() {
        return {
            wd: {},
        }
    },
    created() {
        this.getdetail()
    },
    methods: {
        getdetail: function() {
            axios.get(API + '/M_wd/detail/' + this.$route.params.id)
                .then((response) => {
                    this.wd = response.data
                });
        },
    },
};