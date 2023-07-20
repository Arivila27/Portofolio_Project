import API from '../../../../api.config'
import TableNoc from '../Table_pelanggan_baru/Noc'
import TableAdmin from '../Table_pelanggan_baru/Admin'
import TableMarketing from '../Table_pelanggan_baru/Marketing'
export default {
    components: {
        TableAdmin,
        TableNoc,
        TableMarketing
    },
    computed: {
        role: function() {
            return this.$store.getters.role
        }
    }
};