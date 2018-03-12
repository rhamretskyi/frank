import { connect } from 'react-redux';
import AgreementModal from '../components/AgreementModal';

const mapStateToProps = (state) => {
    return {
       isVisible: false
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      onAgree: () => {
          alert('agree');
        //dispatch(loading(true))
      },
      onDisagree: () => {
        alert('disagree');
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AgreementModal);