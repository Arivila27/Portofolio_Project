import API from '../../../../../api.config'
import TambahAdmin from '../Tambah-Pembelian/Admin'
import TambahMarketing from '../Tambah-Pembelian/Marketing'
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