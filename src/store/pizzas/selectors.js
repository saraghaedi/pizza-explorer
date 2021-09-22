export const selectAllPizzas = (reduxState) => {
  return reduxState.pizzas.allPizzas;
};

export const selectByPopularity = (reduxState) => {
  return [...reduxState.pizzas.allPizzas].sort(
    (item1, item2) => item2.bought - item1.bought
  );
};
