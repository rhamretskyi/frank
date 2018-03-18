import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { signUpVisibleAgreement } from '../actions'

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    errorStore: state.error,
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: () => {
      dispatch(signUpVisibleAgreement);
    },
    reset: () => {
      dispatch(reset('signUp'));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);