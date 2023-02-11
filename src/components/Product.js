import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  // Fetch data from API
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  // State of not loading the data => show the skeleton
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50"> {product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
             {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
          <h5 className="mt-5">توضیحات تکمیلی</h5>
          <p className="lead">{product.description}</p>
          <h5 className="mt-5">مشخصات مدرس</h5>
          <p className="lead">{product.description}</p>
        </div>
        <div className="col-md-6">
          <div className="border border-1 p-4">
            <h5 className="my-3">فهرست سرفصل ها</h5>
            <p >{product.description}</p>
            <div className="d-flex flex-column align-items-center">
              <h3 className="my-5 text-center">هزینه آموزش:  {product.price} تومان</h3>
              <button
                className="btn btn-dark w-50"
                onClick={() => addProduct(product)}
              >
                افزودن به سبد
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5 ">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default Product;
