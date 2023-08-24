import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
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
                All
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterProduct("men's clothing")}
              >
                Mens' Clothing
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterProduct("women's clothing")}
              >
                Womens' Clothing
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterProduct("jewelery")}
              >
                Jewelery
              </button>
              <button
                className="btn btn-outline-dark me-2 selected mb-2"
                onClick={() => filterProduct("electronics")}
              >
                Electronic
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
                    to={`/ports/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    مشاهده کنید
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
            لیست بندر ها
          </h3>
          <hr />
          <p className="text-center">
            جزئیات بیش از 600 بندر در ایران، از جمله شرح و موقعیت بنادر روی
            نقشه.<br/>تمام کشتی های نزدیک به هر بندر نیز روی نقشه قابل مشاهده هستند.
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Products;
