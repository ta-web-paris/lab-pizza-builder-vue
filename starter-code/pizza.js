const vm = new Vue({
  el: "#app",
  data: {
    basePrice: 10,
    ingredients: [
      {
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
      }
    ]
  },
  methods: {
    isSelected(ingredientName) {
      // Given the name of an ingredient, will return whether it is selected
      return this.ingredients.find(ingredient => ingredient.name === ingredientName).selected
    }
  }
});