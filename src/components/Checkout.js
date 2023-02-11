import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasketTotal } from "../redux/reducer/handleCart";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import db from "../firebase";

function Checkout() {
  const state = useSelector((state) => state.handleCart);

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("اتصال به بانک")
  };

  var total = 0;
  const itemList = (item) => {
    total = total + item.price;

    // show to nuber of items in the cart
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${item.price}</span>
      </li>
    );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">سبد خرید</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>جمع کل</span>
                <strong>${getBasketTotal(state)}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="needs-validation" noValidate="">
              <h4 className="mb-3">پرداخت آنلاین</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="exampleForm" className="form-label">
                    آدرس
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="exampleForm"
                  />
                </div>
                <div className="mb-3">
                <label for="exampleForm" className="form-label">
                      کد پستی
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleForm"
                    />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    شماره تلفن
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">
                    توضیحات
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100">
                  ادامه
                </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
