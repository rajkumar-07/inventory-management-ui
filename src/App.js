import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./Components/ProductList";
import AddProducts from "./Components/AddProducts";
import EditProduct from "./Components/EditProduct";

function App() {
  return (
    <Router>
      <Routes>
      <Route path ="/add-products" element={<AddProducts/>}/>
      <Route path="/product-list" element={<ProductList/>}/>
      <Route path="/edit-products" element={<EditProduct/>}/>
      </Routes>
      </Router>
  );
}

export default App;
