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
                <Label>Nama</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label>Specialty</Label>
                <Input placeholder="with a placeholder" />
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
                  <Input type="checkbox" />{' '}
                  Sunday
                </Label>
                <br />
                <Label check>
                  <Input type="checkbox" />{' '}
                  Monday
                </Label>
                <br />
                <Label check>
                  <Input type="checkbox" />{' '}
                  Tuesday
                </Label>
                <br />
                <Label check>
                  <Input type="checkbox" />{' '}
                  Wednesday
                </Label>
                <br />
                <Label check>
                  <Input type="checkbox" />{' '}
                  Thursday
                </Label>
                <br />
                <Label check>
                  <Input type="checkbox" />{' '}
                  Friday
                </Label>
                <br />
                <Label check>
                  <Input type="checkbox" />{' '}
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
