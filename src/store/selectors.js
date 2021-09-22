export const selectRestaurantsWithPizzas = (reduxState) => {
  return reduxState.restaurants.allRestaurants
    .map((restaurent) => {
      return {
        ...restaurent,
        pizzas: restaurent.pizzas.map((pizzaId) => {
          return reduxState.pizzas.allPizzas.find((item) => {
            return item.id === pizzaId;
          });
        }),
      };
    })
    .sort((item1, item2) =>
      item1.name.toLowerCase().localeCompare(item2.name.toLowerCase())
    );
};

export const selectPizzasSoldByRestaurant = (restaurantId) => (reduxState) => {
  const restaurant = reduxState.restaurants.allRestaurants.find((res) => {
    return res.id === restaurantId;
  });
  const pizzas = restaurant.pizzas.map((pizzaId) => {
    return reduxState.pizzas.allPizzas.find((item) => {
      return item.id === pizzaId;
    });
  });
  return pizzas;
};
