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
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Label>Specialist</Label>
                <Input type="text" placeholder="Specialist" />
              </FormGroup>
              <FormGroup>
                <Label>Cost</Label>
                <Input type="text" placeholder="Cost" />
              </FormGroup>
              <FormGroup>
                <Label>Practical time</Label>
                <Input type="time" placeholder="time placeholder" />
              </FormGroup>
              <FormGroup>
                <Label>Until</Label>
                <Input type="time" placeholder="time placeholder" />
              </FormGroup>
              <FormGroup check>
                <Label>Days</Label><br />
                <Label check>
                  <Input onChange={this.handleChange} type="checkbox" name="sun"/>{' '}
                  Sunday
                </Label>
                <br />
                <Label check>
                  <Input onChange={this.handleChange} type="checkbox" name="mon"/>{' '}
                  Monday
                </Label>
                <br />
                <Label check>
                  <Input onChange={this.handleChange} type="checkbox" name="tue"/>{' '}
                  Tuesday
                </Label>
                <br />
                <Label check>
                  <Input onChange={this.handleChange} type="checkbox" name="wed"/>{' '}
                  Wednesday
                </Label>
                <br />
                <Label check>
                  <Input onChange={this.handleChange} type="checkbox" name="thu"/>{' '}
                  Thursday
                </Label>
                <br />
                <Label check>
                  <Input onChange={this.handleChange} type="checkbox" name="fri"/>{' '}
                  Friday
                </Label>
                <br />
                <Label check>
                  <Input onChange={this.handleChange} type="checkbox" name="sat"/>{' '}
                  Saturday
                </Label>
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
