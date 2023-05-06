// import React from "react";
import React from "react";
import Header from "../Pages/Home/Shared/Header/Header";
import Footer from "../Pages/Home/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../Pages/Home/Shared/RightNav/RightNav";


const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
