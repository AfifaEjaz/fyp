import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState,useContext } from "react";
import Cookies from 'js-cookie'
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/UserAuthApi";
import { decodeToken } from "react-jwt";
import { GlobalContext } from "../../Context/login/context";

const Login = () => {

  const { state, dispatch } = useContext(GlobalContext)


  const [user, setUser] = useState({
    email: "",
    password: "",
    tc: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  let name, value;
  const handleInputs = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setUser({
      ...user,
      [name]: inputValue,
    });
  };

  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const getData = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(user);
      console.log(res);

      if (res.data != "You are not a registered user") {
        if (res.data != "Invalid credentials") {
          const token = localStorage.setItem("token", res.data.token);
          setUser({
            email: "",
            password: "",
            tc: false,
          });
          setErrorMessage(res.data.message);
          // getToken = localStorage.getItem('token')

          // setTimeout(() => {
            // setIsLoggedIn(getToken);
            const resp = decodeToken(res.data.token);
            console.log("ye hai role", resp.role);
            // if (resp.role === "admin") {
            //   navigate("/admin");             
            //    console.log("admin dashboard agya")
            // }
            // if (resp.role === "user") {
            //   navigate("/user");    
            //   // return <User/>
            // }

            Cookies.set('token', res.data.token)

            dispatch({
              type: "LOGIN",
              token: res.data.token
            })

          // }, 3000);
        } else {
          setErrorMessage(res.data);
        }
      } else {
        setErrorMessage(res.data); // Set error message
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred while logging in."); // Set generic error message
    }
    setUser({
      email: "",
      password: "",
      tc: false,
    });
  };

  return (
    <>
      <Form onSubmit={getData} className="dark:text-whitee">
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            name="email"
            id="email"
            placeholder="Enter email"
            onChange={handleInputs}
            value={user.email}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleInputs}
            value={user.password}
          />
        </Form.Group>
        <NavLink to="/reset-password-email">Forgot Password?</NavLink>
        <Form.Group className="mb-3 mt-3">
          <Form.Check
            required
            type="checkbox"
            label="Agree to Terms & condition"
            name="tc"
            id="tc"
            onChange={handleInputs}
            checked={user.tc}
          />
        </Form.Group>
        <Button variant="danger" type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </Form>
    </>
  );
};

export default Login;
