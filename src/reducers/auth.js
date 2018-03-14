const initiateState = {
  loading: false,
  isVisibleAgreement: false
}

const auth = (state = initiateState, action) => {
    switch (action.type) {
      case 'SIGNUP_VISIBLE_AGREEMENT':
        return {...state, isVisibleAgreement: !state.isVisibleAgreement}
      case  'SET_LOADING':     
        return {...state, loading: !state.loading}
      case 'SIGNUP_SUCCESS':
      case 'LOGIN_SUCCESS':
      default:
        return state
    }
  }
   
  export default auth