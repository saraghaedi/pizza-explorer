import "./App.css";
import PizzaList from "./components/pizzaList";
import AddPizzaForm from "./components/AddPizzaForm";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
    </div>
  );
}

export default App;
