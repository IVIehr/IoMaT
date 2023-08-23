import { auth } from "../firebase";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/action";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const item = {
    email: "m.navidimehr@gmail.com",
    password: "12345678",
    firstName: "mehr",
    lastName: "navidi",
    legal: false,
    companyName: "",
    address: "",
    phoneNumber: "",
  };

  const register = async (e) => {
    e.preventDefault();

    try {
     await axios.post("http://77.237.82.37:4041/auth/register", item).then(res => {
      setModal(false);
        if (res) {
          navigate("/");
        }
        // setUser(auth.user);
        console.log(res.data);
     });
    } catch (error) {
      alert(error.message)
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

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark ms-2 "
        onClick={(e) => setModal(true)}
      >
        <i className="fa fa-user-plus me-1"></i> ثبت نام
      </button>
      {/* <!-- Modal --> */}
      {modal === true && (
        <>
          <div className="formWrapper" onClick={() => setModal(false)} />
          <div className="modal-content position-absolute ">
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
              <form onSubmit={register}>
                <div className="mb-3 text-start">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    نام کاربری
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
          </div>
        </>
      )}
    </>
  );
}

export default Signup;
