import TableAdmin from '../List-WD-Teknisi/Admin'
import TableMarketing from '../List-WD-Teknisi/Marketing'
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