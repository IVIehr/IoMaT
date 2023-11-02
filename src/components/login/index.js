import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useLogin from "../../hooks/login/useLogin";
import { useSetRecoilState } from "recoil";
import { userState } from "../../atom/user";
import useGetMe from "../../hooks/getme/useGetMe";

function Login() {
  const [modal, setModal] = useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const setHuman = useSetRecoilState(userState);
  const { data: info, refetch: refetchGetInfo } = useGetMe();

  const { mutate } = useLogin();

  const onSubmit = (data) => {
    mutate({
      data,
      successCallBack: () => {
        setModal(false);
        setIsLoginSuccessful(true);
      },
    });
    reset();
  };

  useEffect(() => {
    if (isLoginSuccessful) {
      refetchGetInfo();
      setHuman(info);
    }
  }, [isLoginSuccessful]);

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
    </>
  );
}

export default Login;
