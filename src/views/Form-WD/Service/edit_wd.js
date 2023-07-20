import EditAdmin from '../Edit-WD/Admin'
import EditMarketing from '../Edit-WD/Marketing'
export default {
    components: {
        EditAdmin,
        EditMarketing
    },
    computed: {
        role: function() {
            return this.$store.getters.role
        }
    }
};