import API from '../../../../api.config'
import TableAdmin from '../Table-Invoice/Admin'
import TableMarketing from '../Table-Invoice/Marketing'
export default {
    components: {
        TableAdmin,
        TableMarketing
    },
    computed: {
        role: function() {
            return this.$store.getters.role
        }
    }
};