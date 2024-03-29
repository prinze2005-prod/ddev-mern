/**
 * @author Saksham Ohri, Gao Liu, Eze Adiele
 * @description This page is about us page of the Home Pro with a short information and an image
*/
import React from "react";
import styled from "styled-components";
import { PageHero } from "../../../components";
import aboutImg from "../../../assets/hero-bcg-3.jpeg";

const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            We provide all our services are curated with the same care we would
            expect to have in our own homes. We offer wide variety of services
            you need to keep your home in tip-top shape. From general repairs to
            new installations to ongoing maintenance, your home can be your
            sanctuary with a little extra love.
          </p>
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
export default AboutPage;
