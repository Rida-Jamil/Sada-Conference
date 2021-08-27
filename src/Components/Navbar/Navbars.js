import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css';


const Navbars = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Sada-Event</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars;