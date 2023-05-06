import React from "react";
import Header from "../Pages/Home/Shared/Header/Header";
import Footer from "../Pages/Home/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Pages/Home/Shared/LeftNav/LeftNav";
import RigthNav from "../Pages/Home/Shared/RightNav/RightNav";
import RightNav from "../Pages/Home/Shared/RightNav/RightNav";
import Category from "../Pages/Home/Category/Category";
import NavigationBar from "../Pages/Home/NavigatioBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
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

export default Main;
