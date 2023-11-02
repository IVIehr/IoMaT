import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/main/SideBar";
import Navbar from "./components/main/Navbar";
import Home from "./components/main/Home";
import Boats from "./components/items/boat/AllBoats";
import Boat from "./components/items/boat/SingleBoat";
import Ports from "./components/items/port/AllPorts";
import Port from "./components/items/port/SinglePort";
import About from "./components/about";
import Cooperation from "./components/Cooperation";
import NotFound from "./components/main/NotFound";
import Footer from "./components/main/Footer";
import { useRecoilState } from "recoil";
import { userState } from "./atom/user";
import useGetMe from "./hooks/getme/useGetMe";
import Users from "./components/users";

function Start() {
  const [human, setHuman] = useRecoilState(userState);
  const { data: info, refetch: refetchGetInfo } = useGetMe();
  const token = window.localStorage.getItem("AIS:ACCESS_TOKEN");

  useEffect(() => {
    if (token) {
      refetchGetInfo();
      setHuman({ ...human, info });
    }
  }, [info]);

  return (
    <Router>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/boats" element={<Boats />} />
        <Route path="/boats/:id" element={<Boat />} />
        <Route path="/ports" element={<Ports />} />
        <Route path="/ports/:id" element={<Port />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route to="/not-found" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Start;
