import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/action";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  // Equal to post data to server
  const login = async (data) => {
    try {
      await axios
        .post("http://77.237.82.37:4041/auth/login", data)
        .then((res) => {
          if (res.data.success) {
            window.localStorage.setItem("AIS:ACCESS_TOKEN", res.data.data.token);
            toast.success(res.data.message, { position: "bottom-right" });
            setModal(false);
            const user = {
              displayName: data.email,
              email: data.email,
            }
            setUser(user);
          } else {
            toast.error(res.data.message, { position: "bottom-right" });
          }
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const setUser = (user) => {
    dispatch(signIn(user));
  };

  const onSubmit = (data) => {
    login(data);
    reset();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-dark"
        onClick={(e) => setModal(true)}
      >
        <i className="fa fa-sign-in me-1 "></i> ورود
      </button>
      {modal === true && (
        <>
          <div className="modal d-block">
            <div className="modal-main p-4 rounded-3 w-50 overflow-auto">
              <div className="d-flex justify-content-end align-items-center mb-1 mt-4 me-4">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setModal(false)}
                ></button>
              </div>
              <div className="modal-body ps-5 pe-5 pt-0">
                <h5
                  className="login-header text-start mb-4 text-center"
                  id="exampleModalLabel"
                >
                  ورود به حساب کاربری
                </h5>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                  <button type="submit" className="btn btn-dark w-100 my-4">
                    ورود به دریا گشت{" "}
                  </button>
                  <div className="text-center">
                    <label>
                      حساب کاربری ندارید؟
                      <a
                        href="#"
                        onClick={() => {
                          setModal(false);
                          reset();
                        }}
                      >
                        ثبت نام کنید
                      </a>{" "}
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
      <ToastContainer rtl />
    </>
  );
}

export default Login;