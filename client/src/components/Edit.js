import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Navbar from "./Navigation";
import { putUniDetails } from "../services/unidetail-service";

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uniname: "",
      registrationDate: new Date().toDateString(),
      expiryDate: new Date().toDateString(),
      imgUrl: "",
      noOfStudent: "",
      email: "",
      webUrl: "",
      contactNo: "",
    };
  }

  //    DishWithId = ({match}) => {
  //       return(
  //           <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
  //             isLoading={this.props.dishes.dishes.isLoading}
  //             errMess={this.props.dishes.errMess}
  //             comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
  //             addComment={this.props.addComment}/>
  //       );
  //     };
  componentDidMount() {
    // const { name } = this.props.location.state;
    //console.log("Detail: " + name);
    console.log(this.props.match.params.id);
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    //  console.log("Detail: " + this.props.location.aboutProps);
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
                value={this.state.uniname}
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
                value={this.state.registrationDate}
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
                value={this.state.expiryDate}
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
                value={this.state.imgUrl}
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
                value={this.state.noOfStudent}
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
                value={this.state.email}
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
                value={this.state.webUrl}
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
                value={this.state.contactNo}
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