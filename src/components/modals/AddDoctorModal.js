import React, { Component } from 'react';
import ReactFilestack from 'filestack-react'
import axios from 'axios';
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
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class AppointmentModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      specialist: "",
      cost: "",
      from: "",
      until: "",
      days: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.addDoctor = this.addDoctor.bind(this)
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleCityChange(days) {
    this.setState({ days });
    console.log(`Selected: ${days.label}`);
  }
  addDoctor(data) {
    let days = []
    this.state.days.map(item => {
      days.push(item.value)
    })
    let toggle = this.props.toggle
    let clinic = this.props.klinik_id
    axios.post(process.env.REACT_APP_URL+'/doctors',{
      name: this.state.name,
      specialist: this.state.specialist,
      photo: data.filesUploaded[0].url,
      cost: this.state.cost,
      time: {
        days: days,
        from: this.state.from,
        until: this.state.until
      },
      clinic: clinic
    }).then(data => {
      if(data.data.text==='error'){
        alert('Error')
        console.log(data);
      } else {
        console.log(data);
        toggle()
      }
    }).catch(err => console.log(err))
  }
  render(){
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Add Doctor</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Label>Specialist</Label>
                <Input
                  type="text"
                  name="specialist"
                  value={this.state.specialist}
                  onChange={this.handleChange}
                  placeholder="Specialist" />
              </FormGroup>
              <FormGroup>
                <Label>Cost</Label>
                <Input
                  type="text"
                  name="cost"
                  value={this.state.cost}
                  onChange={this.handleChange}
                  placeholder="Cost" />
              </FormGroup>
              <FormGroup>
                <Label>Practical time</Label>
                <Input
                  type="time"
                  name="from"
                  value={this.state.from}
                  onChange={this.handleChange}
                  placeholder="time placeholder" />
              </FormGroup>
              <FormGroup>
                <Label>Until</Label>
                <Input
                  type="time"
                  name="until"
                  value={this.state.until}
                  onChange={this.handleChange}
                  placeholder="time placeholder" />
              </FormGroup>
              <FormGroup>
                <Label>Days</Label>
                <Select
                  name="days"
                  value={this.state.days}
                  onChange={this.handleCityChange}
                  multi
                  options={[
                    { value: 'Sun', label: 'Sunday' },
                    { value: 'Mon', label: 'Monday' },
                    { value: 'Tue', label: 'Tuesday' },
                    { value: 'Wed', label: 'Wednesday' },
                    { value: 'Thu', label: 'Thursday' },
                    { value: 'Fri', label: 'Friday' },
                    { value: 'Sat', label: 'Saturday' },
                  ]}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.toggle}>Cancel</Button>{' '}
            <ReactFilestack
              apikey="Au1xZ8DZ6TuCW4NtwiEbQz"
              buttonText="Next"
              option={{ maxFiles: 1, accept: 'image/*' }}
              buttonClass="btn btn-success"
              onSuccess={this.addDoctor} />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
};

export default AppointmentModal;
