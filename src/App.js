import { Provider } from "react-redux";
import './App.css';
import store from "./store/store";
import ProductCatalog from "./components/ProductsCatalog";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <Provider store={store} >
      <AddProduct />
      <ProductCatalog />
    </Provider>
  );
}

export default App;