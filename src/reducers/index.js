import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import authReducers from "./authReducers.js";
import streamReducers from './streamReducer.js';

export default combineReducers ({
    auth:authReducers,
    form:formReducer,
    streams:streamReducers
});