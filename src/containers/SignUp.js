import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { loading, signUp } from '../actions'

const mapStateToProps = (state) => {
    return {
      loading: state.login.loading
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      onSubmit: (values) => {
        //dispatch(signUp(values));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);