import React from 'react';
import styled from 'styled-components';
import Image from '../assets/plumbing.jpg';
import { NavLink } from 'react-router-dom';

const Plumbing = () => {
	return (
		<main>
			<PaintTitle style={{ padding: '0.25rem' }}>
				<h2>Plumbing</h2>
			</PaintTitle>
			<Wrapper className="page section section-center">
				<img src={Image} alt="painting" />
				<article>
					<div className="title">
						<h2>Plumbing Content</h2>
						<div className="underline"></div>
					</div>
					<p>
					Plumbers in Calgary can rough in plumbing for new construction or major home renovations, ensuring your plumbing system is working properly, efficiently and to code. You can also hire a Calgary plumber for plumbing emergencies. They’ll fix the problem before it turns into costly water damage and ensure your plumbing system is in good working order. The list below contains the best plumbers in Calgary. They have a proven reputation for exceptional customer service and quality workmanship.
					</p>
					<DefaultButton style={{ color: 'black', background: '#ffb347' }}>
						<NavLink
							to="/BookPlumber"
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

export default Plumbing;
