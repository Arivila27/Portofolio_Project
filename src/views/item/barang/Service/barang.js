import API from '../../../../api.config'
import TableAdmin from '../Table-Barang/Admin'
import TableMarketing from '../Table-Barang/Marketing'
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