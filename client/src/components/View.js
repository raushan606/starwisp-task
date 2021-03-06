import React, { Component } from "react";
import Navbar from "./Navigation";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { Link } from "react-router-dom";
import moment from "moment";
import { getUniDetails, deleteUniDetails } from "../services/unidetail-service";

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [],
      currentPage: 1,
      maxItemsPerPage: 3,
      i: 1,
    };
  }

  componentDidMount() {
    getUniDetails().then((res) => {
      const result = res.data;
      this.setState({ details: result });
      console.log(this.state.details);
    });
  }

  deleteButton = (_id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteUniDetails(_id),
        },
        {
          label: "No",
          onClick: () => (window.href = "/view"),
        },
      ],
    });
  };

  renderUniData = () => {
    let start =
      this.state.currentPage * this.state.maxItemsPerPage -
      this.state.maxItemsPerPage;
    return this.state.details
      .slice(start, this.state.currentPage * this.state.maxItemsPerPage)
      .map((detail, index) => {
        const {
          _id,
          expiryDate,
          contactNo,
          noOfStudent,
          imgUrl,
          email,
          uniname,
          webUrl,
          registrationDate,
        } = detail;

        return (
          <tr key={_id}>
            <th scope="row">{start + index + 1}</th>
            <td className="text-center">{uniname}</td>
            <td className="text-center">
              {moment(registrationDate).format("YYYY-MM-DD")}
            </td>
            <td className="text-center">
              {moment(expiryDate).format("YYYY-MM-DD")}
            </td>
            <td className="text-center">{imgUrl}</td>
            <td className="text-center">{noOfStudent}</td>
            <td className="text-center">{email}</td>
            <td className="text-center">{webUrl}</td>
            <td className="text-center">{contactNo}</td>
            <td className="text-center">
              <Link type="button" to={`/edit/${_id}`}>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-pencil-square"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </Link>
            </td>
            <td className="text-center">
              <Link
                type="button"
                onClick={() => {
                  return this.deleteButton(_id);
                }}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-trash"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </Link>
            </td>
          </tr>
        );
      });
  };

  simplePaging = () => {
    return (
      <div>
        {this.state.currentPage > 1 ? (
          <button onClick={() => this.changePage("back")}>Prev</button>
        ) : null}
        {this.state.details.length - 1 >=
        this.state.currentPage * this.state.maxItemsPerPage ? (
          <button onClick={() => this.changePage("next")}>Next</button>
        ) : null}
      </div>
    );
  };

  changePage = (direction) => {
    if (direction === "back") {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
      console.log(this.state.currentPage);
    } else if (direction === "next") {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        {this.state.details.length !== 0 ? (
          <div
            className="container-fluid  bg-light d-flex flex-column align-items-center"
            style={{
              border: "0px solid blue",
              color: "blue",
              marginTop: "25px",
              // boxShadow: "10px 10px 10px 10px #B6B4C2",
            }}
          >
            <div
              className="p-3 mb-3 mt-5 bg-light"
              style={{ border: "1px solid blue", color: "blue" }}
            >
              <h2>View University Detail</h2>
            </div>
            <div className="table-responsive-lg">
              <table
                className="table"
                style={{ boxShadow: "10px 10px 10px 10px #B6B4C2" }}
              >
                <thead className="thead-dark">
                  <tr>
                    <th className="text-center" scope="col">
                      #
                    </th>
                    <th className="text-center" scope="col">
                      University Name
                    </th>
                    <th className="text-center" scope="col">
                      Registration Date
                    </th>
                    <th className="text-center" scope="col">
                      Expiry Date
                    </th>
                    <th className="text-center" scope="col">
                      Image Url
                    </th>
                    <th className="text-center" scope="col">
                      No. of Students
                    </th>
                    <th className="text-center" scope="col">
                      Email
                    </th>
                    <th className="text-center" scope="col">
                      Web Url
                    </th>
                    <th className="text-center" scope="col">
                      Contact No.
                    </th>
                    <th className="text-center" scope="col">
                      Edit
                    </th>
                    <th className="text-center" scope="col">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>{this.renderUniData()}</tbody>
              </table>

              {this.simplePaging()}
            </div>
          </div>
        ) : (
          <p>
            Waiting <br />
            Maybe you have no data in db.
          </p>
        )}
      </div>
    );
  }
}

export default View;
