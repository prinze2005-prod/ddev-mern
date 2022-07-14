import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TechHeader = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/tech">Home</Link>
          {product && <Link to="/products">/ Service</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #ffb347;
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default TechHeader;
