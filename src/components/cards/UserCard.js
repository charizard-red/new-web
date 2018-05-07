import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const UserCard = (props) => {
  return (
    <div>
      <Card style={{ width: '240px', marginTop: 10 }}>
        <CardImg top width="50%" src={require('../../assets/user_icon.png')} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.data.name}</CardTitle>
          <CardSubtitle>{props.data.email}</CardSubtitle><br/>
          <CardText>
            <b>phone</b>: {props.data.phone}<br/>
            <b>gender</b>: {props.data.gender}<br/>
            <b>address</b>: {props.data.address}<br/>
            <b>birth</b>: {props.data.birth}
          </CardText>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button color="success" onClick={props.toggleEdit}>Edit</Button>
            <Button color="primary" onClick={props.toggle}>Create Clinic</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
