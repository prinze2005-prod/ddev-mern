import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Link , useHistory} from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import TechHeader from "../../components/TechHeader";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function App() {
  let history = useHistory();

  let HP_refreshToken;
  let HP_accessToken;

  const [jobData, setJobData] = useState([
    {
    job_id: 12345,
    cust_email: 'customer@gmail.com',
    phoneNumber: 1234567890,
    start_time: '2022-07-2923:07',
    address: [
        {street: '11 Sait way NW',
        postalCode: 'A1A 1A1'}
    ]
 },{
  job_idd: 12345,
  cust_email: 'customer@gmail.com',
  phoneNumber: 1234567890,
  start_time: '2022-07-2923:07',
  address: [
      {street: '11 Sait way NW',
      postalCode: 'A1A 1A1'}
  ]
}
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
}catch(err){
  console.log(err)
}
 

  useEffect(() => {
    fetch("http://localhost:5000/api/tech/getunjobs",
    {
      method: "POST",
      credentials: "include", //TWO THINGS: Cookies and this header <============
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: HP_refreshToken, // <==================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
        accessToken: HP_accessToken, // <====================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
      })})
    .then(response => response.json())
    .then(data => setJobData(data));
  },[]);
  
  const handleAccept = async (event, param) =>  {
    console.log(param)
    await fetch("http://localhost:5000/api/tech/assignjob",
    {
      method: "POST",
      credentials: "include", //TWO THINGS: Cookies and this header <============
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobID: param,
        refreshToken: HP_refreshToken, // <==================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
        accessToken: HP_accessToken, // <====================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
    })});
    history.push("/");
    history.push("/pendingtasks");
  };

  return (
    <main>
      <TechHeader title="Pending Tasks" />
      <Container style={{ minHeight: "500px" }}>
        <br></br>
        <h2>Pending Tasks</h2>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Customer Email</th>
              <th>Phone Number</th>
              <th>Start Time</th>
              <th>Street</th>
              <th>Postal Code</th>
              <th>Accept Job</th>
            </tr>
          </thead>
          <tbody>
          {jobData.map(obj =>
                    <tr>
                     <td>{obj.job_id} </td>   
                     <td>{obj.cust_email} </td>
                     <td>{obj.phoneNumber} </td>
                     <td>{obj.start_time} </td>
                     <td>{obj.address.street} </td>
                     <td>{obj.address.postalCode} </td>
                     <td> <Button variant="warning" onClick={event => handleAccept(event, obj.job_id)}>Accept</Button>{' '}</td>
                     </tr>
                 )}
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
        </center>
      </Container>
    </main>
  );
}
const Wrapper = styled.main`
    background: var(--clr-grey-10);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 5rem;
    }
    h3 {
      text-transform: none;
      margin-bottom: 2rem;
    }
    .btn {
      background: var(--clr-primary-5);
    }

    tr:hover {
      background-color: var(--clr-primary-5);
      width: 100%;
    }

    table {
      width: 800px;
      height: 200px;
      background: var(--clr-white);
      padding: 10px;
      border-radius: 15px;
      overflow-x: auto;
    }

    th {
      border-bottom: 1px solid black;
    }

    td {
      text-align: center;
    }
    .App {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* The switch - the box around the slider */
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #21f372;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  `;