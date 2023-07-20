import TambahAdmin from '../Tambah-WD/Admin'
import TambahMarketing from '../Tambah-WD/Marketing'
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