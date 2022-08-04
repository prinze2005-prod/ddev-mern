import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Link, useHistory} from "react-router-dom";
const { REACT_APP_API_ENDPOINT } = process.env;

function AdminJob() {
  let history = useHistory();

  let HP_refreshToken;
  let HP_accessToken;

  const [jobData, setJobData] = useState([
    {
      jobId: 12345,
      tech_email: "info@calgaryplumbing.com",
      first_name: "Jake",
      last_name: "Blow",
      cust_email: "applepie@gmail.com",
      status: "unassigned",
      start_time: "2022-07-2923:07",
      address: [{ street: "11 Sait way NW", postalCode: "A1A 1A1" }],
      service_id: 2,
    },
    {
      jobId: 22336,
      tech_email: "info@calgaryplumbing.com",
      first_name: "Karl",
      last_name: "Blow",
      cust_email: "chocolatepie@gmail.com",
      status: "unassigned",
      start_time: "2022-07-2923:07",
      address: [{ street: "13 Sait way NW", postalCode: "A1A 1B1" }],
      service_id: 1,
    },
  ]);

  function checkUnassigned(job){
    return job.status==='unassigned';
  }

  function checkAssigned(job){
    return job.status==='assigned';
  }
  let unassignedData = jobData.filter(checkUnassigned);
  let assignedData = jobData.filter(checkAssigned);
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
    fetch(REACT_APP_API_ENDPOINT +"5000/api/admin/getjobs", {
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
      .then((data) => setJobData(data))
      .then(



      );
  }, []);

  return (
    <main>
      <Container>
        <br></br>
        <center>
          <h2>List of Unassigned Jobs</h2>
        </center>

        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Technician Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Customer Email</th>
              <th>Status</th>
              <th>Start Time</th>
              <th>Street</th>
              <th>Postal Code</th>
              <th>Service Id</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {unassignedData.map((obj) => (
              <tr>
                <td>{obj.job_id} </td>
                <td>{obj.tech_email} </td>
                <td>{obj.first_name}</td>
                <td>{obj.last_name}</td>
                <td>{obj.cust_email} </td>
                <td>{obj.status} </td>
                <td>{obj.start_time} </td>
                <td>{obj.address.street} </td>
                <td>{obj.address.postalCode} </td>
                <td>{obj.service_id} </td>
                <td>
                  {" "}
                  <Link
                    to="/adminjobedit"
                    className="btn"
                    style={{ backgroundColor: "#ffb347" }}
                  >
                    Edit job
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br></br>

        <br></br>
        <center>
          <h2>List of Assigned Jobs</h2>
        </center>

        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Technician Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Customer Email</th>
              <th>Status</th>
              <th>Start Time</th>
              <th>Street</th>
              <th>Postal Code</th>
              <th>Service Id</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {assignedData.map((obj) => (
              <tr>
                <td>{obj.job_id} </td>
                <td>{obj.tech_email} </td>
                <td>{obj.first_name}</td>
                <td>{obj.last_name}</td>
                <td>{obj.cust_email} </td>
                <td>{obj.status} </td>
                <td>{obj.start_time} </td>
                <td>{obj.address.street} </td>
                <td>{obj.address.postalCode} </td>
                <td>{obj.service_id} </td>
                <td>
                  {" "}
                  <Link
                    to="/adminjobedit"
                    className="btn"
                    style={{ backgroundColor: "#ffb347" }}
                  >
                    Edit job
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br></br>

        <center>
          <Link
            to="/admin"
            className="btn"
            style={{ backgroundColor: "#ffb347" }}
          >
            back to Admin page
          </Link>
        </center>
        <br></br>
        <br></br>
      </Container>
    </main>
  );
}

export default AdminJob;
