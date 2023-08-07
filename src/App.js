import AddProducts from "./Components/AddProducts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path ="/addProducts" element={<AddProducts/>}/>
      </Routes>
      </Router>
  );
}

export default App;
