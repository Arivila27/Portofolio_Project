import TableAdmin from '../List-WD/Admin'
import TableMarketing from '../List-WD/Marketing'
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