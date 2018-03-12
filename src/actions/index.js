export const loading = { type: 'SET_LOADING'};
export const signUpVisibleAgreement = { type: 'SIGNUP_VISIBLE_AGREEMENT' };
export const signUpSuccess = () => { type: 'SIGNUP_SUCCESS' };
export const signUpFailure = () => { type: 'SIGNUP_FAILURE' };
export const signUpDisagree = () => (dispatch) => dispatch(signUpVisibleAgreement)

export const signUpAgree = (values) => {
    return (dispatch) => {
        console.log(values);        
        dispatch(signUpVisibleAgreement);
        dispatch(loading);
    }
}