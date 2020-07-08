import React from 'react';
import {Accordion, Card, Button, Form} from 'react-bootstrap';
import axios from 'axios';

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            telephone: '',
            address: '',
            reportedAddress: '',
            message: '',
            sent: false,
            buttonText: 'Envoyer'
        }
    }

    formSubmit = (e) => {
        e.preventDefault()
      
        this.setState({ buttonText: 'En cours d\'envoi ...'});
      
        let data = {
            email: this.state.email,
            name: this.state.name,
            telephone: this.state.telephone,
            address: this.state.address,
            reportedAddress: this.state.reportedAddress,
            message: this.state.message
        }
        
        axios.post('https://covidmr-ae4a3.web.app/send_email', data)
        .then( res => { 
            console.log('Message envoyé');
            this.setState({ sent: true }, this.resetForm())})
        .catch( () => {
          console.log('Message non envoyé')
        })
    }

    resetForm = () => {
        this.setState({
            email: '',
            name: '',
            telephone: '',
            address: '',
            reportedAddress: '',
            message: '',
            buttonText: 'Message Envoyé'
        })
    }

    render() {
        return(
            <div className="mt-5 ml-5 mr-5 pb-5 text-light"><br/>
                <h4 className="text-center text-light">Signalement</h4>

                <Accordion defaultActiveKey="0" style={{backgroundColor: '#2b5f9e'}}>
                    <Card style={{backgroundColor: '#2b5f9e'}}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="text-light">
                            Se signaler
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0" style={{backgroundColor: 'white'}} className="text-dark">
                            <Card.Body>
                                <Form className=" Login-container">
                                    <Form.Group>
                                        <Form.Control
                                            value={this.state.email}
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            onChange={e => this.setState({ email: e.target.value})}
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control
                                            value={this.state.name}
                                            type="text"
                                            id="name"
                                            placeholder="Nom et prénom"
                                            onChange={e => this.setState({ name: e.target.value})}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control
                                            value={this.state.telephone}
                                            type="number"
                                            id="telephone"
                                            placeholder="Téléphone"
                                            onChange={e => this.setState({ telephone: e.target.value})}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            value={this.state.address}
                                            type="text"
                                            id="address"
                                            placeholder="Adresse"
                                            onChange={e => this.setState({ address: e.target.value})}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            as="textarea" rows="3"
                                            placeholder="Message"
                                            id="message"
                                            onChange={e => this.setState({ message: e.target.value})}
                                            required
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={this.formSubmit}>
                                        {this.state.buttonText}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{backgroundColor: '#2b5f9e'}}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1" className="text-light">
                            Signaler un cas suspect
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1" style={{backgroundColor: 'white'}} className="text-dark">
                            <Card.Body>
                            <Form className=" Login-container">
                                    <Form.Group>
                                        <Form.Control
                                            value={this.state.email}
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            onChange={e => this.setState({ email: e.target.value})}
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control
                                            value={this.state.name}
                                            type="text"
                                            id="name"
                                            placeholder="Nom et prénom"
                                            onChange={e => this.setState({ name: e.target.value})}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control
                                            value={this.state.telephone}
                                            type="number"
                                            id="telephone"
                                            placeholder="Téléphone"
                                            onChange={e => this.setState({ telephone: e.target.value})}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            value={this.state.address}
                                            type="text"
                                            id="address"
                                            placeholder="Adresse"
                                            onChange={e => this.setState({ address: e.target.value})}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            value={this.state.reportedAddress}
                                            type="text"
                                            id="address"
                                            placeholder="Son adresse"
                                            onChange={e => this.setState({ reportedAddress: e.target.value})}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            as="textarea" rows="3"
                                            placeholder="Message"
                                            id="message"
                                            onChange={e => this.setState({ message: e.target.value})}
                                            required
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={this.formSubmit}>
                                        {this.state.buttonText}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>

        )
    }
}

export default Report;