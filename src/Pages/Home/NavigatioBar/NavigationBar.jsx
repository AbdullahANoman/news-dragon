import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../../AuthProvider/AuthProvider';

const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogout = ()=>{
        logOut();
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto d-flex justify-content-center gap-3 ">

            <Link className="text-decoration-none"  to="/">Home</Link>
            <Link className="text-decoration-none" to="/about">About</Link>
            <Link className="text-decoration-none" to="/career">Career</Link>
            
            
          </Nav>
          <Nav>
            
            {
                user && <Link><Button className="me-3 mb-5" variant="light">Profile</Button></Link>
            }
            
            {
                user ?  <Button onClick={handleLogout} className="me-3 mb-5" variant="light">Log Out</Button>:  <Link to="/login"><Button className="me-3 mb-5" variant="light">Log in</Button></Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavigationBar;