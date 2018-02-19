const vm = new Vue({
  el: "#app",
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
      return this.ingredients.find(
        ingredient => ingredient.name === ingredientName
      ).selected;
    },
    toggleSelected(ingredient) {
      ingredient.selected = !ingredient.selected;
    }
  },

  filters: {
    capitalize: function(string) {
      if (!string) return "";
      string = string.toString();
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },

  computed: {
    totalPrice() {
      return this.ingredients
        .filter(ingredient => ingredient.selected)
        .reduce((a, b) => a + b.price, this.basePrice);
    }
  }
});
