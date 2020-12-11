var app = new Vue({
    el: '#app',
    data: {
        message: ''
    },
    computed: {
        calculated: function() {
            // `this` points to the vm instance
            let value = parseFloat(this.message)
            let finalValue = 0
            let extraKmValue = 0.2

            if (value) {
                finalValue += 3000
                if (value > 1) {
                    finalValue += (value - 1) * 200
                }
                return finalValue
            } else { return 'ingrese distancia' }
        }
    }
})