import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Teaching from "./components/Teaching";
import Cooperation from "./components/Cooperation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./components/Footer";
import SearchResult from "./components/SearchResult";

const promise = loadStripe(
  "pk_test_51IdVudBDYzH08iN6B3r4f8sFZke2NPuHtA2wRkqsvql1cKJCHuv5X4lQcGdpvCMBfz5JMirO3Q2uRvaF2Md4OL2G00we93HQ5l"
);
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <Elements stripe={promise}>
                <Checkout />
              </Elements>
            }
          />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/cooperation" element={<Cooperation />} />
          <Route path="/result" render={(props) => <SearchResult {...props}/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;