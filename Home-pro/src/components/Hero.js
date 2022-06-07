import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import landingPage from "../assets/landingPage.jpg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h2>
          The Quality you <strong>expect</strong>, <br />
          the service you <strong>deserve!</strong>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure
          quasi odit tenetur unde officiis repudiandae quod deserunt quia eum?
        </p>
        <Link className="btn hero-btn">
          <form class="d-flex" role="search">
            <input
              class="search"
              type="search"
              placeholder="Type a service..."
              aria-label="Search"
            />
            <button  class="btn-search" type="submit" style={{color: 'black'}}>
              Search
            </button>
          </form>
        </Link>
      </article>
      <article className="img-container">
        <img src={landingPage} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
   .search{
     position: relative;
    width: 350px; 
    height: 40px;
    border-color: transparent;
    border-radius: 5px;
    font-size: 18px;
    letter-spacing: 0.5px;
    font-weight: 100;
   }
   .btn-search{
    font-size: 16px;
     margin-left: 20px;
     color: white;
     border-color: transparent;
     background-color: #FF6544;
     width: 80px;
     height: 35px;
     border-radius: 5px;
   }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
