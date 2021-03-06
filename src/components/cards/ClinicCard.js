import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

const ClinicCard = (props) => {
  return (
    <div>
      <Card style={{ width: '230px', marginTop: 10 }}>
        <CardImg top width="200" style={{ height: 220 }} src={props.data.photo} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.data.title}</CardTitle>
          <CardText>
            <b>phone</b>: {props.data.phone}<br/>
            <b>city</b>: {props.data.city}<br/>
            <b>address</b>: {props.data.address}<br/>
          </CardText>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button color="success" tag={Link} to={"/klinik/"+props.data._id}>View</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ClinicCard;
