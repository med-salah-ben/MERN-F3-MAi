import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {Button, Card , ListGroup} from "react-bootstrap";
import { deleteUser, getUser } from '../JS/actions/user';
import { toggleTrue } from '../JS/actions/edit';
import UserLogo from "../assets/users.jpg"


const User = ({user}) => {
    const dispatch = useDispatch();

  return (
    <div>
    <Card style={{ width: '18rem' , margin : "20px" }}>
        <Card.Img  variant="top" src={UserLogo} />
        <Card.Header>Name : {user.name} </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Last Name : {user.lastName}</ListGroup.Item>
          <ListGroup.Item>Email : {user.email}    </ListGroup.Item>
          <ListGroup.Item>Phone : {user.phone}    </ListGroup.Item>
          <ListGroup.Item>
          <Link to="/edit">
            <Button style={{margin:'0 20px'}} onClick={()=>{dispatch(getUser(user._id));dispatch(toggleTrue())}}>Edit</Button> 
          </Link>  
            <Button style={{margin:'0 20px'}} onClick={()=>dispatch(deleteUser(user._id))} >Delete</Button>  
          </ListGroup.Item>
        </ListGroup>
    </Card>
    </div>
  )
}


export default User