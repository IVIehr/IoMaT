import { React } from "react";

function Home() {
  return (
    <div className="main_container">
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <video autoPlay loop muted className="video-bg" src="/assets/map-video.mp4" type="video/mp4"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
