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

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      doctorModal: false,
      klinik_id: this.props.match.params._id,
      owner: false,
      klinik_data: {
        name: 'Klinik Sehat',
        phone: '085811348633',
        address: 'GDC Alamanda A3/3',
        doctors: []
      },
    };

    this.toggle = this.toggle.bind(this);
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

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleDoctor() {
    this.setState({
      doctorModal: !this.state.doctorModal
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <ClinicDetailCard toggle={this.toggleDoctor} data={this.state.klinik_data} owner={this.state.owner}/>
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
                        <DoctorCard data={{
                          specialist: data.specialist,
                          name: data.name,
                          phone: data.phone,
                          price: data.price,
                          address: data.address
                        }}
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
        <AddDoctorModal toggle={this.toggleDoctor} modal={this.state.doctorModal}/>
        <AppointmentModal
          toggle={this.toggle}
          modal={this.state.modal}
        />
      </Container>
    )
  }
}

export default Dashboard;
