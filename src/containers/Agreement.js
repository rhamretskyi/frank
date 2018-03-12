import { connect } from 'react-redux';
import AgreementModal from '../components/AgreementModal';
import { signUpAgree, signUpDisagree } from '../actions';
import { Alert } from 'react-native';
const mapStateToProps = (state) => {
  return {
      isVisible: state.auth.isVisibleAgreement,
      signUpFormValues: state.form.signUp.values
  }
}
   
const mapDispatchToProps = dispatch => {
  return {
    onAgree: (values) => {
      dispatch(signUpAgree(values));
    },
    onDisagree: () => {
      Alert.alert(
        "Alert",
        "Please, agree with terms and conditions to continue your registration",
        [
          {
            text: 'OK', 
            onPress: () => dispatch(signUpDisagree({
              isVisibleAgreement: false
            }))
          }
        ]
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgreementModal);