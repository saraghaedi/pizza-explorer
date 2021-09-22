import { useSelector } from "react-redux";
import { selectAllPizzas, selectByPopularity } from "../store/pizzas/selectors";
import { selectUsers } from "../store/users/selectors";
import { toggleFavorite } from "../store/users/actions";
import { useDispatch } from "react-redux";
import "./PizzaList.scss";

export default function PizzaList() {
  const pizzaList = useSelector(selectAllPizzas);
  const popularPizzaList = useSelector(selectByPopularity);
  const user = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <div className="PizzaList">
      <h1>Pizza Explorer</h1>
      <h2>Welcome back {user.name}</h2>
      <h3>Total number of known pizzas: {pizzaList.length}</h3>
      {popularPizzaList.map((pizza) => (
        <ul className="Pizzas">
          <li
            key={pizza.id}
            className="Pizza"
            style={{ backgroundImage: `url(${pizza.image})` }}
          >
            <button
              className={`FavToggle ${
                user.favorites.includes(pizza.id) ? "fav" : ""
              }`}
              onClick={() => dispatch(toggleFavorite(pizza.id))}
            >
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}
            </button>
            <br />
            <div className="Overlay">
              <strong>{pizza.name}</strong> ({pizza.description}) <br />
              <em>Bought {pizza.bought} times</em>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
