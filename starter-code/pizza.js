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
    }
  },
  computed: {
    selectedIngredients() {
      return this.ingredients.filter(item => {
        return item.selected;
      });
    },
    totalPrice() {
      return this.selectedIngredients.reduce((total, ingredient) => {
        return total + ingredient.price;
      }, this.basePrice);
    }
  },
  filters: {
    capitalize: function(word) {
      if (!word) return "";
      word = word.toString();
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
});
