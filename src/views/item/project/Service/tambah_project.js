import API from '../../../../api.config'
import TableAdmin from '../Tambah-Project/Admin'
import TableMarketing from '../Tambah-Project/Marketing'
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