import React from 'react';
import styled from 'styled-components';
import Image from '../assets/booking-confirmation.gif';

const BookingConfirmPage = () => {
	return (
		<Wrapper className="page-100">
			<section>
				<h1>
					Thanks for booking a service, we will get back to you shortly!{' '}
					<img src={Image} alt="confirmation-png" />
				</h1>
			</section>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	background: var(--clr-primary-5);
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
	.img {
		width: 10px;
	}
`;

export default BookingConfirmPage;
