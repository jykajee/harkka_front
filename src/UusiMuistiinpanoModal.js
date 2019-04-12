import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UusiMuistiinpanoModal extends Component {
    constructor(props){
        super(props);
        this.state={
            otsikko:"",
            sisalto:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        this.props.lisaaMP(this.state);
        event.preventDefault();
        this.setState({otsikko:"",sisalto:""});
    }


    render() {
        
        //debugger;
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <ModalHeader closeButton>
                    <ModalTitle id="contained-modal-title-vcenter">
                        Lisää muistiinpanoja
                    </ModalTitle>
                </ModalHeader>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="uusiOtsikko">
                            <Form.Label>Otsikko</Form.Label>
                            <Form.Control name="otsikko" onChange={this.handleChange} type="textarea" rows="1" />
                        </Form.Group>
                        <Form.Group controlId="uusiSisalto">
                            <Form.Label>Sisältö</Form.Label>
                            <Form.Control name="sisalto"  onChange={this.handleChange} type="textarea" rows="3" />                            
                        </Form.Group>
                        <Button variant="primary" type="submit">Lisää muistiinpano</Button>
                    </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                    onClick={this.props.onHide}>Nyt riittää</Button>
                </Modal.Footer>
            
            </Modal>
        )
    }
}

export default UusiMuistiinpanoModal;