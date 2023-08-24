import "./App.css";
import Home from "./components/Home";
import Products from "./components/items/Boats";
import Product from "./components/items/Boat";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teaching from "./components/Teaching";
import Cooperation from "./components/Cooperation";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Ports from "./components/items/Ports"
import Port from "./components/items/Port"


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/ports" element={<Ports />} />
          <Route path="/ports/:id" element={<Port />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/cooperation" element={<Cooperation />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route to="/not-found"/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;