import React, { Component } from 'react';
import axios from 'axios'
import {
  Container,
  Row,
  Col,
  Jumbotron } from 'reactstrap';

import DoctorCard from '../components/cards/DoctorCard';
import ClinicDetailCard from '../components/cards/ClinicDetailCard';
import AppointmentModal from '../components/modals/AppointmentModal';
import AddDoctorModal from '../components/modals/AddDoctorModal';
import EditClinicModal from '../components/modals/EditClinicModal';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      doctorModal: false,
      editModal: false,
      doctor_data: {},
      klinik_id: this.props.match.params.id,
      owner: false,
      klinik_data: {
        doctors: []
      },
    };

    this.toggle = this.toggle.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleDoctor = this.toggleDoctor.bind(this);
  }

  componentWillMount() {
    axios.get(process.env.REACT_APP_URL+'/clinics/'+this.props.match.params.id)
    .then(data => {
      console.log(data.data.data);
      if(window.localStorage.user_id === data.data.data.user_id){
        this.setState({
          klinik_data: data.data.data,
          owner: true
        })
      } else {
        this.setState({
          klinik_data: data.data.data,
          owner: false
        })
      }
    }).catch(err => console.log(err))
  }

  toggle(data) {
    this.setState({
      modal: !this.state.modal,
      doctor_data: data
    });
  }

  toggleDoctor() {
    this.setState({
      doctorModal: !this.state.doctorModal
    });
  }

  toggleEdit() {
    this.setState({
      editModal: !this.state.editModal
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <ClinicDetailCard
              toggle={this.toggleDoctor}
              toggleEdit={this.toggleEdit}
              data={this.state.klinik_data}
              owner={this.state.owner}/>
          </Col>
          <Col xs="9">
            <Jumbotron fluid style={{padding: 15}}>
              <h1>{this.state.klinik_data.title}</h1>
              <p>{this.state.klinik_data.address}</p>
              <hr />
              <Row>
                {
                  this.state.klinik_data.doctors.map(data => {
                    return (
                      <Col>
                        <DoctorCard data={data}
                        toggle={this.toggle}
                      />
                    </Col>
                    )
                  })
                }
              </Row>
            </Jumbotron>
          </Col>
        </Row>
        <AddDoctorModal
          toggle={this.toggleDoctor}
          modal={this.state.doctorModal}
          klinik_id={this.state.klinik_id}
        />
        <EditClinicModal
          toggle={this.toggleEdit}
          klinik_id={this.state.klinik_id}
          modal={this.state.editModal} />
        {(this.state.doctor_data.time) ? (
          <AppointmentModal
            toggle={this.toggle}
            nama_klinik={this.state.klinik_data.title}
            doctor_data={this.state.doctor_data}
            modal={this.state.modal}
          />
        ) : (
          <div/>
        )}
      </Container>
    )
  }
}

export default Dashboard;
