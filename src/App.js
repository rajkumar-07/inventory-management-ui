import AddProducts from "./Components/AddProducts";
import ProductCard from "./Components/ProductCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path ="/add-products" element={<AddProducts/>}/>
      <Route path="/product-list" element={<ProductCard/>}/>
      </Routes>
      </Router>
  );
}

export default App;
