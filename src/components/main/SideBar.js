import React from "react";

const Sidebar = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="sidebar"
      aria-labelledby="sidebarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="sidebarLabel">
          پنل کاربر
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">{/* Sidebar content */}</div>
    </div>
  );
};

export default Sidebar;
