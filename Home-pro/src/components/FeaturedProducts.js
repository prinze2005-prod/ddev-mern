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

const FeaturedProducts = () => {
	const {
		products_loading: loading,
		products_error: error,
		featured_products: featured,
	} = useProductsContext();
	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <Error />;
	}
	return (
		<Wrapper className="section">
			<div className="title">
				<h2>featured services</h2>
				<div className="underline"></div>
			</div>
			<br></br>
			<div className="container">
				<Row xs={1} md={3} className="g-4">
					<Col>
						<NavLink
							to="/Plumbing"
							style={(isActive) => ({
								color: isActive ? '#ffb347' : 'black',
							})}
						>
							<Card
								style={{
									borderRadius: '0.60rem',
									width: '80%',
									height: '100%',
									marginLeft: '35px',
								}}
							>
								<center>
									<Card.Img
										variant="top"
										src={icon1}
										style={{ width: '35%', height: '100%' }}
									/>
								</center>
								<Card.Body>
									<Card.Title>
										<center>Plumbing</center>
									</Card.Title>
								</Card.Body>
							</Card>
						</NavLink>
					</Col>
					<Col>
						<NavLink
							to="/Electrician"
							style={(isActive) => ({
								color: isActive ? '#ffb347' : 'black',
							})}
						>
							<Card
								style={{
									borderRadius: '0.60rem',
									width: '80%',
									height: '100%',
									marginLeft: '35px',
									animation: 'zoom-in-zoom-out 1s ease',
								}}
							>
								<center>
									<Card.Img
										variant="top"
										src={icon2}
										style={{ width: '45%', height: '100%' }}
									/>
								</center>
								<Card.Body>
									<Card.Title>
										{' '}
										<center>Electrician</center>
									</Card.Title>
								</Card.Body>
							</Card>
						</NavLink>
					</Col>{' '}
					<Col>
						<NavLink
							to="/PaintingPage"
							style={(isActive) => ({
								color: isActive ? '#ffb347' : 'black',
							})}
						>
							<Card
								style={{
									borderRadius: '0.60rem',
									width: '80%',
									height: '100%',
									marginLeft: '35px',
								}}
							>
								<center>
									<Card.Img
										variant="top"
										src={icon3}
										style={{ width: '40%', height: '100%' }}
									/>
								</center>
								<Card.Body>
									<Card.Title>
										{' '}
										<center>Painter</center>
									</Card.Title>
								</Card.Body>
							</Card>
						</NavLink>
					</Col>
				</Row>
				<br /> <br />
				<Link to="/service">
					<center>
						<Button variant="warning" style={{ color: 'black' }}>
							All Services
						</Button>{' '}
					</center>
				</Link>
			</div>
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

	.section:hover {
		transition: all 0.3s ease-in-out;
		background: red;
		color: white;
	}

	.btn {
		display: block;
		width: 148px;
		margin: 0 auto;
		text-align: center;
	}

	@media (min-width: 576px) {
		.featured {
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		}
	}
	.card:hover{
	
		transform: scale(1.2);
		transition-duration: 0.5s;
		box-shadow: 10px 10px 5px grey;
	}
`;



export default FeaturedProducts;
