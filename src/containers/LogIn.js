import { connect } from 'react-redux';
import { loading, signUp } from '../actions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state) => {
    return {
      //loading: state.login.loading
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      onSubmit: (values) => {
        //dispatch(signUp(values));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);