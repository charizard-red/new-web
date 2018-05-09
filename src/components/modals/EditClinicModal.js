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
  }
  render(){
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Make Appointment</ModalHeader>
          <ModalBody>
  
             <Form>
              <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input
                  type="text"
                  name="title"
                  
                  onChange={this.handleChange}
                  placeholder="Insert name of your clinic" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  
                  onChange={this.handleChange}
                  placeholder="Phone" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Address</Label>
                <Input
                  type="textarea"
                  name="address"
                  
                  onChange={this.handleChange}
                  id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="select">City</Label>
                <Input type="select" name="city" onChange={this.handleChange} id="select">
                  <option value="depok">DEPOK</option>
                  <option value="bogor">BOGOR</option>
                  <option value="bekasi">BEKASI</option>
                  <option value="tanggerang">TANGERANG</option>
                  <option value="jakarta pusat">JAKARTA PUSAT</option>
                  <option value="jakarta selatan">JAKARTA SELATAN</option>
                  <option value="jakarta utara">JAKARTA UTARA</option>
                  <option value="jakarta timur">JAKARTA TIMUR</option>
                  <option value="jakarta barat">JAKARTA BARAT</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Postal Code</Label>
                <Input
                  type="text"
                  name="postal_code"
                  onChange={this.handleChange}
                  placeholder="Insert your postal code" />
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
