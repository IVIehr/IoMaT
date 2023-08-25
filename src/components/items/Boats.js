import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import SearchBox from "../searchBox";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlinePlus } from "react-icons/ai";
import AddBoat from "./addBoat";

function Boats() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [add , setAdd] = useState(false);
  const userState = useSelector((userState) => userState.handleUser);
  let componentMouted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMouted === true) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMouted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const handleNewPort = () => {
    if (userState !== null) {
      setAdd(true);
    } else {
      toast.info("لطفا ابتدا وارد شوید", { position: "bottom-right" });
    }
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="container buttons d-flex justify-content-center mb-5">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => setFilter(data)}
              >
                همه
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterProduct("men's clothing")}
              >
                ناوبر باری
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterProduct("women's clothing")}
              >
                ناوبر نفتی
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterProduct("jewelery")}
              >
                ناوبر تفریحی
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterProduct("electronics")}
              >
                ناوبر آب و هوا
              </button>
            </div>
          </div>
        </div>
        {filter.map((product) => {
          return (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  height="250px"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <NavLink
                    to={`/boats/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    اطلاعات بیشتر
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h3 className="display-6 fw-bolder text-center dark-text">
            لیست کشتی ها
          </h3>
          <hr />
          <div className="d-flex flex-row align-items-center justify-content-between mt-4">
            <div>
              <SearchBox itemToSearch="کشتی" />
            </div>
            <button className="btn btn-dark" onClick={handleNewPort}>
              افزودن کشتی جدید <AiOutlinePlus />
            </button>
            {add && <AddBoat modal={add} handleClose={() => setAdd(false)}/>}
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
      <ToastContainer rtl />
    </div>
  );
}

export default Boats;
