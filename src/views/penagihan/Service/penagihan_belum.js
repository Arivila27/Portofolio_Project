import TableAdmin from '../Table-Penagihan-Belum/Admin'
import TableMarketing from '../Table-Penagihan-Belum/Marketing'
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