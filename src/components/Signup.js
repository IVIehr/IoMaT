import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/action";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [modal, setModal] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const registerUser = async (data) => {
    const userData = { ...data, legal: false };
    try {
      await axios
        .post("http://77.237.82.37:4041/auth/register", userData)
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message, { position: "bottom-right" });
            setModal(false);
          } else {
            toast.error(res.data.message, { position: "bottom-right" });
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

  const onSubmit = (data) => {
    registerUser(data);
    reset();
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
          <div className="modal d-block">
            <section className="modal-main p-4 rounded-3 w-50 overflow-auto h-75">
              <div className="d-flex justify-content-end align-items-center mb-1 mt-4 me-4">
                <button
                  type="button"
                  className="btn-close"
                  onClick={(e) => {
                    setModal(false);
                    reset();
                  }}
                ></button>
              </div>
              <h5 className="login-header mb-5 text-center">ثبت‌نام</h5>
              <div className="modal-body ps-5 pe-5 pt-0 pb-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3 text-end">
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
                  <div className="mb-3 text-end">
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
                  <div className="mb-3 text-end">
                    <label
                      htmlFor="exampleInputPassword"
                      className="form-label"
                    >
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
                  <div className="mb-3 text-end">
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
                  <div className="mb-3 text-end">
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
                  <div className="mb-3 text-end">
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
                  <button type="submit" className="btn btn-dark w-100 my-4">
                    ثبت نام کنید
                  </button>
                  <div className="form-check text-center">
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      قبلا ثبت نام کرده اید؟
                      <a
                        href="#"
                        onClick={() => {
                          setModal(false);
                          reset();
                        }}
                      >
                        وارد شوید
                      </a>{" "}
                    </label>
                  </div>
                </form>
              </div>
              <ToastContainer rtl />
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Signup;
