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
    this.state = {
      day: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.addAppointment = this.addAppointment.bind(this)
    this.setDay = this.setDay.bind(this)
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addAppointment() {
    console.log(this.state.day);
  }
  setDay(data) {
    this.setState({
      day: data
    })
  }
  componentWillMount() {
    this.setState({
      day: this.props.doctor_data.time.days[0]
    })
  }
  render(){
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>{this.props.nama_klinik}</ModalHeader>
          <ModalBody>
            <div>
              <b>Name: </b>{this.props.doctor_data.name}<br/>
              <b>Specialist: </b>{this.props.doctor_data.specialist}<br/>
              <b>Cost: </b>{this.props.doctor_data.cost}<br/>
              <b>Available Time: </b>{this.props.doctor_data.time.from} to {this.props.doctor_data.time.until}<br/>
              <hr/>
              <Form>
                <FormGroup>
                  <Label for="select">Day</Label>
                  <Input type="select" name="day" onChange={this.handleChange} value={this.state.day} id="select">
                    {this.props.doctor_data.time.days.map(item => (
                      <option value={item}>{item}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Form>
            </div>
            <hr/>
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
