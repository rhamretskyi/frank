import { combineReducers } from 'redux';
import login from './login';
import { reducer as reduxFormReducer} from 'redux-form';

const reducers = combineReducers({
    login,
    form: reduxFormReducer
})
 
export default reducers;