import API from '../../../../api.config'
import TableAdmin from '../Table-Barang-Biasa/Admin'
import TableMarketing from '../Table-Barang-Biasa/Marketing'
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