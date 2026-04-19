import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div>
      <div>

        <div className="container">
          <h1>Inventory Dashboard</h1>
        </div>

        <div>
          <AddProduct />
          <ProductList />
        </div>
      </div>

    </div>
  );
}

export default App;