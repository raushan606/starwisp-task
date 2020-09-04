import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Navbar from "./Navigation";
import { postUniDetails } from "../services/unidetail-service";

const Add = () => {
  const [formData, setFormData] = useState({
    uniname: "",
    registrationDate: new Date().toDateString(),
    expiryDate: new Date().toDateString(),
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
    await postUniDetails(formData).then((res) => {
      if (res.status === 200) {
        window.location.href = "/view";
      }
    });
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
          <h2>Add University Detail</h2>
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
              required={true}
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
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="expiryDate">Expiry Date</Label>
            <Input
              type="date"
              name="expiryDate"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => onChange(e)}
              placeholder="Expiry Date"
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="imgUrl">Image Url</Label>
            <Input
              type="text"
              name="imgUrl"
              id="imgUrl"
              value={imgUrl}
              onChange={(e) => onChange(e)}
              placeholder="Image Url"
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="noOfStudent">Number of Students</Label>
            <Input
              type="text"
              name="noOfStudent"
              id="noOfStudent"
              value={noOfStudent}
              onChange={(e) => onChange(e)}
              placeholder="Number of Students"
              required={true}
              pattern="\d+"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="Email"
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="webUrl">Website Url</Label>
            <Input
              type="text"
              name="webUrl"
              id="webUrl"
              value={webUrl}
              onChange={(e) => onChange(e)}
              placeholder="Website Url"
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="contactNo">Contact No.</Label>
            <Input
              type="text"
              name="contactNo"
              id="contactNo"
              value={contactNo}
              onChange={(e) => onChange(e)}
              placeholder="Contact No."
              maxLength="10"
              minLength="10"
              required={true}
              pattern="\d+"
            />
          </FormGroup>

          <Button color="primary" type="submit" value="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Add;
