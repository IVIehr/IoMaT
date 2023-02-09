import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";
import { signOut } from "../redux/action";

function Navbar() {
  const state = useSelector((state) => state.handleCart);
  const userState = useSelector((userState) => userState.handleUser);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut());
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm fixed-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 dark-text" to="/">
            فرادرس
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active dark-text"
                  aria-current="page"
                  to="/"
                >
                  صفحه اصلی
                </NavLink>
              </li>
              <li className="nav-item dark-text">
                <NavLink className="nav-link" to="/products">
                 همه آموزش ها
                </NavLink>
              </li>
              <li className="nav-item dark-text">
                <NavLink className="nav-link" to="/teaching">
                  تدریس در فرادرس
                </NavLink>
              </li>
            </ul>
            <div className="buttons d-flex">
              <div className="btn d-flex align-items-center">
                {userState && userState?.state !== null ? (
                  <>
                    <div>
                      {userState?.state?.displayName !== null
                        ? userState?.state?.displayName
                        : userState?.state?.email}
                    </div>

                    <NavLink to="/orders" className="btn btn-outline-dark ms-2">
                      سفارش ها
                    </NavLink>
                    <button
                      type="button"
                      className="btn btn-outline-dark ms-2"
                      onClick={logout}
                    >
                      <i className="fa fa-sign-in me-1 "></i> خروج
                    </button>
                  </>
                ) : (
                  <>
                    <Login /> <Signup />
                  </>
                )}

                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1"></i> سبد خرید (
                  {state.length === 0 ? 0 : state.length})
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
