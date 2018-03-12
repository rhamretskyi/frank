import { combineReducers } from 'redux';
import auth from './auth';
import { reducer as reduxFormReducer} from 'redux-form';

const reducers = combineReducers({
    auth,
    form: reduxFormReducer
})
 
export default reducers;