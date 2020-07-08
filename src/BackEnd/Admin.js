import React from 'react';
import {Button, Table, Form} from 'react-bootstrap';
import { firebaseConfig as database } from '../Config/firebaseConfig';
import { updateCasesData } from '../API/CasesData';
import { Modal } from '@material-ui/core';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            casesData: null,
            infected: 0,
            cured: 0,
            deceased: 0,
            onTreatment: 0,
            inQuarantine: 0,
            showConfirmModal: false,
        }
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
                inQuarantine: casesData[2]
            });
        });
    }

    componentDidMount() {
        this.loadCasesData();
        this.setState({showConfirmModal: true});
    }

    handleChange = (event) => {
        let value = event.target.value;
        let id = event.target.id;

        switch (id) {
            case 'infected':
                this.setState({infected: value});
                break;
            case 'cured':
                this.setState({cured: value});
                break;
            case 'deceased':
                this.setState({deceased: value});
                break;
            case 'onTreatment':
                this.setState({onTreatment: value});
                break;
            case 'inQuarantine':
                this.setState({inQuarantine: value});
                break;
            default:
                break;
        }
    } 

    handleClose = () => {
        this.setState({showConfirmModal: false});
    }

    openModal = () => {
        this.handleModal();
    }

    handleModal = () => {
        //this.setState({showConfirmModal: true});
        // <Modal show={this.state.showConfirmModal} onHide={this.handleClose} animation={false}>
        //     <Modal.Header closeButton>
        //     <Modal.Title>Connexion</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //         Voulez-Vous confirmer la modification des données ?
        //     </Modal.Body>
        //     <Modal.Footer>
        //         <Button variant="secondary">Annuler</Button>
        //         <Button variant="primary" onClick={this.updateCasesData}>Confirmer</Button>
        //     </Modal.Footer>
        // </Modal>
        //);
    }

    updateCasesData = () => {
        const infected = this.state.infected;
        const cured = this.state.cured;
        const deceased = this.state.deceased;
        const onTreatment = this.state.onTreatment;
        const inQuarantine = this.state.inQuarantine;

        const date = new Date().getDate();
        const month = new Date().getMonth()+1;
        const year = new Date().getFullYear();
        const hours = new Date().getHours();
        const min = new Date().getMinutes();

        const update_date = date + '/' + month + '/' + year + ' ' + hours + 'h' + min;

        updateCasesData(infected, cured, deceased, onTreatment, inQuarantine, update_date);
        window.location.reload();
    }

    render() {
        return(
            <div className="mt-5 ml-5 mr-5"><br/>
                <h3 className="text-center text-light">Administration</h3>

                <h6 className="ml-5 text-light">Modification des données</h6>
                <div>
                    <Form className='form-inline text-center'>
                    <Table striped bordered hover size="sm" className="text-light text-center">
                        <thead>
                            <tr>
                                <th>Type de Cas</th>
                                <th>Nombre de cas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Infectés</td>
                                <td>
                                    <Form.Control
                                        value={this.state.infected}
                                        className="w-50 text-center"
                                        type="number"
                                        id="infected"
                                        onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Guéris</td>
                                <td>
                                    <Form.Control
                                        value={this.state.cured}
                                        className="w-50 text-center"
                                        type="number"
                                        id="cured"
                                        onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Dècés</td>
                                <td>
                                    <Form.Control
                                        value={this.state.deceased}
                                        className="w-50 text-center"
                                        type="number"
                                        id="deceased"
                                        onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Sous traitement</td>
                                <td>
                                    <Form.Control
                                        value={this.state.onTreatment}
                                        className="w-50 text-center"
                                        type="number"
                                        id="onTreatment"
                                        onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Sous quarantaine</td>
                                <td>
                                    <Form.Control
                                        value={this.state.inQuarantine}
                                        className="w-50 text-center"
                                        type="number"
                                        id="inQuarantine"
                                        onChange={this.handleChange} />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                        <Button variant="primary" onClick={() => {this.updateCasesData()}}>Enregistrer les modifications</Button>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Admin;