import UploadWD from '../Upload-WD/upload_wd'
export default {
    components: {
        UploadWD,
    },
    computed: {
        role: function() {
            return this.$store.getters.role
        }
    }
};