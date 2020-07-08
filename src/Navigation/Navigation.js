import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Nav, Navbar, Modal, Button, Form } from 'react-bootstrap';
import * as firebase from 'firebase/app';
import Home from '../Components/Home';
import Prevention from '../Components/Prevention';
import GreenNumber from '../Components/GreenNumber';
import Donation from '../Components/Donation';
import Map from '../Components/Map';
import Report from '../Components/Report';
import About from '../Components/About';
import Admin from '../BackEnd/Admin';

// import withFirebaseAuth from 'react-with-firebase-auth'
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from '../API/FirebaseConfig';

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//     googleProvider: new firebase.auth.GoogleAuthProvider(),
// }

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            user: '',
            auth: false,
            showModal: true,
            showAlert: false,
        };
        this.email = React.createRef();
        this.password = React.createRef();
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('user logged in');
                this.setState({auth: true});
            } else {
                this.setState({showModal: true});
            }
        });
        return <Redirect to={{pathname: '/'}} />
    }

    handleClose = () => {
        this.setState({showModal: false});
    }

    handleInputChange = () => {
        const email = this.email.current.value;
        const password = this.password.current.value;
        this.setState({email, password});
    }

    login = () => {
        const email = this.email.current.value;
        const password = this.password.current.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {console.log(res.user );this.setState({auth: true}); return <Redirect to={{pathname: '/admin'}}/>})
            .catch(err => {console.log(err.code, err.message); } );
    }

    logOut = () => {
        return firebase.auth().signOut()
            .then(() => {console.log('disconnected !'); this.setState({auth: false, showAlert: true});})
            .catch((err) => {console.log(err); });
    }

    handleModal = () => {
        //if(!this.state.auth)
        return(
        <Modal show={this.state.showModal} onHide={this.handleClose} animation={true}>
            <Modal.Header closeButton>
            <Modal.Title>Connexion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className=" Login-container">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email" 
                            placeholder="Email"
                            ref={this.email}
                            // onChange={() => this.handleInputChange()}
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Mot de passe"
                            ref={this.password}
                            // onChange={() => this.handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={() => {this.login()}}>
                        Se Connecter
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
        );
    }

    render() {
        console.log(this.state.email, this.state.password, this.state.auth);

        const ProtectedRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} 
                render={(props) => (
                this.state.auth === true ? 
                <Route exact path="/admin">
                    <Admin />
                </Route> :
                <div className="mt-5"><br />
                    {this.handleModal()}
              </div>  
            )} />
        );
        return(
            <div className="Nav-container">
                <Router>
                <Navbar collapseOnSelect expand="lg" className="Nav-bar" variant="dark" fixed="top">
                    <Navbar.Brand as={Link} to="/">
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
                            <Nav.Link as={Link} to="/carte">Carte</Nav.Link>
                            <Nav.Link as={Link} to="/signaler">Signaler</Nav.Link>
                            <Nav.Link as={Link} to="/dons">Dons</Nav.Link>
                            <Nav.Link as={Link} to="/numero-vert">Numéro vert</Nav.Link>
                            <Nav.Link as={Link} to="/apropos">A propos</Nav.Link>
                            {this.state.auth ?
                                <Nav.Link as={Link} to="#" className="text-danger" onClick={() => this.logOut()}>Se déconnecter</Nav.Link>
                            : <p></p>}
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
                        <Route exact path="/carte">
                            <Map />
                        </Route>
                        <Route exact path="/signaler">
                            <Report />
                        </Route>
                        <Route exact path="/dons">
                            <Donation />
                        </Route>
                        <Route exact path="/apropos">
                            <About />
                        </Route>
                        <ProtectedRoute exact path="/admin">
                            {/* <Admin /> */}
                        </ProtectedRoute>
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
                    <p className="Copyright" float="right">&copy; 2020 - COVIDmr - Tous droits réservés - <a href="https://diamamadou.github.io">MamsO</a> on the keyboard</p>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
