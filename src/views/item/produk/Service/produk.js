import API from '../../../../api.config'
import TableAdmin from '../Table-Produk/Admin'
import TableMarketing from '../Table-Produk/Marketing'
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