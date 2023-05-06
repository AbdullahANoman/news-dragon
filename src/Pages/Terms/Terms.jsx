import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <Container>
                <h2>This is terms and condition pager</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum odio tempore blanditiis sint fuga earum quaerat? Assumenda maxime excepturi ducimus!</p>
                <Link to="/register">Register</Link>
            </Container>
        </div>
    );
};

export default Terms;