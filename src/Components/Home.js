import React from 'react';
import {Image, Card, Container, Row, ProgressBar} from 'react-bootstrap';
import * as firebase from 'firebase/app';
import {firebaseConfig as database} from '../Config/firebaseConfig'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infected: 0,
            cured: 0,
            deceased: 0,
            onTreatment: 0,
            inQuarantine: 0,
            update_date: 0
        };
    }

    /**
     * 0. cured
     * 1. deceased
     * 2. inQuanrantine
     * 3. infected
     * 4. onTreatment
     * 5. update_date
    **/
    loadCasesData = () => {
        let dataList = database
            .ref().child('/cases_data');

        dataList.on('value', snapshot => {
            let data = snapshot.val();
            let casesData = Object.values(data);
            this.setState({
                infected: casesData[3],
                cured: casesData[0],
                deceased: casesData[1],
                onTreatment: casesData[4],
                inQuarantine: casesData[2],
                update_date: casesData[5]
            });
        });
    }

    componentDidMount() {
        this.loadCasesData();
        console.log(process.env.REACT_APP_DATABASE_URL, 1);
    }
    
    render() {
        return(
            <div className="HomeContainer pb-5">
                <Image src={require("../Assets/corona.jpg")} height="250" className="mt-5" fluid />
                <marquee behavior="slide" direction="left" className="text-light">
                    21/03/2020 : Le cas de la mauritanienne suspectée entrée de l’Espagne est négatif
                    20/03/2020 : La clôture de l’atelier de formation organisé et lancé il y’a trois jours par le ministère de la santé au bénéfice des responsables sanitaires de l’intérieur
                    : Le ministre de la santé affirme que le laboratoire national est équipé pour effectuer les examens médicaux en toute situation
                    19/03/2020 : couvre-feu et fermeture de tous les restaurants et cafés
                    : Le Président de la République : La situation sanitaire est sous contrôle et l’efficacité de l’action du gouvernement sera fonction du degré de responsabilité et d’engagement de chaque citoyen
                    10/03/2020 : Questions fréquentes sur le COVID-19 et observations des mesures de précaution pour eviter l’infection
                    </marquee>

                <Container className="mb-3 mt-2"><Row>
                    <Card border="light" style={{ backgroundColor: '#2b5f9e', width: '16rem' }} className="ml-auto mr-auto mb-2">
                        <Card.Header className="text-center text-light">Infectés</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-center text-light">{this.state.infected}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border="light" style={{ backgroundColor:'#158a40', width: '16rem' }} className="ml-auto mr-auto mb-2">
                        <Card.Header className="text-center text-light">Guéris</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-center text-light">{this.state.cured}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border="light" style={{ backgroundColor:'#a80d0d', width: '16rem' }} className="ml-auto mr-auto mb-2">
                        <Card.Header className="text-center text-light">Décès</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-center text-light">{this.state.deceased}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border="light" style={{ backgroundColor:'light', width: '16rem' }} className="ml-auto mr-auto mb-2">
                        <Card.Header className="text-center">Sous traitement</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-center text-dark">{this.state.onTreatment}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                    </Card>

                </Row></Container>
            
                    <Card border="light" style={{ backgroundColor:'light', width: '16rem' }} className="ml-auto mr-auto">
                        <Card.Header className="text-center">Sous quarantaine</Card.Header>
                        <Card.Body>
                        <Card.Title className="text-center text-dark">{this.state.inQuarantine}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <p className="text-left text-light font-italic ml-3 Update-date">Mise à jour: {this.state.update_date}</p>
                    <br/>
            </div>
        );
    }
}

export default Home;