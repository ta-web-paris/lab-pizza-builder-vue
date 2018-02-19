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
      return this.ingredients.find(
        ingredient => ingredient.name === ingredientName
      ).selected;
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      return value.toString().charAt(0).toUpperCase() + value.slice(1);
    }
  },
  computed: {
    selectedIngredients() {
      return this.ingredients.filter(ingredient => {
        return ingredient.selected;
      });
    },
    totalPrice(){
      let total = 0;
     this.selectedIngredients.forEach(element => {
        total += element.price;
      });
      return total + this.basePrice;
    }
  }
});