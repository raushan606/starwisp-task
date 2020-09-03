import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Navbar from "./Navigation";
import DatePicker from "react-datepicker";

const Add = () => {
  const [formData, setFormData] = useState({
    uniname: "",
    registrationDate: new Date(),
    expiryDate: "",
    imgUrl: "",
    noOfStudent: "",
    email: "",
    webUrl: "",
    contactNo: "",
  });

  const {
    uniname,
    registrationDate,
    expiryDate,
    imgUrl,
    noOfStudent,
    email,
    webUrl,
    contactNo,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <Navbar />
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
          <h2>University Detail</h2>
        </div>
        <Form className="w-50 bg-light pb-3 mb-3" onSubmit={(e) => onSubmit(e)}>
          <FormGroup>
            <Label for="uniname">University Name</Label>
            <Input
              type="text"
              name="uniname"
              value={uniname}
              onChange={(e) => onChange(e)}
              id="uniname"
              placeholder="University Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="registrationDate">Registration Date</Label>
            <Input
              type="date"
              name="registrationDate"
              id="registrationDate"
              value={registrationDate}
              onChange={(e) => onChange(e)}
              placeholder="Registration Date"
            />
          </FormGroup>
          <FormGroup>
            <Label for="expiryDate">Expiry Date</Label>
            <Input
              type="date"
              name="registrationDate"
              id="registrationDate"
              value={registrationDate}
              onChange={(e) => onChange(e)}
              placeholder="Registration Date"
            />
          </FormGroup>

          <Button color="primary" type="submit" value="Login">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Add;
