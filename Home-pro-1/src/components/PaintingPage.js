import React from 'react';
import styled from 'styled-components';
import Image from '../assets/painting.jpg';
import { NavLink } from 'react-router-dom';

const PaintingPage = () => {
	return (
		<main>
			<PaintTitle style={{ padding: '0.25rem' }}>
				<h2>Painting</h2>
			</PaintTitle>
			<Wrapper className="page section section-center">
				<img src={Image} alt="painting" />
				<article>
					<div className="title">
						<h2>Painting Content</h2>
						<div className="underline"></div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
						quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
						voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
						tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
						doloribus veritatis dolorem unde ipsum, voluptatibus totam.
						Explicabo, quas libero! Laborum incidunt minima consequatur ratione?
					</p>
					<DefaultButton style={{ color: 'black', background: '#ffb347' }}>
						<NavLink
							to="/Booking"
							style={(isActive) => ({
								color: isActive ? '#ffb347' : 'black',
							})}
						>
							{' '}
							<center>Book here</center>
						</NavLink>
					</DefaultButton>
				</article>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
		transition: all 0.5s ease-in-out;
		&:hover {
			box-shadow: 0 3px 3px #222;
			cursor: pointer;
		}
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}

	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;
const PaintTitle = styled.div`
	background: var(--clr-primary-5);
	display: flex;
	justify-content: center;
	text-align: center;
`;
const DefaultButton = styled.button`
	background: var(--clr-primary-5);
	color: #fff;
	border: none;
	border-radius: 0.25rem;
	cursor: pointer;
	text-transform: capitalize;
	padding: 0.25rem;
	display: block;
	width: 200px;
	margin: 1rem left;
`;

export default PaintingPage;
