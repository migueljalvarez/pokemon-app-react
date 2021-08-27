import React from "react";
import { Link } from "react-router-dom";

const ResposiveMenu = ({ user, items, isShow, handleLogout }) => {
  const defaultMenu = [];
  items.map((item, index) =>
    defaultMenu.push(
      <Link
        className="text-white text-decoration-none m-2"
        key={index}
        to={item.path}
      >
        {item.label}
      </Link>
    )
  );

  return (
    <div
      id="responsive-menu"
      className={`bg-danger ${
        isShow ? "show" : "hide"
      }  d-flex align-items-center text-uppercase text-center`}
    >
      {user.isAuthenticated ? (
        <div id="" className="w-100 d-flex flex-column">
          {defaultMenu}

          <div
            id="logout"
            className="text-white bg-danger m-2"
            onClick={() => handleLogout()}
          >
            Logout
          </div>
        </div>
      ) : (
        <div id="" className="w-100 d-flex flex-column">
          {defaultMenu}

          <Link
            className="mx-1 text-white text-decoration-none m-2"
            to="/sign-up"
          >
            Sign Up
          </Link>
          <Link
            className="mx-1 text-white text-decoration-none m-2"
            to="/login"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default ResposiveMenu;
