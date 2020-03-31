import React from 'react';
import {Image, Card, Container, Row} from 'react-bootstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infected: 2
        };
    }
    
    render() { console.log(this.state.infected);
        return(
            <div className="HomeContainer">
                <Image src={require("../Assets/corona.jpg")} height="250" className="mt-5" fluid />

                <Container className="mb-3 mt-2"><Row>
                    <Card border="light" style={{ backgroundColor: '#2b5f9e', width: '16rem' }} className="ml-auto mr-auto mb-2">
                        <Card.Header className="text-center text-light">Infectés</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-center text-light">5</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border="light" style={{ backgroundColor:'#158a40', width: '16rem' }} className="ml-auto mr-auto mb-2">
                        <Card.Header className="text-center text-light">Guéris</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-center text-light">2</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border="light" style={{ backgroundColor:'#a80d0d', width: '16rem' }} className="ml-auto mr-auto mb-2">
                        <Card.Header className="text-center text-light">Décès</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-center text-light">1</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border="light" style={{ backgroundColor:'light', width: '16rem' }} className="ml-auto mr-auto mb-2">
                        <Card.Header className="text-center">Sous traitement</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-center text-dark">3</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                    </Card>

                </Row></Container>
            
                    <Card border="light" style={{ backgroundColor:'light', width: '16rem' }} className="ml-auto mr-auto">
                        <Card.Header className="text-center">Sous quarantaine</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-center text-dark">946</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <p className="text-left text-light font-italic ml-3 Update-date">Mise à jour: </p>
                    <br/>
            </div>
        );
    }
}

export default Home;