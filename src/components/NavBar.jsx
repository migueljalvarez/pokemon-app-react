import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/svg/pokemon-23.svg";
import menu from "../helpers/menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiDoorOpen } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Navbar bg="danger" variant="danger" className="fixed-top">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="pokemon"
              src={logo}
              width="130"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>

        <Container className="justify-content-end">
          {user.isAuthenticated ? (
            <div
              id="logout"
              className="text-white bg-danger mx-1"
              onClick={handleLogout}
            >
              <BiDoorOpen size={25} />
            </div>
          ) : (
            <div id="nav-menu" className="">
              {menu.map((item, index) => (
                <Link
                  className="mx-1 text-white text-decoration-none"
                  key={index}
                  to={item.path}
                >
                  {item.label}
                </Link>
              ))}
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

        <img
          className="rounded-circle mx-3"
          width="40"
          src={user.imageUrl}
          alt={user.name}
        />
      </Navbar>
    </div>
  );
};

export default NavBar;
