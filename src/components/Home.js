import {React} from "react";
import Products from "./items/Boats";
import SearchBox from "./searchBox";

function Home() {
  return (
    <div className="">
      <div className="hero">
        <div className="card bg-dark text-white border-0 ">
          <img
            src="/assets/banner.jpg"
            className="card-img opacity-50"
            alt="Background"
            height="400px"
          />
          <div className="card-img-overlay d-flex hero-header mt-5 flex-column align-items-center justify-content-center">
            <div className="container text-center">
              <p className="card-text lead fs-5 fw-bold">در بین بیش از ۲۰,۰۰۰ ساعت آموزش فرادرسی جستجو کنید و به جمع میلیونی دانشجویان فرادرس بپیوندید.</p>
            </div>
            <div className="mt-5">
              <SearchBox/>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
