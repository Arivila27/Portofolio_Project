import TableNoc from '../Table_pelanggan/Noc'
import TableAdmin from '../Table_pelanggan/Admin'
import TableMarketing from '../Table_pelanggan/Marketing'
export default {
    components: {
        TableNoc,
        TableAdmin,
        TableMarketing
    },
    computed: {
        role: function() {
            return this.$store.getters.role
        }
    }
};