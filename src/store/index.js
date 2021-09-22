import { combineReducers, createStore } from "redux";
import userReducer from "./users/reducer";
import pizzaReducer from "./pizzas/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(
  combineReducers({
    users: userReducer,
    pizzas: pizzaReducer,
  }),
  enhancer
);

export default store;
