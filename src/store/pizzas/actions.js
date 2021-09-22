export const addNewPizza = (name, description) => ({
  type: "pizzas/ADD",
  payload: { name: name, description: description },
});
