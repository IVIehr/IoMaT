import React from "react";
import Footer from "./Footer";
import Offer from "./Offer";
import Products from "./Products";

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
          <div className="card-img-overlay d-flex hero-header flex-column justify-content-center">
            <div className="container text-center">
              <p className="card-text lead fs-5 fw-bold">.در بین بیش از ۲۰,۰۰۰ ساعت آموزش فرادرسی جستجو کنید و به جمع میلیونی دانشجویان فرادرس بپیوندید</p>
            </div>
          </div>
        </div>
      </div>
      <Offer/>
      <Products />
      <Footer/>
    </div>
  );
}

export default Home;
