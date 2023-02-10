import { useState, useEffect, React} from "react";
import { useNavigate } from "react-router-dom";
import Offer from "./Offer";
import Products from "./Products";
import SearchBox from "./searchBox";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let componentMouted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMouted === true) {
        setData(await response.clone().json());
      }
      return () => {
        componentMouted = false;
      };
    };
    getProducts();
  }, []);

  const handleSearch = (query) =>{
    setSearchQuery(query);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    var filtered;
    if(searchQuery){
      filtered = data.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if(filtered.length != 0){
      var id = filtered[0].id
      navigate(`/products/${id}`)
    }
    else{
      console.log('no');
    }
  }

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
          <div className="card-img-overlay d-flex hero-header flex-column align-items-center justify-content-center">
            <div className="container text-center">
              <p className="card-text lead fs-5 fw-bold">در بین بیش از ۲۰,۰۰۰ ساعت آموزش فرادرسی جستجو کنید و به جمع میلیونی دانشجویان فرادرس بپیوندید.</p>
            </div>
            <div className="w-25 mt-4">
              <SearchBox value={searchQuery} onchange={handleSearch} onsubmit={handleSubmit}/>
            </div>
          </div>
        </div>
      </div>
      <Offer/>
      <Products />
    </div>
  );
}

export default Home;
