import React, { useEffect } from "react";
import L from "leaflet";
import "../../styles/leaflet.css";

const AISMap = ({ locations }) => {
  useEffect(() => {
    const map = L.map("ais-map").setView(locations[0].coordinates, 8);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    locations.forEach((location) => {
      let iconImage;
      switch (location.type) {
        case "A":
          iconImage = "../../assets/cargo-ship.png";
          break;
        case "B":
          iconImage = "../../assets/sailboat.png";
          break;
        case "C":
          iconImage = "../../assets/water-transportation.png";
          break;

        default:
          iconImage = "../../assets/images/marker-icon-2x.png";
          break;
      }
      const customIcon = L.icon({
        iconUrl: iconImage,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });
      L.marker(location.coordinates, { icon: customIcon })
        .addTo(map)
        .bindPopup(
          `<strong>${location.name}</strong> at ${location.speed}/${location.course}.<br> Destination: <strong>${location.destination}</string>`
        );
    });

    return () => {
      map.remove();
    };
  }, [locations]);

  return <div id="ais-map" style={{ height: "100vh" }}></div>;
}

export default AISMap;
