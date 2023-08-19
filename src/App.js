import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./Components/ProductList";
import AddProducts from "./Components/AddProducts";
import GetProducts from "./Components/GetProducts";

function App() {
  return (
    <Router>
      <Routes>
      <Route path ="/add-products" element={<AddProducts/>}/>
      <Route path="/product-list" element={<ProductList/>}/>
      <Route path="/view-products" element={<GetProducts/>}/>
      </Routes>
      </Router>
  );
}

export default App;
