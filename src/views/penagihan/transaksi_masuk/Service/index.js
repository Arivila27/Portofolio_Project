export default {
    data() {
        return {
            trans_masuk: []
        }
    },
    created() {
        this.getTransaksi();
    },
    methods: {
        getTransaksi() {
            this.$http.get(this.$API + '/Tr_bank/rekening2')
                .then((response) => {
                    this.trans_masuk = response.data;
                    console.log(response.data);
                    this.$http.post(this.$API + '/Tr_bank/rekening/create',response.data);
                });

        }
    }
}