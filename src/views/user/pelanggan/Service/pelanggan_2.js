import TableNoc from '../Table_pelanggan_2/Noc'
import TableAdmin from '../Table_pelanggan_2/Admin'
import TableMarketing from '../Table_pelanggan_2/Marketing'
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