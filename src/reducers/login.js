const initiateState = {
  loading: false
}

const login = (state = initiateState, action) => {
    switch (action.type) {
      case  'SET_LOADING': 
        return action;
      case 'LOGIN_SUCCESS':
        return action.success;
      default:
        return state
    }
  }
   
  export default login