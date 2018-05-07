import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter } from 'reactstrap';

class AppointmentModal extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Make Appointment</ModalHeader>
          <ModalBody>
            <p>Rp 50,000</p>
            <Form>
              <FormGroup>
                <Label for="date">Date</Label>
                <Input type="date" onChange={this.handleChange} name="date" id="date" />
              </FormGroup>
              <FormGroup>
                <Label for="select">Available Time</Label>
                <Input type="select" name="time" onChange={this.handleChange} id="select">
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.toggle}>Cancel</Button>{' '}
            <Button color="success" onClick={this.props.toggle}>Make Appointment</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
};

export default AppointmentModal;
