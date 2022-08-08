import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
const { REACT_APP_API_ENDPOINT } = process.env;
function ReviewInquires() {
  let history = useHistory();

  let HP_refreshToken;
  let HP_accessToken;
  const [inquiryData, setInquiryData] = useState([
    {
      email: "joeblow@gmail.com",
      serviceNumber: 125568,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    },
    {
      email: "jakeblow@gmail.com",
      serviceNumber: 124778,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    },
  ]);
  try {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cook = cookies[i].split("=");
      if (cook[0].includes("HP_refreshToken")) {
        HP_refreshToken = cook[1];
      }
      if (cook[0].includes("HP_accessToken")) {
        HP_accessToken = cook[1];
      }
    }
  } catch (err) {
    console.log(err);
  }

  useEffect(() => {
    fetch(REACT_APP_API_ENDPOINT +"/api/admin/getinquirys", {
      method: "POST",
      credentials: "include", //TWO THINGS: Cookies and this header <============
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: HP_refreshToken, // <==================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
        accessToken: HP_accessToken, // <====================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
      }),
    })
      .then((response) => response.json())
      .then((data) => setInquiryData(data));
  }, []);

  const handleDelete = async (event, param) => {
    console.log(param);
    await fetch(REACT_APP_API_ENDPOINT +"/api/admin/removeinquiry", {
      method: "POST",
      credentials: "include", //TWO THINGS: Cookies and this header <============
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobID: param,
        refreshToken: HP_refreshToken, // <==================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
        accessToken: HP_accessToken, // <====================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
      }),
    });
    history.push("/admin");
    history.push("/reviewinquiries");
  };

  return (
    <main>
      <Container style={{ minHeight: "500px" }}>
        <br></br>
        <br></br>
        <center>
          <h2>List Of Inquires</h2>
        </center>

        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Service #</th>
              <th>Inquiry</th>
            </tr>
          </thead>
          <tbody>
            {inquiryData.map((obj) => (
              <tr>
                <td><a href="mailto:{obj.email}">{obj.email}</a> </td>
                <td>{obj.job_id}</td>
                <td>{obj.description}</td>
                <td>{" "}
                  <Button
                    variant="warning"
                    style={{ color: "black" }}
                    onClick={(event) => handleDelete(event, obj.inquiry_id)}
                  >
                    Mark as read
                  </Button>{" "}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <center>
          <Link
            to="/admin"
            className="btn"
            style={{ backgroundColor: "#ffb347" }}
          >
            back to Admin page
          </Link>
        </center>
      </Container>
    </main>
  );
}

export default ReviewInquires;
