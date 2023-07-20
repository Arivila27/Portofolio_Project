import API from '../../../../../api.config'
import TableAdmin from '../Table-Pembelian/Admin'
import TableMarketing from '../Table-Pembelian/Marketing'
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