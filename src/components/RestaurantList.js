import { useSelector } from "react-redux";
import {
  selectRestaurantsWithPizzas,
  selectPizzasSoldByRestaurant,
} from "../store/selectors";
import { selectAllPizzas } from "../store/pizzas/selectors";
import { useState } from "react";
import {
  selectRestaurantsThatSellPizza,
  selectRestaurentsNames,
} from "../store/restaurants/selectors";

export default function RestaurantList() {
  const allPizzasList = useSelector(selectAllPizzas);
  const allRestaurants = useSelector(selectRestaurentsNames);

  const [selectedPizza, setSelectedPizza] = useState(allPizzasList[0].id);
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    allRestaurants[0].id
  );
  const resWithSelectedPizza = useSelector(
    selectRestaurantsThatSellPizza(selectedPizza)
  );

  const pizzasOfARestaurant = useSelector(
    selectPizzasSoldByRestaurant(selectedRestaurant)
  );
  const find_Res = (event) => {
    console.log(event.target.value);
    setSelectedPizza(parseInt(event.target.value));
  };

  const find_pizzas = (event) => {
    console.log(event.target.value);
    setSelectedRestaurant(parseInt(event.target.value));
  };
  console.log(pizzasOfARestaurant);
  return (
    <div>
      <h2>
        What does{" "}
        <select onChange={find_pizzas} value={selectedRestaurant}>
          {allRestaurants.map((res) => {
            return (
              <option key={res.id} value={res.id}>
                {res.name}
              </option>
            );
          })}
        </select>{" "}
        sell?
      </h2>
      {pizzasOfARestaurant.map((pizza) => (
        <p>{pizza.name}</p>
      ))}

      <h2>
        Who sells{" "}
        <select onChange={find_Res} value={selectedPizza}>
          {allPizzasList.map((pizza) => {
            return (
              <option key={pizza.id} value={pizza.id}>
                {pizza.name}
              </option>
            );
          })}
        </select>{" "}
        ?
      </h2>
      {resWithSelectedPizza.length > 1 ? (
        resWithSelectedPizza.map((res) => <p>{res.name}</p>)
      ) : (
        <p>{resWithSelectedPizza.name}</p>
      )}
    </div>
  );
}
