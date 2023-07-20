import axios from 'axios';
import Multiselect from 'vue-multiselect'
import API from '../../../../api.config'
import TableNoc from '../Table/Noc'
// PAke Mikrotik
// import TableNoc from '../Table/Noc_mikrotik'
import TableAdmin from '../Table/Admin'
import TableMarketing from '../Table/Marketing'
export default {
    name: 'M_pengguna',
    components: {
        Multiselect,
        TableAdmin,
        TableNoc,
        TableMarketing
    },
    computed: {
        role: function() {
            return this.$store.getters.role
        }
    }
};