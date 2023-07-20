import API from '../../../../api.config'
import TambahAdmin from '../Tambah-Invoice/Admin'
import TambahMarketing from '../Tambah-Invoice/Marketing'
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