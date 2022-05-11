import { GET_CONTACTS_SUCCESS,GET_CONTACTS_LOAD,GET_CONTACTS_FAIL, GET_USER, EDIT_CONTACT } from "../constant/actionTypes";

const initialeState = {
    contacts : [],
    loadContacts:false,
    user : {},
    errors:[],
    editContact:""
}

export const userReducer = (state=initialeState , {type, payload})=>{
    switch (type) {
        case GET_CONTACTS_LOAD:
            return {...state,loadContacts:true}
        case GET_CONTACTS_SUCCESS:
            return {...state, loadContacts:false , contacts:payload}
        case GET_CONTACTS_FAIL:
            return {...state,loadContacts:false , errors:payload}
        case GET_USER:
            return {...state,user:payload};
        case EDIT_CONTACT:
            return {...state,editContact:payload}
        default:
            return state
    }
}