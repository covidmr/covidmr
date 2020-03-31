import React from 'react';
import {Card} from 'react-bootstrap';

class About extends React.Component {
    
    render() {
        return(
            <div className="mt-5"><br/>
                <Card className="text-center text-light ml-auto mr-auto w-50" style={{backgroundColor: '#2b5f9e'}}>
                <Card.Header>COVIDmr</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Contact <br/>
                        E-mail: covid19mr@gmail.com
                    </Card.Text>

                    <br />
                    <p className="font-italic">Stats et prévention sur le CoronaVirus</p>
                </Card.Body>
                </Card>
            </div>
        );
    }
}

export default About;