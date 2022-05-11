import { combineReducers } from "redux";
import { editReducer } from "./editReducer";
import {userReducer} from "./User";



export const rootReducer = combineReducers({userReducer,editReducer})