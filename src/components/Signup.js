import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/action";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const item = {
    companyName: "",
    address: "",
    phoneNumber: "",
  };

  const registerUser = async (data) => {
    const userData = { ...data, legal: false };
    try {
      await axios
        .post("http://77.237.82.37:4041/auth/register", userData)
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message, { position: "bottom-left"});
            setModal(false);
          } else {
            toast.error(res.data.message, { position: "bottom-left"});
          }
          // setUser(auth.user);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const setUser = (user) => {
    dispatch(signIn(user));
  };

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark ms-2 "
        onClick={(e) => setModal(true)}
      >
        <i className="fa fa-user-plus me-1"></i> ثبت نام
      </button>
      {modal === true && (
        <>
          <div className="formWrapper" />
          <div className="modal-content position-absolute">
            <div className="d-flex justify-content-end align-items-center mb-1 mt-4 me-4">
              <button
                type="button"
                className="btn-close"
                onClick={(e) => setModal(false)}
              ></button>
            </div>
            <div className="modal-body ps-5 pe-5 pt-0 pb-3">
              <h5
                className="modal-title login-header text-start mb-5 text-center"
                id="exampleModalLabel"
              >
                ثبت‌نام
              </h5>
              <button className="btn btn-dark w-100 mb-4">
                <span className="fa fa-google me-2"></span> ثبت‌نام با گوگل
              </button>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 text-start">
                  <label htmlFor="exampleInpuName" className="form-label">
                    نام
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInpuName"
                    required
                    {...register("firstName")}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="exampleInputEmail" className="form-label">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    required
                    {...register("email")}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="exampleInputPassword" className="form-label">
                    رمز عبور
                  </label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="exampleInputPassword"
                    {...register("password")}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="companyName" className="form-label">
                    نام سازمان
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    {...register("companyName")}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="address" className="form-label">
                    آدرس
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    {...register("address")}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="phoneNumber" className="form-label">
                    شماره تلفن
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    {...register("phoneNumber")}
                  />
                </div>
                <div className="mb-3 form-check text-start">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    required
                  />
                  <Modal show={show} handleClose={hideModal} />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    با{" "}
                    <a href="#" onClick={showModal}>
                      شرایط و ضوابط
                    </a>{" "}
                    موافقت می نمایم
                  </label>
                </div>
                <button type="submit" className="btn btn-dark w-100 mt-5 mb-3">
                  ثبت نام کنید
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </>
      )}
    </>
  );
};

export default Signup;
