export default {
    computed: {
        total: function() {
            var a = parseFloat(this.selectedCart.item_harga);
            var b = parseFloat(this.biaya_tambahan);
            var c = parseFloat(this.biaya_registrasi);
            var total = 0;
            return total = a + b + c;
        }
    }
}