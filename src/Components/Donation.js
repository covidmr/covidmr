import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

class Donation extends React.Component {

    render() {
        return(
            <div className="mt-5 ml-5 mr-5 pb-5 text-light"><br/>
                <h4 className="text-center text-light">Donation</h4>

                <Accordion defaultActiveKey="0" style={{backgroundColor: '#2b5f9e'}}>
                    <Card style={{backgroundColor: '#2b5f9e'}}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="text-light">
                            Effectuer un don
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0" style={{backgroundColor: 'white'}} className="text-dark">
                            <Card.Body>
                                <Accordion defaultActiveKey="0" style={{backgroundColor: '#2b5f9e'}}>
                                    <Card style={{backgroundColor: '#2b5f9e'}}>
                                        <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="text-light">
                                            Effectuer un virement bancaire
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0" style={{backgroundColor: 'white'}} className="text-dark">
                                            <Card.Body>
                                                En construction
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card style={{backgroundColor: '#2b5f9e'}}>
                                        <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1" className="text-light">
                                            Effectuer un don alimentaire  
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1" style={{backgroundColor: 'white'}} className="text-dark">
                                            <Card.Body>
                                            En construction
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{backgroundColor: '#2b5f9e'}}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1" className="text-light">
                            Effectuer une demande d'aide
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1" style={{backgroundColor: 'white'}} className="text-dark">
                            <Card.Body>
                            En construction
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>

        )
    }
}

export default Donation;