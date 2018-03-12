import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { loading, signUpAgree, signUpVisibleAgreement } from '../actions'

const mapStateToProps = (state) => {
    return {
      loading: state.auth.loading
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      onSubmit: () => {
        dispatch(signUpVisibleAgreement);
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);