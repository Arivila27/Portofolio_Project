import API from '../../../../api.config'
import TableAdmin from '../Tambah-Barang/Admin'
import TableMarketing from '../Tambah-Barang/Marketing'
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