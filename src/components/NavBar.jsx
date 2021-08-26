import React, { useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import logo from "../assets/svg/pokemon-23.svg";
import menu from "../helpers/menu";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaDoorOpen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";



const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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

        <Container id="nav-menu" className="justify-content-end">
          {menu.map((item, index) => (
            <Link
              className="mx-1 text-white text-decoration-none"
              key={index}
              to={item.path}
            >
              {item.label}
            </Link>
          ))}
        </Container>

        <Button variant="danger" className="text-white" onClick={handleLogout}>
          <FaDoorOpen />
        </Button>

        <img
          className="rounded-circle mx-2"
          width="40"
          src={user.imageUrl}
          alt={user.name}
        />
      </Navbar>
    </div>
  );
};

export default NavBar;
