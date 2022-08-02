import React from "react";
import styled from "styled-components";
import Image from "../assets/handi-man.jpg";
import { NavLink } from "react-router-dom";

const Handyman = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={Image} alt="handi-man" />
        <article>
          <div className="title">
            <h2>Handyman</h2>
            <div className="underline"></div>
          </div>
          <p>
            Calgary handyman services include home repair, maintenance and minor
            home renovations. These jacks-of-all-trades can assist with a wide
            range of projects and repairs from installing flooring, patching
            drywall and bathroom remodels to fixing sticky doors or a leaky
            faucet. To hire a handyman in Calgary, browse the trustworthy
            companies/individuals contracted with HomePro. Whether the job is
            big or small, they will get your home improvement jobs done
            properly, with quality workmanship and will deliver an exceptional
            customer experience.
          </p>
          <DefaultButton style={{ color: "black", background: "#ffb347" }}>
            <NavLink
              to="/BookHandyman"
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

export default Handyman;
