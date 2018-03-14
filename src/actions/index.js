import { Actions } from "react-native-router-flux";
import { AsyncStorage } from "react-native";
import api from "../utils/api";

export const loading = { type: 'SET_LOADING'};
export const signUpVisibleAgreement = { type: 'SIGNUP_VISIBLE_AGREEMENT' };
export const signUpSuccess = { type: 'SIGNUP_SUCCESS' };
export const signUpFailure = error => ({ type: 'SIGNUP_FAILURE', payload: error });
export const logInSuccess = { type: 'LOGIN_SUCCESS' };
export const logInFailure = error => ({ type: 'LOGIN_FAILURE', payload: error });
export const clearError = () => ({ type: 'ERROR_CLEARED' });

export const signUpAgree = (values) => {
    return (dispatch) => {
        dispatch(clearError());
        dispatch(signUpVisibleAgreement);
        dispatch(loading);
        api.post('/signup', values).then((response) => {
            dispatch(loading);
            const data = response.data;

            if(!data.error) {
                AsyncStorage.setItem('token', data.token).then(()=> {
                    Actions.land();
                });
                return dispatch(signUpSuccess);
            }   

            return dispatch(signUpFailure(new Error(data.error)));
        }, (error) => {
            dispatch(loading);
            return dispatch(signUpFailure(new Error('Server error')));
        });    
    }
}

export const login = (values) => {
    return (dispatch) => {
        dispatch(clearError());
        dispatch(loading);
        api.post('/signin', values).then((response) => {
            dispatch(loading);
            const data = response.data;

            if(!data.error) {
                AsyncStorage.setItem('token', data.token).then(()=> {
                    Actions.land();
                });
                return dispatch(logInSuccess);
            }

            return dispatch(logInFailure(new Error(data.error)));
        }, (error) => {
            dispatch(loading);
            return dispatch(logInFailure(new Error('Server error')));
        });
    }
}