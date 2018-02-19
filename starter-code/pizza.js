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
      return this.ingredients.find(
        ingredient => ingredient.name === ingredientName
      ).selected;
    }
  },
  computed: {
    totalPrice() {
      return this.filteredIngredients.reduce(
        (acc, cur) => acc + parseInt(cur.price),
        parseInt(this.basePrice)
      );
    },
    filteredIngredients() {
      return this.ingredients.filter(
        ingredient => ingredient.selected === true
      );
    }
  }
});
