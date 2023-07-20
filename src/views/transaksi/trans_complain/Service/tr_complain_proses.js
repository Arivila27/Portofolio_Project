import TableAdmin from '../Table-Complain-Proses/Admin'
import TableMarketing from '../Table-Complain-Proses/Marketing'
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