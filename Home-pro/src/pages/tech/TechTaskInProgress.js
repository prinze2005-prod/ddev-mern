import React , {useState, useRef, useEffect }from "react";
import Container from "react-bootstrap/Container";
import TechHeader from "../../components/TechHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function TechTaskInProgress() {
  
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
    fetch("http://localhost:5000/api/tech/getInProgressJobs",
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
  
  return (
    <main>
      <TechHeader title="Tasks in Progress" />
      <Container style={{ minHeight: "500px" }}>
        <br></br>
        <h2>Tasks in Progress</h2>
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

export default TechTaskInProgress;
