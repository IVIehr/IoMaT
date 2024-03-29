import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSignUp from "../../hooks/singup/useSignUp";

const Signup = () => {
  const [modal, setModal] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useSignUp();

  const onSubmit = (data) => {
    mutate({
      data,
      successCallBack: () => {
        setModal(false);
      },
    });
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
            <h5 className="login-header mb-4 text-center">ثبت‌نام</h5>
            <div className="modal-body ps-5 pe-5 pt-0">
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
                  ثبت نام در دریاگشت{" "}
                </button>
                <div className="text-center">
                  <label>
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
          </section>
        </div>
      )}
    </>
  );
};

export default Signup;
