import TableAdmin from '../Table-Complain/Admin'
import TableMarketing from '../Table-Complain/Marketing'
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