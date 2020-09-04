import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Navbar from "./Navigation";
import moment from "moment";
import { putUniDetails, getUniDetailbyId } from "../services/unidetail-service";

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {
        uniname: "",
        registrationDate: new Date().toDateString(),
        expiryDate: new Date().toDateString(),
        imgUrl: "",
        noOfStudent: "",
        email: "",
        webUrl: "",
        contactNo: "",
      },
      _id: "",
    };
  }

  componentDidMount() {
    getUniDetailbyId(this.props.match.params.id).then((res) => {
      const {
        _id,
        uniname,
        registrationDate,
        expiryDate,
        imgUrl,
        noOfStudent,
        webUrl,
        email,
        contactNo,
      } = res.data;

      this.setState({
        ...this.state.detail,
        detail: {
          uniname: uniname,
          registrationDate: moment(registrationDate).format("YYYY-MM-DD"),
          expiryDate: moment(expiryDate).format("YYYY-MM-DD"),
          imgUrl: imgUrl,
          noOfStudent: noOfStudent,
          webUrl: webUrl,
          email: email,
          contactNo: contactNo,
        },
        _id: _id,
      });

      
    });
   
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      detail: {
        [e.target.name]: e.target.value,
      },
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await putUniDetails(this.state._id, this.state.detail).then((res) => {
      console.log("Edit: " + this.state._id);
      window.location.href = "/view";
    });
  };

  render() {
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
            <h2>Edit University Detail</h2>
          </div>
          <Form
            className="w-50 bg-light pb-3 mb-3"
            onSubmit={(e) => this.onSubmit(e)}
          >
            <FormGroup>
              <Label for="uniname">University Name</Label>
              <Input
                type="text"
                name="uniname"
                value={this.state.detail.uniname}
                onChange={(e) => this.onChange(e)}
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
                value={this.state.detail.registrationDate}
                onChange={(e) => this.onChange(e)}
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
                value={this.state.detail.expiryDate}
                onChange={(e) => this.onChange(e)}
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
                value={this.state.detail.imgUrl}
                onChange={(e) => this.onChange(e)}
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
                value={this.state.detail.noOfStudent}
                onChange={(e) => this.onChange(e)}
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
                value={this.state.detail.email}
                onChange={(e) => this.onChange(e)}
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
                value={this.state.detail.webUrl}
                onChange={(e) => this.onChange(e)}
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
                value={this.state.detail.contactNo}
                onChange={(e) => this.onChange(e)}
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
  }
}

export default Edit;
