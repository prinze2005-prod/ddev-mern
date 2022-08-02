import React from "react";
import styled from "styled-components";
import Image from "../assets/painterNew.jpg";
import { NavLink } from "react-router-dom";
import NewNav from "./NewNav";
const PaintingPage = ({ user, handleLogout }) => {
  return (
    <main>
      <NewNav user={user} handleLogout={handleLogout}></NewNav>

      <Wrapper className="page section section-center">
        <img src={Image} alt="painting" />
        <article>
          <div className="title">
            <h2>Painting</h2>
            <div className="underline"></div>
          </div>
          <p>
            Painters in Calgary have the experience and skills to produce
            beautiful, seamless results on your home renovation. Painting your
            home’s interior or exterior is actually the easiest and most
            affordable way to completely upgrade the look of your home. These
            house painters in Calgary are professional and knowledgeable, have
            the right tools and use high quality products that will give you a
            flawless finished product. If you’re looking for painting
            contractors in Calgary, contact one of the trustworthy companies
            listed with HomePro.
          </p>
          <DefaultButton style={{ color: "black", background: "#ffb347" }}>
            <NavLink
              to="/BookPainter"
              style={(isActive) => ({
                color: isActive ? "#ffb347" : "black",
              })}
            >
              {" "}
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
