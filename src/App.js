import "./styles.css";
import { NavBar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}
