import React from "react";
import { NavLink } from "react-router-dom";
const DeveloperMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Developer Panel</h4>
          <NavLink
            to="/dashboard/developer/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/developer/orders"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default DeveloperMenu;