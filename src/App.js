import "./App.css";
import Home from "./components/Home";
import Boats from "./components/items/Boats";
import Boat from "./components/items/Boat";
import Ports from "./components/items/Ports"
import Port from "./components/items/Port"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teaching from "./components/Teaching";
import Cooperation from "./components/Cooperation";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/boats" element={<Boats />} />
          <Route path="/boats/:id" element={<Boat />} />
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