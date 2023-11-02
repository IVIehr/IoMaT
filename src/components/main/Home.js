import { React } from "react";
import AISMap from "../map";

const locations = [
  {
    name: "الوند",
    speed: "16.2kn",
    course: "129°",
    coordinates: [26.3451, 52.5601],
    destination: "دبی",
    type: "A",
  },
  {
    name: "هنگام",
    coordinates: [27.1871, 56.1645],
    speed: "25.8kn",
    course: "65°",
    destination: "ابوموسی",
    type: "B",
  },
  {
    name: "شاهین",
    coordinates: [28.204730, 50.119064],
    speed: "5kn",
    course: "100°",
    destination: "امارات",
    type: "C",
  },
  {
    name: "سپاهان",
    coordinates: [25.666673, 53.462665],
    speed: "16.2kn",
    course: "95°",
    destination: "بندرعباس",
    type: "A",
  },
  {
    name: "تندرو",
    coordinates: [25.110971, 58.373762],
    speed: "5kn",
    course: "100°",
    destination: "امارات",
    type: "C",
  },
  {
    name: "ذوالفقار",
    coordinates: [22.903251, 60.614973],
    speed: "5kn",
    course: "100°",
    destination: "امارات",
    type: "C",
  },
  {
    name: "سراج",
    coordinates: [25.011450, 57.483869],
    speed: "5kn",
    course: "100°",
    destination: "امارات",
    type: "A",
  },
  {
    name: "ناصر",
    coordinates: [37.486401, 51.282187],
    speed: "5kn",
    course: "100°",
    destination: "گرجستان",
    type: "B",
  },
  {
    name: "شاهین",
    coordinates: [38.885252, 49.480429],
    speed: "5kn",
    course: "100°",
    destination: "باکو",
    type: "B",
  },
];

function Home() {
  return (
    <div className="main_container">
      <div className="hero">
        <div className="mt-4">
          <AISMap locations={locations} height="100vh"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
