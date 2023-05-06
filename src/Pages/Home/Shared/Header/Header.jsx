import React, { useContext } from "react";
import logo from "../../../../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationBar from "../../NavigatioBar/NavigationBar";

const Header = () => {
  

  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-center">Journalism Without Fear or Favour</p>
        
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <Container className="d-flex bg-light p-2">
      <Button className="me-3" variant="danger">Latest</Button>
        <Marquee speed={100} className="text-danger">
          I can be a React component, multiple React components, or just some
          text....I can be a React component, multiple React components, or just some
          text....
        </Marquee>
        
      </Container>
      
    </div>
  );
};

export default Header;
