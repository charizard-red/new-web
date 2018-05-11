import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

const ClinicCard = (props) => {
  return (
    <div>
      <Card style={{ width: '230px', marginTop: 10 }}>
        <CardImg top width="50%" src={props.data.photo} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.data.name}</CardTitle>
          <CardText>
            <b>specialist</b>: {props.data.specialist}<br/>
            <b>cost</b>: {props.data.cost}<br/>
            <b>time</b>: {props.data.time.from} to {props.data.time.until}<br/>
            <b>days</b>: {props.data.time.days.map(item => (
              <span>{item}, </span>
            ))}
          </CardText>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button color="success" onClick={() => props.toggle(props.data)}>Make Appointment</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ClinicCard;
