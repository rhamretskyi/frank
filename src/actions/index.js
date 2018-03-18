import { Actions } from "react-native-router-flux";
import { AsyncStorage } from "react-native";
import api from "../utils/api";

export const loading = { type: 'SET_LOADING'};
export const signUpVisibleAgreement = { type: 'SIGNUP_VISIBLE_AGREEMENT' };
export const signUpSuccess = { type: 'SIGNUP_SUCCESS' };
export const logInSuccess = { type: 'LOGIN_SUCCESS' };
export const newError = error => ({ type: 'NEW_ERROR', payload: error });
export const clearError = () => ({ type: 'ERROR_CLEARED' });
export const restoreCode = (code) => ({ type: 'RESTORE_CODE', payload: code})

export const signUpAgree = (values) => (dispatch) => {
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

            return dispatch(newError(new Error(data.error)));
        }, (error) => {
            dispatch(loading);
            return dispatch(newError(new Error('Server error')));
        });    
    }
}

export const login = (values) => (dispatch) => {
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

            return dispatch(newError(new Error(data.error)));
        }, (error) => {
            dispatch(loading);
            return dispatch(newError(new Error('Server error')));
        });
    }
}

export const forgotPassword = (values) => (dispatch, getState) => {
        dispatch(clearError());

        if(values.code) {
            const restoreCode = getState().auth.restoreCode;
            if(values.code === restoreCode.code && values.email === restoreCode.email) {
                Actions.restorePassword();
            } else {
                return dispatch(newError(new Error('Incorrect code')));
            }
        } else {
            dispatch(loading);
            api.post('/forgotPassword', values).then((response) => {
                dispatch(loading);
                const data = response.data;

                if(data.code) {
                    return dispatch(restoreCode({email: values.email, code: data.code}));
                }

                return dispatch(newError(new Error(data.error)));
            }, (error) => {
                dispatch(loading);
                return dispatch(restoreCode({}));
                return dispatch(newError(new Error('Server error')));
            });
        }
    }
}

export const restorePassword = (values) => (dispatch, getState) => {
        dispatch(clearError());
        dispatch(loading);

        const restoreCode = getState().auth.restoreCode;

        const sendData = {
            password: values.password,
            email: restoreCode.email,
            code: restoreCode.code
        };

        api.post('/restorePassword', sendData).then((response) => {
            dispatch(loading);
            const data = response.data;
            if(!data.error) {
                Actions.land();
            }
            
            return dispatch(newError(new Error(data.error)));
        }, (error) => {
            dispatch(loading);
            return dispatch(newError(new Error('Server error')));
        });
    }
}