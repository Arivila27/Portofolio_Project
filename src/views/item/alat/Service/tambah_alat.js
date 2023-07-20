import TambahAdmin from '../Tambah-Alat/Admin'
import TambahMarketing from '../Tambah-Alat/Marketing'
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