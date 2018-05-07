import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

const ClinicCard = (props) => {
  return (
    <div>
      <Card style={{ width: '230px', marginTop: 10 }}>
        <CardImg top width="50%" src={require('../../assets/doctor_icon.png')} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.data.name}</CardTitle>
          <CardText>
            <b>specialist</b>: {props.data.specialist}<br/>
            <b>phone</b>: {props.data.phone}<br/>
            <b>address</b>: {props.data.address}
          </CardText>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button color="success" onClick={props.toggle}>Make Appointment</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ClinicCard;
