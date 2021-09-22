export const selectRestaurentsNames = (reduxState) => {
  return [...reduxState.restaurants.allRestaurants].sort((item1, item2) =>
    item1.name.toLowerCase().localeCompare(item2.name.toLowerCase())
  );
};

export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  return reduxState.restaurants.allRestaurants.filter((res) => {
    return res.pizzas.includes(pizzaId);
  });
};
