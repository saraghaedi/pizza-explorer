import { useSelector } from "react-redux";
import { selectAllPizzas, selectByPopularity } from "../store/pizzas/selectors";
import { selectUsers } from "../store/users/selectors";
export default function PizzaList() {
  const pizzaList = useSelector(selectAllPizzas);
  const popularPizzaList = useSelector(selectByPopularity);
  const user = useSelector(selectUsers);
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <h2>Welcome back {user.name}</h2>
      <h3>Total number of known pizzas: {pizzaList.length}</h3>
      {popularPizzaList.map((pizza) => (
        <ul style={{ border: "solid 1px black" }}>
          <li style={{ listStyle: "none" }} key={pizza.id}>
            name : {pizza.name}
            <br></br>
            <img src={pizza.image} alt={pizza.name} />
            <br></br>
            <p>bought : {pizza.bought} times </p>
            <p>Description: {pizza.description}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}
