import React,{useEffect, useState} from 'react';
import {useSelector , useDispatch} from "react-redux"
import {Form , Button} from 'react-bootstrap'
import { editContact, postUser } from '../JS/actions/user';
import {Link} from 'react-router-dom'

const Edit = () => {
    const dispatch = useDispatch();
    const [user,setUser] = useState({name:"",lastName:"",email:"",phone:""});
    const edit = useSelector((state)=> state.editReducer.edit);
    const userReducer = useSelector((state)=> state.userReducer.user);
    console.log(userReducer)

    useEffect(()=>{
        edit ? setUser(userReducer) : setUser({name:"",lastName:"",email:"",phone:""});
    },[userReducer,edit])

    const handleUser = () =>{
        edit ? dispatch(editContact(userReducer._id,user)) : dispatch(postUser(user));
    }

    const handleChange = (e) =>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
    }

  return (
    <Form onSubmit={handleUser}>  
        <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='name' value={user.name} placeholder="Enter First Name..." onChange={handleChange} />
        </Form.Group>  
        <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lastName' value={user.lastName}  placeholder="Enter Last Name..."  onChange={handleChange} />
        </Form.Group>  
  <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' value={user.email}  placeholder="Enter email"   onChange={handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" name='phone' value={user.phone}  placeholder="phone" onChange={handleChange}/>
  </Form.Group>
  <Link to="/users">
  <Button variant="primary" type="submit" onClick={handleUser}>
    {edit ?  "Edit" : "Save"}
  </Button>
  </Link>
</Form>
  )
}

export default Edit