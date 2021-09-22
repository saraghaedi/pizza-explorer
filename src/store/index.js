import { combineReducers, createStore } from "redux";
import userReducer from "./users/reducer";
import pizzaReducer from "./pizzas/reducer";
import restaurantsReducer from "./restaurants/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(
  combineReducers({
    users: userReducer,
    pizzas: pizzaReducer,
    restaurants: restaurantsReducer,
  }),
  enhancer
);

export default store;
