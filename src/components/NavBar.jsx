import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/svg/pokemon-23.svg";
import menu from "../helpers/menu";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiDoorOpen, BiX } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";
import ResposiveMenu from "./ResposiveMenu";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleToggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const history = useHistory();

  const defaultMenu = [];
  menu.map((item, index) =>
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

  useEffect(() => {
    return history.listen((location) => {
      if (location) {
        setIsShowMenu(false);
      }
    });
  }, [history]);

  return (
    <div>
      <Navbar
        id="nav-contarner-main"
        bg="danger"
        variant="danger"
        className="fixed-top"
      >
        <span
          id="toggle-menu"
          className="text-white bg-danger mx-4"
          onClick={handleToggleMenu}
        >
          {isShowMenu ? <BiX size={25} /> : <FaBars size={25} />}
        </span>
        <Container id="nav-contarner-brand">
          <Navbar.Brand href="/">
            <img
              alt="pokemon"
              src={logo}
              width="130"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>

        <Container id="container-menu" className="justify-content-end">
          {user.isAuthenticated ? (
            <div id="nav-menu" className="">
              {defaultMenu}
              <div
                id="logout"
                className="text-white bg-danger mx-1"
                onClick={handleLogout}
              >
                <BiDoorOpen size={25} />
              </div>
            </div>
          ) : (
            <div id="nav-menu" className="">
              {defaultMenu}
              <Link
                className="mx-1 text-white text-decoration-none"
                to="/sign-up"
              >
                Sign Up
              </Link>
              <Link
                className="mx-1 text-white text-decoration-none"
                to="/login"
              >
                Login
              </Link>
            </div>
          )}
        </Container>

        <div id="profile-image">
          <img
            className="rounded-circle mx-3"
            width="40"
            src={user.imageUrl}
            alt={user.name}
          />
        </div>
      </Navbar>
      <ResposiveMenu
        user={user}
        isShow={isShowMenu}
        items={menu}
        handleLogout={handleLogout}
        handleToggleMenu={handleToggleMenu}
      />
    </div>
  );
};

export default NavBar;
