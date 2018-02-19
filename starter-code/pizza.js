const vm = new Vue({
  el: "#app",
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  data: {
    basePrice: 10,

    ingredients: [
      {
        name: "pepperonni",
        price: 1,
        selected: false
      },
      {
        name: "mushrooms",
        price: 1,
        selected: true
      },
      {
        name: "green peppers",
        price: 1,
        selected: true
      },
      {
        name: "white sauce",
        price: 3,
        selected: false
      },
      {
        name: "gluten-free crust",
        price: 5,
        selected: false
      }
    ]
  },
  methods: {
    isSelected(ingredientName) {
      // Given the name of an ingredient, will return whether it is selected
      return this.ingredients.find(ingredient => ingredient.name === ingredientName).selected;
    }
  },
  computed: {
    selectedIngredients: function() {
      return this.ingredients.filter(ingredient => ingredient.selected === true);
    },
    totalPrice: function() {
      return this.selectedIngredients.reduce((a, b) => a + b.price, this.basePrice);
    }
  }
});
