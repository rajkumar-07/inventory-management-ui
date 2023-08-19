import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./Components/User/ProductList";
import AddProducts from "./Components/Admin/AddProducts";
import GetProducts from "./Components/Admin/GetProducts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/view-products" element={<GetProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
