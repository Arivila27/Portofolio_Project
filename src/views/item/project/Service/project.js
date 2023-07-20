import API from '../../../../api.config'
import TableAdmin from '../Table-Project/Admin'
import TableMarketing from '../Table-Project/Marketing'
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