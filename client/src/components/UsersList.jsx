import React, { useEffect } from 'react';
import {useDispatch , useSelector} from "react-redux";
import {Spinner} from "react-bootstrap"
import { getUsers } from '../JS/actions/user';
import User from './User';




const UsersList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state)=>state.userReducer.contacts)
    const loadContacts = useSelector((state)=>state.userReducer.loadContacts)

    useEffect(()=>{
        dispatch(getUsers())
    },[])
    return (
    <div style={{display:"flex"}}>
        {loadContacts ? (
        <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
        </Spinner>      ) 
        : contacts.length === 0 ? (<h2>there is no data ...</h2>)
        : contacts.map((el)=> <User key={el._id} user={el} />)}
    </div>
  )
}

export default UsersList