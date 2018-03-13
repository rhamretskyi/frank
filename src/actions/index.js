import Axios from "axios";
import { Actions } from "react-native-router-flux";

export const loading = { type: 'SET_LOADING'};
export const signUpVisibleAgreement = { type: 'SIGNUP_VISIBLE_AGREEMENT' };
export const signUpSuccess = () => { type: 'SIGNUP_SUCCESS' };
export const signUpFailure = () => { type: 'SIGNUP_FAILURE' };
export const logInSuccess = () => { type: 'LOGIN_SUCCESS' };
export const logInFailure = () => { type: 'LOGIN_FAILURE' };

export const signUpAgree = (values) => {
    return (dispatch) => {
        dispatch(loading);
        dispatch(signUpVisibleAgreement);
        Axios.post('http://localhost:3000/api/signup', values).then((data) => {
            dispatch(signUpSuccess);
            console.log(data.token);
            Actions.land();
        }, (err) => {
            dispatch(signUpFailure);
            console.log(err);
        });     
    }
}

export const login = (values) => {
    return (dispatch) => {
        Axios.post('http://localhost:3000/api/signin', values).then((data) => {
            dispatch(logInSuccess);
            console.log(data);
            Actions.land();
        }, (err) => {
            dispatch(logInFailure);
            console.log(err);
        });
    }
}