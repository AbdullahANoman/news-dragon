import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      
      <Button className="d-block mb-2 w-75" variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
      <Button className="w-75" variant="outline-secondary"><FaGithub></FaGithub>Login With Github</Button>
      <h5 className="mt-2">Find Us On</h5>
      <ListGroup as="ul" className="mt-3">
      <ListGroup.Item as="li" >
        <FaFacebook ></FaFacebook> Facebook
      </ListGroup.Item>
      <ListGroup.Item as="li"><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item as="li" >
        <FaInstagram></FaInstagram> Instagram
      </ListGroup.Item>
      
    </ListGroup>
    <QZone></QZone>
    </div>
  );
};

export default RightNav;
