import React from 'react';
import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import icon1 from '../assets/icon1.jpg';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.jpg';
import { Button, Form, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const ListOfServices = () => {
	
	return (
		<Wrapper className="section">
			<div className="title">
				<h2>List of previous services</h2>
				<div className="underline"></div>
            <div className='container'> <br />
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>Service #</th>
          <th>Service Name</th>
          <th>Service Date</th>
          <th>Service Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>59545</td>
          <td>Plumbing</td>
          <td>22 March, 2022</td>
          <td>1400</td>
        </tr>
        <tr>
          <td>65471</td>
          <td>Electrician</td>
          <td>11 April, 2022</td>
          <td>1600</td>
        </tr>
      </tbody>
    </Table>
    </div>
			</div>
			<br></br>
			
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: var(--clr-grey-10);
	transition: red;
	.featured {
		margin: 4rem auto;
		display: grid;
		gap: 2.5rem;
		img {
			height: 225px;
		}
	}



	.btn {
		display: block;
		width: 148px;
		margin: 0 auto;
		text-align: center;
	}
	tr:hover {

        background-color: var(--clr-primary-5);

        

    }
	td:hover {

        background-color: var(--clr-primary-5);

      

    }

	@media (min-width: 576px) {
		.featured {
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		}
	}
`;

export default ListOfServices;
