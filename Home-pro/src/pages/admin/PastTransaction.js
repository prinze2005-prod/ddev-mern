import React, {useState} from 'react';
import styled from 'styled-components';
import { Container, Table } from 'react-bootstrap';
import { NavLink, useHistory, Link } from 'react-router-dom';

const PastTransaction = () => {
	let history = useHistory();

	let HP_refreshToken;
	let HP_accessToken;
  
	const [transactionData, setTransactionData] = useState([
	  {
		job_id: 12,
		serviceName: "Electrical",
		duration: 3,
		first_2_hour_charge: 150,
		additional_per_hour: 80,
		total_charge: 230
	  },
	  {
		job_id: 14,
		serviceName: "Plumbing",
		duration: 2.5,
		first_2_hour_charge: 150,
		additional_per_hour: 80,
		total_charge: 190
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
  
  
	return (
		<main>
			<Container style={{ minHeight: "500px" }}>
        <br></br>
				<center><h2>Past Transaction</h2></center>
		
			<br />
			<br />
			<Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Service Name</th>
              <th>Duration</th>
              <th>First Two Hour Charge</th>
			  <th>Additional Per Hour</th>
              <th>Total Charge</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((obj) => (
              <tr>
                <td>{obj.job_id} </td>
                <td>{obj.serviceName} </td>
                <td>{obj.duration} </td>
                <td>{obj.first_2_hour_charge} </td>
				<td>{obj.additional_per_hour}</td>
                <td>{obj.total_charge} </td>
				<td>
				{" "}
				<Link
            to="/pasttransactiondetail"
            className="btn"
            style={{ backgroundColor: "#ffb347" }}
          >
           Details
          </Link>
                </td>
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
          <br></br>
          <br></br>
        </center>
      </Container>
    </main>
  );
}

export default PastTransaction;
