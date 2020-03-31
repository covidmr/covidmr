import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Home from '../Components/Home';
import Prevention from '../Components/Prevention';
import GreenNumber from '../Components/GreenNumber';
import About from '../Components/About';

class Navigation extends React.Component {

    render() {
        return(
            <div className="Nav-container">
                <Router>
                <Navbar collapseOnSelect expand="lg" className="Nav-bar" variant="dark" fixed="top">
                    <Navbar.Brand href="/">
                        <img
                            src={require("../Assets/logo.png")}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Mauritania-Travel logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
                            <Nav.Link as={Link} to="/prevention">Prévention</Nav.Link>
                            <Nav.Link as={Link} to="/numero-vert">Numéro Vert</Nav.Link>
                            <Nav.Link as={Link} to="/apropos">A propos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/prevention">
                            <Prevention />
                        </Route>
                        <Route exact path="/numero-vert">
                            <GreenNumber />
                        </Route>
                        <Route exact path="/apropos">
                            <About />
                        </Route>
                    </Switch>
                </Router>

                <Navbar className="Footer-bar" variant="dark" fixed="bottom">
                    <Navbar.Brand href="#home">
                        <img
                            src={require("../Assets/flag-mauritania.png")}
                            width="30"
                            height="20"
                            className="d-inline-block align-top"
                            alt="Mauritania-Travel logo"
                        />
                    </Navbar.Brand>
                    <p className="Copyright" float="right">&copy; 2020 - COVIDmr - Tous droits réservés </p>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
//{/* <Routes /> */}