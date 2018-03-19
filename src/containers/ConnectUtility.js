import { connect } from 'react-redux';
import { reset } from 'redux-form'
import { forgotPassword } from '../actions';
import ConnectUtilityForm from '../components/ConnectUtilityForm';

const mapStateToProps = (state) => {
  return {
    errorStore: state.error,
    restoreCode: state.auth.restoreCode,
    loading: state.auth.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
    },
    reset: () => {
      dispatch(reset('forgotPassword'));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectUtilityForm);