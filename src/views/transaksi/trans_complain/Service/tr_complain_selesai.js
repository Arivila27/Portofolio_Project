import TableAdmin from '../Table-Complain-Selesai/Admin'
import TableMarketing from '../Table-Complain-Selesai/Marketing'
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