import { React } from "react";
import AISMap from "../map";

const locations = [
  {
    name: "Deneb leader [PA]",
    speed: "16.2kn",
    course: "129°",
    coordinates: [26.3451, 52.5601],
    destination: "Jp Yok",
    type: "A",
  },
  {
    name: "Location 2",
    coordinates: [27.1871, 56.1645],
    speed: "16.2kn",
    course: "129°",
    destination: "",
    type: "B",
  },
  {
    name: "Location 3",
    coordinates: [28.204730, 50.119064],
    speed: "16.2kn",
    course: "129°",
    destination: "",
    type: "C",
  },
  {
    name: "Location 3",
    coordinates: [25.666673, 53.462665],
    speed: "16.2kn",
    course: "129°",
    destination: "",
    type: "A",
  },
];

function Home() {
  return (
    <div className="main_container">
      <div className="hero">
        <div className="mt-4">
          <AISMap locations={locations} />
        </div>
      </div>
    </div>
  );
}

export default Home;
