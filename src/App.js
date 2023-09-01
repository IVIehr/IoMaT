import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState, useEffect } from "react";
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
import { ToastContainer } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { userState } from "./atom/user";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [queryClient] = useState(() => {
    return new QueryClient();
  });
  const setHuman = useSetRecoilState(userState);

  useEffect(() => {
    const token = window.localStorage.getItem("AIS:ACCESS_TOKEN");
    if (token) {
      setHuman({ name: "Mehrnoosh" });
    }
  }, [window.localStorage]);

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
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
            <Route to="/not-found" />
          </Routes>
          <Footer />
        </Router>
        <div dir="ltr">
          <ReactQueryDevtools />
        </div>
      </QueryClientProvider>
      <ToastContainer
        rtl
        position="bottom-right"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
      />
    </div>
  );
}

export default App;
