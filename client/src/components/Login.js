import React, { Component } from "react";
import axios from "axios";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const API_URL = "http://localhost:5000/api/";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      userId: "",
      password: "",
      message: "",
    };
  }

  onChangeUserId(e) {
    this.setState({
      userId: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  async handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
    });

    axios
      .post(API_URL + "auth", {
        userId: this.state.userId,
        password: this.state.password,
      })
      .then((res) => {
        if (res.status === 400) {
          window.alert(res.data.msg);
        } else if (res.status === 200) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem("userId", JSON.stringify(res.data.userId));
          window.location.href = "/view";
        }
        window.alert(res.data.userId);
      })
      .catch((err) => {
        if (err.response.status === undefined) {
          window.alert("Please connect to internet!");
        } else if (err.response.status === 300 || err.response.status === 500) {
          window.alert(err.response.data.msg);
        }
        this.setState({
          message: err.response.data.msg,
        });
        //  window.alert(err.response.data.msg);

        window.location.reload();
      });
  
  }

  render() {
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
        <div className="alert-danger" role="alert">
          {this.state.message}
        </div>
        <div
          className="p-3 mb-3 mt-5 bg-light"
          style={{ border: "1px solid blue", color: "blue" }}
        >
          <h2>Login</h2>
        </div>
        <Form className="w-50 bg-light pb-3 mb-3" onSubmit={this.handleLogin}>
          <FormGroup>
            <Label for="userId">UserId</Label>
            <Input
              type="text"
              name="userId"
              value={this.state.userId}
              onChange={this.onChangeUserId}
              id="userId"
              placeholder="UserID"
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.onChangePassword}
              placeholder="Password"
              minLength="6"
              required={true}
            />
          </FormGroup>

          <Button color="primary" type="submit" value="Login">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
