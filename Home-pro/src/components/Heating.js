import React from "react";
import styled from "styled-components";
import Image from "../assets/heating-cooling.jpg";
import { NavLink } from "react-router-dom";
import NewNav from "./NewNav";
const Heating = ({ user, handleLogout }) => {
  return (
    <main>
      <NewNav user={user} handleLogout={handleLogout}></NewNav>

      <Wrapper className="page section section-center">
        <img src={Image} alt="painting" />
        <article>
          <div className="title">
            <h2>Heating and cooling</h2>
            <div className="underline"></div>
          </div>
          <p>
            Calgary air conditioning companies can help keep your home cool and
            comfortable in the hot summer months. If you already have central
            air conditioning, it’s important to have it maintained regularly to
            keep it running at maximum efficiency and to help prevent the need
            for air conditioner repair. Hot Water Heater Installation &
            Replacement companies in Calgary. There are many reasons you may
            want to install a new water heater. New models are up to 20% more
            efficient and you can save on energy costs. Whether you’re looking
            for a new cooling system, maintenance or AC repair services, or want
            to replace your existing hot water tank heater with a tankless hot
            water heater or solar hot water heater you’ll find trusted and
            experienced experts for air conditioning in Calgary listed with
            HomePro
          </p>
          <DefaultButton style={{ color: "black", background: "#ffb347" }}>
            <NavLink
              to="/bookHeatCool"
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

export default Heating;
