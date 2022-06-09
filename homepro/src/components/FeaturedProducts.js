import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.jpg";
import { Button, Form, Dropdown } from "react-bootstrap";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured services</h2>
        <div className="underline"></div>
      </div>
<br></br>
<div className="container">
      <Row xs={1} md={3} className="g-4">
      <Col>
          <Card href="" style={{borderRadius: 20 + 'px', width:"80%", height:"100%", marginLeft: "50px"}}>
           <center><Card.Img variant="top" src={icon1} style={{ width:"35%", height:"100%"}} /></center>
            <Card.Body>
              <Card.Title>
                <center>Plumbing</center>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{borderRadius: 20 + 'px', width:"80%", height:"100%", marginLeft: "35px"}}>
          <center><Card.Img variant="top" src={icon2} style={{ width:"45%", height:"100%"}} /></center>
            <Card.Body>
              <Card.Title>
                <center>Electrician</center>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>  <Col>
          <Card style={{borderRadius: 20 + 'px', width:"80%", height:"100%", marginLeft: "15px"}}>
          <center><Card.Img variant="top" src={icon3} style={{ width:"40%", height:"100%"}} /></center>
            <Card.Body>
              <Card.Title>
                <center>Painter</center>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col> 
          </Row>
          <br/> <br/>
          <Link to="/service">
          <center><Button variant="primary" style={{ color: "black"}}>
          All Services
        </Button>{" "} </center>
          </Link>
</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
