import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';

import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

const CartButtons = () => {
	const { closeSidebar } = useProductsContext();
	const { total_items, clearCart } = useCartContext();
	const { loginWithRedirect, myUser, logout } = useUserContext();
	return (
		<Wrapper className="cart-btn-wrapper">
			{myUser ? (
				<button
					type="button"
					className="auth-btn"
					onClick={() => {
						clearCart();
						localStorage.removeItem('user');
						logout({ returnTo: window.location.origin });
					}}
				>
					Logout <FaUserMinus />
				</button>
			) : (
				<a href="/login">
					<button type="button" className="auth-btn">
						Login <FaUserPlus />
					</button>
				</a>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	width: 225px;
	padding: 26px;
	padding-top: 0.6rem;
	margin: 6rem auto;
	border-radius: 0.6rem;

	.auth-btn {
		align-items: center;
		background-color: #ffb347;
		border-color: transparent;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
		color: var(--clr-grey-1);
		letter-spacing: var(--spacing);
		margin: 4rem auto;
		display: block;
		width: 100px;
	}
`;
export default CartButtons;
