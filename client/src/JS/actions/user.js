import axios from "axios"
import {
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAIL,
    GET_CONTACTS_LOAD,
    GET_USER,
    EDIT_CONTACT
} from "../constant/actionTypes";

export const getUsers = ()=>async (dispatch)=>{
    dispatch({type:GET_CONTACTS_LOAD})
    try {
        let result = await axios.get('/api/user');
        console.log(result)
        dispatch({type:GET_CONTACTS_SUCCESS,payload:result.data.response})
    } catch (error) {
        dispatch({type:GET_CONTACTS_FAIL,payload:error})
        console.log(error)
    }
}

export const deleteUser = (id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/user/${id}`)
        dispatch(getUsers())
    } catch (error) {
        console.log(error)
    }
}

export const getUser = (id)=>async(dispatch)=>{
    try {
        const result = await axios.get(`/api/user/${id}`)
        console.log(result.data.response)
        dispatch({type:GET_USER,payload:result.data.response})
    } catch (error) {
        console.log(error)
    }
}

export const editContact = (id,user)=>(dispatch)=>{
    axios
    .put(`/api/user/${id}`,user)
    .then((res)=>{
        dispatch({type:EDIT_CONTACT, payload:res.data.msg})
        console.log(res.data)
    })
    .then(dispatch(getUsers()))
    .catch((err)=>console.log(err))
}

export const postUser = (user)=> async(dispatch)=>{
    try {
        await axios.post('/api/user',user)
        dispatch(getUsers());
    } catch (error) {
        console.log(error)
    }
}