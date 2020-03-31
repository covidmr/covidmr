import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';

class Prevention extends React.Component {
    
    render() {
        return(
            <div className="mt-5 ml-5 mr-5"><br/>
                <CardDeck className="ml-auto mr-auto" style={{width: '50rem'}}>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={require('../Assets/maison.png')} />
                        <Card.Body>
                        <Card.Title>Restez Chez Vous</Card.Title>
                        <Card.Text>
                            Restez chez-vous pour vous vous protéger et sauver des vies.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-2" style={{width: '18rem'}}>
                        <Card.Img variant="top" src={require('../Assets/lavage.png')} />
                        <Card.Body>
                        <Card.Title>Mains</Card.Title>
                        <Card.Text>
                            Lavez-vous très régulièrement les mains.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={require('../Assets/coude.png')} />
                        <Card.Body>
                        <Card.Title>Coude</Card.Title>
                        <Card.Text>
                            Toussez ou éternuez dans votre coude ou dans un mouchoir.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <CardDeck className="ml-auto mr-auto mt-2 mb-5" style={{width: '50rem'}}>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={require('../Assets/mains.png')} />
                        <Card.Body>
                        <Card.Title>Salutation</Card.Title>
                        <Card.Text>
                            Saluez sans se serrer la main.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-2" style={{width: '18rem'}}>
                        <Card.Img variant="top" src={require('../Assets/mouchoir.png')} />
                        <Card.Body>
                        <Card.Title>Mouchoir</Card.Title>
                        <Card.Text>
                            Utilisez un mouchoir à usage unique et jetez-le
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={require('../Assets/distance.png')} />
                        <Card.Body>
                        <Card.Title>Distance sociale</Card.Title>
                        <Card.Text>
                            Pour tenir la maladie à distance, restez à plus d’un mètre de distance les uns des autres.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br/>
            </div>
        );
    }
}

export default Prevention;