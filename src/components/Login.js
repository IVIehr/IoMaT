/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/action";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Authentication
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Equal to post data to server
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
        setUser(auth.user);
        setModal(false);
      })
      .catch((error) => alert(error.message));
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
          <div className="formWrapper" onClick={() => setModal(false)} />

          <div className="modal-content position-absolute">
            <div className="d-flex justify-content-end align-items-center mb-1 mt-4 me-4">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setModal(false)}
              ></button>
            </div>
            <div className="modal-body ps-5 pe-5 pt-0 pb-3">
              <h5
                className="modal-title login-header text-start mb-5 text-center"
                id="exampleModalLabel"
              >
                ورود به حساب کاربری
              </h5>
              <button
                className="btn btn-dark w-100 mb-4"
                data-bs-dismiss="modal"
                onClick={handleAuth}
              >
                <span className="fa fa-google me-2"></span> ورود با حساب گوگل
              </button>
              <form onSubmit={login}>
                <div className="mb-3 text-start">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    رمز عبور
                  </label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check text-start">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    required
                  />
                  <Modal show={show} handleClose={hideModal}/>
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    با <a href="#" onClick={showModal}>شرایط و ضوابط</a> موافقت می نمایم
                  </label>
                </div>
                <button type="submit" className="btn btn-dark w-100 mt-5 mb-3">
                  ورود
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
