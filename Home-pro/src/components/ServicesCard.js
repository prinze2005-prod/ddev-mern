import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import icon1 from '../assets/icon1.jpg';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.jpg';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.jpg';
import icon6 from '../assets/icon6.jpg';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
export default function ServicesCard() {
	return (
		<ServiceContainer>
		<div className="container" style={{marginTop: "15px"}}>
			<br />
			<center>
				
				<Row xs={1} md={3} className="g-4">
					<Col>
						<NavLink
							to="/Plumbing"
							style={(isActive) => ({
								color: isActive ? '#ffb347' : 'black',
							})}
						>
							<Card
								href=""
								style={{
									borderRadius: 20 + 'px',
									width: '80%',
									height: '100%',
								}}
							>
								<center>
									<Card.Img
										variant="top"
										src={icon1}
										style={{ width: '38%', height: '100%', borderRadius: 20 + 'px' }}
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
									borderRadius: 20 + 'px',
									width: '80%',
									height: '100%',
								}}
							>
								<center>
									<Card.Img
										variant="top"
										src={icon2}
										style={{ width: '45%', height: '100%' , borderRadius: 20 + 'px'}}
									/>
								</center>
								<Card.Body>
									<Card.Title>
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
									borderRadius: 20 + 'px',
									width: '80%',
									height: '100%',
								}}
							>
								<center>
									<Card.Img
										variant="top"
										src={icon3}
										style={{ width: '40%', height: '100%', borderRadius: 20 + 'px' }}
									/>
								</center>
								<Card.Body>
									<Card.Title>
										{' '}
										<center>Painting</center>
									</Card.Title>
								</Card.Body>
							</Card>
						</NavLink>
					</Col>{' '}
					<Col>
						<NavLink
							to="/Heating"
							style={(isActive) => ({
								color: isActive ? '#ffb347' : 'black',
							})}
						>
							<Card
								style={{
									borderRadius: 20 + 'px',
									width: '80%',
									height: '100%',
								}}
							>
								<center>
									<Card.Img
										variant="top"
										src={icon4}
										style={{ width: '60%', height: '100%', borderRadius: 20 + 'px', }}
									/>
								</center>
								<Card.Body>
									<Card.Title>
										{' '}
										<center>Heating and Cooling</center>
									</Card.Title>
								</Card.Body>
							</Card>
						</NavLink>
					</Col>{' '}
					<Col>
						<NavLink
							to="/Handyman"
							style={(isActive) => ({
								color: isActive ? '#ffb347' : 'black',
							})}
						>
							<Card
								style={{
									borderRadius: 20 + 'px',
									width: '80%',
									height: '100%',
								}}
							>
								<center>
									<Card.Img
										variant="top"
										src={icon5}
										style={{ width: '55%', height: '100%', borderRadius: 20 + 'px' }}
									/>
								</center>
								<Card.Body>
									<Card.Title>
										{' '}
										<center>Handyman Services</center>
									</Card.Title>
								</Card.Body>
							</Card>
						</NavLink>
					</Col>{' '}
					<Col>
						<NavLink
							to="/Appliances"
							style={(isActive) => ({
								color: isActive ? '#ffb347' : 'black',
							})}
						>
							<Card
								style={{
									borderRadius: 20 + 'px',
									width: '80%',
									height: '100%',
								}}
							>
								<center>
									<Card.Img
										variant="top"
										src={icon6}
										style={{ width: '35%', height: '100%', borderRadius: 20 + 'px' }}
									/>
								</center>
								<Card.Body>
									<Card.Title>
										{' '}
										<center>Appliances Repair</center>
									</Card.Title>
								</Card.Body>
							</Card>
						</NavLink>
					</Col>
				</Row>
				
			</center>
		</div>
		</ServiceContainer>
	);
}
const ServiceContainer = styled.div`
.card:hover{
	
	transform: scale(1.2);
    transition-duration: 0.5s;
	box-shadow: 10px 10px 5px grey;
}
`;
