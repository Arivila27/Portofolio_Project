import TableAdmin from '../Table-Alat/Admin'
import TableMarketing from '../Table-Alat/Marketing'
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