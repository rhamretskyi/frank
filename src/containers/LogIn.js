import { connect } from 'react-redux';
import { login } from '../actions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state) => {
    return {
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      onSubmit: (values) => {
        console.log(values);
        dispatch(login(values));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);