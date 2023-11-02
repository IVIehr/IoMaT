import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../login";
import Signup from "../signup";
import { useRecoilState } from "recoil";
import { userState } from "../../atom/user";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  const [human, setHuman] = useRecoilState(userState);

  const logout = () => {
    setHuman(null);
    window.localStorage.clear();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm fixed-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 dark-text" to="/">
            دریاگشت
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
                <NavLink className="nav-link" aria-current="page" to="/">
                  نقشه
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/boats">
                  شناور ها
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ports">
                  بندر ها
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  درباره دریاگشت
                </NavLink>
              </li>
            </ul>
            <div className="buttons d-flex">
              <div className="btn d-flex align-items-center p-0">
                {human ? (
                  <>
                    <button
                      type="button"
                      className="btn btn-outline-dark ms-2"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#sidebar"
                      aria-controls="sidebar"
                    >
                      <BiUser />
                      <span className="mx-1"> پنل کاربری</span>
                    </button>
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
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
