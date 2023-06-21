import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Teaching from "./components/Teaching";
import Cooperation from "./components/Cooperation";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/checkout"element={<Checkout />}/>
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/cooperation" element={<Cooperation />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;