import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { loginFacebook, loginGoogle } from "../redux/actions";
import logo from "../assets/svg/pokemon-23.svg";
import constants from "../helpers/constants";

const { EMAIL, PASSWORD, SIGN_IN, SIGN_IN_WITH_GOOGLE, SIGN_IN_WITH_FACEBOOK } =
  constants;

const Login = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleloginGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleLoginWithFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <div id="container-login" className="d-flex ">
      <Container className="m-auto">
        <Form className="m-auto">
          <div className="d-flex justify-content-center">
            <img alt="pokemon" src={logo} width="130" className=" my-2" />
          </div>
          <h1 className="text-center my-5">{SIGN_IN}</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{EMAIL}</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{PASSWORD}</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="my-1 btn-socials align-self-center"
          >
            {SIGN_IN}
          </Button>

          <div className="d-flex justify-content-center">
            <Button
              variant="danger"
              className="btn-socials"
              onClick={handleloginGoogle}
            >
              <FaGoogle className="m-1" size={20} />
              {SIGN_IN_WITH_GOOGLE}
            </Button>
            <Button
              variant="primary"
              className="btn-socials"
              size="md"
              onClick={handleLoginWithFacebook}
            >
              <FaFacebook className="m-1" size={20} />
              {SIGN_IN_WITH_FACEBOOK}
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
