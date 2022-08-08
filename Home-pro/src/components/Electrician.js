import React from "react";
import styled from "styled-components";
import Image from "../assets/electricianNew.jpg";
import { NavLink } from "react-router-dom";

const Electrician = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={Image} alt="electrician" />
        <article>
          <div className="title">
            <h2>Electrician</h2>
            <div className="underline"></div>
          </div>
          <p>
            An electrician in Calgary has the experience and skills to properly
            and safely complete electrical jobs. DIY electrical work can be very
            dangerous and is not recommended. Certified Calgary electricians can
            plan, install and repair wiring in your home or business, ensuring
            all work is done to code and safely. The credible electrical
            companies in Calgary that are listed with HomePro have proven
            reputations for quality workmanship, competitive pricing and
            exceptional customer service.
          </p>
          <br></br>
          <DefaultButton style={{ color: "black", background: "#ffb347" }}>
            <NavLink
              to="/BookElectrician"
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

export default Electrician;
