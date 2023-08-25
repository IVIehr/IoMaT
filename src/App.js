import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import NotFound from "./components/main/NotFound";
import Boats from "./components/items/boat/AllBoats";
import Boat from "./components/items/boat/SingleBoat";
import Ports from "./components/items/port/AllPorts";
import Port from "./components/items/port/SinglePort";
import About from "./components/about";
import Cooperation from "./components/Cooperation";
import "react-toastify/dist/ReactToastify.css";


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
          <Route path="/about" element={<About />} />
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