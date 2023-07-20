// Global mixins
import Religion from '../../../../global-mixins/Religion'
import status from '../../../../global-mixins/Status'
// Service mixins
import data from './mixins/data';
import methods from './mixins/methods';
export default {
    name: 'M_pengguna',
    mixins: [Religion, status,data,methods]
};