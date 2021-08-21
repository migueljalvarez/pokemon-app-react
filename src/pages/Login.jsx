import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { loginGoogle } from "../redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleloginGoogle = () => {
    dispatch(loginGoogle());
  };

  return (
    <div className="">
      <Form className="w-25 m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="my-1 w-100">
          Iniciar Session
        </Button>
        <div className="">
          <Button
            variant="danger"
            className="my-1 w-100"
            onClick={handleloginGoogle}
          >
            <FaGoogle className="m-1" />
            Iniciar Session con Google
          </Button>
          <Button variant="primary" className="my-1 w-100">
            <FaFacebook className="m-1" />
            Iniciar Session con Facebook
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
