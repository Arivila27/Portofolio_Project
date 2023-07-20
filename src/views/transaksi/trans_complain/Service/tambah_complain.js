import TableAdmin from '../Tambah-Complain/Admin'
import TableMarketing from '../Tambah-Complain/Marketing'
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