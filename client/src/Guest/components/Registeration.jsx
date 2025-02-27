import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../services/UserAuthApi.js";

const Registeration = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "user", // Default role
    tc: false,
  });

  const handleInputs = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setUser({
      ...user,
      [name]: inputValue,
    });
  };

  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const getData = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser(user);
      console.log(res);

      if (res.data?.message) {
        setErrorMessage(res.data.message);
      } else {
        setErrorMessage("");
      }

      setUser({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "user",
        tc: false,
      });

      setTimeout(() => {
        navigate("/loginReg");
      }, 3000);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <Form onSubmit={getData}>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}

        {/* Radio Buttons for Role Selection */}
        <Form.Group className="mb-3 flex gap-5">
          <Form.Check
            type="radio"
            label="User"
            name="role"
            value="user"
            checked={user.role === "user"}
            onChange={handleInputs}
          />
          <Form.Check
            type="radio"
            label="Organization"
            name="role"
            value="organization"
            checked={user.role === "organization"}
            onChange={handleInputs}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            required
            name="name"
            placeholder="Enter Name"
            onChange={handleInputs}
            value={user.name}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            name="email"
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
            placeholder="Password"
            onChange={handleInputs}
            value={user.password}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password_confirmation"
            placeholder="Confirm Password"
            onChange={handleInputs}
            value={user.password_confirmation}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            required
            type="checkbox"
            label="Agree to Terms & Conditions"
            name="tc"
            onChange={handleInputs}
            checked={user.tc}
          />
        </Form.Group>

        <Button variant="danger" type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </Form>
    </>
  );
};

export default Registeration;
