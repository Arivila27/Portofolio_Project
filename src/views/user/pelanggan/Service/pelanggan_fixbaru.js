import TableNoc from '../Table_pelanggan_fixbaru/Noc'
import TableAdmin from '../Table_pelanggan_fixbaru/Admin'
import TableMarketing from '../Table_pelanggan_fixbaru/Marketing'
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