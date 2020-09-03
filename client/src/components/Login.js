import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const { userId, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="container mt-5 bg-light d-flex flex-column align-items-center"
      style={{
        border: "0px solid blue",
        color: "blue",
        marginTop: "25px",
        boxShadow: "10px 10px 10px 10px #B6B4C2",
      }}
    >
      <div
        className="p-3 mb-3 mt-5 bg-light"
        style={{ border: "1px solid blue", color: "blue" }}
      >
        <h2>Login</h2>
      </div>
      <Form className="w-50 bg-light pb-3 mb-3" onSubmit={(e) => onSubmit(e)}>
        <FormGroup>
          <Label for="userId">UserId</Label>
          <Input
            type="text"
            name="userId"
            value={userId}
            onChange={(e) => onChange(e)}
            id="userId"
            placeholder="UserID"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => onChange(e)}
            placeholder="Password"
            minLength="6"
          />
        </FormGroup>

        <Button color="primary" type="submit" value="Login">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
