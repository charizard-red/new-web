import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

const ClinicCard = (props) => {
  return (
    <div>
      <Card style={{ width: '230px', marginTop: 10 }}>
        <CardImg top width="50%" src={require('../../assets/klinik_icon.png')} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.data.name}</CardTitle>
          <CardText>
            <b>phone</b>: {props.data.phone}<br/>
            <b>city</b>: {props.data.city}<br/>
            <b>address</b>: {props.data.address}<br/>
          </CardText>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button color="success" tag={Link} to={"/klinik/"+props.data.index}>View</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ClinicCard;
