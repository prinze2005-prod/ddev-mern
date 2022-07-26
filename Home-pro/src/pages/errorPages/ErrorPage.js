import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
	return (
		<Wrapper className="page-100">
			<section>
				<iframe src="https://giphy.com/embed/F7yLXA5fJ5sLC" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-it-crowd-chris-odowd-F7yLXA5fJ5sLC"></a></p>
			
				<Link to="/" className="btn">
					back home
				</Link> 
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
		font-size: 10rem;
	}
	h3 {
		text-transform: none;
		margin-bottom: 2rem;
	}
	.btn {
		background: var(--clr-white);
	}
`;

export default ErrorPage;
