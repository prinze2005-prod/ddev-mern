import React from 'react';
import styled from 'styled-components';
import Image from '../assets/login-confirmation.jpg';

const LoginConfirmPage = () => {
	return (
		<Wrapper className="page-100">
			<section>
				<h1>
					Thanks for joining Us, you have signed up successfully!{' '}
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
		font-size: 3rem;
	}
	h3 {
		text-transform: none;
		margin-bottom: 2rem;
	}
	.img {
		width: 10px;
		border-radius: 4px;
	}
`;

export default LoginConfirmPage;
