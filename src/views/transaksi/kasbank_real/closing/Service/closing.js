import API from '../../../../../api.config'
import TableAdmin from '../Table-Closing/Admin'
import TableMarketing from '../Table-Closing/Marketing'
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