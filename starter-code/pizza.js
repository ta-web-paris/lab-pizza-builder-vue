const vm = new Vue({
  el: "#app",
  data: {
    basePrice: 10,
    ingredients: [{
      name: 'pepperonni',
      price: 1,
      selected: false
    }, {
      name: 'mushrooms',
      price: 1,
      selected: true
    }, {
      name: 'green peppers',
      price: 1,
      selected: true
    }, {
      name: 'white sauce',
      price: 3,
      selected: false
    }, {
      name: 'gluten-free crust',
      price: 5,
      selected: false
    }]
  },
  methods: {
    isSelected(ingredientName) {
      // Given the name of an ingredient, will return whether it is selected
      return this.ingredients.find(ingredient => ingredient.name === ingredientName).selected
    },
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },
  computed: {
    priced: function() {
      return this.ingredients
        .filter(el => el.selected)
        .map(el => el.price + ' $' + ' for ' + el.name)
    },
    total: function() {
      return this.ingredients.filter(el => el.selected).map(el => el.price).reduce((a, b) => a + b) + this.basePrice
    }
  }
});