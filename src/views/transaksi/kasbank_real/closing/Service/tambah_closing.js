import API from '../../../../../api.config'
import TambahAdmin from '../Tambah-Closing/Admin'
import TambahMarketing from '../Tambah-Closing/Marketing'
export default {
    components: {
        TambahAdmin,
        TambahMarketing
    },
    computed: {
        role: function() {
            return this.$store.getters.role
        }
    }
};