import React from 'react';
import {Card} from 'react-bootstrap';

class GreenNumber extends React.Component {
    
    render() {
        return(
            <div className="mt-5"><br/>
                <Card className="text-center text-light ml-auto mr-auto w-50" style={{backgroundColor: '#2b5f9e'}}>
                <Card.Header>Numéro vert</Card.Header>
                <Card.Body>
                    <Card.Text>
                    Veillez appeler le numéro ci-dessous en cas d'urgence
                    </Card.Text>

                    <br />
                    <h3 className="" style={{color: '#158a40'}}>1155</h3>
                </Card.Body>
                </Card>
            </div>
        );
    }
}

export default GreenNumber;