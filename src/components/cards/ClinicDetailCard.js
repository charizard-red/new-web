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
        <CardImg top width="50%" src={require('../../assets/klinik_icon.png')} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.data.name}</CardTitle>
          <CardText>
            <b>phone</b>: {props.data.phone}<br/>
            <b>address</b>: {props.data.address}<br/>
          </CardText>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button color="success">Star</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ClinicCard;
