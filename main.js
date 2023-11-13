const product = 'Chaussettes'

const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },

    methods: {
        addToCart(id) {
            this.cart.push(id)
        },
        remFromCart(id) {
            this.cart.splice(id,1)
        },


    },

    computed: {
        image() { return this.variants[this.selectedVariant].image },
        inStock() { return this.variants[this.selectedVariant].quantity }
    }



})