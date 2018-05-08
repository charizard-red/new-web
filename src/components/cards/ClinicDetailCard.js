import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button } from 'reactstrap';

const ClinicCard = (props) => {
  return (
    <div>
      <Card style={{ width: '250px', marginTop: 10 }}>
        <CardImg top width="50%" src={props.data.photo} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.data.title}</CardTitle>
          <CardText>
            <b>phone</b>: {props.data.phone}<br/>
            <b>address</b>: {props.data.address}<br/>
            <b>city</b>: {props.data.city}<br/>
            <b>doctors</b>: {props.data.doctors.length}
          </CardText>
          {(props.owner) ? (
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Button color="success">Edit</Button>
              <Button color="primary" onClick={props.toggle}>Add Doctor</Button>
            </div>
          ) : (
            <div></div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default ClinicCard;
