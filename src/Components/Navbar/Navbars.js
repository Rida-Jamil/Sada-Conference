import React from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';
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
                        </Container>
                    </Navbar>
                    
                    <div className="d-grid gap-2 nav-btn">
                        <Button variant="primary" size="lg" as={Link} to="/Home" >
                            Home button
                        </Button>
                        <Button variant="secondary" size="lg" as={Link} to="/About" >
                            About button
                        </Button>
                        <Button variant="secondary" size="lg" as={Link} to="/Contact" >
                            Contact button
                        </Button>
                    </div>
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