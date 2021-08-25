import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/svg/pokemon-23.svg";
import menu from "../helpers/menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const user = useSelector((state) => state.login);
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
            <Link className="mx-1 text-white text-decoration-none" key={index} to={item.path}>
              {item.label}
            </Link>
          ))}

          <img
            className="rounded-circle mx-2"
            width="40"
            src={user.imageUrl}
            alt={user.name}
          />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
