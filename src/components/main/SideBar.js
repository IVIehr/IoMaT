import React from "react";
import { NavLink } from "react-router-dom";
import { userState } from "../../atom/user";
import { useRecoilValue } from "recoil";
import { AiOutlineHome, AiOutlineAlert } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { PiBoat } from "react-icons/pi";
import { SiPortainer } from "react-icons/si";
import UserInfo from "./UserInfo";

const Sidebar = () => {
  const human = useRecoilValue(userState);

  const handleItemClick = () => {
    const closeButton = document.getElementById("user-panel-close");
    if (closeButton) {
      closeButton.click();
    }
  };
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="sidebar"
      aria-labelledby="sidebarLabel"
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="sidebarLabel">
          پنل کاربری
        </h5>
        <button
          type="button"
          id="user-panel-close"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="border-bottom pb-3">
          <UserInfo />
        </div>
        <ul className="list-unstyled mx-auto mb-2 mb-lg-0">
          <li className="panel-item">
            <NavLink
              className="panel-link"
              aria-current="page"
              to="/"
              onClick={handleItemClick}
            >
              <AiOutlineHome />
              <span className="mx-3">داشبورد</span>
            </NavLink>
          </li>
          {human && human.info && human.info.data.role === "ADMIN" && (
            <li className="panel-item">
              <NavLink
                className="panel-link"
                aria-current="page"
                to="/users"
                onClick={handleItemClick}
              >
                <HiOutlineUsers />
                <span className="mx-3">تایید کاربران</span>
              </NavLink>
            </li>
          )}

          <li className="panel-item">
            <NavLink
              className="panel-link"
              to="/boats"
              onClick={handleItemClick}
            >
              <PiBoat />
              <span className="mx-3">شناورهای من</span>
            </NavLink>
          </li>
          <li className="panel-item">
            <NavLink
              className="panel-link"
              to="/ports"
              onClick={handleItemClick}
            >
              <SiPortainer />
              <span className="mx-3">بندرهای من</span>
            </NavLink>
          </li>
          <li className="panel-item">
            <NavLink
              className="panel-link"
              to="/"
              onClick={handleItemClick}
            >
              <AiOutlineAlert />
              <span className="mx-3">هشدارهای ارسال شده</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
