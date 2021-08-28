import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbars = () => {
    return (
        <>
            <Router>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                                <Navbar.Brand as={Link} to="/" >Sada-Event</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                        <Nav.Link as={Link} to="/Home" > Home </Nav.Link>
                                        <Nav.Link as={Link} to="/About" > About </Nav.Link>
                                        <Nav.Link as={Link} to="/Contact" > Contact </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/Home">
                            <Home />
                        </Route>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/Contact">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
            </Router>


        </>
    )
}

export default Navbars;