import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";

import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = ({ user, handleLogout }) => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      {/* {myUser ? (
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
			) : ( */}
      {/* if user is not logged in then there is login button */}
      {!user && (
        <a href="/login">
          <button type="button" className="auth-btn">
            Login <FaUserPlus />
          </button>
        </a>
      )}
      {/* else there are username and logout button */}
      {user && (
        <>
          <span>{user.username}</span>&nbsp;
          <button type="button" className="auth-btn" onClick={handleLogout}>
            Logout <FaUserMinus />
          </button>
        </>
      )}
      {/* )}  */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    align-items: center;
    background-color: #ffb347;
    border-color: transparent;
    border-radius: 5px;
    font-size: 1.2rem;
    width: 120px;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
  }
`;
export default CartButtons;
