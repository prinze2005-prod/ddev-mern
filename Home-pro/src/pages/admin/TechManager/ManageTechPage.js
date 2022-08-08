import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
const { REACT_APP_API_ENDPOINT } = process.env;

export default function ManageTechPage() {
  let history = useHistory();

  let HP_refreshToken;
  let HP_accessToken;

  const [techData, setTechData] = useState([
    {
      tech_email: "tech@gmail.com",
      name: "tech",
      address: { street: "11 Sait way NW", postalCode: "A1A 1A1" },
	  services: [1],
	  phoneNumber: 4031112222
    },
    {
		tech_email: "tech@gmail.com",
		name: "tech",
		address: { street: "11 Sait way NW", postalCode: "A1A 1A1" },
		services: [1],
		phoneNumber: 4031112222
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
    fetch(REACT_APP_API_ENDPOINT +"/api/admin/gettechnicians", {
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
      .then((data) => setTechData(data));
  }, []);

  return (
    <main>
		
      <Container style={{ minHeight: "500px" }}>
        <br></br>
        <center>
          <h2>List Of Technicians</h2>
        </center>
		<br></br>
		<center>
		<Link
            to="/adminTechAdd"
            className="btn"
            style={{ backgroundColor: "#ffb347" }}
          >
           + Tech
          </Link>
		</center>
        <br></br>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              
              <th>Technician Email</th>
              <th>Name</th>
              <th>Street</th>
              <th>Postal Code</th>
              <th>Eligible for Services</th>
			  <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {techData.map((obj) => (
              <tr>
                <td>{obj.tech_email} </td>
                <td>{obj.name} </td>
                <td>{obj.address.street} </td>
                <td>{obj.address.postalCode} </td>
				<td>{obj.services}</td>
				<td>{obj.phoneNumber}</td>
               
              </tr>
            ))}
          </tbody>
        </Table>
        <center>
          <Link
            to="/Tech"
            className="btn"
            style={{ backgroundColor: "#ffb347" }}
          >
            back to Tech page
          </Link>
          <br></br>

        </center>
      </Container>
    </main>
  );
}
